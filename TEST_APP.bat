@echo off
chcp 65001 >nul
echo ========================================
echo Starting Event Discovery Demo App
echo ========================================
echo.
cd /d "%~dp0"
echo Current directory: %CD%
echo.
echo Installing dependencies (if needed)...
call npm install
echo.
echo Starting development server...
echo.
echo Please wait... The app will open at: http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo.
call npm run start
pause

