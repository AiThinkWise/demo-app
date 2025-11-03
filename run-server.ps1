# PowerShell script to run the dev server
Set-Location -Path $PSScriptRoot
Write-Host "Starting Vite development server..." -ForegroundColor Green
Write-Host "Please wait..." -ForegroundColor Yellow
Write-Host ""
npx vite --host --port 5173
Write-Host ""
Write-Host "Server should be running at: http://localhost:5173" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow

