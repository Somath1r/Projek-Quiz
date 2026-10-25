#include "CharacterFactory.h"
#include <algorithm>

// POLIMORFISME & FACTORY: Menghasilkan subclass yang tepat dibungkus std::unique_ptr<Character>
std::unique_ptr<Character> CharacterFactory::create(
    const std::string& type,
    int id,
    const std::string& name,
    const std::string& spriteIdle,
    const std::string& spriteHit,
    const std::string& spriteWin,
    int hp
) {
    std::string lowerType = type;
    std::transform(lowerType.begin(), lowerType.end(), lowerType.begin(), ::tolower);

    if (lowerType == "knight") {
        return std::make_unique<Knight>(id, name, spriteIdle, spriteHit, spriteWin, hp);
    } else if (lowerType == "archer") {
        return std::make_unique<Archer>(id, name, spriteIdle, spriteHit, spriteWin, hp);
    } else if (lowerType == "mage") {
        return std::make_unique<Mage>(id, name, spriteIdle, spriteHit, spriteWin, hp);
    }

    // Default fallback jika tipe tidak dikenali: gunakan Archer (damage standar)
    return std::make_unique<Archer>(id, name, spriteIdle, spriteHit, spriteWin, hp);
}
