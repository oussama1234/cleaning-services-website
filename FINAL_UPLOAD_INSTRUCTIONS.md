# ✅ FINAL FIX - Upload These Files

## Files to Upload

### 1. `laravel-backend/routes/web.php`
Upload to: `/home/cindelne/laravel-backend/routes/web.php`

### 2. `laravel-backend/routes/api.php`
Upload to: `/home/cindelne/laravel-backend/routes/api.php`

### 3. `laravel-backend/bootstrap/app.php`
Upload to: `/home/cindelne/laravel-backend/bootstrap/app.php`

---

## After Uploading

Run: `https://cindelnettoyage.fr/clear-simple.php`

Then DELETE clear-simple.php

---

## Test

```bash
curl -X POST https://cindelnettoyage.fr/api/contact \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"Test User","email":"test@test.com","phone":"+33612345678","reason":"booking","message":"Test message"}'
```

Expected: `{"success":true,"message":"Message envoyé avec succès!"}`

---

## What Changed

✅ Routes moved from `api.php` to `web.php` (Sanctum not needed)  
✅ Removed `/api` prefix from routes (handled by .htaccess)  
✅ Added CSRF exceptions for `booking` and `contact` routes  

Now your forms will work! 🎉
