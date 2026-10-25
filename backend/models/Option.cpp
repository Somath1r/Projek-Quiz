#include "Option.h"

Option::Option(int id, int questionId, const std::string& optionText, bool isCorrect)
    : Entity(id), questionId_(questionId), optionText_(optionText), isCorrect_(isCorrect) {}

// ENKAPSULASI: Field is_correct disembunyikan jika includeAnswer == false
nlohmann::json Option::toJson(bool includeAnswer) const {
    nlohmann::json j;
    j["id"] = id_;
    j["question_id"] = questionId_;
    j["option_text"] = optionText_;
    if (includeAnswer) {
        j["is_correct"] = isCorrect_;
    }
    return j;
}

nlohmann::json Option::toJson() const {
    return toJson(true);
}
