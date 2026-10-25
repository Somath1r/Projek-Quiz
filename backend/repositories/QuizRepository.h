#pragma once
#ifndef QUIZ_REPOSITORY_H
#define QUIZ_REPOSITORY_H

#include "../interfaces/IRepository.h"
#include "../models/Quiz.h"
#include "../db.h"

// =========================================================================
// REPOSITORY: QuizRepository
// Konsep OOP: Mengimplementasikan Generic Interface IRepository<Quiz>.
// Mengenkapsulasi semua query SQL dan operasi basis data terkait Quiz.
// =========================================================================

class QuizRepository : public IRepository<Quiz> {
public:
    QuizRepository();
    ~QuizRepository() override = default;

    std::vector<Quiz> findAll() override;
    std::optional<Quiz> findById(int id) override;
    bool save(Quiz& quiz) override;
    bool remove(int id) override;

    // Method tambahan untuk mengambil quiz beserta relasi pertanyaan & opsi
    std::optional<Quiz> findWithQuestions(int quizId, bool includeAnswers = true);
};

#endif // QUIZ_REPOSITORY_H
