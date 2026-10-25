#pragma once
#ifndef MAGE_H
#define MAGE_H

#include "Character.h"

// =========================================================================
// PEWARISAN & POLIMORFISME: Mage
// Subclass dari Character bertipe Glass Cannon (daya tahan fisik rapuh).
// =========================================================================

class Mage : public Character {
public:
    Mage(int id, const std::string& name,
         const std::string& spriteIdle, const std::string& spriteHit, const std::string& spriteWin,
         int hp = 100);

    // POLIMORFISME: Meng-override takeDamage. Mage rapuh secara fisik,
    // sehingga menerima bonus damage 5 poin (misal base 20 -> terkena 25 HP).
    int takeDamage(int baseDamage) override;

    // POLIMORFISME: Meng-override animasi saat terkena pukulan
    std::string getHitAnimation() const override;

    // POLIMORFISME: Deskripsi trait khusus Mage
    std::string getSpecialTrait() const override;
};

#endif // MAGE_H
