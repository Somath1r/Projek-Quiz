#include "db.h"
#include <iostream>
#include <sstream>
#include <algorithm>
#include <chrono>
#include <cstring>
#include <type_traits>

// Header client MySQL/MariaDB hanya dipakai jika CMake menemukannya (USE_MYSQL)
#ifdef USE_MYSQL
#ifdef _WIN32
#ifndef WIN32_LEAN_AND_MEAN
#define WIN32_LEAN_AND_MEAN
#endif
#include <winsock2.h>
#endif
#include <mysql.h>
#endif

namespace QuizGame {

// -------------------------------------------------------------
// Fallback in-memory state jika MySQL server belum dinyalakan
// -------------------------------------------------------------
struct FallbackDb {
    struct CharacterRow { int id; std::string name; std::string type; std::string sprite_idle; std::string sprite_hit; std::string sprite_win; };
    struct QuizRow { int id; std::string title; std::string description; std::string created_at; };
    struct QuestionRow { int id; int quiz_id; std::string question_text; };
    struct OptionRow { int id; int question_id; std::string option_text; int is_correct; };
    struct SessionRow { int id; int quiz_id; int character_id; std::string player_name; int final_hp; int score; std::string created_at; };

    int nextQuizId = 2;
    int nextQuestionId = 6;
    int nextOptionId = 21;
    int nextSessionId = 4;

    std::vector<CharacterRow> characters;
    std::vector<QuizRow> quizzes;
    std::vector<QuestionRow> questions;
    std::vector<OptionRow> options;
    std::vector<SessionRow> sessions;

    std::mutex mtx;

    void initSeed() {
        characters = {
            {1, "Knight Valerius", "knight", "assets/characters/knight_idle.svg", "assets/characters/knight_hit.svg", "assets/characters/knight_win.svg"},
            {2, "Archer Lyanna", "archer", "assets/characters/archer_idle.svg", "assets/characters/archer_hit.svg", "assets/characters/archer_win.svg"},
            {3, "Mage Zephyr", "mage", "assets/characters/mage_idle.svg", "assets/characters/mage_hit.svg", "assets/characters/mage_win.svg"}
        };

        quizzes = {
            {1, "Mastery Konsep OOP C++", "Uji pemahaman mendalam tentang 4 Pilar Utama Pemrograman Berorientasi Objek: Enkapsulasi, Pewarisan, Polimorfisme, dan Abstraksi.", "2026-10-25 10:00:00"}
        };

        questions = {
            {1, 1, "Manakah pilar OOP yang berfokus pada penyembunyian detail internal objek dan membatasi akses langsung ke atribut data?"},
            {2, 1, "Dalam C++, kata kunci apa yang wajib digunakan pada deklarasi method di base class agar method tersebut dapat di-override secara polimorfik?"},
            {3, 1, "Hubungan pewarisan (inheritance) dalam pemrograman berorientasi objek merepresentasikan hubungan relasi apa?"},
            {4, 1, "Apa sebutan untuk class dalam C++ yang memiliki minimal satu pure virtual function (misal: virtual void run() = 0;)?"},
            {5, 1, "Jika class Mage mewarisi class Character dan meng-override method takeDamage(), konsep OOP apa yang sedang diterapkan?"}
        };

        options = {
            // Soal 1
            {1, 1, "Enkapsulasi (Encapsulation)", 1},
            {2, 1, "Pewarisan (Inheritance)", 0},
            {3, 1, "Polimorfisme (Polymorphism)", 0},
            {4, 1, "Agregasi (Aggregation)", 0},
            // Soal 2
            {5, 2, "virtual", 1},
            {6, 2, "override", 0},
            {7, 2, "static", 0},
            {8, 2, "friend", 0},
            // Soal 3
            {9, 3, "IS-A (Adalah sebuah)", 1},
            {10, 3, "HAS-A (Memiliki sebuah)", 0},
            {11, 3, "USES-A (Menggunakan sebuah)", 0},
            {12, 3, "PART-OF (Bagian dari)", 0},
            // Soal 4
            {13, 4, "Abstract Class (Interface)", 1},
            {14, 4, "Concrete Class", 0},
            {15, 4, "Template Class", 0},
            {16, 4, "Static Class", 0},
            // Soal 5
            {17, 5, "Polimorfisme (Polymorphism)", 1},
            {18, 5, "Serialisasi (Serialization)", 0},
            {19, 5, "Kompilasi (Compilation)", 0},
            {20, 5, "Normalisasi (Normalization)", 0}
        };

        sessions = {
            {1, 1, 1, "Arthur", 85, 100, "2026-10-23 14:00:00"},
            {2, 1, 2, "Robin", 80, 80, "2026-10-24 16:30:00"},
            {3, 1, 3, "Merlin", 50, 60, "2026-10-25 09:15:00"}
        };
    }
};

static FallbackDb g_fallbackDb;

// Helper escaping untuk parameter SQL
static std::string escapeSql(const std::string& input) {
    std::string out;
    out.reserve(input.size() * 2);
    for (char c : input) {
        if (c == '\'') out += "\\'";
        else if (c == '\"') out += "\\\"";
        else if (c == '\\') out += "\\\\";
        else if (c == '\0') out += "\\0";
        else if (c == '\n') out += "\\n";
        else if (c == '\r') out += "\\r";
        else out += c;
    }
    return out;
}

// -------------------------------------------------------------
// Implementasi PreparedStatement
// -------------------------------------------------------------
// Implementasi PreparedStatement versi in-memory (dipakai HANYA jika MySQL tidak tersedia)
class FallbackPreparedStatement : public PreparedStatement {
public:
    explicit FallbackPreparedStatement(const std::string& sql) : sql_(sql) {}

    void bindInt(int paramIndex, int value) override {
        params_[paramIndex] = {ParamType::Integer, value, "", false};
    }

    void bindString(int paramIndex, const std::string& value) override {
        params_[paramIndex] = {ParamType::String, 0, value, false};
    }

    void bindBool(int paramIndex, bool value) override {
        params_[paramIndex] = {ParamType::Boolean, 0, "", value};
    }

    void bindNull(int paramIndex) override {
        params_[paramIndex] = {ParamType::Null, 0, "", false};
    }

    std::string buildInterpolatedSql() const {
        std::string result;
        int currentParam = 1;
        for (size_t i = 0; i < sql_.size(); ++i) {
            if (sql_[i] == '?') {
                auto it = params_.find(currentParam++);
                if (it != params_.end()) {
                    const auto& p = it->second;
                    if (p.type == ParamType::Integer) {
                        result += std::to_string(p.intVal);
                    } else if (p.type == ParamType::String) {
                        result += "'" + escapeSql(p.strVal) + "'";
                    } else if (p.type == ParamType::Boolean) {
                        result += p.boolVal ? "1" : "0";
                    } else {
                        result += "NULL";
                    }
                } else {
                    result += "NULL";
                }
            } else {
                result += sql_[i];
            }
        }
        return result;
    }

    bool execute() override {
        std::string finalSql = buildInterpolatedSql();
        return executeFallback(finalSql);
    }

    std::vector<std::map<std::string, std::string>> executeQuery() override {
        std::string finalSql = buildInterpolatedSql();
        return executeQueryFallback(finalSql);
    }

    int getLastInsertId() override { return lastInsertId_; }
    int getRowsAffected() override { return rowsAffected_; }

private:
    std::string sql_;
    std::map<int, QueryParam> params_;
    int lastInsertId_ = 0;
    int rowsAffected_ = 0;

    bool executeFallback(const std::string& sql) {
        std::lock_guard<std::mutex> lock(g_fallbackDb.mtx);
        std::string upperSql = sql;
        std::transform(upperSql.begin(), upperSql.end(), upperSql.begin(), ::toupper);

        // INSERT INTO quizzes
        if (upperSql.find("INSERT INTO QUIZZES") != std::string::npos || upperSql.find("INSERT INTO `QUIZZES`") != std::string::npos) {
            int newId = g_fallbackDb.nextQuizId++;
            std::string title = (params_.count(1) ? params_[1].strVal : "Untitled");
            std::string desc = (params_.count(2) ? params_[2].strVal : "");
            g_fallbackDb.quizzes.push_back({newId, title, desc, "2026-10-25 12:00:00"});
            lastInsertId_ = newId;
            rowsAffected_ = 1;
            return true;
        }

        // UPDATE quizzes
        if (upperSql.find("UPDATE QUIZZES") != std::string::npos || upperSql.find("UPDATE `QUIZZES`") != std::string::npos) {
            int targetId = (params_.count(3) ? params_[3].intVal : 0);
            for (auto& q : g_fallbackDb.quizzes) {
                if (q.id == targetId) {
                    if (params_.count(1)) q.title = params_[1].strVal;
                    if (params_.count(2)) q.description = params_[2].strVal;
                    rowsAffected_ = 1;
                    return true;
                }
            }
            return false;
        }

        // DELETE FROM quizzes
        if (upperSql.find("DELETE FROM QUIZZES") != std::string::npos || upperSql.find("DELETE FROM `QUIZZES`") != std::string::npos) {
            int targetId = (params_.count(1) ? params_[1].intVal : 0);
            // Cascade delete questions & options
            std::vector<int> qIds;
            for (const auto& q : g_fallbackDb.questions) {
                if (q.quiz_id == targetId) qIds.push_back(q.id);
            }
            g_fallbackDb.options.erase(
                std::remove_if(g_fallbackDb.options.begin(), g_fallbackDb.options.end(),
                    [&qIds](const FallbackDb::OptionRow& opt) {
                        return std::find(qIds.begin(), qIds.end(), opt.question_id) != qIds.end();
                    }),
                g_fallbackDb.options.end());

            g_fallbackDb.questions.erase(
                std::remove_if(g_fallbackDb.questions.begin(), g_fallbackDb.questions.end(),
                    [targetId](const FallbackDb::QuestionRow& q) { return q.quiz_id == targetId; }),
                g_fallbackDb.questions.end());

            auto it = std::remove_if(g_fallbackDb.quizzes.begin(), g_fallbackDb.quizzes.end(),
                [targetId](const FallbackDb::QuizRow& q) { return q.id == targetId; });
            rowsAffected_ = (it != g_fallbackDb.quizzes.end()) ? 1 : 0;
            g_fallbackDb.quizzes.erase(it, g_fallbackDb.quizzes.end());
            return true;
        }

        // INSERT INTO questions
        if (upperSql.find("INSERT INTO QUESTIONS") != std::string::npos || upperSql.find("INSERT INTO `QUESTIONS`") != std::string::npos) {
            int newId = g_fallbackDb.nextQuestionId++;
            int quizId = (params_.count(1) ? params_[1].intVal : 1);
            std::string qText = (params_.count(2) ? params_[2].strVal : "");
            g_fallbackDb.questions.push_back({newId, quizId, qText});
            lastInsertId_ = newId;
            rowsAffected_ = 1;
            return true;
        }

        // UPDATE questions
        if (upperSql.find("UPDATE QUESTIONS") != std::string::npos || upperSql.find("UPDATE `QUESTIONS`") != std::string::npos) {
            int qId = (params_.count(2) ? params_[2].intVal : 0);
            for (auto& q : g_fallbackDb.questions) {
                if (q.id == qId) {
                    if (params_.count(1)) q.question_text = params_[1].strVal;
                    rowsAffected_ = 1;
                    return true;
                }
            }
            return false;
        }

        // DELETE FROM questions
        if (upperSql.find("DELETE FROM QUESTIONS") != std::string::npos || upperSql.find("DELETE FROM `QUESTIONS`") != std::string::npos) {
            int qId = (params_.count(1) ? params_[1].intVal : 0);
            // Cascade delete options
            g_fallbackDb.options.erase(
                std::remove_if(g_fallbackDb.options.begin(), g_fallbackDb.options.end(),
                    [qId](const FallbackDb::OptionRow& opt) { return opt.question_id == qId; }),
                g_fallbackDb.options.end());

            auto it = std::remove_if(g_fallbackDb.questions.begin(), g_fallbackDb.questions.end(),
                [qId](const FallbackDb::QuestionRow& q) { return q.id == qId; });
            rowsAffected_ = (it != g_fallbackDb.questions.end()) ? 1 : 0;
            g_fallbackDb.questions.erase(it, g_fallbackDb.questions.end());
            return true;
        }

        // INSERT INTO options
        if (upperSql.find("INSERT INTO OPTIONS") != std::string::npos || upperSql.find("INSERT INTO `OPTIONS`") != std::string::npos) {
            int newId = g_fallbackDb.nextOptionId++;
            int qId = (params_.count(1) ? params_[1].intVal : 1);
            std::string oText = (params_.count(2) ? params_[2].strVal : "");
            int isCorr = (params_.count(3) ? (params_[3].boolVal ? 1 : 0) : 0);
            g_fallbackDb.options.push_back({newId, qId, oText, isCorr});
            lastInsertId_ = newId;
            rowsAffected_ = 1;
            return true;
        }

        // UPDATE options
        if (upperSql.find("UPDATE OPTIONS") != std::string::npos || upperSql.find("UPDATE `OPTIONS`") != std::string::npos) {
            int optId = (params_.count(3) ? params_[3].intVal : 0);
            for (auto& opt : g_fallbackDb.options) {
                if (opt.id == optId) {
                    if (params_.count(1)) opt.option_text = params_[1].strVal;
                    if (params_.count(2)) opt.is_correct = (params_[2].boolVal ? 1 : 0);
                    rowsAffected_ = 1;
                    return true;
                }
            }
            return false;
        }

        // DELETE FROM options
        if (upperSql.find("DELETE FROM OPTIONS") != std::string::npos || upperSql.find("DELETE FROM `OPTIONS`") != std::string::npos) {
            int optId = (params_.count(1) ? params_[1].intVal : 0);
            auto it = std::remove_if(g_fallbackDb.options.begin(), g_fallbackDb.options.end(),
                [optId](const FallbackDb::OptionRow& opt) { return opt.id == optId; });
            rowsAffected_ = (it != g_fallbackDb.options.end()) ? 1 : 0;
            g_fallbackDb.options.erase(it, g_fallbackDb.options.end());
            return true;
        }

        // INSERT INTO game_sessions
        if (upperSql.find("INSERT INTO GAME_SESSIONS") != std::string::npos || upperSql.find("INSERT INTO `GAME_SESSIONS`") != std::string::npos) {
            int newId = g_fallbackDb.nextSessionId++;
            int qId = (params_.count(1) ? params_[1].intVal : 1);
            int charId = (params_.count(2) ? params_[2].intVal : 1);
            std::string pName = (params_.count(3) ? params_[3].strVal : "Hero");
            int fHp = (params_.count(4) ? params_[4].intVal : 100);
            int sc = (params_.count(5) ? params_[5].intVal : 0);
            g_fallbackDb.sessions.push_back({newId, qId, charId, pName, fHp, sc, "Just Now"});
            lastInsertId_ = newId;
            rowsAffected_ = 1;
            return true;
        }

        // INSERT INTO session_answers
        if (upperSql.find("INSERT INTO SESSION_ANSWERS") != std::string::npos || upperSql.find("INSERT INTO `SESSION_ANSWERS`") != std::string::npos) {
            rowsAffected_ = 1;
            return true;
        }

        return true;
    }

    std::vector<std::map<std::string, std::string>> executeQueryFallback(const std::string& sql) {
        std::lock_guard<std::mutex> lock(g_fallbackDb.mtx);
        std::vector<std::map<std::string, std::string>> results;
        std::string upperSql = sql;
        std::transform(upperSql.begin(), upperSql.end(), upperSql.begin(), ::toupper);

        // SELECT characters
        if (upperSql.find("FROM CHARACTERS") != std::string::npos || upperSql.find("FROM `CHARACTERS`") != std::string::npos) {
            int targetId = (params_.count(1) ? params_[1].intVal : -1);
            for (const auto& c : g_fallbackDb.characters) {
                if (targetId == -1 || c.id == targetId) {
                    results.push_back({
                        {"id", std::to_string(c.id)},
                        {"name", c.name},
                        {"type", c.type},
                        {"sprite_idle", c.sprite_idle},
                        {"sprite_hit", c.sprite_hit},
                        {"sprite_win", c.sprite_win}
                    });
                }
            }
            return results;
        }

        // SELECT quizzes
        if (upperSql.find("FROM QUIZZES") != std::string::npos || upperSql.find("FROM `QUIZZES`") != std::string::npos) {
            int targetId = (params_.count(1) ? params_[1].intVal : -1);
            for (const auto& q : g_fallbackDb.quizzes) {
                if (targetId == -1 || q.id == targetId) {
                    results.push_back({
                        {"id", std::to_string(q.id)},
                        {"title", q.title},
                        {"description", q.description},
                        {"created_at", q.created_at}
                    });
                }
            }
            return results;
        }

        // SELECT questions
        if (upperSql.find("FROM QUESTIONS") != std::string::npos || upperSql.find("FROM `QUESTIONS`") != std::string::npos) {
            int targetId = (params_.count(1) ? params_[1].intVal : -1);
            for (const auto& q : g_fallbackDb.questions) {
                bool match = false;
                if (upperSql.find("QUIZ_ID =") != std::string::npos) {
                    match = (q.quiz_id == targetId);
                } else if (upperSql.find("ID =") != std::string::npos) {
                    match = (q.id == targetId);
                } else {
                    match = true;
                }
                if (match) {
                    results.push_back({
                        {"id", std::to_string(q.id)},
                        {"quiz_id", std::to_string(q.quiz_id)},
                        {"question_text", q.question_text}
                    });
                }
            }
            return results;
        }

        // SELECT options
        if (upperSql.find("FROM OPTIONS") != std::string::npos || upperSql.find("FROM `OPTIONS`") != std::string::npos) {
            int targetId = (params_.count(1) ? params_[1].intVal : -1);
            for (const auto& o : g_fallbackDb.options) {
                bool match = false;
                if (upperSql.find("QUESTION_ID =") != std::string::npos) {
                    match = (o.question_id == targetId);
                } else if (upperSql.find("ID =") != std::string::npos) {
                    match = (o.id == targetId);
                } else {
                    match = true;
                }
                if (match) {
                    results.push_back({
                        {"id", std::to_string(o.id)},
                        {"question_id", std::to_string(o.question_id)},
                        {"option_text", o.option_text},
                        {"is_correct", std::to_string(o.is_correct)}
                    });
                }
            }
            return results;
        }

        // SELECT game_sessions (Leaderboard)
        if (upperSql.find("FROM GAME_SESSIONS") != std::string::npos || upperSql.find("FROM `GAME_SESSIONS`") != std::string::npos) {
            int targetQuizId = (params_.count(1) ? params_[1].intVal : -1);
            std::vector<FallbackDb::SessionRow> sortedSessions = g_fallbackDb.sessions;
            // Urutkan berdasarkan score desc, final_hp desc
            std::sort(sortedSessions.begin(), sortedSessions.end(), [](const FallbackDb::SessionRow& a, const FallbackDb::SessionRow& b) {
                if (a.score != b.score) return a.score > b.score;
                return a.final_hp > b.final_hp;
            });

            for (const auto& s : sortedSessions) {
                if (targetQuizId == -1 || s.quiz_id == targetQuizId) {
                    std::string cName = "Unknown", cType = "knight";
                    for (const auto& c : g_fallbackDb.characters) {
                        if (c.id == s.character_id) {
                            cName = c.name;
                            cType = c.type;
                            break;
                        }
                    }
                    results.push_back({
                        {"id", std::to_string(s.id)},
                        {"quiz_id", std::to_string(s.quiz_id)},
                        {"character_id", std::to_string(s.character_id)},
                        {"character_name", cName},
                        {"character_type", cType},
                        {"player_name", s.player_name},
                        {"final_hp", std::to_string(s.final_hp)},
                        {"score", std::to_string(s.score)},
                        {"created_at", s.created_at}
                    });
                    if (results.size() >= 10) break; // Top 10
                }
            }
            return results;
        }

        return results;
    }
};

#ifdef USE_MYSQL
// -------------------------------------------------------------
// Implementasi PreparedStatement ASLI memakai MySQL C API (mysql_stmt_*)
// Parameter dikirim terpisah dari teks SQL, jadi aman dari SQL Injection.
// -------------------------------------------------------------
static MYSQL* openConnection(const DatabaseConfig& cfg, std::string& error) {
    MYSQL* conn = mysql_init(nullptr);
    if (!conn) { error = "mysql_init gagal"; return nullptr; }

    unsigned int timeoutSec = 3;
    mysql_options(conn, MYSQL_OPT_CONNECT_TIMEOUT, &timeoutSec);
    mysql_options(conn, MYSQL_SET_CHARSET_NAME, "utf8mb4");

    if (!mysql_real_connect(conn, cfg.host.c_str(), cfg.user.c_str(), cfg.password.c_str(),
                            cfg.database.c_str(), static_cast<unsigned int>(cfg.port), nullptr, 0)) {
        error = mysql_error(conn);
        mysql_close(conn);
        return nullptr;
    }
    return conn;
}

class MysqlPreparedStatement : public PreparedStatement {
public:
    MysqlPreparedStatement(const std::string& sql, const DatabaseConfig& cfg)
        : sql_(sql), cfg_(cfg) {}

    void bindInt(int paramIndex, int value) override {
        params_[paramIndex] = {ParamType::Integer, value, "", false};
    }
    void bindString(int paramIndex, const std::string& value) override {
        params_[paramIndex] = {ParamType::String, 0, value, false};
    }
    void bindBool(int paramIndex, bool value) override {
        params_[paramIndex] = {ParamType::Boolean, 0, "", value};
    }
    void bindNull(int paramIndex) override {
        params_[paramIndex] = {ParamType::Null, 0, "", false};
    }

    bool execute() override {
        std::vector<std::map<std::string, std::string>> unused;
        return run(unused, false);
    }

    std::vector<std::map<std::string, std::string>> executeQuery() override {
        std::vector<std::map<std::string, std::string>> rows;
        run(rows, true);
        return rows;
    }

    int getLastInsertId() override { return lastInsertId_; }
    int getRowsAffected() override { return rowsAffected_; }

private:
    using NullFlag = std::remove_pointer_t<decltype(MYSQL_BIND::is_null)>;

    std::string sql_;
    DatabaseConfig cfg_;
    std::map<int, QueryParam> params_;
    int lastInsertId_ = 0;
    int rowsAffected_ = 0;

    bool run(std::vector<std::map<std::string, std::string>>& rows, bool wantRows) {
        std::string err;
        MYSQL* conn = openConnection(cfg_, err);
        if (!conn) {
            std::cerr << "[Database] Koneksi MySQL gagal: " << err << std::endl;
            return false;
        }

        MYSQL_STMT* stmt = mysql_stmt_init(conn);
        bool ok = false;
        MYSQL_RES* meta = nullptr;

        do {
            if (!stmt) break;
            if (mysql_stmt_prepare(stmt, sql_.c_str(), static_cast<unsigned long>(sql_.size()))) {
                std::cerr << "[Database] SQL prepare gagal: " << mysql_stmt_error(stmt)
                          << " | " << sql_ << std::endl;
                break;
            }

            // ---- Bind parameter (?) ----
            unsigned long paramCount = mysql_stmt_param_count(stmt);
            std::vector<MYSQL_BIND> binds(paramCount);
            std::vector<long long> ints(paramCount, 0);
            std::vector<signed char> tinys(paramCount, 0);
            std::vector<std::string> strs(paramCount);
            std::vector<unsigned long> strLens(paramCount, 0);
            std::vector<NullFlag> nulls(paramCount, 0);
            for (unsigned long i = 0; i < paramCount; ++i) {
                std::memset(&binds[i], 0, sizeof(MYSQL_BIND));
                auto it = params_.find(static_cast<int>(i) + 1);
                if (it == params_.end() || it->second.type == ParamType::Null) {
                    nulls[i] = 1;
                    binds[i].buffer_type = MYSQL_TYPE_NULL;
                    binds[i].is_null = &nulls[i];
                    continue;
                }
                const QueryParam& p = it->second;
                if (p.type == ParamType::Integer) {
                    ints[i] = p.intVal;
                    binds[i].buffer_type = MYSQL_TYPE_LONGLONG;
                    binds[i].buffer = &ints[i];
                } else if (p.type == ParamType::Boolean) {
                    tinys[i] = p.boolVal ? 1 : 0;
                    binds[i].buffer_type = MYSQL_TYPE_TINY;
                    binds[i].buffer = &tinys[i];
                } else {
                    strs[i] = p.strVal;
                    strLens[i] = static_cast<unsigned long>(strs[i].size());
                    binds[i].buffer_type = MYSQL_TYPE_STRING;
                    binds[i].buffer = const_cast<char*>(strs[i].data());
                    binds[i].buffer_length = strLens[i];
                    binds[i].length = &strLens[i];
                }
            }
            if (paramCount > 0 && mysql_stmt_bind_param(stmt, binds.data())) {
                std::cerr << "[Database] bind param gagal: " << mysql_stmt_error(stmt) << std::endl;
                break;
            }

            if (mysql_stmt_execute(stmt)) {
                std::cerr << "[Database] SQL execute gagal: " << mysql_stmt_error(stmt)
                          << " | " << sql_ << std::endl;
                break;
            }

            // ---- Baca hasil (SELECT) ----
            meta = mysql_stmt_result_metadata(stmt);
            if (meta) {
                unsigned int nCols = mysql_num_fields(meta);
                MYSQL_FIELD* fields = mysql_fetch_fields(meta);

                std::vector<MYSQL_BIND> rbinds(nCols);
                std::vector<unsigned long> lens(nCols, 0);
                std::vector<NullFlag> rnull(nCols, 0);
                char dummy[1] = {0};
                for (unsigned int c = 0; c < nCols; ++c) {
                    std::memset(&rbinds[c], 0, sizeof(MYSQL_BIND));
                    rbinds[c].buffer_type = MYSQL_TYPE_STRING;
                    rbinds[c].buffer = dummy;
                    rbinds[c].buffer_length = 0;   // panjang diambil lewat fetch_column
                    rbinds[c].length = &lens[c];
                    rbinds[c].is_null = &rnull[c];
                }
                if (mysql_stmt_bind_result(stmt, rbinds.data()) || mysql_stmt_store_result(stmt)) {
                    std::cerr << "[Database] baca hasil gagal: " << mysql_stmt_error(stmt) << std::endl;
                    break;
                }

                while (true) {
                    int rc = mysql_stmt_fetch(stmt);
                    if (rc == MYSQL_NO_DATA) break;
                    if (rc != 0 && rc != MYSQL_DATA_TRUNCATED) {
                        std::cerr << "[Database] fetch gagal: " << mysql_stmt_error(stmt) << std::endl;
                        break;
                    }
                    std::map<std::string, std::string> row;
                    for (unsigned int c = 0; c < nCols; ++c) {
                        std::string value;
                        if (!rnull[c] && lens[c] > 0) {
                            value.assign(lens[c], '\0');
                            MYSQL_BIND one;
                            std::memset(&one, 0, sizeof(one));
                            one.buffer_type = MYSQL_TYPE_STRING;
                            one.buffer = &value[0];
                            one.buffer_length = lens[c];
                            mysql_stmt_fetch_column(stmt, &one, c, 0);
                        }
                        row[fields[c].name] = value;
                    }
                    rows.push_back(std::move(row));
                }
            } else {
                // INSERT / UPDATE / DELETE
                lastInsertId_ = static_cast<int>(mysql_stmt_insert_id(stmt));
                rowsAffected_ = static_cast<int>(mysql_stmt_affected_rows(stmt));
            }
            ok = true;
        } while (false);

        (void)wantRows;
        if (meta) mysql_free_result(meta);
        if (stmt) mysql_stmt_close(stmt);
        mysql_close(conn);
        return ok;
    }
};
#endif // USE_MYSQL

// -------------------------------------------------------------
// Implementasi Database (Singleton)
// -------------------------------------------------------------
Database::Database() {
    setupFallbackSeed();
}

Database::~Database() {}

Database& Database::getInstance() {
    static Database instance;
    return instance;
}

void Database::setupFallbackSeed() {
    g_fallbackDb.initSeed();
}

bool Database::initialize(const DatabaseConfig& config) {
    std::lock_guard<std::mutex> lock(dbMutex_);
    config_ = config;

    std::cout << "[Database] Mencoba menghubungkan ke MySQL/MariaDB XAMPP ("
              << config.host << ":" << config.port << ", DB: " << config.database << ")..." << std::endl;

    std::string failReason;
    if (connectMysql(config, failReason)) {
        isConnected_ = true;
        isFallbackMode_ = false;
        std::cout << "[Database] BERHASIL terhubung ke MySQL " << config.host << ":" << config.port
                  << " (database '" << config.database << "'). Data disimpan permanen di MySQL." << std::endl;
        return true;
    }

    isConnected_ = true;
    isFallbackMode_ = true;
    std::cout << "[Database] !!! GAGAL memakai MySQL: " << failReason << "\n"
              << "[Database] !!! Mode In-Memory AKTIF: data TIDAK tersimpan dan hilang saat server dimatikan.\n"
              << "[Database]     Cek: MySQL XAMPP sudah Start? Port di config.json sama dengan port MySQL XAMPP?\n"
              << "[Database]     schema.sql dan seed.sql sudah di-import ke database '" << config.database << "'?"
              << std::endl;
    return true;
}

// Mencoba login ke MySQL dan memastikan tabel sudah ada
bool Database::connectMysql(const DatabaseConfig& config, std::string& reason) {
#ifdef USE_MYSQL
    MYSQL* conn = openConnection(config, reason);
    if (!conn) return false;

    bool tablesOk = false;
    if (mysql_query(conn, "SELECT COUNT(*) FROM quizzes") == 0) {
        MYSQL_RES* res = mysql_store_result(conn);
        if (res) mysql_free_result(res);
        tablesOk = true;
    } else {
        reason = std::string("tabel belum ada (") + mysql_error(conn) + "). Import database/schema.sql lalu seed.sql";
    }
    mysql_close(conn);
    return tablesOk;
#else
    (void)config;
    reason = "program ini di-build TANPA library MySQL (USE_MYSQL tidak aktif). Lihat pesan CMake saat build.";
    return false;
#endif
}

std::unique_ptr<PreparedStatement> Database::prepare(const std::string& sql) {
#ifdef USE_MYSQL
    if (!isFallbackMode_) {
        return std::make_unique<MysqlPreparedStatement>(sql, config_);
    }
#endif
    return std::make_unique<FallbackPreparedStatement>(sql);
}

bool Database::executeRaw(const std::string& sql) {
    auto stmt = prepare(sql);
    return stmt->execute();
}

} // namespace QuizGame