#pragma once
#ifndef ISERIALIZABLE_H
#define ISERIALIZABLE_H

#include "../include/nlohmann/json.hpp"

// =========================================================================
// INTERFACE: ISerializable
// Konsep OOP: Interface (Abstract class dengan pure virtual function & virtual destructor).
// Menjamin semua model data memiliki kontrak untuk dapat diserialisasi ke JSON.
// =========================================================================

class ISerializable {
public:
    // Virtual destructor wajib untuk polymorphism dan interface
    virtual ~ISerializable() = default;

    // Pure virtual function: wajib diimplementasikan oleh setiap concrete class
    virtual nlohmann::json toJson() const = 0;
};

#endif // ISERIALIZABLE_H
