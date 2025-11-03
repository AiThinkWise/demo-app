@echo off
chcp 65001 >nul
title Event Discovery Demo App
echo ========================================
echo Event Discovery Demo App
echo ========================================
echo.

REM Change to script directory
cd /d "%~dp0"

echo Current directory: %CD%
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install --legacy-peer-deps
    echo.
)

echo Starting development server...
echo.
echo ========================================
echo The app will open at:
echo   http://localhost:5173
echo ========================================
echo.
echo Please wait for the server to start...
echo Then open your browser to http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

call npm run start

pause

