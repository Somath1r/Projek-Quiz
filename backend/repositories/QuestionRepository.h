#pragma once
#ifndef QUESTION_REPOSITORY_H
#define QUESTION_REPOSITORY_H

#include "../interfaces/IRepository.h"
#include "../models/Question.h"
#include "../db.h"

// =========================================================================
// REPOSITORY: QuestionRepository
// Konsep OOP: Mengimplementasikan Generic Interface IRepository<Question>.
// Mengelola data pertanyaan kuis dan relasinya dengan pilihan jawaban.
// =========================================================================

class QuestionRepository : public IRepository<Question> {
public:
    QuestionRepository();
    ~QuestionRepository() override = default;

    std::vector<Question> findAll() override;
    std::optional<Question> findById(int id) override;
    bool save(Question& question) override;
    bool remove(int id) override;

    // Method khusus domain quiz
    std::vector<Question> findByQuizId(int quizId);
};

#endif // QUESTION_REPOSITORY_H
