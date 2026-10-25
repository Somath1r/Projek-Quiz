#include "Mage.h"

Mage::Mage(int id, const std::string& name,
           const std::string& spriteIdle, const std::string& spriteHit, const std::string& spriteWin,
           int hp)
    : Character(id, name, "mage", spriteIdle, spriteHit, spriteWin, hp) {}

// POLIMORFISME: Mage menerima extra damage 5 poin (misal 20 + 5 = 25 HP)
int Mage::takeDamage(int baseDamage) {
    int actualDamage = baseDamage + 5;
    hp_ = std::max(0, hp_ - actualDamage);
    return actualDamage;
}

std::string Mage::getHitAnimation() const {
    return "mage-barrier-shatter";
}

std::string Mage::getSpecialTrait() const {
    return "Glass Cannon: Pertahanan fisik rapuh, terkena 25 HP per jawaban salah.";
}
