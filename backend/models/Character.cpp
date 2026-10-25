#include "Character.h"

Character::Character(int id, const std::string& name, const std::string& type,
                     const std::string& spriteIdle, const std::string& spriteHit, const std::string& spriteWin,
                     int hp)
    : id_(id), name_(name), type_(type),
      spriteIdle_(spriteIdle), spriteHit_(spriteHit), spriteWin_(spriteWin),
      hp_(std::clamp(hp, 0, 100)) {}

// ENKAPSULASI: Menjaga HP maksimum tidak melebihi 100
void Character::heal(int amount) {
    if (amount > 0) {
        hp_ = std::min(100, hp_ + amount);
    }
}

// ENKAPSULASI: HP hanya berkurang lewat method ini dan tidak pernah di bawah 0
int Character::takeDamage(int damage) {
    if (damage <= 0) return 0;
    int lost = std::min(hp_, damage);
    hp_ -= lost;
    return lost;
}

nlohmann::json Character::toJson() const {
    nlohmann::json j;
    j["id"] = id_;
    j["name"] = name_;
    j["type"] = type_;
    j["sprite_idle"] = spriteIdle_;
    j["sprite_hit"] = spriteHit_;
    j["sprite_win"] = spriteWin_;
    j["hp"] = hp_;
    j["special_trait"] = getSpecialTrait();
    return j;
}
