#pragma once
#ifndef OPTION_REPOSITORY_H
#define OPTION_REPOSITORY_H

#include "../interfaces/IRepository.h"
#include "../models/Option.h"
#include "../db.h"

// =========================================================================
// REPOSITORY: OptionRepository
// Konsep OOP: Mengimplementasikan Generic Interface IRepository<Option>.
// Mengelola data pilihan jawaban dan validasi jawaban benar.
// =========================================================================

class OptionRepository : public IRepository<Option> {
public:
    OptionRepository();
    ~OptionRepository() override = default;

    std::vector<Option> findAll() override;
    std::optional<Option> findById(int id) override;
    bool save(Option& option) override;
    bool remove(int id) override;

    // Method khusus domain quiz
    std::vector<Option> findByQuestionId(int questionId);
    bool resetCorrectOptionsForQuestion(int questionId);
};

#endif // OPTION_REPOSITORY_H
