@echo off
title Ramim Ahmed - Portfolio
cd /d "%~dp0"
where npm.cmd >nul 2>nul
if errorlevel 1 (
  echo Node.js is required. Install it from https://nodejs.org/
  pause
  exit /b 1
)
if not exist "node_modules\" (
  call npm.cmd ci --no-fund --no-audit
  if errorlevel 1 (
    pause
    exit /b 1
  )
)
echo Starting Ramim Ahmed's portfolio. Keep this window open.
echo Use the Local URL printed below. Press Ctrl+C to stop.
call npm.cmd run dev -- --host 127.0.0.1 --port 5187 --open
pause

