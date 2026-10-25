#pragma once
#ifndef QUIZ_CONFIG_H
#define QUIZ_CONFIG_H

#include <string>
#include <fstream>
#include <iostream>
#include "nlohmann/json.hpp"

// =======================================================
// KONFIGURASI APLIKASI QUIZ GAME
// Kredensial dan parameter permainan dikelola terpusat
// =======================================================

namespace QuizGame {

struct DatabaseConfig {
    std::string host = "127.0.0.1";
    int port = 3306;
    std::string user = "root";
    std::string password = "";
    std::string database = "quiz_game";
};

struct GameConfig {
    int defaultHp = 100;
    int baseDamageWrongAnswer = 20; // Nilai ini dapat diubah lewat file config.json
    int serverPort = 8080;
    std::string frontendDir = "./frontend";
};

class ConfigManager {
public:
    static ConfigManager& getInstance() {
        static ConfigManager instance;
        return instance;
    }

    const DatabaseConfig& getDbConfig() const { return dbConfig_; }
    const GameConfig& getGameConfig() const { return gameConfig_; }

    void loadFromFile(const std::string& filepath = "config.json") {
        std::ifstream file(filepath);
        if (!file.is_open()) {
            std::cout << "[Config] config.json tidak ditemukan, menggunakan pengaturan default." << std::endl;
            return;
        }

        try {
            std::string content((std::istreambuf_iterator<char>(file)), std::istreambuf_iterator<char>());
            nlohmann::json j = nlohmann::json::parse(content);

            if (j.contains("database")) {
                auto db = j["database"];
                dbConfig_.host = db.value("host", dbConfig_.host);
                dbConfig_.port = db.value("port", dbConfig_.port);
                dbConfig_.user = db.value("user", dbConfig_.user);
                dbConfig_.password = db.value("password", dbConfig_.password);
                dbConfig_.database = db.value("database", dbConfig_.database);
            }

            if (j.contains("game")) {
                auto gm = j["game"];
                gameConfig_.defaultHp = gm.value("default_hp", gameConfig_.defaultHp);
                gameConfig_.baseDamageWrongAnswer = gm.value("base_damage_wrong", gameConfig_.baseDamageWrongAnswer);
                gameConfig_.serverPort = gm.value("server_port", gameConfig_.serverPort);
                gameConfig_.frontendDir = gm.value("frontend_dir", gameConfig_.frontendDir);
            }
            std::cout << "[Config] Berhasil memuat konfigurasi dari " << filepath << std::endl;
        } catch (const std::exception& e) {
            std::cerr << "[Config] Gagal mem-parsing config.json: " << e.what() << ", memakai nilai default." << std::endl;
        }
    }

private:
    ConfigManager() {
        loadFromFile("config.json");
    }

    DatabaseConfig dbConfig_;
    GameConfig gameConfig_;
};

} // namespace QuizGame

#endif // QUIZ_CONFIG_H
