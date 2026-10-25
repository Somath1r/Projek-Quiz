-- =======================================================
-- QUIZ GAME DATABASE SCHEMA
-- Target: MySQL / MariaDB (XAMPP)
-- Database Name: quiz_game
-- =======================================================

CREATE DATABASE IF NOT EXISTS `quiz_game` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `quiz_game`;

-- Bersihkan tabel lama jika sudah ada (idempoten)
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `session_answers`;
DROP TABLE IF EXISTS `game_sessions`;
DROP TABLE IF EXISTS `options`;
DROP TABLE IF EXISTS `questions`;
DROP TABLE IF EXISTS `quizzes`;
DROP TABLE IF EXISTS `characters`;
SET FOREIGN_KEY_CHECKS = 1;

-- 1. Tabel Karakter (Characters)
-- Menyimpan daftar karakter pemain beserta tipe kelas RPG (knight, archer, mage)
CREATE TABLE IF NOT EXISTS `characters` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `type` VARCHAR(50) NOT NULL, -- 'knight', 'archer', 'mage' untuk instansiasi polimorfik di C++
    `sprite_idle` VARCHAR(255) NOT NULL,
    `sprite_hit` VARCHAR(255) NOT NULL,
    `sprite_win` VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Tabel Kuis (Quizzes)
-- Menyimpan metadata kuis
CREATE TABLE IF NOT EXISTS `quizzes` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Tabel Pertanyaan (Questions)
-- Terhubung ke tabel quizzes dengan Foreign Key ON DELETE CASCADE
CREATE TABLE IF NOT EXISTS `questions` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `quiz_id` INT NOT NULL,
    `question_text` TEXT NOT NULL,
    CONSTRAINT `fk_questions_quiz`
        FOREIGN KEY (`quiz_id`) REFERENCES `quizzes` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Tabel Pilihan Jawaban (Options)
-- Terhubung ke tabel questions dengan Foreign Key ON DELETE CASCADE
-- is_correct bernilai 1 jika jawaban benar, 0 jika salah
CREATE TABLE IF NOT EXISTS `options` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `question_id` INT NOT NULL,
    `option_text` VARCHAR(255) NOT NULL,
    `is_correct` TINYINT(1) NOT NULL DEFAULT 0,
    CONSTRAINT `fk_options_question`
        FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 5. Tabel Sesi Permainan (Game Sessions)
-- Menyimpan rekap hasil permainan per pemain untuk leaderboard & riwayat
CREATE TABLE IF NOT EXISTS `game_sessions` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `quiz_id` INT NOT NULL,
    `character_id` INT NOT NULL,
    `player_name` VARCHAR(100) NOT NULL,
    `final_hp` INT NOT NULL DEFAULT 100,
    `score` INT NOT NULL DEFAULT 0,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT `fk_sessions_quiz`
        FOREIGN KEY (`quiz_id`) REFERENCES `quizzes` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_sessions_character`
        FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`)
        ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 6. Tabel Jawaban Sesi (Session Answers)
-- Menyimpan detail jawaban yang dipilih pemain pada tiap soal dalam sesi
CREATE TABLE IF NOT EXISTS `session_answers` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `session_id` INT NOT NULL,
    `question_id` INT NOT NULL,
    `option_id` INT NULL,
    `is_correct` TINYINT(1) NOT NULL DEFAULT 0,
    CONSTRAINT `fk_answers_session`
        FOREIGN KEY (`session_id`) REFERENCES `game_sessions` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_answers_question`
        FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_answers_option`
        FOREIGN KEY (`option_id`) REFERENCES `options` (`id`)
        ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
