#pragma once
#ifndef DATABASE_H
#define DATABASE_H

#include <string>
#include <vector>
#include <map>
#include <memory>
#include <mutex>
#include "config.h"

// =========================================================================
// CLASS & ABSTRAKSI: Database & PreparedStatement
// Konsep OOP: Abstraksi akses basis data dengan prepared statement
// untuk mencegah SQL Injection pada semua operasi data.
// =========================================================================

namespace QuizGame {

enum class ParamType {
    Integer,
    String,
    Boolean,
    Null
};

struct QueryParam {
    ParamType type = ParamType::Null;
    int intVal = 0;
    std::string strVal;
    bool boolVal = false;
};

class PreparedStatement {
public:
    virtual ~PreparedStatement() = default;

    virtual void bindInt(int paramIndex, int value) = 0;
    virtual void bindString(int paramIndex, const std::string& value) = 0;
    virtual void bindBool(int paramIndex, bool value) = 0;
    virtual void bindNull(int paramIndex) = 0;

    virtual bool execute() = 0;
    virtual std::vector<std::map<std::string, std::string>> executeQuery() = 0;
    virtual int getLastInsertId() = 0;
    virtual int getRowsAffected() = 0;
};

class Database {
public:
    static Database& getInstance();

    virtual ~Database();

    bool initialize(const DatabaseConfig& config);
    bool isConnected() const { return isConnected_; }
    bool isUsingFallback() const { return isFallbackMode_; }

    std::unique_ptr<PreparedStatement> prepare(const std::string& sql);

    // Eksekusi raw query untuk batch script atau setup awal
    bool executeRaw(const std::string& sql);

private:
    Database();
    Database(const Database&) = delete;
    Database& operator=(const Database&) = delete;

    bool connectTcp(const DatabaseConfig& config);
    void setupFallbackSeed();

    bool isConnected_ = false;
    bool isFallbackMode_ = false;
    DatabaseConfig config_;
    std::mutex dbMutex_;

    // Handle internal TCP socket untuk MySQL jika terhubung
    int socketFd_ = -1;
};

} // namespace QuizGame

#endif // DATABASE_H
