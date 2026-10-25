@echo off
setlocal
cd /D "%~dp0"

echo ==========================================================
echo        BUILD SCRIPT - QUIZ GAME C++17 BACKEND
echo ==========================================================

:: Daftarkan lokasi compiler & cmake yang sudah ada di komputer Anda
set "PATH=C:\Program Files\CodeBlocks\MinGW\bin;%PATH%"

:: Cek apakah cmake ditemukan
where cmake >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] CMake tidak ditemukan di PATH maupun di C:\Program Files\CodeBlocks\MinGW\bin.
    echo Pastikan CMake atau CodeBlocks MinGW terinstall.
    pause
    exit /b 1
)

echo [1/2] Mengonfigurasi project dengan CMake...
cmake -B build -G "Ninja" -DCMAKE_BUILD_TYPE=Release
if %errorlevel% neq 0 (
    echo [ERROR] Konfigurasi CMake gagal!
    pause
    exit /b 1
)

echo.
echo [2/2] Melakukan kompilasi source code C++...
cmake --build build
if %errorlevel% neq 0 (
    echo [ERROR] Proses build/kompilasi gagal!
    pause
    exit /b 1
)

echo.
echo ==========================================================
echo  [BERHASIL] Build selesai!
echo  -> Untuk menjalankan server, double click "run_server.bat"
echo  -> Untuk menjalankan unit test OOP, double click "run_test.bat"
echo ==========================================================
pause
