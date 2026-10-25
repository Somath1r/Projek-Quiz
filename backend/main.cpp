#include <iostream>
#include <csignal>
#include "config.h"
#include "db.h"
#include "include/httplib.h"
#include "handlers/ApiHandlers.h"

// =========================================================================
// MAIN ENTRY POINT: Quiz Game Backend Server (C++17)
// Menjalankan HTTP REST API Server dan menyajikan file statis frontend
// =========================================================================

static httplib::Server g_server;

void handleSignal(int signal) {
    std::cout << "\n[Server] Menerima sinyal shutdown (" << signal << "). Menghentikan server..." << std::endl;
    g_server.stop();
}

int main(int argc, char* argv[]) {
    std::cout << "==========================================================" << std::endl;
    std::cout << "       ARCADE QUIZ GAME - C++17 OOP BACKEND SERVER        " << std::endl;
    std::cout << "==========================================================" << std::endl;

    // Pasang handler sinyal termination (Ctrl+C)
    std::signal(SIGINT, handleSignal);
    std::signal(SIGTERM, handleSignal);

    // 1. Muat Konfigurasi dari config.json / default
    auto& configMgr = QuizGame::ConfigManager::getInstance();
    const auto& dbConfig = configMgr.getDbConfig();
    const auto& gameConfig = configMgr.getGameConfig();

    std::cout << "[Config] Database Target: " << dbConfig.host << ":" << dbConfig.port 
              << " (DB: " << dbConfig.database << ", User: " << dbConfig.user << ")" << std::endl;
    std::cout << "[Config] Base Damage Salah: " << gameConfig.baseDamageWrongAnswer << " HP" << std::endl;
    std::cout << "[Config] Frontend Folder: " << gameConfig.frontendDir << std::endl;

    // 2. Inisialisasi Koneksi Database
    QuizGame::Database::getInstance().initialize(dbConfig);

    // 3. Daftarkan Seluruh Route API REST
    QuizGame::ApiHandlers::registerRoutes(g_server);

    // 4. Layani File Statis Frontend (HTML, CSS, JS, Assets)
    g_server.set_mount_point("/", gameConfig.frontendDir);

    std::cout << "----------------------------------------------------------" << std::endl;
    std::cout << " [OK] Server siap berjalan!" << std::endl;
    std::cout << " -> Akses Game:    http://localhost:" << gameConfig.serverPort << "/index.html" << std::endl;
    std::cout << " -> Akses Admin:   http://localhost:" << gameConfig.serverPort << "/admin.html" << std::endl;
    std::cout << " -> Tekan Ctrl + C di terminal untuk menghentikan server." << std::endl;
    std::cout << "----------------------------------------------------------" << std::endl;

    // 5. Jalankan Server Loop
    bool success = g_server.listen("0.0.0.0", gameConfig.serverPort);
    if (!success) {
        std::cerr << "[Error] Gagal menjalankan server pada port " << gameConfig.serverPort << std::endl;
        return 1;
    }

    std::cout << "[Server] Server telah berhenti dengan aman." << std::endl;
    return 0;
}
