#include "Question.h"

Question::Question(int id, int quizId, const std::string& questionText)
    : Entity(id), quizId_(quizId), questionText_(questionText) {}

nlohmann::json Question::toJson(bool includeAnswer) const {
    nlohmann::json j;
    j["id"] = id_;
    j["quiz_id"] = quizId_;
    j["question_text"] = questionText_;
    
    nlohmann::json opts = nlohmann::json::array();
    for (const auto& opt : options_) {
        opts.push_back(opt.toJson(includeAnswer));
    }
    j["options"] = opts;
    return j;
}

nlohmann::json Question::toJson() const {
    return toJson(true);
}
