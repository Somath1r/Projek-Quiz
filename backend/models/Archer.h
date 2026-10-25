#pragma once
#ifndef ARCHER_H
#define ARCHER_H

#include "Character.h"

// =========================================================================
// PEWARISAN & POLIMORFISME: Archer
// Subclass dari Character dengan mobilitas dan kelincahan seimbang.
// =========================================================================

class Archer : public Character {
public:
    Archer(int id, const std::string& name,
           const std::string& spriteIdle, const std::string& spriteHit, const std::string& spriteWin,
           int hp = 100);


    // POLIMORFISME: Meng-override animasi saat terkena pukulan
    std::string getHitAnimation() const override;

    // POLIMORFISME: Deskripsi trait khusus Archer
    std::string getSpecialTrait() const override;
};

#endif // ARCHER_H
