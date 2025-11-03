# Start the Event Discovery Demo App
Write-Host "Starting Event Discovery Demo App..." -ForegroundColor Green
Write-Host ""

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
    Write-Host ""
}

# Start the dev server
Write-Host "Starting development server..." -ForegroundColor Yellow
Write-Host "The app will open at: http://localhost:5173" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host ""

npm run dev

