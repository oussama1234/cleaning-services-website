# Test Email Endpoints Script
# Make sure Laravel server is running: php artisan serve

Write-Host "`n===================================" -ForegroundColor Cyan
Write-Host "Testing Laravel Email Endpoints" -ForegroundColor Cyan
Write-Host "===================================`n" -ForegroundColor Cyan

# Test 1: Booking Endpoint
Write-Host "[TEST 1] Testing /api/booking endpoint..." -ForegroundColor Yellow

$bookingData = @{
    name = 'Test User'
    phone = '+33612345678'
    email = 'test@example.com'
    service = 'Nettoyage de bureaux'
    date = '2025-11-15'
    time = '14:00'
} | ConvertTo-Json

try {
    $response = Invoke-WebRequest -Uri 'http://127.0.0.1:8000/api/booking' `
        -Method POST `
        -Body $bookingData `
        -ContentType 'application/json' `
        -UseBasicParsing
    
    Write-Host "✓ Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "Response:" -ForegroundColor Green
    Write-Host $response.Content -ForegroundColor White
} catch {
    Write-Host "✗ Error:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    if ($_.Exception.Response) {
        $reader = [System.IO.StreamReader]::new($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        Write-Host "Response Body:" -ForegroundColor Red
        Write-Host $responseBody -ForegroundColor White
    }
}

Write-Host "`n-----------------------------------`n" -ForegroundColor Gray

# Test 2: Contact Endpoint
Write-Host "[TEST 2] Testing /api/contact endpoint..." -ForegroundColor Yellow

$contactData = @{
    name = 'Test User'
    email = 'test@example.com'
    phone = '+33612345678'
    reason = 'booking'
    message = 'Ceci est un message de test pour vérifier le système d''email.'
} | ConvertTo-Json

try {
    $response = Invoke-WebRequest -Uri 'http://127.0.0.1:8000/api/contact' `
        -Method POST `
        -Body $contactData `
        -ContentType 'application/json' `
        -UseBasicParsing
    
    Write-Host "✓ Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "Response:" -ForegroundColor Green
    Write-Host $response.Content -ForegroundColor White
} catch {
    Write-Host "✗ Error:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    if ($_.Exception.Response) {
        $reader = [System.IO.StreamReader]::new($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        Write-Host "Response Body:" -ForegroundColor Red
        Write-Host $responseBody -ForegroundColor White
    }
}

Write-Host "`n===================================`n" -ForegroundColor Cyan
Write-Host "Tests completed!" -ForegroundColor Cyan
Write-Host "Check email at: hadri.abdelmoumen@gmail.com" -ForegroundColor Cyan
Write-Host "===================================`n" -ForegroundColor Cyan
