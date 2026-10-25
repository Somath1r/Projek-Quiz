#pragma once
#ifndef OPTION_H
#define OPTION_H

#include "Entity.h"
#include <string>

// =========================================================================
// CLASS & PEWARISAN: Option
// Konsep OOP: Pewarisan dari Entity, Enkapsulasi data pilihan jawaban.
// =========================================================================

class Option : public Entity {
private:
    // ENKAPSULASI: Semua atribut private, hanya dapat diakses lewat getter/setter
    int questionId_ = 0;
    std::string optionText_;
    bool isCorrect_ = false;

public:
    Option() = default;
    Option(int id, int questionId, const std::string& optionText, bool isCorrect);

    // Getter & Setter (Enkapsulasi)
    int getQuestionId() const { return questionId_; }
    void setQuestionId(int questionId) { questionId_ = questionId; }

    const std::string& getOptionText() const { return optionText_; }
    void setOptionText(const std::string& text) { optionText_ = text; }

    bool getIsCorrect() const { return isCorrect_; }
    void setIsCorrect(bool correct) { isCorrect_ = correct; }

    // ENKAPSULASI: Menyembunyikan status kebenaran jawaban dari client pemain.
    // Jika includeAnswer == false, field "is_correct" tidak disertakan dalam JSON.
    nlohmann::json toJson(bool includeAnswer) const;

    // Implementasi method dari interface ISerializable
    nlohmann::json toJson() const override;
};

#endif // OPTION_H
