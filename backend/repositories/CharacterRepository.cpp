#include "CharacterRepository.h"

std::vector<std::unique_ptr<Character>> CharacterRepository::findAll() {
    std::vector<std::unique_ptr<Character>> list;
    auto stmt = QuizGame::Database::getInstance().prepare(
        "SELECT id, name, type, sprite_idle, sprite_hit, sprite_win FROM characters ORDER BY id ASC"
    );
    auto rows = stmt->executeQuery();
    for (const auto& r : rows) {
        // POLIMORFISME: CharacterFactory menghasilkan subclass yang tepat (Knight/Archer/Mage)
        auto charPtr = CharacterFactory::create(
            r.at("type"),
            std::stoi(r.at("id")),
            r.at("name"),
            r.at("sprite_idle"),
            r.at("sprite_hit"),
            r.at("sprite_win")
        );
        list.push_back(std::move(charPtr));
    }
    return list;
}

std::unique_ptr<Character> CharacterRepository::findById(int id) {
    auto stmt = QuizGame::Database::getInstance().prepare(
        "SELECT id, name, type, sprite_idle, sprite_hit, sprite_win FROM characters WHERE id = ?"
    );
    stmt->bindInt(1, id);
    auto rows = stmt->executeQuery();
    if (rows.empty()) return nullptr;

    const auto& r = rows[0];
    return CharacterFactory::create(
        r.at("type"),
        std::stoi(r.at("id")),
        r.at("name"),
        r.at("sprite_idle"),
        r.at("sprite_hit"),
        r.at("sprite_win")
    );
}

bool CharacterRepository::save(Character& character) {
    if (character.getId() == 0) {
        auto stmt = QuizGame::Database::getInstance().prepare(
            "INSERT INTO characters (name, type, sprite_idle, sprite_hit, sprite_win) VALUES (?, ?, ?, ?, ?)"
        );
        stmt->bindString(1, character.getName());
        stmt->bindString(2, character.getType());
        stmt->bindString(3, character.getSpriteIdle());
        stmt->bindString(4, character.getSpriteHit());
        stmt->bindString(5, character.getSpriteWin());
        if (stmt->execute()) {
            character.setId(stmt->getLastInsertId());
            return true;
        }
        return false;
    } else {
        auto stmt = QuizGame::Database::getInstance().prepare(
            "UPDATE characters SET name = ?, type = ?, sprite_idle = ?, sprite_hit = ?, sprite_win = ? WHERE id = ?"
        );
        stmt->bindString(1, character.getName());
        stmt->bindString(2, character.getType());
        stmt->bindString(3, character.getSpriteIdle());
        stmt->bindString(4, character.getSpriteHit());
        stmt->bindString(5, character.getSpriteWin());
        stmt->bindInt(6, character.getId());
        return stmt->execute();
    }
}

bool CharacterRepository::remove(int id) {
    auto stmt = QuizGame::Database::getInstance().prepare(
        "DELETE FROM characters WHERE id = ?"
    );
    stmt->bindInt(1, id);
    return stmt->execute();
}
