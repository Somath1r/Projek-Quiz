#include "OptionRepository.h"

OptionRepository::OptionRepository() {}

std::vector<Option> OptionRepository::findAll() {
    std::vector<Option> list;
    auto stmt = QuizGame::Database::getInstance().prepare(
        "SELECT id, question_id, option_text, is_correct FROM options ORDER BY id ASC"
    );
    auto rows = stmt->executeQuery();
    for (const auto& r : rows) {
        list.emplace_back(
            std::stoi(r.at("id")),
            std::stoi(r.at("question_id")),
            r.at("option_text"),
            std::stoi(r.at("is_correct")) != 0
        );
    }
    return list;
}

std::optional<Option> OptionRepository::findById(int id) {
    auto stmt = QuizGame::Database::getInstance().prepare(
        "SELECT id, question_id, option_text, is_correct FROM options WHERE id = ?"
    );
    stmt->bindInt(1, id);
    auto rows = stmt->executeQuery();
    if (rows.empty()) return std::nullopt;

    const auto& r = rows[0];
    return Option(
        std::stoi(r.at("id")),
        std::stoi(r.at("question_id")),
        r.at("option_text"),
        std::stoi(r.at("is_correct")) != 0
    );
}

bool OptionRepository::save(Option& option) {
    if (option.getId() == 0) {
        // Jika opsi baru ini ditandai benar, reset opsi lain agar tepat 1 yang benar
        if (option.getIsCorrect()) {
            resetCorrectOptionsForQuestion(option.getQuestionId());
        }

        auto stmt = QuizGame::Database::getInstance().prepare(
            "INSERT INTO options (question_id, option_text, is_correct) VALUES (?, ?, ?)"
        );
        stmt->bindInt(1, option.getQuestionId());
        stmt->bindString(2, option.getOptionText());
        stmt->bindBool(3, option.getIsCorrect());
        if (stmt->execute()) {
            option.setId(stmt->getLastInsertId());
            return true;
        }
        return false;
    } else {
        if (option.getIsCorrect()) {
            resetCorrectOptionsForQuestion(option.getQuestionId());
        }

        auto stmt = QuizGame::Database::getInstance().prepare(
            "UPDATE options SET option_text = ?, is_correct = ? WHERE id = ?"
        );
        stmt->bindString(1, option.getOptionText());
        stmt->bindBool(2, option.getIsCorrect());
        stmt->bindInt(3, option.getId());
        return stmt->execute();
    }
}

bool OptionRepository::remove(int id) {
    auto stmt = QuizGame::Database::getInstance().prepare(
        "DELETE FROM options WHERE id = ?"
    );
    stmt->bindInt(1, id);
    return stmt->execute();
}

std::vector<Option> OptionRepository::findByQuestionId(int questionId) {
    std::vector<Option> list;
    auto stmt = QuizGame::Database::getInstance().prepare(
        "SELECT id, question_id, option_text, is_correct FROM options WHERE question_id = ? ORDER BY id ASC"
    );
    stmt->bindInt(1, questionId);
    auto rows = stmt->executeQuery();
    for (const auto& r : rows) {
        list.emplace_back(
            std::stoi(r.at("id")),
            std::stoi(r.at("question_id")),
            r.at("option_text"),
            std::stoi(r.at("is_correct")) != 0
        );
    }
    return list;
}

bool OptionRepository::resetCorrectOptionsForQuestion(int questionId) {
    auto stmt = QuizGame::Database::getInstance().prepare(
        "UPDATE options SET is_correct = 0 WHERE question_id = ?"
    );
    stmt->bindInt(1, questionId);
    return stmt->execute();
}
