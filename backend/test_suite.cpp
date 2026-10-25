#include <iostream>
#include <cassert>
#include "config.h"
#include "db.h"
#include "models/CharacterFactory.h"
#include "models/Knight.h"
#include "models/Archer.h"
#include "models/Mage.h"
#include "models/Quiz.h"
#include "models/Question.h"
#include "models/Option.h"
#include "repositories/QuizRepository.h"
#include "repositories/QuestionRepository.h"
#include "repositories/OptionRepository.h"
#include "repositories/CharacterRepository.h"
#include "repositories/SessionRepository.h"
#include "engine/GameEngine.h"

// =========================================================================
// AUTOMATED TEST SUITE: Verifikasi Menyeluruh Konsep OOP & Alur Bisnis
// =========================================================================

void testOOPPolymorphismAndCharacterFactory() {
    std::cout << "[TEST] 1. Pengujian Factory Pattern & Polimorfisme Karakter..." << std::endl;

    // Knight
    std::unique_ptr<Character> knight = CharacterFactory::create("knight", 1, "Valerius", "k_idle", "k_hit", "k_win");
    assert(knight != nullptr);
    assert(knight->getType() == "knight");
    int dmgKnight = knight->takeDamage(20);
    assert(dmgKnight == 20); // Damage sama untuk semua karakter
    assert(knight->getHp() == 80);
    assert(knight->getHitAnimation() == "knight-shield-block");

    // Archer
    std::unique_ptr<Character> archer = CharacterFactory::create("archer", 2, "Lyanna", "a_idle", "a_hit", "a_win");
    assert(archer != nullptr);
    assert(archer->getType() == "archer");
    int dmgArcher = archer->takeDamage(20);
    assert(dmgArcher == 20);
    assert(archer->getHp() == 80);
    assert(archer->getHitAnimation() == "archer-dodge-recoil");

    // Mage
    std::unique_ptr<Character> mage = CharacterFactory::create("mage", 3, "Zephyr", "m_idle", "m_hit", "m_win");
    assert(mage != nullptr);
    assert(mage->getType() == "mage");
    int dmgMage = mage->takeDamage(20);
    assert(dmgMage == 20);
    assert(mage->getHp() == 80);
    assert(mage->getHitAnimation() == "mage-barrier-shatter");

    std::cout << " -> PASSED: damage sama, animasi hit berbeda per karakter (polimorfisme) valid!" << std::endl;
}

void testOOPEncapsulationOptionSecurity() {
    std::cout << "[TEST] 2. Pengujian Enkapsulasi & Proteksi Kunci Jawaban..." << std::endl;

    Option opt(1, 10, "Enkapsulasi", true);

    // Mode publik (untuk pemain di game.html)
    nlohmann::json publicJson = opt.toJson(false);
    assert(publicJson["id"] == 1);
    assert(publicJson["option_text"] == "Enkapsulasi");
    assert(!publicJson.contains("is_correct")); // Kunci jawaban WAJIB disembunyikan!

    // Mode internal / admin
    nlohmann::json adminJson = opt.toJson(true);
    assert(adminJson.contains("is_correct"));
    assert(adminJson["is_correct"] == true);

    std::cout << " -> PASSED: Field is_correct berhasil disembunyikan pada mode publik!" << std::endl;
}

void testRepositoryPatternAndDatabase() {
    std::cout << "[TEST] 3. Pengujian Repository Pattern (CRUD Kuis & Soal)..." << std::endl;

    QuizRepository quizRepo;
    auto quizzes = quizRepo.findAll();
    assert(!quizzes.empty());
    std::cout << " -> Ditemukan " << quizzes.size() << " kuis awal." << std::endl;

    // Tambah kuis baru
    Quiz newQuiz(0, "Kuis Uji Coba Unit Test", "Deskripsi Uji Coba");
    bool saved = quizRepo.save(newQuiz);
    assert(saved);
    assert(newQuiz.getId() > 0);

    // Ambil kuis berdasarkan ID
    auto fetched = quizRepo.findById(newQuiz.getId());
    assert(fetched.has_value());
    assert(fetched->getTitle() == "Kuis Uji Coba Unit Test");

    // Hapus kuis uji coba
    bool removed = quizRepo.remove(newQuiz.getId());
    assert(removed);

    std::cout << " -> PASSED: Repository CRUD berjalan sempurna!" << std::endl;
}

void testGameEngineEvaluation() {
    std::cout << "[TEST] 4. Pengujian GameEngine (Abstraksi Penilaian & Evaluasi)..." << std::endl;

    GameEngine engine;

    // Jawaban simulasi:
    // Soal 1: ID 1 (Enkapsulasi) -> BENAR
    // Soal 2: ID 6 (override)    -> SALAH (5 soal -> 20 damage)
    // Soal 3: ID 9 (IS-A)        -> BENAR
    // Soal 4: ID 13 (Abstract)   -> BENAR
    // Soal 5: ID 18 (Serial)     -> SALAH (5 soal -> 20 damage)
    std::vector<UserAnswerInput> answers = {
        {1, 1},
        {2, 6},
        {3, 9},
        {4, 13},
        {5, 18}
    };

    // Karakter Knight (ID 1)
    GameResult result = engine.submitAnswers(1, 1, "Sir Galahad", answers);

    std::cout << " -> Hasil Penilaian:" << std::endl;
    std::cout << "    * Pemain: " << result.playerName << " (" << result.characterName << ")" << std::endl;
    std::cout << "    * Skor Akhir: " << result.score << " / 100" << std::endl;
    std::cout << "    * Sisa HP: " << result.finalHp << " HP" << std::endl;
    std::cout << "    * Status Game Over: " << (result.isGameOver ? "Ya" : "Tidak") << std::endl;

    assert(result.score == 60); // 3 dari 5 benar = 60
    assert(result.finalHp == 60); // 100 - 20 - 20 = 60 HP
    assert(!result.isGameOver);
    assert(result.details.size() == 5);
    assert(result.details[1].hitAnimation == "knight-shield-block");

    // Verifikasi Leaderboard diperbarui
    SessionRepository sessionRepo;
    auto top10 = sessionRepo.findTop10ByQuizId(1);
    assert(!top10.empty());
    std::cout << " -> Leaderboard Top 1: " << top10[0].getPlayerName() 
              << " | Skor: " << top10[0].getScore() 
              << " | Sisa HP: " << top10[0].getFinalHp() << std::endl;

    std::cout << " -> PASSED: GameEngine & Penilaian Server Terverifikasi 100%!" << std::endl;
}

// Aturan baru: damage per soal salah = 100 / jumlah soal
void testDamageDependsOnQuestionCount() {
    std::cout << "[TEST] 5. Pengujian damage = 100 / jumlah soal..." << std::endl;

    QuizRepository quizRepo;
    QuestionRepository qRepo;
    OptionRepository oRepo;
    GameEngine engine;

    // Kuis dengan 1 soal: 1 jawaban salah => damage 100 => langsung kalah
    Quiz quiz(0, "Kuis 1 Soal", "uji");
    quizRepo.save(quiz);
    Question q(0, quiz.getId(), "Soal tunggal?");
    qRepo.save(q);
    Option right(0, q.getId(), "Benar", true);
    Option wrong(0, q.getId(), "Salah", false);
    oRepo.save(right);
    oRepo.save(wrong);

    GameResult r1 = engine.submitAnswers(quiz.getId(), 1, "Uji", {{q.getId(), wrong.getId()}});
    assert(r1.damagePerWrong == 100);
    assert(r1.finalHp == 0);
    assert(r1.isGameOver);

    GameResult r2 = engine.submitAnswers(quiz.getId(), 1, "Uji", {{q.getId(), right.getId()}});
    assert(r2.finalHp == 100);
    assert(!r2.isGameOver);

    // Tambah soal kedua => 2 soal => damage 50
    Question q2(0, quiz.getId(), "Soal kedua?");
    qRepo.save(q2);
    Option right2(0, q2.getId(), "Benar", true);
    Option wrong2(0, q2.getId(), "Salah", false);
    oRepo.save(right2);
    oRepo.save(wrong2);

    GameResult r3 = engine.submitAnswers(quiz.getId(), 2, "Uji",
        {{q.getId(), right.getId()}, {q2.getId(), wrong2.getId()}});
    assert(r3.damagePerWrong == 50);
    assert(r3.finalHp == 50);

    quizRepo.remove(quiz.getId());
    std::cout << " -> PASSED: 1 soal = 100 damage, 2 soal = 50 damage" << std::endl;
}

int main() {
    std::cout << "==========================================================" << std::endl;
    std::cout << "       SUITE PENGUJIAN OTOMATIS BACKEND C++ QUIZ GAME     " << std::endl;
    std::cout << "==========================================================" << std::endl;

    // Inisialisasi Database
    QuizGame::Database::getInstance().initialize(QuizGame::ConfigManager::getInstance().getDbConfig());

    testOOPPolymorphismAndCharacterFactory();
    testOOPEncapsulationOptionSecurity();
    testRepositoryPatternAndDatabase();
    testGameEngineEvaluation();
    testDamageDependsOnQuestionCount();

    std::cout << "==========================================================" << std::endl;
    std::cout << " [SUCCESS] SEMUA PENGUJIAN UNIT & LOGIKA OOP BERHASIL!    " << std::endl;
    std::cout << "==========================================================" << std::endl;
    return 0;
}
