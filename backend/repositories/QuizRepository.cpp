#include "QuizRepository.h"
#include "QuestionRepository.h"

QuizRepository::QuizRepository() {}

// IMPLEMENTASI INTERFACE: Mengambil seluruh kuis
std::vector<Quiz> QuizRepository::findAll() {
    std::vector<Quiz> list;
    auto stmt = QuizGame::Database::getInstance().prepare(
        "SELECT id, title, description, created_at FROM quizzes ORDER BY id DESC"
    );
    auto rows = stmt->executeQuery();
    for (const auto& r : rows) {
        list.emplace_back(
            std::stoi(r.at("id")),
            r.at("title"),
            r.at("description"),
            r.at("created_at")
        );
    }
    return list;
}

// IMPLEMENTASI INTERFACE: Mengambil kuis berdasarkan ID
std::optional<Quiz> QuizRepository::findById(int id) {
    auto stmt = QuizGame::Database::getInstance().prepare(
        "SELECT id, title, description, created_at FROM quizzes WHERE id = ?"
    );
    stmt->bindInt(1, id);
    auto rows = stmt->executeQuery();
    if (rows.empty()) return std::nullopt;

    const auto& r = rows[0];
    return Quiz(std::stoi(r.at("id")), r.at("title"), r.at("description"), r.at("created_at"));
}

// IMPLEMENTASI INTERFACE: Simpan (Insert / Update) kuis
bool QuizRepository::save(Quiz& quiz) {
    if (quiz.getId() == 0) {
        // INSERT
        auto stmt = QuizGame::Database::getInstance().prepare(
            "INSERT INTO quizzes (title, description) VALUES (?, ?)"
        );
        stmt->bindString(1, quiz.getTitle());
        stmt->bindString(2, quiz.getDescription());
        if (stmt->execute()) {
            quiz.setId(stmt->getLastInsertId());
            return true;
        }
        return false;
    } else {
        // UPDATE
        auto stmt = QuizGame::Database::getInstance().prepare(
            "UPDATE quizzes SET title = ?, description = ? WHERE id = ?"
        );
        stmt->bindString(1, quiz.getTitle());
        stmt->bindString(2, quiz.getDescription());
        stmt->bindInt(3, quiz.getId());
        return stmt->execute();
    }
}

// IMPLEMENTASI INTERFACE: Hapus kuis
bool QuizRepository::remove(int id) {
    auto stmt = QuizGame::Database::getInstance().prepare(
        "DELETE FROM quizzes WHERE id = ?"
    );
    stmt->bindInt(1, id);
    return stmt->execute();
}

std::optional<Quiz> QuizRepository::findWithQuestions(int quizId, bool includeAnswers) {
    auto quizOpt = findById(quizId);
    if (!quizOpt) return std::nullopt;

    Quiz quiz = *quizOpt;
    QuestionRepository questionRepo;
    auto questions = questionRepo.findByQuizId(quizId);

    quiz.setQuestions(questions);
    return quiz;
}
