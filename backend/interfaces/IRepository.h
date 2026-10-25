#pragma once
#ifndef IREPOSITORY_H
#define IREPOSITORY_H

#include <vector>
#include <optional>

// =========================================================================
// INTERFACE: IRepository<T>
// Konsep OOP: Generic Interface (Template Abstract Class).
// Menyediakan pola Repository (Data Access Abstraction) untuk operasi CRUD.
// =========================================================================

template <typename T>
class IRepository {
public:
    virtual ~IRepository() = default; // Virtual destructor wajib

    // Pure virtual functions untuk operasi CRUD standar
    virtual std::vector<T> findAll() = 0;
    virtual std::optional<T> findById(int id) = 0;
    virtual bool save(T& entity) = 0;
    virtual bool remove(int id) = 0;
};

#endif // IREPOSITORY_H
