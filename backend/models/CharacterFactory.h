#pragma once
#ifndef CHARACTER_FACTORY_H
#define CHARACTER_FACTORY_H

#include "Character.h"
#include "Knight.h"
#include "Archer.h"
#include "Mage.h"
#include <memory>
#include <string>

// =========================================================================
// FACTORY PATTERN: CharacterFactory
// Konsep OOP: Abstraksi & Polimorfisme.
// Memungkinkan pembuatan objek turunan Character secara dinamis tanpa
// pemanggil harus mengetahui implementasi subclass konkretnya.
// Mengembalikan smart pointer polymorphic std::unique_ptr<Character>.
// =========================================================================

class CharacterFactory {
public:
    static std::unique_ptr<Character> create(
        const std::string& type,
        int id,
        const std::string& name,
        const std::string& spriteIdle,
        const std::string& spriteHit,
        const std::string& spriteWin,
        int hp = 100
    );
};

#endif // CHARACTER_FACTORY_H
