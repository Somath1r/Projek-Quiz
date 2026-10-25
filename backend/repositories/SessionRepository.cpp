#include "SessionRepository.h"

SessionRepository::SessionRepository() {}

std::vector<GameSession> SessionRepository::findAll() {
    std::vector<GameSession> list;
    auto stmt = QuizGame::Database::getInstance().prepare(
        "SELECT id, quiz_id, character_id, player_name, final_hp, score, created_at "
        "FROM game_sessions ORDER BY id DESC"
    );
    auto rows = stmt->executeQuery();
    for (const auto& r : rows) {
        list.emplace_back(
            std::stoi(r.at("id")),
            std::stoi(r.at("quiz_id")),
            std::stoi(r.at("character_id")),
            r.at("player_name"),
            std::stoi(r.at("final_hp")),
            std::stoi(r.at("score")),
            r.at("created_at")
        );
    }
    return list;
}

std::optional<GameSession> SessionRepository::findById(int id) {
    auto stmt = QuizGame::Database::getInstance().prepare(
        "SELECT id, quiz_id, character_id, player_name, final_hp, score, created_at "
        "FROM game_sessions WHERE id = ?"
    );
    stmt->bindInt(1, id);
    auto rows = stmt->executeQuery();
    if (rows.empty()) return std::nullopt;

    const auto& r = rows[0];
    return GameSession(
        std::stoi(r.at("id")),
        std::stoi(r.at("quiz_id")),
        std::stoi(r.at("character_id")),
        r.at("player_name"),
        std::stoi(r.at("final_hp")),
        std::stoi(r.at("score")),
        r.at("created_at")
    );
}

bool SessionRepository::save(GameSession& session) {
    auto stmt = QuizGame::Database::getInstance().prepare(
        "INSERT INTO game_sessions (quiz_id, character_id, player_name, final_hp, score) "
        "VALUES (?, ?, ?, ?, ?)"
    );
    stmt->bindInt(1, session.getQuizId());
    stmt->bindInt(2, session.getCharacterId());
    stmt->bindString(3, session.getPlayerName());
    stmt->bindInt(4, session.getFinalHp());
    stmt->bindInt(5, session.getScore());

    if (stmt->execute()) {
        session.setId(stmt->getLastInsertId());
        return true;
    }
    return false;
}

bool SessionRepository::remove(int id) {
    auto stmt = QuizGame::Database::getInstance().prepare(
        "DELETE FROM game_sessions WHERE id = ?"
    );
    stmt->bindInt(1, id);
    return stmt->execute();
}

std::vector<GameSession> SessionRepository::findTop10ByQuizId(int quizId) {
    std::vector<GameSession> list;
    auto stmt = QuizGame::Database::getInstance().prepare(
        "SELECT s.id, s.quiz_id, s.character_id, c.name AS character_name, c.type AS character_type, "
        "s.player_name, s.final_hp, s.score, s.created_at "
        "FROM game_sessions s "
        "JOIN characters c ON s.character_id = c.id "
        "WHERE s.quiz_id = ? "
        "ORDER BY s.score DESC, s.final_hp DESC, s.id DESC "
        "LIMIT 10"
    );
    stmt->bindInt(1, quizId);
    auto rows = stmt->executeQuery();
    for (const auto& r : rows) {
        GameSession sess(
            std::stoi(r.at("id")),
            std::stoi(r.at("quiz_id")),
            std::stoi(r.at("character_id")),
            r.at("player_name"),
            std::stoi(r.at("final_hp")),
            std::stoi(r.at("score")),
            r.at("created_at")
        );
        if (r.count("character_name")) sess.setCharacterName(r.at("character_name"));
        if (r.count("character_type")) sess.setCharacterType(r.at("character_type"));
        list.push_back(sess);
    }
    return list;
}

bool SessionRepository::saveSessionAnswer(int sessionId, int questionId, int optionId, bool isCorrect) {
    auto stmt = QuizGame::Database::getInstance().prepare(
        "INSERT INTO session_answers (session_id, question_id, option_id, is_correct) "
        "VALUES (?, ?, ?, ?)"
    );
    stmt->bindInt(1, sessionId);
    stmt->bindInt(2, questionId);
    // Soal yang tidak dijawab disimpan sebagai NULL (kolom option_id punya Foreign Key)
    if (optionId > 0) stmt->bindInt(3, optionId);
    else stmt->bindNull(3);
    stmt->bindBool(4, isCorrect);
    return stmt->execute();
}