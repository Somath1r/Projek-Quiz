@echo off
setlocal
cd /D "%~dp0"

echo ==========================================================
echo        MENJALANKAN SERVER QUIZ GAME (PORT 8080)
echo ==========================================================

if not exist "build\quiz_server.exe" (
    echo [ERROR] File build\quiz_server.exe tidak ditemukan.
    echo Silakan jalankan "build.bat" terlebih dahulu untuk mengompilasi program.
    echo.
    pause
    exit /b 1
)

build\quiz_server.exe
pause
