Write-Host "Testing Laravel API..." -ForegroundColor Cyan

# Test 1: Booking API
Write-Host "`n1. Testing Booking Endpoint..." -ForegroundColor Yellow
$bookingBody = @{
    name = "Jean Dupont"
    phone = "+33640604057"
    email = "jean.dupont@example.com"
    service = "Nettoyage Standard - 150€"
    date = "2025-11-15"
    time = "14:30"
} | ConvertTo-Json

try {
    $result = Invoke-RestMethod -Uri "http://127.0.0.1:8000/api/booking" -Method Post -Body $bookingBody -ContentType "application/json" -ErrorAction Stop
    Write-Host "✅ SUCCESS - Booking API works!" -ForegroundColor Green
    Write-Host "Response: $($result | ConvertTo-Json -Compress)" -ForegroundColor White
} catch {
    Write-Host "❌ FAILED - Booking API error" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    if ($_.ErrorDetails) {
        Write-Host "Details: $($_.ErrorDetails.Message)" -ForegroundColor Red
    }
}

# Test 2: Contact API
Write-Host "`n2. Testing Contact Endpoint..." -ForegroundColor Yellow
$contactBody = @{
    name = "Marie Martin"
    email = "marie.martin@example.com"
    phone = "+33640604057"
    reason = "quote"
    message = "Bonjour, je souhaiterais obtenir un devis pour un nettoyage de bureaux."
} | ConvertTo-Json

try {
    $result = Invoke-RestMethod -Uri "http://127.0.0.1:8000/api/contact" -Method Post -Body $contactBody -ContentType "application/json" -ErrorAction Stop
    Write-Host "✅ SUCCESS - Contact API works!" -ForegroundColor Green
    Write-Host "Response: $($result | ConvertTo-Json -Compress)" -ForegroundColor White
} catch {
    Write-Host "❌ FAILED - Contact API error" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    if ($_.ErrorDetails) {
        Write-Host "Details: $($_.ErrorDetails.Message)" -ForegroundColor Red
    }
}

Write-Host "`n✨ Testing complete!" -ForegroundColor Cyan
Write-Host "Check your email at hadri.abdelmoumen@gmail.com for test emails." -ForegroundColor Magenta
