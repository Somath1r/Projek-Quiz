#pragma once
#ifndef KNIGHT_H
#define KNIGHT_H

#include "Character.h"

// =========================================================================
// PEWARISAN & POLIMORFISME: Knight
// Subclass dari Character dengan pertahanan tebal.
// =========================================================================

class Knight : public Character {
public:
    Knight(int id, const std::string& name,
           const std::string& spriteIdle, const std::string& spriteHit, const std::string& spriteWin,
           int hp = 100);


    // POLIMORFISME: Meng-override animasi saat terkena pukulan
    std::string getHitAnimation() const override;

    // POLIMORFISME: Deskripsi trait khusus Knight
    std::string getSpecialTrait() const override;
};

#endif // KNIGHT_H
