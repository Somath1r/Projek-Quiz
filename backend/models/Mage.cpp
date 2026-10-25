#include "Mage.h"

Mage::Mage(int id, const std::string& name,
           const std::string& spriteIdle, const std::string& spriteHit, const std::string& spriteWin,
           int hp)
    : Character(id, name, "mage", spriteIdle, spriteHit, spriteWin, hp) {}

std::string Mage::getHitAnimation() const {
    return "mage-barrier-shatter";
}

std::string Mage::getSpecialTrait() const {
    return "Glass Cannon: Penghalang sihir pecah berkeping-keping saat terkena serangan.";
}
