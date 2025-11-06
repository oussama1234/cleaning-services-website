# Test Booking API
Write-Host "Testing Booking API..." -ForegroundColor Green

$bookingData = @{
    name = "Test User"
    phone = "+33640604057"
    email = "test@example.com"
    service = "Nettoyage Standard - 150€"
    date = "2025-11-10"
    time = "14:00"
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "http://127.0.0.1:8000/api/booking" `
        -Method Post `
        -Body $bookingData `
        -ContentType "application/json"
    
    Write-Host "✅ Booking API Response:" -ForegroundColor Green
    $response | ConvertTo-Json
} catch {
    Write-Host "❌ Booking API Error:" -ForegroundColor Red
    $_.Exception.Message
}

Write-Host "`n---`n" -ForegroundColor Yellow

# Test Contact API
Write-Host "Testing Contact API..." -ForegroundColor Green

$contactData = @{
    name = "Test Contact"
    email = "contact@example.com"
    phone = "+33640604057"
    reason = "quote"
    message = "Je voudrais un devis pour un nettoyage complet de ma maison."
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "http://127.0.0.1:8000/api/contact" `
        -Method Post `
        -Body $contactData `
        -ContentType "application/json"
    
    Write-Host "✅ Contact API Response:" -ForegroundColor Green
    $response | ConvertTo-Json
} catch {
    Write-Host "❌ Contact API Error:" -ForegroundColor Red
    $_.Exception.Message
}

Write-Host "`nTest completed!" -ForegroundColor Cyan
