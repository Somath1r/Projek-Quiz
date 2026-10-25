#pragma once
#ifndef QUIZ_H
#define QUIZ_H

#include "Entity.h"
#include "Question.h"
#include <string>
#include <vector>

// =========================================================================
// CLASS & PEWARISAN: Quiz
// Konsep OOP: Pewarisan dari Entity, Komposisi dengan Question (has-many).
// =========================================================================

class Quiz : public Entity {
private:
    // ENKAPSULASI: Atribut private
    std::string title_;
    std::string description_;
    std::string createdAt_;
    std::vector<Question> questions_;

public:
    Quiz() = default;
    Quiz(int id, const std::string& title, const std::string& description, const std::string& createdAt = "");

    // Getter & Setter (Enkapsulasi)
    const std::string& getTitle() const { return title_; }
    void setTitle(const std::string& title) { title_ = title; }

    const std::string& getDescription() const { return description_; }
    void setDescription(const std::string& desc) { description_ = desc; }

    const std::string& getCreatedAt() const { return createdAt_; }
    void setCreatedAt(const std::string& time) { createdAt_ = time; }

    const std::vector<Question>& getQuestions() const { return questions_; }
    void setQuestions(const std::vector<Question>& questions) { questions_ = questions; }
    void addQuestion(const Question& question) { questions_.push_back(question); }

    // Implementasi method dari interface ISerializable
    nlohmann::json toJson() const override;
};

#endif // QUIZ_H
