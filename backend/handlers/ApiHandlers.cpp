#include "ApiHandlers.h"
#include <iostream>

namespace QuizGame {

void ApiHandlers::registerRoutes(httplib::Server& svr) {
    // -----------------------------------------------------------------
    // 1. ENDPOINT KARAKTER
    // -----------------------------------------------------------------
    svr.Get("/api/characters", [](const httplib::Request&, httplib::Response& res) {
        CharacterRepository repo;
        auto characters = repo.findAll();
        nlohmann::json arr = nlohmann::json::array();
        for (const auto& c : characters) {
            arr.push_back(c->toJson());
        }
        res.set_content(arr.dump(2), "application/json");
    });

    // -----------------------------------------------------------------
    // 2. ENDPOINT KUIS (ADMIN CRUD)
    // -----------------------------------------------------------------
    // GET /api/quizzes -> Ambil seluruh kuis
    svr.Get("/api/quizzes", [](const httplib::Request&, httplib::Response& res) {
        QuizRepository repo;
        auto quizzes = repo.findAll();
        nlohmann::json arr = nlohmann::json::array();
        for (const auto& q : quizzes) {
            arr.push_back(q.toJson());
        }
        res.set_content(arr.dump(2), "application/json");
    });

    // POST /api/quizzes -> Tambah kuis baru
    svr.Post("/api/quizzes", [](const httplib::Request& req, httplib::Response& res) {
        try {
            nlohmann::json body = nlohmann::json::parse(req.body);
            std::string title = body.value("title", "");
            std::string desc = body.value("description", "");

            if (title.empty()) {
                res.status = 400;
                res.set_content("{\"error\":\"Judul kuis tidak boleh kosong.\"}", "application/json");
                return;
            }

            Quiz quiz(0, title, desc);
            QuizRepository repo;
            if (repo.save(quiz)) {
                res.status = 201;
                res.set_content(quiz.toJson().dump(2), "application/json");
            } else {
                res.status = 500;
                res.set_content("{\"error\":\"Gagal menyimpan kuis.\"}", "application/json");
            }
        } catch (const std::exception& e) {
            res.status = 400;
            res.set_content("{\"error\":\"Format JSON tidak valid.\"}", "application/json");
        }
    });

    // PUT /api/quizzes/:id -> Update kuis
    svr.Put(R"(/api/quizzes/(\d+))", [](const httplib::Request& req, httplib::Response& res) {
        try {
            int quizId = std::stoi(req.matches[1]);
            nlohmann::json body = nlohmann::json::parse(req.body);
            std::string title = body.value("title", "");
            std::string desc = body.value("description", "");

            if (title.empty()) {
                res.status = 400;
                res.set_content("{\"error\":\"Judul kuis tidak boleh kosong.\"}", "application/json");
                return;
            }

            QuizRepository repo;
            auto existing = repo.findById(quizId);
            if (!existing) {
                res.status = 404;
                res.set_content("{\"error\":\"Kuis tidak ditemukan.\"}", "application/json");
                return;
            }

            Quiz quiz = *existing;
            quiz.setTitle(title);
            quiz.setDescription(desc);

            if (repo.save(quiz)) {
                res.set_content(quiz.toJson().dump(2), "application/json");
            } else {
                res.status = 500;
                res.set_content("{\"error\":\"Gagal memperbarui kuis.\"}", "application/json");
            }
        } catch (const std::exception& e) {
            res.status = 400;
            res.set_content("{\"error\":\"Format request tidak valid.\"}", "application/json");
        }
    });

    // DELETE /api/quizzes/:id -> Hapus kuis
    svr.Delete(R"(/api/quizzes/(\d+))", [](const httplib::Request& req, httplib::Response& res) {
        int quizId = std::stoi(req.matches[1]);
        QuizRepository repo;
        if (repo.remove(quizId)) {
            res.set_content("{\"message\":\"Kuis berhasil dihapus.\"}", "application/json");
        } else {
            res.status = 404;
            res.set_content("{\"error\":\"Kuis tidak ditemukan atau gagal dihapus.\"}", "application/json");
        }
    });

    // -----------------------------------------------------------------
    // 3. ENDPOINT PERTANYAAN (QUESTIONS)
    // -----------------------------------------------------------------
    // GET /api/quizzes/:id/questions -> List pertanyaan & opsi (lengkap untuk admin)
    svr.Get(R"(/api/quizzes/(\d+)/questions)", [](const httplib::Request& req, httplib::Response& res) {
        int quizId = std::stoi(req.matches[1]);
        QuestionRepository repo;
        auto questions = repo.findByQuizId(quizId);

        nlohmann::json arr = nlohmann::json::array();
        for (const auto& q : questions) {
            arr.push_back(q.toJson(true)); // Include answers for admin
        }
        res.set_content(arr.dump(2), "application/json");
    });

    // POST /api/quizzes/:id/questions -> Tambah pertanyaan dan opsi sekaligus
    svr.Post(R"(/api/quizzes/(\d+)/questions)", [](const httplib::Request& req, httplib::Response& res) {
        try {
            int quizId = std::stoi(req.matches[1]);
            nlohmann::json body = nlohmann::json::parse(req.body);
            std::string questionText = body.value("question_text", "");

            if (questionText.empty()) {
                res.status = 400;
                res.set_content("{\"error\":\"Teks pertanyaan tidak boleh kosong.\"}", "application/json");
                return;
            }

            // Validasi Opsi jika dikirim bersamaan
            std::vector<Option> optionsToSave;
            if (body.contains("options") && body["options"].is_array()) {
                size_t optCount = body["options"].size();
                if (optCount < 2 || optCount > 5) {
                    res.status = 400;
                    res.set_content("{\"error\":\"Pilihan jawaban harus antara 2 hingga 5 opsi.\"}", "application/json");
                    return;
                }

                int correctCount = 0;
                for (const auto& optJson : body["options"]) {
                    std::string optText = optJson.value("option_text", "");
                    bool isCorrect = optJson.value("is_correct", false);
                    if (optText.empty()) {
                        res.status = 400;
                        res.set_content("{\"error\":\"Teks opsi jawaban tidak boleh kosong.\"}", "application/json");
                        return;
                    }
                    if (isCorrect) correctCount++;
                    optionsToSave.emplace_back(0, 0, optText, isCorrect);
                }

                if (correctCount != 1) {
                    res.status = 400;
                    res.set_content("{\"error\":\"Harus ada tepat 1 pilihan jawaban yang bernilai benar.\"}", "application/json");
                    return;
                }
            }

            Question q(0, quizId, questionText);
            QuestionRepository qRepo;
            if (qRepo.save(q)) {
                OptionRepository optRepo;
                for (auto& opt : optionsToSave) {
                    opt.setQuestionId(q.getId());
                    optRepo.save(opt);
                    q.addOption(opt);
                }
                res.status = 201;
                res.set_content(q.toJson(true).dump(2), "application/json");
            } else {
                res.status = 500;
                res.set_content("{\"error\":\"Gagal menyimpan pertanyaan.\"}", "application/json");
            }
        } catch (const std::exception& e) {
            res.status = 400;
            res.set_content("{\"error\":\"Format JSON tidak valid.\"}", "application/json");
        }
    });

    // PUT /api/questions/:id -> Update teks pertanyaan
    svr.Put(R"(/api/questions/(\d+))", [](const httplib::Request& req, httplib::Response& res) {
        try {
            int qId = std::stoi(req.matches[1]);
            nlohmann::json body = nlohmann::json::parse(req.body);
            std::string qText = body.value("question_text", "");

            if (qText.empty()) {
                res.status = 400;
                res.set_content("{\"error\":\"Teks pertanyaan tidak boleh kosong.\"}", "application/json");
                return;
            }

            QuestionRepository repo;
            auto existing = repo.findById(qId);
            if (!existing) {
                res.status = 404;
                res.set_content("{\"error\":\"Pertanyaan tidak ditemukan.\"}", "application/json");
                return;
            }

            Question q = *existing;
            q.setQuestionText(qText);
            if (repo.save(q)) {
                res.set_content(q.toJson(true).dump(2), "application/json");
            } else {
                res.status = 500;
                res.set_content("{\"error\":\"Gagal mengupdate pertanyaan.\"}", "application/json");
            }
        } catch (const std::exception& e) {
            res.status = 400;
            res.set_content("{\"error\":\"Format data tidak valid.\"}", "application/json");
        }
    });

    // DELETE /api/questions/:id -> Hapus pertanyaan
    svr.Delete(R"(/api/questions/(\d+))", [](const httplib::Request& req, httplib::Response& res) {
        int qId = std::stoi(req.matches[1]);
        QuestionRepository repo;
        if (repo.remove(qId)) {
            res.set_content("{\"message\":\"Pertanyaan berhasil dihapus.\"}", "application/json");
        } else {
            res.status = 404;
            res.set_content("{\"error\":\"Pertanyaan tidak ditemukan.\"}", "application/json");
        }
    });

    // -----------------------------------------------------------------
    // 4. ENDPOINT PILIHAN JAWABAN (OPTIONS)
    // -----------------------------------------------------------------
    // POST /api/questions/:id/options -> Tambah opsi ke pertanyaan
    svr.Post(R"(/api/questions/(\d+)/options)", [](const httplib::Request& req, httplib::Response& res) {
        try {
            int qId = std::stoi(req.matches[1]);
            OptionRepository optRepo;
            auto currentOptions = optRepo.findByQuestionId(qId);

            if (currentOptions.size() >= 5) {
                res.status = 400;
                res.set_content("{\"error\":\"Jumlah pilihan jawaban maksimal 5 per pertanyaan.\"}", "application/json");
                return;
            }

            nlohmann::json body = nlohmann::json::parse(req.body);
            std::string optText = body.value("option_text", "");
            bool isCorrect = body.value("is_correct", false);

            if (optText.empty()) {
                res.status = 400;
                res.set_content("{\"error\":\"Teks opsi tidak boleh kosong.\"}", "application/json");
                return;
            }

            Option opt(0, qId, optText, isCorrect);
            if (optRepo.save(opt)) {
                res.status = 201;
                res.set_content(opt.toJson(true).dump(2), "application/json");
            } else {
                res.status = 500;
                res.set_content("{\"error\":\"Gagal menyimpan pilihan jawaban.\"}", "application/json");
            }
        } catch (const std::exception& e) {
            res.status = 400;
            res.set_content("{\"error\":\"Format JSON tidak valid.\"}", "application/json");
        }
    });

    // PUT /api/options/:id -> Update opsi jawaban
    svr.Put(R"(/api/options/(\d+))", [](const httplib::Request& req, httplib::Response& res) {
        try {
            int optId = std::stoi(req.matches[1]);
            OptionRepository optRepo;
            auto existing = optRepo.findById(optId);
            if (!existing) {
                res.status = 404;
                res.set_content("{\"error\":\"Pilihan jawaban tidak ditemukan.\"}", "application/json");
                return;
            }

            nlohmann::json body = nlohmann::json::parse(req.body);
            Option opt = *existing;
            if (body.contains("option_text")) {
                std::string text = body["option_text"].get<std::string>();
                if (!text.empty()) opt.setOptionText(text);
            }
            if (body.contains("is_correct")) {
                opt.setIsCorrect(body["is_correct"].get<bool>());
            }

            if (optRepo.save(opt)) {
                res.set_content(opt.toJson(true).dump(2), "application/json");
            } else {
                res.status = 500;
                res.set_content("{\"error\":\"Gagal mengupdate opsi.\"}", "application/json");
            }
        } catch (const std::exception& e) {
            res.status = 400;
            res.set_content("{\"error\":\"Format JSON tidak valid.\"}", "application/json");
        }
    });

    // DELETE /api/options/:id -> Hapus opsi jawaban
    svr.Delete(R"(/api/options/(\d+))", [](const httplib::Request& req, httplib::Response& res) {
        int optId = std::stoi(req.matches[1]);
        OptionRepository optRepo;
        auto opt = optRepo.findById(optId);
        if (!opt) {
            res.status = 404;
            res.set_content("{\"error\":\"Opsi tidak ditemukan.\"}", "application/json");
            return;
        }

        // Cek sisa opsi untuk pertanyaan ini (minimal 2)
        auto allOpts = optRepo.findByQuestionId(opt->getQuestionId());
        if (allOpts.size() <= 2) {
            res.status = 400;
            res.set_content("{\"error\":\"Pertanyaan harus memiliki minimal 2 pilihan jawaban.\"}", "application/json");
            return;
        }

        if (optRepo.remove(optId)) {
            res.set_content("{\"message\":\"Pilihan jawaban berhasil dihapus.\"}", "application/json");
        } else {
            res.status = 500;
            res.set_content("{\"error\":\"Gagal menghapus opsi.\"}", "application/json");
        }
    });

    // -----------------------------------------------------------------
    // 5. ENDPOINT GAMEPLAY (AMAN DARI CHEAT - TIDAK MENGIRIM KUNCI JAWABAN)
    // -----------------------------------------------------------------
    // GET /api/play/:quizId -> Mengambil kuis & soal TANPA field is_correct
    svr.Get(R"(/api/play/(\d+))", [](const httplib::Request& req, httplib::Response& res) {
        int quizId = std::stoi(req.matches[1]);
        QuizRepository quizRepo;
        auto quizOpt = quizRepo.findById(quizId);
        if (!quizOpt) {
            res.status = 404;
            res.set_content("{\"error\":\"Kuis tidak ditemukan.\"}", "application/json");
            return;
        }

        QuestionRepository qRepo;
        auto questions = qRepo.findByQuizId(quizId);

        nlohmann::json responseJson;
        responseJson["id"] = quizOpt->getId();
        responseJson["title"] = quizOpt->getTitle();
        responseJson["description"] = quizOpt->getDescription();

        nlohmann::json qArr = nlohmann::json::array();
        for (const auto& q : questions) {
            // ENKAPSULASI: includeAnswer = false agar is_correct TIDAK dikirim ke browser!
            qArr.push_back(q.toJson(false));
        }
        responseJson["questions"] = qArr;

        res.set_content(responseJson.dump(2), "application/json");
    });

    // POST /api/submit -> Menerima seluruh jawaban pemain & dinilai di server
    svr.Post("/api/submit", [](const httplib::Request& req, httplib::Response& res) {
        try {
            nlohmann::json body = nlohmann::json::parse(req.body);
            int quizId = body.value("quiz_id", 0);
            int characterId = body.value("character_id", 1);
            std::string playerName = body.value("player_name", "Adventurer");

            std::vector<UserAnswerInput> userAnswers;
            if (body.contains("answers") && body["answers"].is_array()) {
                for (const auto& ans : body["answers"]) {
                    UserAnswerInput item;
                    item.questionId = ans.value("question_id", 0);
                    item.optionId = ans.value("option_id", 0);
                    userAnswers.push_back(item);
                }
            }

            // ABSTRAKSI: GameEngine memproses seluruh penilaian dan kalkulasi darah
            GameEngine engine;
            GameResult result = engine.submitAnswers(quizId, characterId, playerName, userAnswers);

            res.status = 200;
            res.set_content(result.toJson().dump(2), "application/json");
        } catch (const std::exception& e) {
            res.status = 400;
            res.set_content("{\"error\":\"Format request submit jawaban tidak valid.\"}", "application/json");
        }
    });

    // -----------------------------------------------------------------
    // 6. ENDPOINT LEADERBOARD
    // -----------------------------------------------------------------
    // GET /api/leaderboard/:quizId -> Top 10 skor kuis
    svr.Get(R"(/api/leaderboard/(\d+))", [](const httplib::Request& req, httplib::Response& res) {
        int quizId = std::stoi(req.matches[1]);
        SessionRepository repo;
        auto sessions = repo.findTop10ByQuizId(quizId);

        nlohmann::json arr = nlohmann::json::array();
        for (const auto& s : sessions) {
            arr.push_back(s.toJson());
        }
        res.set_content(arr.dump(2), "application/json");
    });
}

} // namespace QuizGame
