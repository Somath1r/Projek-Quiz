#pragma once
#ifndef CHARACTER_H
#define CHARACTER_H

#include "../interfaces/ISerializable.h"
#include <string>
#include <algorithm>

// =========================================================================
// CLASS & PEWARISAN & ENKAPSULASI: Character
// Konsep OOP: Base Abstract Class untuk karakter RPG.
// Atribut HP dienkapsulasi dengan ketat, hanya berubah lewat takeDamage() dan heal().
// =========================================================================

class Character : public ISerializable {
private:
    int id_ = 0;
    std::string name_;
    std::string type_; // 'knight', 'archer', 'mage'
    std::string spriteIdle_;
    std::string spriteHit_;
    std::string spriteWin_;

protected:
    // ENKAPSULASI: Atribut hp dilindungi (protected) agar hanya dapat diakses
    // secara internal oleh method class ini dan turunannya.
    int hp_ = 100;

public:
    Character(int id, const std::string& name, const std::string& type,
              const std::string& spriteIdle, const std::string& spriteHit, const std::string& spriteWin,
              int hp = 100);
    virtual ~Character() = default;

    // ENKAPSULASI: Getter untuk membaca atribut
    int getId() const { return id_; }
    void setId(int id) { id_ = id; }

    const std::string& getName() const { return name_; }
    void setName(const std::string& name) { name_ = name; }

    const std::string& getType() const { return type_; }
    void setType(const std::string& type) { type_ = type; }

    const std::string& getSpriteIdle() const { return spriteIdle_; }
    const std::string& getSpriteHit() const { return spriteHit_; }
    const std::string& getSpriteWin() const { return spriteWin_; }

    int getHp() const { return hp_; }

    // ENKAPSULASI: Memodifikasi HP secara terkontrol (rentang 0 - 100)
    void heal(int amount);

    // POLIMORFISME: Method virtual murni (pure virtual) yang WAJIB di-override
    // oleh masing-masing subclass (Knight, Archer, Mage) dengan perilaku unik.
    virtual int takeDamage(int baseDamage) = 0;
    virtual std::string getHitAnimation() const = 0;
    virtual std::string getSpecialTrait() const = 0;

    // Implementasi ISerializable
    nlohmann::json toJson() const override;
};

#endif // CHARACTER_H
