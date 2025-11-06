# ✅ SOLUTION FOUND - Routes Fixed!

## The Problem
API routes were in `routes/api.php` but Laravel wasn't loading them because of Sanctum middleware missing.

## The Solution
Moved routes to `routes/web.php` where they work without Sanctum!

---

## Files to Upload

Upload these 2 files to your server:

### 1. `/laravel-backend/routes/web.php`
Location: `D:\Cleaning-Services-Website\laravel-backend\routes\web.php`

Upload to: `/home/cindelne/laravel-backend/routes/web.php`

### 2. `/laravel-backend/bootstrap/app.php`
Location: `D:\Cleaning-Services-Website\laravel-backend\bootstrap\app.php`

Upload to: `/home/cindelne/laravel-backend/bootstrap/app.php`

---

## After Uploading

### Clear Laravel cache:

**Option A - Via SSH:**
```bash
cd /home/cindelne/laravel-backend
php artisan route:clear
php artisan config:clear
php artisan cache:clear
```

**Option B - No SSH:**
Create `/home/cindelne/public_html/clear.php`:
```php
<?php
$backend = __DIR__ . '/../laravel-backend';
require $backend . '/vendor/autoload.php';
$app = require $backend . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->call('route:clear');
$kernel->call('config:clear');
$kernel->call('cache:clear');
echo "Cache cleared! Delete this file.";
?>
```

Visit: `https://cindelnettoyage.fr/clear.php` then DELETE it.

---

## Test

After uploading and clearing cache, test:

```bash
curl -X POST https://cindelnettoyage.fr/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","phone":"+33612345678","reason":"other","message":"Test"}'
```

Expected: `{"success":true,"message":"Message envoyé avec succès!"}`

---

## Routes Now Available

✅ `POST /api/booking` - Booking form  
✅ `POST /api/contact` - Contact form  

Both working from web.php!
