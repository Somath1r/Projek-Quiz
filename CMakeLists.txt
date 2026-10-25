cmake_minimum_required(VERSION 3.15)
project(QuizGameApp VERSION 1.0.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# Opsi peringatan kompilasi
if (MSVC)
    add_compile_options(/W4 /EHsc /utf-8)
else()
    add_compile_options(-Wall -Wextra -pedantic -Wno-unused-parameter)
endif()

# Header include paths
include_directories(
    ${CMAKE_CURRENT_SOURCE_DIR}/backend
    ${CMAKE_CURRENT_SOURCE_DIR}/backend/include
)

# Optional vcpkg package integration
find_package(nlohmann_json CONFIG QUIET)
find_package(httplib CONFIG QUIET)


# ---------------------------------------------------------------------------
# DUKUNGAN MYSQL / MARIADB (XAMPP)
# Jika header & library client tidak ditemukan, build tetap jalan tetapi
# memakai penyimpanan in-memory (dan server akan menampilkan peringatan jelas).
# Folder XAMPP bisa diubah: cmake -B build -DMYSQL_ROOT="D:/xampp/mysql"
# ---------------------------------------------------------------------------
option(USE_MYSQL "Aktifkan koneksi MySQL/MariaDB sungguhan" ON)
set(MYSQL_ROOT "C:/xampp/mysql" CACHE PATH "Folder instalasi MySQL/MariaDB (XAMPP)")
set(MYSQL_ENABLED OFF)

    if (USE_MYSQL)
        find_path(MYSQL_INCLUDE_DIR
            NAMES mysql.h
            PATHS
                "${MYSQL_ROOT}/include"
                "${MYSQL_ROOT}/include/mysql"
                "${MYSQL_ROOT}/include/mariadb"
                "C:/msys64/ucrt64/include/mariadb"
            NO_DEFAULT_PATH
        )

        find_library(MYSQL_LIBRARY
            NAMES mariadb libmariadb
            PATHS
                "${MYSQL_ROOT}/lib"
                "C:/msys64/ucrt64/lib"
            NO_DEFAULT_PATH
        )

        if (MYSQL_INCLUDE_DIR AND MYSQL_LIBRARY)
            set(MYSQL_ENABLED ON)
            message(STATUS "MariaDB client: include=${MYSQL_INCLUDE_DIR}")
            message(STATUS "MariaDB client: lib=${MYSQL_LIBRARY}")
        else()
            message(WARNING
                "MariaDB client tidak ditemukan. "
                "include='${MYSQL_INCLUDE_DIR}', lib='${MYSQL_LIBRARY}'"
            )
        endif()
    endif()

function(enable_mysql target)
    if (MYSQL_ENABLED)
        target_compile_definitions(${target} PRIVATE USE_MYSQL)
        target_include_directories(${target} PRIVATE "${MYSQL_INCLUDE_DIR}")
        target_link_libraries(${target} PRIVATE "${MYSQL_LIBRARY}")

        if (WIN32)
            add_custom_command(TARGET ${target} POST_BUILD
                COMMAND ${CMAKE_COMMAND} -E copy_if_different
                "C:/msys64/ucrt64/bin/libmariadb.dll"
                "$<TARGET_FILE_DIR:${target}>"
            )
        endif()
    endif()
endfunction()

# Daftar source file backend C++
set(SOURCES
    backend/main.cpp
    backend/db.cpp
    backend/models/Option.cpp
    backend/models/Question.cpp
    backend/models/Quiz.cpp
    backend/models/Character.cpp
    backend/models/Knight.cpp
    backend/models/Archer.cpp
    backend/models/Mage.cpp
    backend/models/CharacterFactory.cpp
    backend/models/GameSession.cpp
    backend/repositories/QuizRepository.cpp
    backend/repositories/QuestionRepository.cpp
    backend/repositories/OptionRepository.cpp
    backend/repositories/CharacterRepository.cpp
    backend/repositories/SessionRepository.cpp
    backend/engine/GameEngine.cpp
    backend/handlers/ApiHandlers.cpp
)

add_executable(quiz_server ${SOURCES})
enable_mysql(quiz_server)

# Dependency link
if (WIN32)
    target_link_libraries(quiz_server PRIVATE ws2_32 crypt32)
else()
    target_link_libraries(quiz_server PRIVATE pthread)
endif()

if (TARGET nlohmann_json::nlohmann_json)
    target_link_libraries(quiz_server PRIVATE nlohmann_json::nlohmann_json)
endif()

if (TARGET httplib::httplib)
    target_link_libraries(quiz_server PRIVATE httplib::httplib)
endif()

# Salin config.json ke direktori build agar binary dapat langsung membaca konfigurasi
add_custom_command(TARGET quiz_server POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy_if_different
    "${CMAKE_CURRENT_SOURCE_DIR}/config.json"
    "$<TARGET_FILE_DIR:quiz_server>/config.json"
)

# Automated Test Suite Binary
set(TEST_SOURCES
    backend/test_suite.cpp
    backend/db.cpp
    backend/models/Option.cpp
    backend/models/Question.cpp
    backend/models/Quiz.cpp
    backend/models/Character.cpp
    backend/models/Knight.cpp
    backend/models/Archer.cpp
    backend/models/Mage.cpp
    backend/models/CharacterFactory.cpp
    backend/models/GameSession.cpp
    backend/repositories/QuizRepository.cpp
    backend/repositories/QuestionRepository.cpp
    backend/repositories/OptionRepository.cpp
    backend/repositories/CharacterRepository.cpp
    backend/repositories/SessionRepository.cpp
    backend/engine/GameEngine.cpp
)

add_executable(test_suite ${TEST_SOURCES})
enable_mysql(test_suite)

if (WIN32)
    target_link_libraries(test_suite PRIVATE ws2_32 crypt32)
else()
    target_link_libraries(test_suite PRIVATE pthread)
endif()

if (TARGET nlohmann_json::nlohmann_json)
    target_link_libraries(test_suite PRIVATE nlohmann_json::nlohmann_json)
endif()

add_custom_command(TARGET test_suite POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy_if_different
    "${CMAKE_CURRENT_SOURCE_DIR}/config.json"
    "$<TARGET_FILE_DIR:test_suite>/config.json"
)