#include "QuestionRepository.h"
#include "OptionRepository.h"

QuestionRepository::QuestionRepository() {}

std::vector<Question> QuestionRepository::findAll() {
    std::vector<Question> list;
    auto stmt = QuizGame::Database::getInstance().prepare(
        "SELECT id, quiz_id, question_text FROM questions ORDER BY id ASC"
    );
    auto rows = stmt->executeQuery();
    for (const auto& r : rows) {
        list.emplace_back(
            std::stoi(r.at("id")),
            std::stoi(r.at("quiz_id")),
            r.at("question_text")
        );
    }
    return list;
}

std::optional<Question> QuestionRepository::findById(int id) {
    auto stmt = QuizGame::Database::getInstance().prepare(
        "SELECT id, quiz_id, question_text FROM questions WHERE id = ?"
    );
    stmt->bindInt(1, id);
    auto rows = stmt->executeQuery();
    if (rows.empty()) return std::nullopt;

    const auto& r = rows[0];
    Question q(std::stoi(r.at("id")), std::stoi(r.at("quiz_id")), r.at("question_text"));

    OptionRepository optRepo;
    q.setOptions(optRepo.findByQuestionId(q.getId()));
    return q;
}

bool QuestionRepository::save(Question& question) {
    if (question.getId() == 0) {
        auto stmt = QuizGame::Database::getInstance().prepare(
            "INSERT INTO questions (quiz_id, question_text) VALUES (?, ?)"
        );
        stmt->bindInt(1, question.getQuizId());
        stmt->bindString(2, question.getQuestionText());
        if (stmt->execute()) {
            question.setId(stmt->getLastInsertId());
            return true;
        }
        return false;
    } else {
        auto stmt = QuizGame::Database::getInstance().prepare(
            "UPDATE questions SET question_text = ? WHERE id = ?"
        );
        stmt->bindString(1, question.getQuestionText());
        stmt->bindInt(2, question.getId());
        return stmt->execute();
    }
}

bool QuestionRepository::remove(int id) {
    auto stmt = QuizGame::Database::getInstance().prepare(
        "DELETE FROM questions WHERE id = ?"
    );
    stmt->bindInt(1, id);
    return stmt->execute();
}

std::vector<Question> QuestionRepository::findByQuizId(int quizId) {
    std::vector<Question> list;
    auto stmt = QuizGame::Database::getInstance().prepare(
        "SELECT id, quiz_id, question_text FROM questions WHERE quiz_id = ? ORDER BY id ASC"
    );
    stmt->bindInt(1, quizId);
    auto rows = stmt->executeQuery();

    OptionRepository optRepo;
    for (const auto& r : rows) {
        Question q(std::stoi(r.at("id")), std::stoi(r.at("quiz_id")), r.at("question_text"));
        q.setOptions(optRepo.findByQuestionId(q.getId()));
        list.push_back(q);
    }
    return list;
}
