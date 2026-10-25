#include "GameSession.h"

GameSession::GameSession(int id, int quizId, int characterId, const std::string& playerName,
                         int finalHp, int score, const std::string& createdAt)
    : id_(id), quizId_(quizId), characterId_(characterId),
      playerName_(playerName), finalHp_(finalHp), score_(score), createdAt_(createdAt) {}

nlohmann::json GameSession::toJson() const {
    nlohmann::json j;
    j["id"] = id_;
    j["quiz_id"] = quizId_;
    j["character_id"] = characterId_;
    j["character_name"] = characterName_;
    j["character_type"] = characterType_;
    j["player_name"] = playerName_;
    j["final_hp"] = finalHp_;
    j["score"] = score_;
    j["created_at"] = createdAt_;
    return j;
}
