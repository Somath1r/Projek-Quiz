#pragma once
#ifndef GAME_SESSION_H
#define GAME_SESSION_H

#include "../interfaces/ISerializable.h"
#include <string>

// =========================================================================
// CLASS & ENKAPSULASI: GameSession
// Menyimpan riwayat permainan dan catatan skor untuk leaderboard.
// =========================================================================

class GameSession : public ISerializable {
private:
    int id_ = 0;
    int quizId_ = 0;
    int characterId_ = 0;
    std::string characterName_;
    std::string characterType_;
    std::string playerName_;
    int finalHp_ = 100;
    int score_ = 0;
    std::string createdAt_;

public:
    GameSession() = default;
    GameSession(int id, int quizId, int characterId, const std::string& playerName,
                int finalHp, int score, const std::string& createdAt = "");

    // Getter & Setter (Enkapsulasi)
    int getId() const { return id_; }
    void setId(int id) { id_ = id; }

    int getQuizId() const { return quizId_; }
    void setQuizId(int quizId) { quizId_ = quizId; }

    int getCharacterId() const { return characterId_; }
    void setCharacterId(int charId) { characterId_ = charId; }

    const std::string& getCharacterName() const { return characterName_; }
    void setCharacterName(const std::string& name) { characterName_ = name; }

    const std::string& getCharacterType() const { return characterType_; }
    void setCharacterType(const std::string& type) { characterType_ = type; }

    const std::string& getPlayerName() const { return playerName_; }
    void setPlayerName(const std::string& name) { playerName_ = name; }

    int getFinalHp() const { return finalHp_; }
    void setFinalHp(int hp) { finalHp_ = hp; }

    int getScore() const { return score_; }
    void setScore(int score) { score_ = score; }

    const std::string& getCreatedAt() const { return createdAt_; }
    void setCreatedAt(const std::string& time) { createdAt_ = time; }

    // Implementasi ISerializable
    nlohmann::json toJson() const override;
};

#endif // GAME_SESSION_H
