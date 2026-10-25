#include "Quiz.h"

Quiz::Quiz(int id, const std::string& title, const std::string& description, const std::string& createdAt)
    : Entity(id), title_(title), description_(description), createdAt_(createdAt) {}

nlohmann::json Quiz::toJson() const {
    nlohmann::json j;
    j["id"] = id_;
    j["title"] = title_;
    j["description"] = description_;
    j["created_at"] = createdAt_;
    
    nlohmann::json q_arr = nlohmann::json::array();
    for (const auto& q : questions_) {
        q_arr.push_back(q.toJson(true));
    }
    j["questions"] = q_arr;
    return j;
}
