#include "Archer.h"

Archer::Archer(int id, const std::string& name,
               const std::string& spriteIdle, const std::string& spriteHit, const std::string& spriteWin,
               int hp)
    : Character(id, name, "archer", spriteIdle, spriteHit, spriteWin, hp) {}

// POLIMORFISME: Archer menerima damage penuh standar (20 HP)
int Archer::takeDamage(int baseDamage) {
    int actualDamage = std::max(5, baseDamage);
    hp_ = std::max(0, hp_ - actualDamage);
    return actualDamage;
}

std::string Archer::getHitAnimation() const {
    return "archer-dodge-recoil";
}

std::string Archer::getSpecialTrait() const {
    return "Kelincahan Alami: Menerima damage standar saat salah menjawab.";
}
