-- =======================================================
-- QUIZ GAME SEED DATA
-- Target: MySQL / MariaDB (XAMPP)
-- Database Name: quiz_game
-- =======================================================

USE `quiz_game`;

-- 1. Bersihkan data lama dengan aman (menggunakan DELETE FROM agar kompatibel dengan foreign key InnoDB)
SET FOREIGN_KEY_CHECKS = 0;
DELETE FROM `session_answers`;
DELETE FROM `game_sessions`;
DELETE FROM `options`;
DELETE FROM `questions`;
DELETE FROM `quizzes`;
DELETE FROM `characters`;

-- Reset urutan Auto Increment
ALTER TABLE `characters` AUTO_INCREMENT = 1;
ALTER TABLE `quizzes` AUTO_INCREMENT = 1;
ALTER TABLE `questions` AUTO_INCREMENT = 1;
ALTER TABLE `options` AUTO_INCREMENT = 1;
ALTER TABLE `game_sessions` AUTO_INCREMENT = 1;
ALTER TABLE `session_answers` AUTO_INCREMENT = 1;
SET FOREIGN_KEY_CHECKS = 1;

-- 2. Data Karakter (Minimal 3: Knight, Archer, Mage)
INSERT INTO `characters` (`id`, `name`, `type`, `sprite_idle`, `sprite_hit`, `sprite_win`) VALUES
(1, 'Knight Valerius', 'knight', 'assets/characters/knight_idle.svg', 'assets/characters/knight_hit.svg', 'assets/characters/knight_win.svg'),
(2, 'Archer Lyanna', 'archer', 'assets/characters/archer_idle.svg', 'assets/characters/archer_hit.svg', 'assets/characters/archer_win.svg'),
(3, 'Mage Zephyr', 'mage', 'assets/characters/mage_idle.svg', 'assets/characters/mage_hit.svg', 'assets/characters/mage_win.svg');

-- 3. Data Kuis Contoh (1 Kuis dengan 5 Pertanyaan seputar Konsep OOP)
INSERT INTO `quizzes` (`id`, `title`, `description`) VALUES
(1, 'Mastery Konsep OOP C++', 'Uji pemahaman mendalam tentang 4 Pilar Utama Pemrograman Berorientasi Objek: Enkapsulasi, Pewarisan, Polimorfisme, dan Abstraksi.');

-- 4. Pertanyaan untuk Kuis ID 1
INSERT INTO `questions` (`id`, `quiz_id`, `question_text`) VALUES
(1, 1, 'Manakah pilar OOP yang berfokus pada penyembunyian detail internal objek dan membatasi akses langsung ke atribut data?'),
(2, 1, 'Dalam C++, kata kunci apa yang wajib digunakan pada deklarasi method di base class agar method tersebut dapat di-override secara polimorfik?'),
(3, 1, 'Hubungan pewarisan (inheritance) dalam pemrograman berorientasi objek merepresentasikan hubungan relasi apa?'),
(4, 1, 'Apa sebutan untuk class dalam C++ yang memiliki minimal satu pure virtual function (misal: virtual void run() = 0;)?'),
(5, 1, 'Jika class Mage mewarisi class Character dan meng-override method takeDamage(), konsep OOP apa yang sedang diterapkan?');

-- 5. Pilihan Jawaban untuk Setiap Pertanyaan (tepat satu jawaban benar per soal)
-- Soal 1: Enkapsulasi
INSERT INTO `options` (`question_id`, `option_text`, `is_correct`) VALUES
(1, 'Enkapsulasi (Encapsulation)', 1),
(1, 'Pewarisan (Inheritance)', 0),
(1, 'Polimorfisme (Polymorphism)', 0),
(1, 'Agregasi (Aggregation)', 0);

-- Soal 2: virtual
INSERT INTO `options` (`question_id`, `option_text`, `is_correct`) VALUES
(2, 'virtual', 1),
(2, 'override', 0),
(2, 'static', 0),
(2, 'friend', 0);

-- Soal 3: IS-A
INSERT INTO `options` (`question_id`, `option_text`, `is_correct`) VALUES
(3, 'IS-A (Adalah sebuah)', 1),
(3, 'HAS-A (Memiliki sebuah)', 0),
(3, 'USES-A (Menggunakan sebuah)', 0),
(3, 'PART-OF (Bagian dari)', 0);

-- Soal 4: Abstract Class
INSERT INTO `options` (`question_id`, `option_text`, `is_correct`) VALUES
(4, 'Abstract Class (Interface)', 1),
(4, 'Concrete Class', 0),
(4, 'Template Class', 0),
(4, 'Static Class', 0);

-- Soal 5: Polimorfisme
INSERT INTO `options` (`question_id`, `option_text`, `is_correct`) VALUES
(5, 'Polimorfisme (Polymorphism)', 1),
(5, 'Serialisasi (Serialization)', 0),
(5, 'Kompilasi (Compilation)', 0),
(5, 'Normalisasi (Normalization)', 0);

-- 6. Contoh Riwayat Game Session Awal (Leaderboard Seed)
INSERT INTO `game_sessions` (`id`, `quiz_id`, `character_id`, `player_name`, `final_hp`, `score`, `created_at`) VALUES
(1, 1, 1, 'Arthur', 85, 100, NOW() - INTERVAL 2 DAY),
(2, 1, 2, 'Robin', 80, 80, NOW() - INTERVAL 1 DAY),
(3, 1, 3, 'Merlin', 50, 60, NOW() - INTERVAL 5 HOUR);
