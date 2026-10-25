#pragma once
#ifndef CPPHTTPLIB_HTTPLIB_H
#define CPPHTTPLIB_HTTPLIB_H

#ifdef _WIN32
#ifndef WIN32_LEAN_AND_MEAN
#define WIN32_LEAN_AND_MEAN
#endif
#include <winsock2.h>
#include <ws2tcpip.h>
#pragma comment(lib, "ws2_32.lib")
using socket_t = SOCKET;
#define CLOSE_SOCKET(s) closesocket(s)
#define IS_INVALID_SOCKET(s) ((s) == INVALID_SOCKET)
#else
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <netdb.h>
#include <fcntl.h>
using socket_t = int;
#define CLOSE_SOCKET(s) close(s)
#define IS_INVALID_SOCKET(s) ((s) < 0)
#endif

#include <iostream>
#include <cstring>
#include <string>
#include <vector>
#include <map>
#include <functional>
#include <sstream>
#include <fstream>
#include <regex>
#include <thread>
#include <mutex>
#include <memory>
#include <utility>

namespace httplib {

struct Headers : public std::multimap<std::string, std::string> {
    bool has(const std::string& key) const {
        for (const auto& kv : *this) {
            if (_stricmp_custom(kv.first, key)) return true;
        }
        return false;
    }
    std::string get(const std::string& key) const {
        for (const auto& kv : *this) {
            if (_stricmp_custom(kv.first, key)) return kv.second;
        }
        return "";
    }
private:
    static bool _stricmp_custom(const std::string& a, const std::string& b) {
        if (a.size() != b.size()) return false;
        for (size_t i = 0; i < a.size(); ++i) {
            if (std::tolower(a[i]) != std::tolower(b[i])) return false;
        }
        return true;
    }
};

struct Request {
    std::string method;
    std::string path;
    Headers headers;
    std::string body;
    std::smatch matches;
    std::map<std::string, std::string> params;

    bool has_header(const std::string& key) const {
        return headers.has(key);
    }
    std::string get_header_value(const std::string& key) const {
        return headers.get(key);
    }
};

struct Response {
    int status = 200;
    Headers headers;
    std::string body;

    void set_content(const std::string& s, const std::string& content_type) {
        body = s;
        headers.emplace("Content-Type", content_type);
        headers.emplace("Content-Length", std::to_string(body.size()));
    }

    void set_header(const std::string& key, const std::string& val) {
        headers.emplace(key, val);
    }

    void set_redirect(const std::string& url, int stat = 302) {
        status = stat;
        headers.emplace("Location", url);
    }
};

using Handler = std::function<void(const Request&, Response&)>;

class Server {
public:
    Server() {
#ifdef _WIN32
        WSADATA wsa;
        WSAStartup(MAKEWORD(2, 2), &wsa);
#endif
    }

    ~Server() {
        stop();
#ifdef _WIN32
        WSACleanup();
#endif
    }

    Server& Get(const std::string& pattern, Handler handler) {
        routes_.push_back({"GET", std::regex(pattern), handler});
        return *this;
    }

    Server& Post(const std::string& pattern, Handler handler) {
        routes_.push_back({"POST", std::regex(pattern), handler});
        return *this;
    }

    Server& Put(const std::string& pattern, Handler handler) {
        routes_.push_back({"PUT", std::regex(pattern), handler});
        return *this;
    }

    Server& Delete(const std::string& pattern, Handler handler) {
        routes_.push_back({"DELETE", std::regex(pattern), handler});
        return *this;
    }

    Server& Options(const std::string& pattern, Handler handler) {
        routes_.push_back({"OPTIONS", std::regex(pattern), handler});
        return *this;
    }

    bool set_mount_point(const std::string& mount_point, const std::string& dir) {
        mount_points_.push_back({mount_point, dir});
        return true;
    }

    bool listen(const std::string& host, int port) {
        socket_t server_fd = socket(AF_INET, SOCK_STREAM, 0);
        if (IS_INVALID_SOCKET(server_fd)) {
            std::cerr << "[Server] Failed to create socket." << std::endl;
            return false;
        }

        int opt = 1;
#ifdef _WIN32
        setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, (const char*)&opt, sizeof(opt));
#else
        setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt));
#endif

        sockaddr_in address;
        memset(&address, 0, sizeof(address));
        address.sin_family = AF_INET;
        if (host == "0.0.0.0") {
            address.sin_addr.s_addr = INADDR_ANY;
        } else if (host == "127.0.0.1" || host == "localhost") {
            address.sin_addr.s_addr = inet_addr("127.0.0.1");
        } else {
            inet_pton(AF_INET, host.c_str(), &address.sin_addr);
        }
        address.sin_port = htons(port);

        if (bind(server_fd, (struct sockaddr*)&address, sizeof(address)) < 0) {
            std::cerr << "[Server] Failed to bind to port " << port << std::endl;
            CLOSE_SOCKET(server_fd);
            return false;
        }

        if (::listen(server_fd, SOMAXCONN) < 0) {
            std::cerr << "[Server] Listen failed." << std::endl;
            CLOSE_SOCKET(server_fd);
            return false;
        }

        is_running_ = true;
        server_socket_ = server_fd;
        std::cout << "[Server] Quiz Game Server listening on http://" << host << ":" << port << std::endl;

        while (is_running_) {
            sockaddr_in client_addr;
            socklen_t addr_len = sizeof(client_addr);
            socket_t client_fd = accept(server_fd, (struct sockaddr*)&client_addr, &addr_len);
            if (IS_INVALID_SOCKET(client_fd)) {
                if (!is_running_) break;
                continue;
            }

            // Spawn detached thread for request handling
            std::thread([this, client_fd]() {
                this->process_client(client_fd);
            }).detach();
        }

        CLOSE_SOCKET(server_fd);
        return true;
    }

    void stop() {
        if (is_running_) {
            is_running_ = false;
            if (!IS_INVALID_SOCKET(server_socket_)) {
                CLOSE_SOCKET(server_socket_);
                server_socket_ = -1;
            }
        }
    }

private:
    struct Route {
        std::string method;
        std::regex pattern;
        Handler handler;
    };

    std::vector<Route> routes_;
    std::vector<std::pair<std::string, std::string>> mount_points_;
    bool is_running_ = false;
    socket_t server_socket_ = -1;

    void process_client(socket_t client_fd) {
        std::string raw_request;
        char buffer[4096];
        int bytes_read = 0;

        // Read headers
        while ((bytes_read = recv(client_fd, buffer, sizeof(buffer) - 1, 0)) > 0) {
            buffer[bytes_read] = '\0';
            raw_request.append(buffer, bytes_read);
            if (raw_request.find("\r\n\r\n") != std::string::npos) break;
        }

        if (raw_request.empty()) {
            CLOSE_SOCKET(client_fd);
            return;
        }

        size_t header_end = raw_request.find("\r\n\r\n");
        std::string header_part = raw_request.substr(0, header_end);
        std::string body_part = (header_end != std::string::npos && header_end + 4 < raw_request.size()) ?
                                raw_request.substr(header_end + 4) : "";

        // Parse Request Line
        std::istringstream stream(header_part);
        std::string request_line;
        std::getline(stream, request_line);
        if (!request_line.empty() && request_line.back() == '\r') request_line.pop_back();

        std::istringstream line_stream(request_line);
        Request req;
        std::string full_path;
        line_stream >> req.method >> full_path;

        // Parse query params if any
        size_t q_pos = full_path.find('?');
        if (q_pos != std::string::npos) {
            req.path = full_path.substr(0, q_pos);
            std::string query_str = full_path.substr(q_pos + 1);
            parse_query(query_str, req.params);
        } else {
            req.path = full_path;
        }

        // Parse Headers
        std::string header_line;
        size_t content_length = 0;
        while (std::getline(stream, header_line)) {
            if (!header_line.empty() && header_line.back() == '\r') header_line.pop_back();
            if (header_line.empty()) continue;
            size_t colon = header_line.find(':');
            if (colon != std::string::npos) {
                std::string key = header_line.substr(0, colon);
                std::string val = header_line.substr(colon + 1);
                while (!val.empty() && (val.front() == ' ' || val.front() == '\t')) val.erase(val.begin());
                req.headers.emplace(key, val);
                if (key == "Content-Length" || key == "content-length") {
                    content_length = std::stoul(val);
                }
            }
        }

        // Read remaining body if Content-Length > current body
        while (body_part.size() < content_length) {
            bytes_read = recv(client_fd, buffer, sizeof(buffer) - 1, 0);
            if (bytes_read <= 0) break;
            buffer[bytes_read] = '\0';
            body_part.append(buffer, bytes_read);
        }
        req.body = body_part;

        Response res;
        // Default CORS headers for smooth local development
        res.set_header("Access-Control-Allow-Origin", "*");
        res.set_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        res.set_header("Access-Control-Allow-Headers", "Content-Type, Authorization");

        // Handle OPTIONS preflight
        if (req.method == "OPTIONS") {
            res.status = 204;
            send_response(client_fd, res);
            CLOSE_SOCKET(client_fd);
            return;
        }

        // 1. Try matching API routes
        bool route_matched = false;
        for (const auto& route : routes_) {
            if (route.method == req.method && std::regex_match(req.path, req.matches, route.pattern)) {
                route.handler(req, res);
                route_matched = true;
                break;
            }
        }

        // 2. If no API route matched and method is GET, try static files
        if (!route_matched && req.method == "GET") {
            route_matched = handle_static_file(req, res);
        }

        // 3. Fallback 404
        if (!route_matched) {
            res.status = 404;
            res.set_content("{\"error\":\"Not Found\"}", "application/json");
        }

        send_response(client_fd, res);
        CLOSE_SOCKET(client_fd);
    }

    bool handle_static_file(const Request& req, Response& res) {
        std::string req_path = req.path;
        if (req_path == "/" || req_path.empty()) req_path = "/index.html";

        for (const auto& mp : mount_points_) {
            const std::string& mount = mp.first;
            const std::string& base_dir = mp.second;

            if (req_path.find(mount) == 0) {
                std::string sub_path = req_path.substr(mount.size());
                if (!sub_path.empty() && sub_path.front() == '/') sub_path.erase(sub_path.begin());
                std::string file_path = base_dir + "/" + sub_path;

                std::ifstream f(file_path, std::ios::binary);
                if (f.is_open()) {
                    std::ostringstream ss;
                    ss << f.rdbuf();
                    std::string mime = get_mime_type(file_path);
                    res.status = 200;
                    res.set_content(ss.str(), mime);
                    return true;
                }
            }
        }
        return false;
    }

    void parse_query(const std::string& qs, std::map<std::string, std::string>& params) {
        std::istringstream ss(qs);
        std::string token;
        while (std::getline(ss, token, '&')) {
            size_t eq = token.find('=');
            if (eq != std::string::npos) {
                params[token.substr(0, eq)] = token.substr(eq + 1);
            } else if (!token.empty()) {
                params[token] = "";
            }
        }
    }

    static std::string get_mime_type(const std::string& path) {
        size_t dot = path.rfind('.');
        if (dot == std::string::npos) return "text/plain";
        std::string ext = path.substr(dot);
        std::transform(ext.begin(), ext.end(), ext.begin(), ::tolower);

        if (ext == ".html" || ext == ".htm") return "text/html; charset=utf-8";
        if (ext == ".css") return "text/css; charset=utf-8";
        if (ext == ".js") return "application/javascript; charset=utf-8";
        if (ext == ".json") return "application/json; charset=utf-8";
        if (ext == ".svg") return "image/svg+xml";
        if (ext == ".png") return "image/png";
        if (ext == ".jpg" || ext == ".jpeg") return "image/jpeg";
        if (ext == ".gif") return "image/gif";
        if (ext == ".ico") return "image/x-icon";
        if (ext == ".woff") return "font/woff";
        if (ext == ".woff2") return "font/woff2";
        if (ext == ".ttf") return "font/ttf";
        return "application/octet-stream";
    }

    void send_response(socket_t client_fd, const Response& res) {
        std::ostringstream ss;
        std::string status_msg = "OK";
        if (res.status == 201) status_msg = "Created";
        else if (res.status == 204) status_msg = "No Content";
        else if (res.status == 400) status_msg = "Bad Request";
        else if (res.status == 404) status_msg = "Not Found";
        else if (res.status == 500) status_msg = "Internal Server Error";

        ss << "HTTP/1.1 " << res.status << " " << status_msg << "\r\n";
        ss << "Connection: close\r\n";
        for (const auto& h : res.headers) {
            ss << h.first << ": " << h.second << "\r\n";
        }
        if (!res.headers.has("Content-Length")) {
            ss << "Content-Length: " << res.body.size() << "\r\n";
        }
        ss << "\r\n" << res.body;

        std::string out = ss.str();
        int total_sent = 0;
        int to_send = static_cast<int>(out.size());
        while (total_sent < to_send) {
            int sent = send(client_fd, out.data() + total_sent, to_send - total_sent, 0);
            if (sent <= 0) break;
            total_sent += sent;
        }
#ifdef _WIN32
        shutdown(client_fd, SD_BOTH);
#else
        shutdown(client_fd, SHUT_RDWR);
#endif
    }
};

} // namespace httplib

#endif // CPPHTTPLIB_HTTPLIB_H
