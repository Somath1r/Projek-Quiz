#include "Knight.h"

Knight::Knight(int id, const std::string& name,
               const std::string& spriteIdle, const std::string& spriteHit, const std::string& spriteWin,
               int hp)
    : Character(id, name, "knight", spriteIdle, spriteHit, spriteWin, hp) {}

// POLIMORFISME: Armor Knight memitigasi 5 damage (misal: 20 - 5 = 15 HP)
int Knight::takeDamage(int baseDamage) {
    int actualDamage = std::max(5, baseDamage - 5);
    hp_ = std::max(0, hp_ - actualDamage);
    return actualDamage;
}

std::string Knight::getHitAnimation() const {
    return "knight-shield-block";
}

std::string Knight::getSpecialTrait() const {
    return "Pertahanan Baja: Mengurangi damage sebesar 5 poin saat salah menjawab.";
}
