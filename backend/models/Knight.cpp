#include "Knight.h"

Knight::Knight(int id, const std::string& name,
               const std::string& spriteIdle, const std::string& spriteHit, const std::string& spriteWin,
               int hp)
    : Character(id, name, "knight", spriteIdle, spriteHit, spriteWin, hp) {}

std::string Knight::getHitAnimation() const {
    return "knight-shield-block";
}

std::string Knight::getSpecialTrait() const {
    return "Pertahanan Baja: Perisai besi menahan serangan (animasi blok perisai) dan tetap tegak berdiri.";
}
