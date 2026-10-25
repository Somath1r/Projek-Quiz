#pragma once
#ifndef CHARACTER_REPOSITORY_H
#define CHARACTER_REPOSITORY_H

#include "../models/Character.h"
#include "../models/CharacterFactory.h"
#include "../db.h"
#include <vector>
#include <memory>
#include <optional>

// =========================================================================
// REPOSITORY & POLIMORFISME: CharacterRepository
// Mengelola data karakter dan mengembalikan polymorphic smart pointers
// std::unique_ptr<Character> yang diinstansiasi lewat CharacterFactory.
// =========================================================================

class CharacterRepository {
public:
    CharacterRepository() = default;
    virtual ~CharacterRepository() = default;

    // POLIMORFISME: Mengembalikan kumpulan objek turunan Character (Knight, Archer, Mage)
    std::vector<std::unique_ptr<Character>> findAll();

    // POLIMORFISME: Mengembalikan objek turunan spesifik sesuai kolom 'type' di database
    std::unique_ptr<Character> findById(int id);

    bool save(Character& character);
    bool remove(int id);
};

#endif // CHARACTER_REPOSITORY_H
