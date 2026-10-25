#pragma once
#ifndef SESSION_REPOSITORY_H
#define SESSION_REPOSITORY_H

#include "../interfaces/IRepository.h"
#include "../models/GameSession.h"
#include "../db.h"
#include <vector>
#include <optional>

// =========================================================================
// REPOSITORY: SessionRepository
// Konsep OOP: Mengimplementasikan Generic Interface IRepository<GameSession>.
// Mengelola data riwayat game dan pencatatan skor (leaderboard).
// =========================================================================

class SessionRepository : public IRepository<GameSession> {
public:
    SessionRepository();
    ~SessionRepository() override = default;

    std::vector<GameSession> findAll() override;
    std::optional<GameSession> findById(int id) override;
    bool save(GameSession& session) override;
    bool remove(int id) override;

    // Leaderboard top 10 untuk suatu kuis
    std::vector<GameSession> findTop10ByQuizId(int quizId);

    // Menyimpan detail jawaban yang dijawab pemain
    bool saveSessionAnswer(int sessionId, int questionId, int optionId, bool isCorrect);
};

#endif // SESSION_REPOSITORY_H
