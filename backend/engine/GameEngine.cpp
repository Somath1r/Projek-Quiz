#include "GameEngine.h"
#include <iostream>

nlohmann::json GameResult::toJson() const {
    nlohmann::json j;
    j["session_id"] = sessionId;
    j["quiz_id"] = quizId;
    j["character_id"] = characterId;
    j["character_name"] = characterName;
    j["character_type"] = characterType;
    j["player_name"] = playerName;
    j["score"] = score;
    j["max_score"] = maxScore;
    j["initial_hp"] = initialHp;
    j["damage_per_wrong"] = damagePerWrong;
    j["final_hp"] = finalHp;
    j["is_game_over"] = isGameOver;

    nlohmann::json detailsArr = nlohmann::json::array();
    for (const auto& d : details) {
        nlohmann::json item;
        item["question_id"] = d.questionId;
        item["question_text"] = d.questionText;
        item["selected_option_id"] = d.selectedOptionId;
        item["selected_option_text"] = d.selectedOptionText;
        item["correct_option_id"] = d.correctOptionId;
        item["correct_option_text"] = d.correctOptionText;
        item["is_correct"] = d.isCorrect;
        item["damage_taken"] = d.damageTaken;
        item["hp_after"] = d.hpAfter;
        item["hit_animation"] = d.hitAnimation;
        detailsArr.push_back(item);
    }
    j["details"] = detailsArr;
    return j;
}

GameEngine::GameEngine() {}

// ABSTRAKSI & POLIMORFISME: Menghitung penilaian di server
GameResult GameEngine::submitAnswers(
    int quizId,
    int characterId,
    const std::string& playerName,
    const std::vector<UserAnswerInput>& answers
) {
    GameResult result;
    result.quizId = quizId;
    result.characterId = characterId;
    result.playerName = playerName.empty() ? "Adventurer" : playerName;

    // 1. Ambil karakter secara polimorfik via smart pointer
    // POLIMORFISME: Karakter bertindak sesuai subclass konkretnya (Knight, Archer, atau Mage)
    std::unique_ptr<Character> character = charRepo_.findById(characterId);
    if (!character) {
        // Fallback default ke Knight jika ID tidak ditemukan
        character = CharacterFactory::create("knight", 1, "Knight", "assets/characters/knight_idle.svg", "assets/characters/knight_hit.svg", "assets/characters/knight_win.svg");
    }

    result.characterName = character->getName();
    result.characterType = character->getType();
    result.initialHp = character->getHp();

    // 2. Ambil seluruh pertanyaan untuk kuis ini dari database
    std::vector<Question> questions = questionRepo_.findByQuizId(quizId);
    int totalQuestions = static_cast<int>(questions.size());
    if (totalQuestions == 0) {
        totalQuestions = 1; // Cegah pembagian dengan nol
    }

    // ATURAN DAMAGE: tiap jawaban salah = HP awal / jumlah soal (dibulatkan ke atas).
    // Contoh: 1 soal -> 100 (langsung kalah), 4 soal -> 25, 5 soal -> 20, 3 soal -> 34.
    // Dibulatkan ke atas agar jika SEMUA soal salah, HP pasti habis.
    int damagePerWrong = (result.initialHp + totalQuestions - 1) / totalQuestions;
    result.damagePerWrong = damagePerWrong;

    int correctCount = 0;

    // 3. Evaluasi setiap soal secara berurutan
    for (const auto& q : questions) {
        QuestionEvaluation eval;
        eval.questionId = q.getId();
        eval.questionText = q.getQuestionText();

        // Cari jawaban yang dipilih user untuk soal ini
        int userChoiceOptId = -1;
        for (const auto& ans : answers) {
            if (ans.questionId == q.getId()) {
                userChoiceOptId = ans.optionId;
                break;
            }
        }
        eval.selectedOptionId = userChoiceOptId;

        // Cari kunci jawaban benar dan detail teks dari opsi
        const auto& options = q.getOptions();
        for (const auto& opt : options) {
            if (opt.getId() == userChoiceOptId) {
                eval.selectedOptionText = opt.getOptionText();
            }
            if (opt.getIsCorrect()) {
                eval.correctOptionId = opt.getId();
                eval.correctOptionText = opt.getOptionText();
            }
        }

        // Cek apakah jawaban user benar
        if (userChoiceOptId != -1 && userChoiceOptId == eval.correctOptionId) {
            eval.isCorrect = true;
            eval.damageTaken = 0;
            eval.hpAfter = character->getHp();
            eval.hitAnimation = "none";
            correctCount++;
        } else {
            eval.isCorrect = false;
            // ENKAPSULASI: HP hanya berubah lewat takeDamage().
            // POLIMORFISME: getHitAnimation() menghasilkan animasi berbeda per karakter.
            eval.damageTaken = character->takeDamage(damagePerWrong);
            eval.hpAfter = character->getHp();
            eval.hitAnimation = character->getHitAnimation();
        }

        result.details.push_back(eval);
    }

    // 4. Hitung skor akhir (skala 0 - 100)
    result.score = (correctCount * 100) / totalQuestions;
    result.finalHp = character->getHp();
    result.isGameOver = (result.finalHp <= 0);

    // 5. Simpan GameSession ke Database
    GameSession session(0, quizId, characterId, result.playerName, result.finalHp, result.score);
    if (sessionRepo_.save(session)) {
        result.sessionId = session.getId();
        // Simpan detail tiap jawaban ke tabel session_answers
        for (const auto& d : result.details) {
            // Jika pemain tidak menjawab (atau mengirim opsi yang tidak valid), simpan NULL
            int optionToSave = d.selectedOptionText.empty() ? 0 : d.selectedOptionId;
            sessionRepo_.saveSessionAnswer(result.sessionId, d.questionId, optionToSave, d.isCorrect);
        }
    }

    return result;
}
