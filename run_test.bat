@echo off
setlocal
cd /D "%~dp0"

echo ==========================================================
echo        MENJALANKAN AUTOMATED OOP TEST SUITE
echo ==========================================================

if not exist "build\test_suite.exe" (
    echo [ERROR] File build\test_suite.exe tidak ditemukan.
    echo Silakan jalankan "build.bat" terlebih dahulu.
    echo.
    pause
    exit /b 1
)

build\test_suite.exe
pause
