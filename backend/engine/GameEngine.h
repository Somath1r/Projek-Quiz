#pragma once
#ifndef GAME_ENGINE_H
#define GAME_ENGINE_H

#include "../models/Character.h"
#include "../models/CharacterFactory.h"
#include "../repositories/CharacterRepository.h"
#include "../repositories/QuestionRepository.h"
#include "../repositories/OptionRepository.h"
#include "../repositories/SessionRepository.h"
#include "../config.h"
#include <string>
#include <vector>
#include <memory>

// =========================================================================
// CLASS & ABSTRAKSI: GameEngine & GameResult
// Konsep OOP: Abstraksi.
// GameEngine menyembunyikan seluruh kompleksitas logika penilaian, kalkulasi
// polimorfik darah karakter, serta penyimpanan sesi ke basis data.
// API Handler hanya perlu memanggil submitAnswers(...) dan menerima GameResult.
// =========================================================================

struct UserAnswerInput {
    int questionId;
    int optionId;
};

struct QuestionEvaluation {
    int questionId = 0;
    std::string questionText;
    int selectedOptionId = 0;
    std::string selectedOptionText;
    int correctOptionId = 0;
    std::string correctOptionText;
    bool isCorrect = false;
    int damageTaken = 0;
    int hpAfter = 100;
    std::string hitAnimation; // Animasi unik polimorfik per karakter
};

class GameResult : public ISerializable {
public:
    int sessionId = 0;
    int quizId = 0;
    int characterId = 0;
    std::string characterName;
    std::string characterType;
    std::string playerName;
    int score = 0;
    int maxScore = 100;
    int initialHp = 100;
    int damagePerWrong = 0; // damage tiap jawaban salah (= HP awal / jumlah soal)
    int finalHp = 100;
    bool isGameOver = false;
    std::vector<QuestionEvaluation> details;

    nlohmann::json toJson() const override;
};

class GameEngine {
private:
    CharacterRepository charRepo_;
    QuestionRepository questionRepo_;
    OptionRepository optionRepo_;
    SessionRepository sessionRepo_;

public:
    GameEngine();
    virtual ~GameEngine() = default;

    // ABSTRAKSI & POLIMORFISME: Menilai seluruh jawaban pemain dan menghitung HP
    // dengan memanggil method virtual takeDamage() & getHitAnimation() pada karakter.
    GameResult submitAnswers(
        int quizId,
        int characterId,
        const std::string& playerName,
        const std::vector<UserAnswerInput>& answers
    );
};

#endif // GAME_ENGINE_H
