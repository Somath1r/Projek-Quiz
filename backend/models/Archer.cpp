#include "Archer.h"

Archer::Archer(int id, const std::string& name,
               const std::string& spriteIdle, const std::string& spriteHit, const std::string& spriteWin,
               int hp)
    : Character(id, name, "archer", spriteIdle, spriteHit, spriteWin, hp) {}

std::string Archer::getHitAnimation() const {
    return "archer-dodge-recoil";
}

std::string Archer::getSpecialTrait() const {
    return "Kelincahan Alami: Terpental ke belakang saat terkena serangan, lalu cepat bangkit.";
}
