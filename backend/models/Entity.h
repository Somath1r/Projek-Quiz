#pragma once
#ifndef ENTITY_H
#define ENTITY_H

#include "../interfaces/ISerializable.h"

// =========================================================================
// CLASS & PEWARISAN: Entity
// Konsep OOP: Base Abstract Class & Pewarisan dari ISerializable.
// Merupakan induk dari semua entitas domain (Quiz, Question, Option).
// =========================================================================

class Entity : public ISerializable {
protected:
    // ENKAPSULASI: Atribut id dilindungi (protected), hanya boleh diakses langsung
    // oleh Entity dan class turunannya.
    int id_ = 0;

public:
    Entity() = default;
    explicit Entity(int id) : id_(id) {}
    virtual ~Entity() = default;

    // ENKAPSULASI: Getter dan Setter untuk mengakses atribut id secara terkontrol
    int getId() const { return id_; }
    void setId(int id) { id_ = id; }
};

#endif // ENTITY_H
