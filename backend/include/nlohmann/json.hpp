#pragma once
#ifndef NLOHMANN_JSON_HPP
#define NLOHMANN_JSON_HPP

#include <iostream>
#include <string>
#include <vector>
#include <map>
#include <sstream>
#include <stdexcept>
#include <cctype>
#include <iomanip>
#include <memory>
#include <algorithm>
#include <type_traits>

namespace nlohmann {

enum class JsonType {
    Null,
    Boolean,
    NumberInt,
    NumberFloat,
    String,
    Array,
    Object
};

class json {
public:
    JsonType type = JsonType::Null;
    bool bool_val = false;
    int64_t int_val = 0;
    double float_val = 0.0;
    std::string str_val;
    std::vector<json> arr_val;
    std::vector<std::pair<std::string, json>> obj_val;

    json() : type(JsonType::Null) {}
    json(std::nullptr_t) : type(JsonType::Null) {}
    json(bool b) : type(JsonType::Boolean), bool_val(b) {}
    json(int i) : type(JsonType::NumberInt), int_val(i), float_val(i) {}
    json(unsigned int i) : type(JsonType::NumberInt), int_val(i), float_val(i) {}
    json(int64_t i) : type(JsonType::NumberInt), int_val(i), float_val(static_cast<double>(i)) {}
    json(double d) : type(JsonType::NumberFloat), int_val(static_cast<int64_t>(d)), float_val(d) {}
    json(const char* s) : type(JsonType::String), str_val(s ? s : "") {}
    json(const std::string& s) : type(JsonType::String), str_val(s) {}

    // Array / Object constructors from initializer list
    json(std::initializer_list<json> init) {
        bool is_obj = true;
        for (const auto& elem : init) {
            if (elem.type != JsonType::Array || elem.arr_val.size() != 2 || elem.arr_val[0].type != JsonType::String) {
                is_obj = false;
                break;
            }
        }
        if (is_obj && init.size() > 0) {
            type = JsonType::Object;
            for (const auto& elem : init) {
                obj_val.push_back({elem.arr_val[0].str_val, elem.arr_val[1]});
            }
        } else {
            type = JsonType::Array;
            for (const auto& elem : init) {
                arr_val.push_back(elem);
            }
        }
    }

    static json array() {
        json j;
        j.type = JsonType::Array;
        return j;
    }

    static json object() {
        json j;
        j.type = JsonType::Object;
        return j;
    }

    bool is_null() const { return type == JsonType::Null; }
    bool is_boolean() const { return type == JsonType::Boolean; }
    bool is_number() const { return type == JsonType::NumberInt || type == JsonType::NumberFloat; }
    bool is_number_integer() const { return type == JsonType::NumberInt; }
    bool is_number_float() const { return type == JsonType::NumberFloat; }
    bool is_string() const { return type == JsonType::String; }
    bool is_array() const { return type == JsonType::Array; }
    bool is_object() const { return type == JsonType::Object; }

    bool empty() const {
        if (type == JsonType::Array) return arr_val.empty();
        if (type == JsonType::Object) return obj_val.empty();
        if (type == JsonType::String) return str_val.empty();
        return type == JsonType::Null;
    }

    size_t size() const {
        if (type == JsonType::Array) return arr_val.size();
        if (type == JsonType::Object) return obj_val.size();
        return (type == JsonType::Null) ? 0 : 1;
    }

    void clear() {
        type = JsonType::Null;
        arr_val.clear();
        obj_val.clear();
        str_val.clear();
    }

    // Access by key (Object)
    json& operator[](const std::string& key) {
        if (type == JsonType::Null) type = JsonType::Object;
        if (type != JsonType::Object) throw std::runtime_error("json: operator[] on non-object");
        for (auto& kv : obj_val) {
            if (kv.first == key) return kv.second;
        }
        obj_val.push_back({key, json()});
        return obj_val.back().second;
    }

    const json& operator[](const std::string& key) const {
        static json null_json;
        if (type != JsonType::Object) return null_json;
        for (const auto& kv : obj_val) {
            if (kv.first == key) return kv.second;
        }
        return null_json;
    }

    // Access by index (Array)
    json& operator[](size_t idx) {
        if (type != JsonType::Array) throw std::runtime_error("json: operator[] on non-array");
        if (idx >= arr_val.size()) throw std::out_of_range("json array index out of bounds");
        return arr_val[idx];
    }

    const json& operator[](size_t idx) const {
        if (type != JsonType::Array) throw std::runtime_error("json: operator[] on non-array");
        if (idx >= arr_val.size()) throw std::out_of_range("json array index out of bounds");
        return arr_val[idx];
    }

    bool contains(const std::string& key) const {
        if (type != JsonType::Object) return false;
        for (const auto& kv : obj_val) {
            if (kv.first == key) return true;
        }
        return false;
    }

    void push_back(const json& item) {
        if (type == JsonType::Null) type = JsonType::Array;
        if (type != JsonType::Array) throw std::runtime_error("json: push_back on non-array");
        arr_val.push_back(item);
    }

    template <typename T>
    T get() const {
        if constexpr (std::is_same_v<T, std::string>) {
            return (type == JsonType::String) ? str_val : dump();
        } else if constexpr (std::is_same_v<T, int>) {
            return static_cast<int>(int_val);
        } else if constexpr (std::is_same_v<T, int64_t>) {
            return int_val;
        } else if constexpr (std::is_same_v<T, double>) {
            return float_val;
        } else if constexpr (std::is_same_v<T, bool>) {
            return bool_val;
        } else {
            return T{};
        }
    }

    std::string value(const std::string& key, const char* default_val) const {
        if (!contains(key)) return default_val ? default_val : "";
        return (*this)[key].get<std::string>();
    }

    template <typename T>
    T value(const std::string& key, const T& default_val) const {
        if (!contains(key)) return default_val;
        return (*this)[key].get<T>();
    }

    // Iterators for array
    auto begin() { return arr_val.begin(); }
    auto end() { return arr_val.end(); }
    auto begin() const { return arr_val.begin(); }
    auto end() const { return arr_val.end(); }

    struct ItemProxy {
        const std::vector<std::pair<std::string, json>>& obj;
        struct Iterator {
            std::vector<std::pair<std::string, json>>::const_iterator it;
            bool operator!=(const Iterator& o) const { return it != o.it; }
            void operator++() { ++it; }
            auto operator*() const {
                struct Entry {
                    const std::string& key() const { return p.first; }
                    const json& value() const { return p.second; }
                    const std::pair<std::string, json>& p;
                };
                return Entry{*it};
            }
        };
        Iterator begin() const { return Iterator{obj.begin()}; }
        Iterator end() const { return Iterator{obj.end()}; }
    };

    ItemProxy items() const {
        return ItemProxy{obj_val};
    }

    // Serialization
    std::string dump(int indent = -1, int current_indent = 0) const {
        std::ostringstream ss;
        std::string ind_str = (indent > 0) ? std::string(current_indent, ' ') : "";
        std::string next_ind_str = (indent > 0) ? std::string(current_indent + indent, ' ') : "";
        std::string nl = (indent >= 0) ? "\n" : "";
        std::string sp = (indent >= 0) ? " " : "";

        switch (type) {
            case JsonType::Null:
                ss << "null";
                break;
            case JsonType::Boolean:
                ss << (bool_val ? "true" : "false");
                break;
            case JsonType::NumberInt:
                ss << int_val;
                break;
            case JsonType::NumberFloat:
                ss << float_val;
                break;
            case JsonType::String: {
                ss << "\"";
                for (char c : str_val) {
                    if (c == '"') ss << "\\\"";
                    else if (c == '\\') ss << "\\\\";
                    else if (c == '\b') ss << "\\b";
                    else if (c == '\f') ss << "\\f";
                    else if (c == '\n') ss << "\\n";
                    else if (c == '\r') ss << "\\r";
                    else if (c == '\t') ss << "\\t";
                    else ss << c;
                }
                ss << "\"";
                break;
            }
            case JsonType::Array: {
                if (arr_val.empty()) {
                    ss << "[]";
                } else {
                    ss << "[" << nl;
                    for (size_t i = 0; i < arr_val.size(); ++i) {
                        ss << next_ind_str << arr_val[i].dump(indent, current_indent + indent);
                        if (i + 1 < arr_val.size()) ss << ",";
                        ss << nl;
                    }
                    ss << ind_str << "]";
                }
                break;
            }
            case JsonType::Object: {
                if (obj_val.empty()) {
                    ss << "{}";
                } else {
                    ss << "{" << nl;
                    for (size_t i = 0; i < obj_val.size(); ++i) {
                        ss << next_ind_str << "\"" << obj_val[i].first << "\":" << sp;
                        ss << obj_val[i].second.dump(indent, current_indent + indent);
                        if (i + 1 < obj_val.size()) ss << ",";
                        ss << nl;
                    }
                    ss << ind_str << "}";
                }
                break;
            }
        }
        return ss.str();
    }

    // Parsing
    static json parse(const std::string& str) {
        size_t pos = 0;
        skip_ws(str, pos);
        return parse_value(str, pos);
    }

private:
    static void skip_ws(const std::string& s, size_t& pos) {
        while (pos < s.size() && (s[pos] == ' ' || s[pos] == '\t' || s[pos] == '\r' || s[pos] == '\n')) {
            ++pos;
        }
    }

    static json parse_value(const std::string& s, size_t& pos) {
        skip_ws(s, pos);
        if (pos >= s.size()) return json();

        char c = s[pos];
        if (c == 'n') {
            if (s.substr(pos, 4) == "null") { pos += 4; return json(); }
        } else if (c == 't') {
            if (s.substr(pos, 4) == "true") { pos += 4; return json(true); }
        } else if (c == 'f') {
            if (s.substr(pos, 5) == "false") { pos += 5; return json(false); }
        } else if (c == '"') {
            return json(parse_string(s, pos));
        } else if (c == '[') {
            return parse_array(s, pos);
        } else if (c == '{') {
            return parse_object(s, pos);
        } else if (c == '-' || std::isdigit(c)) {
            return parse_number(s, pos);
        }
        throw std::runtime_error(std::string("json::parse unexpected character '") + c + "'");
    }

    static std::string parse_string(const std::string& s, size_t& pos) {
        ++pos; // skip '"'
        std::string result;
        while (pos < s.size()) {
            char c = s[pos++];
            if (c == '"') return result;
            if (c == '\\' && pos < s.size()) {
                char esc = s[pos++];
                if (esc == '"') result += '"';
                else if (esc == '\\') result += '\\';
                else if (esc == '/') result += '/';
                else if (esc == 'b') result += '\b';
                else if (esc == 'f') result += '\f';
                else if (esc == 'n') result += '\n';
                else if (esc == 'r') result += '\r';
                else if (esc == 't') result += '\t';
                else if (esc == 'u' && pos + 4 <= s.size()) {
                    pos += 4; // Simplified unicode skip
                    result += '?';
                }
            } else {
                result += c;
            }
        }
        return result;
    }

    static json parse_number(const std::string& s, size_t& pos) {
        size_t start = pos;
        bool is_float = false;
        if (s[pos] == '-') ++pos;
        while (pos < s.size() && (std::isdigit(s[pos]) || s[pos] == '.' || s[pos] == 'e' || s[pos] == 'E' || s[pos] == '+' || s[pos] == '-')) {
            if (s[pos] == '.' || s[pos] == 'e' || s[pos] == 'E') is_float = true;
            ++pos;
        }
        std::string num_str = s.substr(start, pos - start);
        if (is_float) {
            return json(std::stod(num_str));
        } else {
            return json(static_cast<int64_t>(std::stoll(num_str)));
        }
    }

    static json parse_array(const std::string& s, size_t& pos) {
        json j = json::array();
        ++pos; // skip '['
        skip_ws(s, pos);
        if (pos < s.size() && s[pos] == ']') {
            ++pos;
            return j;
        }
        while (pos < s.size()) {
            j.push_back(parse_value(s, pos));
            skip_ws(s, pos);
            if (pos < s.size() && s[pos] == ',') {
                ++pos;
                skip_ws(s, pos);
            } else if (pos < s.size() && s[pos] == ']') {
                ++pos;
                break;
            } else {
                break;
            }
        }
        return j;
    }

    static json parse_object(const std::string& s, size_t& pos) {
        json j = json::object();
        ++pos; // skip '{'
        skip_ws(s, pos);
        if (pos < s.size() && s[pos] == '}') {
            ++pos;
            return j;
        }
        while (pos < s.size()) {
            skip_ws(s, pos);
            if (pos >= s.size() || s[pos] != '"') break;
            std::string key = parse_string(s, pos);
            skip_ws(s, pos);
            if (pos < s.size() && s[pos] == ':') ++pos;
            skip_ws(s, pos);
            json val = parse_value(s, pos);
            j[key] = val;
            skip_ws(s, pos);
            if (pos < s.size() && s[pos] == ',') {
                ++pos;
                skip_ws(s, pos);
            } else if (pos < s.size() && s[pos] == '}') {
                ++pos;
                break;
            } else {
                break;
            }
        }
        return j;
    }
};

} // namespace nlohmann

#endif // NLOHMANN_JSON_HPP
