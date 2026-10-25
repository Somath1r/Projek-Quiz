#pragma once
#ifndef QUESTION_H
#define QUESTION_H

#include "Entity.h"
#include "Option.h"
#include <string>
#include <vector>

// =========================================================================
// CLASS & PEWARISAN: Question
// Konsep OOP: Pewarisan dari Entity, Komposisi dengan Option (has-many).
// =========================================================================

class Question : public Entity {
private:
    // ENKAPSULASI: Atribut private
    int quizId_ = 0;
    std::string questionText_;
    std::vector<Option> options_;

public:
    Question() = default;
    Question(int id, int quizId, const std::string& questionText);

    // Getter & Setter (Enkapsulasi)
    int getQuizId() const { return quizId_; }
    void setQuizId(int quizId) { quizId_ = quizId; }

    const std::string& getQuestionText() const { return questionText_; }
    void setQuestionText(const std::string& text) { questionText_ = text; }

    const std::vector<Option>& getOptions() const { return options_; }
    void setOptions(const std::vector<Option>& options) { options_ = options; }
    void addOption(const Option& option) { options_.push_back(option); }

    // ENKAPSULASI: Meneruskan proteksi kunci jawaban ke setiap pilihan jawaban
    nlohmann::json toJson(bool includeAnswer) const;

    // Implementasi method dari interface ISerializable
    nlohmann::json toJson() const override;
};

#endif // QUESTION_H
