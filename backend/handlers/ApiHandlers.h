#pragma once
#ifndef API_HANDLERS_H
#define API_HANDLERS_H

#include "../include/httplib.h"
#include "../engine/GameEngine.h"
#include "../repositories/QuizRepository.h"
#include "../repositories/QuestionRepository.h"
#include "../repositories/OptionRepository.h"
#include "../repositories/CharacterRepository.h"
#include "../repositories/SessionRepository.h"

// =========================================================================
// API HANDLERS: Registrasi Seluruh Endpoint REST API
// Menyediakan routing untuk Admin CRUD, Pemilihan Karakter, Gameplay,
// Penilaian Server (GameEngine), dan Leaderboard.
// =========================================================================

namespace QuizGame {

class ApiHandlers {
public:
    static void registerRoutes(httplib::Server& svr);
};

} // namespace QuizGame

#endif // API_HANDLERS_H
