# 🎮 Arcade Quiz Game - Web Application (C++17 OOP Backend)

Aplikasi Web "Quiz Game" bergaya Arcade Retro lengkap dengan **Backend C++17** (berbasis REST API), database **MySQL / MariaDB dari XAMPP**, dan antarmuka **Frontend Vanilla (HTML5, CSS3, JavaScript murni tanpa framework)**. Backend C++ juga bertindak sebagai web server mandiri yang melayani seluruh file statis frontend di `http://localhost:8080`.

Proyek ini dibangun untuk memenuhi tugas besar mata kuliah **Praktikum Pemrograman Berorientasi Objek (PBO)** dengan penerapan 6 pilar OOP murni: Class/Object, Enkapsulasi, Pewarisan, Polimorfisme, Abstraksi, dan Interface.

---

## 🌟 Fitur Utama

1. **Kelola Kuis (Admin Dashboard - `admin.html`)**:
   - CRUD Kuis (Tambah, Edit, Hapus Kuis).
   - CRUD Pertanyaan (Tambah, Edit, Hapus Soal).
   - CRUD Pilihan Jawaban (Minimal 2, Maksimal 5 pilihan per soal dengan tepat 1 kunci jawaban benar).
   - Validasi ketat di sisi frontend dan backend C++.
2. **Pemilihan Karakter & RPG Stats (`index.html`)**:
   - Pilihan 3 kelas karakter: **Knight Valerius**, **Archer Lyanna**, **Mage Zephyr**.
   - Input nama petualang dan pemilihan kuis.
3. **Gameplay & Pertarungan Interaktif (`game.html`)**:
   - Pemain mulai dengan **100 HP** (Health Points) dengan animasi bar darah di atas karakter.
   - Soal ditampilkan satu per satu dengan navigasi Sebelumnya/Berikutnya dan indikator progres.
   - **Anti-Cheat**: Selama bermain, frontend **tidak menerima field `is_correct`**. Seluruh jawaban dinilai secara aman di server C++.
   - Aturan Darah: Tiap jawaban salah mengurangi HP sebesar **100 ÷ jumlah soal** (dibulatkan ke atas). Contoh: 1 soal = 100 HP (langsung kalah), 4 soal = 25 HP, 5 soal = 20 HP. Berlaku sama untuk semua karakter.
4. **Animasi Replay Hasil Dramatis**:
   - Replay berurutan per butir soal dengan jeda waktu.
   - Jawaban benar: Karakter melompat/bersorak, muncul teks centang hijau melayang, HP aman.
   - Jawaban salah: Proyektil musuh meluncur ke karakter, karakter bergetar dan flash merah dengan animasi unik per kelas, angka floating damage muncul, dan bar darah berkurang secara halus.
   - Jika HP mencapai 0: Animasi karakter tumbang (KO) dan layar **GAME OVER**. Jika HP > 0: Animasi **VICTORY**.
5. **Review Hasil & Pembahasan**:
   - Skor akhir dan sisa HP.
   - Pembahasan detail butir soal yang salah (menampilkan jawaban pemain vs kunci jawaban yang benar).
   - Ringkasan butir soal yang dijawab benar.
6. **Papan Peringkat (Leaderboard Top 10)**:
   - Setiap sesi permainan tersimpan otomatis ke database.
   - Menampilkan 10 skor tertinggi per kuis beserta nama pemain, kelas karakter, skor, sisa HP, dan tanggal.

---

## 📂 Struktur Proyek

```text
Projek Quiz/
├── CMakeLists.txt              # Konfigurasi Build CMake C++17
├── config.json                 # File konfigurasi database & game
├── README.md                   # Petunjuk instalasi & penggunaan
├── database/
│   ├── schema.sql              # DDL struktur tabel (Foreign Key Cascade & Prepared Statements)
│   └── seed.sql                # Data awal 3 karakter & 1 kuis contoh (5 soal konsep OOP)
├── docs/
│   └── OOP.md                  # Dokumentasi 6 konsep OOP & Diagram Kelas (Mermaid) untuk dosen
├── backend/
│   ├── main.cpp                # Entry point server HTTP REST API
│   ├── config.h                # Singleton Config Manager
│   ├── db.h / db.cpp           # Abstraksi Database & Prepared Statement (MySQL / Standalone)
│   ├── test_suite.cpp          # Automated unit test verifikasi logika OOP & kalkulasi HP
│   ├── include/
│   │   ├── httplib.h           # Library REST Server C++ (cpp-httplib)
│   │   └── nlohmann/json.hpp   # Library JSON C++ (nlohmann/json)
│   ├── interfaces/
│   │   ├── ISerializable.h     # Interface serialisasi JSON
│   │   └── IRepository.h       # Generic Template Interface Repository (CRUD)
│   ├── models/
│   │   ├── Entity.h            # Base abstract class entitas (id)
│   │   ├── Quiz.h / .cpp       # Model Kuis
│   │   ├── Question.h / .cpp   # Model Pertanyaan
│   │   ├── Option.h / .cpp     # Model Pilihan Jawaban (Enkapsulasi anti-cheat)
│   │   ├── Character.h / .cpp  # Base class karakter (Polimorfisme takeDamage)
│   │   ├── Knight.h / .cpp     # Subclass Knight (animasi blok perisai)
│   │   ├── Archer.h / .cpp     # Subclass Archer (animasi terpental)
│   │   ├── Mage.h / .cpp       # Subclass Mage (animasi penghalang sihir pecah)
│   │   ├── CharacterFactory.h  # Factory pattern pembuatan smart pointer Character
│   │   └── GameSession.h       # Model riwayat sesi permainan
│   ├── repositories/           # Implementasi pola Repository
│   │   ├── QuizRepository.h / .cpp
│   │   ├── QuestionRepository.h / .cpp
│   │   ├── OptionRepository.h / .cpp
│   │   ├── CharacterRepository.h / .cpp
│   │   └── SessionRepository.h / .cpp
│   ├── engine/
│   │   └── GameEngine.h / .cpp # Abstraksi penilaian kuis di server
│   └── handlers/
│       └── ApiHandlers.h / .cpp# Routing endpoint REST API
└── frontend/
    ├── index.html              # Halaman Beranda (Pilih Karakter, Nama, Kuis, Leaderboard)
    ├── admin.html              # Dashboard Admin (Kelola Kuis, Soal, dan Opsi)
    ├── game.html               # Halaman Gameplay & Arena Replay Animasi
    ├── css/
    │   └── style.css           # Tema Retro Arcade Neon & Responsive Design
    ├── js/
    │   ├── app.js              # Interaksi halaman utama
    │   ├── admin.js            # Interaksi Admin CRUD
    │   └── game.js             # State machine gameplay & animasi replay berurutan
    └── assets/characters/      # Placeholder Sprite SVG Karakter (Idle, Hit, Win)
        ├── knight_idle.svg, knight_hit.svg, knight_win.svg
        ├── archer_idle.svg, archer_hit.svg, archer_win.svg
        └── mage_idle.svg, mage_hit.svg, mage_win.svg
```

---

## 🛠️ Langkah Instalasi & Menjalankan dari Nol

### Prasyarat Sistem
- **Sistem Operasi**: Windows 10/11 (atau Linux/macOS).
- **XAMPP**: Untuk menjalankan MySQL/MariaDB & phpMyAdmin.
- **C++ Compiler**: GCC (MinGW-w64) C++17 atau MSVC (Visual Studio 2019/2022).
- **CMake**: Versi 3.15 atau yang lebih baru.

---

### Langkah 1: Persiapan Database XAMPP
1. Buka aplikasi **XAMPP Control Panel**.
2. Klik tombol **Start** pada modul **Apache** dan **MySQL**.
3. Buka browser dan akses **phpMyAdmin** di alamat: `http://localhost/phpmyadmin/`.
4. Buat database baru bernama `quiz_game`:
   - Klik tab **Databases / Basis Data**.
   - Masukkan nama `quiz_game` lalu klik **Create**.
5. Import tabel dan data awal:
   - Pilih database `quiz_game` di panel sebelah kiri.
   - Klik tab **Import**.
   - Pilih file `database/schema.sql` lalu klik **Go / Kirim**.
   - Ulangi langkah import untuk file `database/seed.sql` untuk mengisi data karakter dan contoh soal OOP.

*(Alternatif via Command Prompt/Terminal):*
```powershell
C:\xampp\mysql\bin\mysql.exe -u root < database/schema.sql
C:\xampp\mysql\bin\mysql.exe -u root < database/seed.sql
```

---

### Langkah 2: Konfigurasi Kredensial Database
Pengaturan database tersimpan di file `config.json` pada root proyek:
```json
{
  "database": {
    "host": "127.0.0.1",
    "port": 3306,
    "user": "root",
    "password": "",
    "database": "quiz_game"
  },
  "game": {
    "default_hp": 100,
    "base_damage_wrong": 20,
    "server_port": 8080,
    "frontend_dir": "./frontend"
  }
}
```
*Catatan: Jika Anda menggunakan password pada MySQL XAMPP Anda, cukup ubah nilai `"password"` di file `config.json` ini.*

---

### Langkah 3: Build Backend C++ dengan CMake

Buka terminal (PowerShell atau Command Prompt) di folder proyek:

1. Buat folder build dan jalankan konfigurasi CMake:
```powershell
cmake -B build
```

*(Jika Anda menggunakan MinGW / Ninja):*
```powershell
cmake -B build -G "Ninja"
```

2. Lakukan kompilasi program:
```powershell
cmake --build build
```

Setelah proses kompilasi selesai, file binary yang dihasilkan berada di:
- `build/quiz_server.exe` (Aplikasi Server Utama)
- `build/test_suite.exe` (Suite Pengujian Otomatis OOP)

---

### Langkah 4: Uji Coba Logika OOP (Opsional namun Disarankan)
Jalankan file suite pengujian otomatis untuk memverifikasi seluruh komponen OOP:
```powershell
.\build\test_suite.exe
```
Output akan memverifikasi polimorfisme karakter, proteksi enkapsulasi kunci jawaban, repository CRUD, dan kalkulasi GameEngine.

---

### Langkah 5: Jalankan Server & Buka di Browser

Jalankan server C++:
```powershell
.\build\quiz_server.exe
```

Output di terminal akan menampilkan:
```text
==========================================================
       ARCADE QUIZ GAME - C++17 OOP BACKEND SERVER        
==========================================================
[Config] Berhasil memuat konfigurasi dari config.json
[Config] Database Target: 127.0.0.1:3306 (DB: quiz_game, User: root)
[Config] Damage per soal salah: 100 / jumlah soal (otomatis)
[Config] Frontend Folder: ./frontend
[Database] BERHASIL terhubung ke MySQL Server di 127.0.0.1:3306
----------------------------------------------------------
 [OK] Server siap berjalan!
 -> Akses Game:    http://localhost:8080/index.html
 -> Akses Admin:   http://localhost:8080/admin.html
 -> Tekan Ctrl + C di terminal untuk menghentikan server.
----------------------------------------------------------
```

Buka browser pilihan Anda (Chrome, Edge, Firefox) dan akses:
- **Halaman Game**: [http://localhost:8080/index.html](http://localhost:8080/index.html)
- **Halaman Admin**: [http://localhost:8080/admin.html](http://localhost:8080/admin.html)

---

## 🔧 Panduan Troubleshooting (Mengatasi Error Umum)

### 1. Error: "Koneksi database gagal / Port 3306 tidak terbuka"
- **Penyebab**: Modul MySQL di XAMPP Control Panel belum di-start atau port 3306 terblokir oleh aplikasi lain.
- **Solusi**:
  1. Buka XAMPP Control Panel dan pastikan modul **MySQL** berstatus warna hijau (Running).
  2. Jika port 3306 bentrok dengan instalasi MySQL mandiri lainnya, ubah port di XAMPP (misal `3307`), lalu sesuaikan nilai `"port"` pada file `config.json`.
  3. **Fitur Canggih**: Backend C++ kami telah dilengkapi dengan *High-Fidelity Standalone Storage* otomatis. Jika MySQL belum aktif, backend tetap berjalan dengan data seed memori bawaan sehingga dosen/evaluator tetap dapat menguji game dan admin 100%!

### 2. Error: "#1701 - Cannot truncate a table referenced in a foreign key constraint" saat Import seed.sql
- **Penyebab**: Di MySQL/MariaDB dengan mesin penyimpanan InnoDB, perintah `TRUNCATE TABLE` dilarang oleh engine database terhadap tabel induk yang sedang dirujuk oleh tabel lain via *Foreign Key*.
- **Solusi**:
  File `database/seed.sql` sudah diperbarui menggunakan perintah `DELETE FROM ...` yang didukung 100% oleh phpMyAdmin dan MySQL InnoDB. Jika Anda melakukan import manual, pastikan menggunakan `DELETE FROM` dan bukan `TRUNCATE`.

### 3. Error: "Port 8080 already in use" saat menjalankan server
- **Penyebab**: Port `8080` sedang digunakan oleh proses lain.
- **Solusi**:
  Buka file `config.json`, ubah `"server_port": 8080` menjadi port lain (misal `8081` atau `3000`), lalu jalankan kembali `quiz_server.exe`.

### 3. File Gambar/Sprite Karakter Tidak Tampil
- **Penyebab**: Path static mount point tidak sesuai dengan working directory terminal.
- **Solusi**:
  Pastikan Anda menjalankan `quiz_server.exe` dari folder root proyek atau pastikan folder `frontend/` berada sejajar dengan file `config.json`.

---

## 🎓 Panduan Presentasi Konsep OOP untuk Dosen

File dokumentasi lengkap beserta **Diagram Kelas (Mermaid)** dan pemetaan konsep dapat dibaca di folder:
👉 [`docs/OOP.md`](docs/OOP.md)

1. **Class**: Seluruh model data (`Quiz`, `Question`, `Option`, `Character`, `Knight`, `Archer`, `Mage`, `GameSession`), `Database`, dan `GameEngine` dipisahkan rapi dalam file `.h` dan `.cpp`.
2. **Enkapsulasi**: Nilai `hp_` karakter diproteksi (`protected`) dan hanya dapat dimodifikasi secara terkontrol melalui `heal()` dan `takeDamage()`. Kunci jawaban dienkapsulasi dan disembunyikan lewat `Option::toJson(false)`.
3. **Pewarisan**: Class abstrak `Entity` diturunkan ke `Quiz`, `Question`, dan `Option`. Class `Character` diturunkan ke `Knight`, `Archer`, dan `Mage`.
4. **Polimorfisme**: Method `getHitAnimation()` dan `getSpecialTrait()` bersifat *pure virtual* pada class `Character` dan di-override oleh `Knight`, `Archer`, dan `Mage` (animasi kena serangan dan trait berbeda). `takeDamage()` juga virtual sehingga subclass dapat meng-override-nya bila perlu. Instansiasi menggunakan smart pointer `std::unique_ptr<Character>` via `CharacterFactory::create()`.
5. **Abstraksi**: `GameEngine` menyembunyikan detail komputasi evaluasi jawaban dan database dari Handler REST API.
6. **Interface**: `ISerializable` dan generic template `IRepository<T>` menyediakan kontrak pure virtual function dan virtual destructor.

---

**Pengembang**: Mahasiswa Praktikum Pemrograman Berorientasi Objek  
**Lisensi**: Educational Purpose (Tugas Kuliah PBO)
