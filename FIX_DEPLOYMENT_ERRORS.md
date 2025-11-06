# 🔧 Fix Deployment Errors - 405 & 404 Issues

## Current Problem

You have:
```
public_html/
├── [static files - index.html, etc.]
├── backend/              ❌ WRONG LOCATION
│   └── [Laravel files]
└── api/
    └── index.php         ❌ WRONG PATHS
```

This causes:
- ❌ 405 Method Not Allowed
- ❌ 404 Route Not Found
- ❌ Security risk (backend exposed)

---

## ✅ Correct Structure Should Be

```
/home/username/
├── laravel-backend/      ✅ OUTSIDE public_html
│   ├── app/
│   ├── bootstrap/
│   ├── config/
│   ├── public/
│   ├── routes/
│   ├── vendor/
│   └── .env
│
└── public_html/          ✅ Web root
    ├── index.html        (static frontend)
    ├── images/
    ├── _next/
    ├── .htaccess         (routing config)
    └── api/              (symlink or copy of laravel-backend/public)
        └── index.php
```

---

## 🔧 Fix Steps

### Step 1: Move Backend Folder

**Via cPanel File Manager:**
1. Go to your cPanel home directory (one level above `public_html`)
2. Create new folder: `laravel-backend`
3. Move everything from `public_html/backend/` to `/home/username/laravel-backend/`
4. Delete empty `public_html/backend/` folder

**Via SSH:**
```bash
cd /home/username
mv public_html/backend laravel-backend
```

### Step 2: Fix API Folder

**Option A - Create Symbolic Link (Recommended via SSH):**
```bash
cd /home/username/public_html
rm -rf api/  # Remove old api folder
ln -s ../laravel-backend/public api
```

**Option B - Manual Copy (If no SSH):**
1. Delete current `public_html/api/` folder
2. Copy contents of `laravel-backend/public/` to `public_html/api/`
3. Edit `public_html/api/index.php` (see Step 3)

### Step 3: Fix index.php Paths

Edit `/home/username/public_html/api/index.php`

**Find these lines (around line 17-18):**
```php
require __DIR__.'/../vendor/autoload.php';
$app = require_once __DIR__.'/../bootstrap/app.php';
```

**Change to:**
```php
require __DIR__.'/../../laravel-backend/vendor/autoload.php';
$app = require_once __DIR__.'/../../laravel-backend/bootstrap/app.php';
```

### Step 4: Create/Update .htaccess

Create or update `/home/username/public_html/.htaccess`:

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    
    # Force HTTPS
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
    
    # API Routes - Forward ALL requests to Laravel
    RewriteCond %{REQUEST_URI} ^/api/
    RewriteRule ^api/(.*)$ /api/index.php/$1 [L,QSA]
    
    # Frontend Routes - Serve static files
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} !^/api/
    RewriteRule ^(.*)$ /index.html [L]
    
    # Security Headers
    <IfModule mod_headers.c>
        Header set X-Content-Type-Options "nosniff"
        Header set X-Frame-Options "SAMEORIGIN"
        Header set X-XSS-Protection "1; mode=block"
    </IfModule>
</IfModule>

# Disable directory browsing
Options -Indexes

# Enable GZIP compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

### Step 5: Create .htaccess in api/ folder

Create `/home/username/public_html/api/.htaccess`:

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    
    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
    
    # Redirect everything to index.php
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>

# Disable directory listing
Options -Indexes
```

### Step 6: Fix Laravel .env

Edit `/home/username/laravel-backend/.env`:

```env
APP_NAME="Cindel Nettoyage API"
APP_ENV=production
APP_KEY=base64:skKZeaBytoWxtl4zf1wjG27owqV1pF0jc+oALsrkvSQ=
APP_DEBUG=false
APP_URL=https://cindelnettoyage.fr

# CORS Configuration
FRONTEND_URL=https://cindelnettoyage.fr

# Email Configuration
RESEND_API_KEY=re_fkBf81td_uPD4XVsmDV4aKf5mVZu3pPKD
EMAIL_FROM=onboarding@resend.dev
EMAIL_TO=hadri.abdelmoumen@gmail.com
```

### Step 7: Set Permissions

```bash
cd /home/username/laravel-backend
chmod -R 755 storage
chmod -R 755 bootstrap/cache
```

**Via cPanel File Manager:**
- Right-click `laravel-backend/storage` → Change Permissions → 755 (check "Recurse into subdirectories")
- Right-click `laravel-backend/bootstrap/cache` → Change Permissions → 755

### Step 8: Clear Laravel Cache

**Via SSH:**
```bash
cd /home/username/laravel-backend
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan config:cache
php artisan route:cache
```

**No SSH? Create a temporary clear-cache.php file:**

Create `/home/username/public_html/clear-cache.php`:
```php
<?php
require __DIR__.'/../laravel-backend/vendor/autoload.php';
$app = require_once __DIR__.'/../laravel-backend/bootstrap/app.php';

echo "Clearing cache...\n";
Artisan::call('config:clear');
echo "Config cleared\n";
Artisan::call('cache:clear');
echo "Cache cleared\n";
Artisan::call('route:clear');
echo "Routes cleared\n";

echo "\nDone! Delete this file now.";
```

Visit: `https://cindelnettoyage.fr/clear-cache.php`  
Then **DELETE** this file immediately.

---

## 🧪 Testing After Fix

### Test 1: Homepage
```
Visit: https://cindelnettoyage.fr
Expected: Homepage loads ✓
```

### Test 2: API Endpoint
```
Visit: https://cindelnettoyage.fr/api/
Expected: Laravel welcome or JSON response (not 404)
```

### Test 3: Booking Endpoint (via curl or Postman)
```bash
curl -X POST https://cindelnettoyage.fr/api/booking \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "phone": "+33612345678",
    "email": "test@example.com",
    "service": "Nettoyage de bureaux",
    "date": "2025-11-15",
    "time": "14:00"
  }'
```

**Expected Response:**
```json
{"success":true,"message":"Réservation envoyée avec succès!"}
```

### Test 4: Contact Endpoint
```bash
curl -X POST https://cindelnettoyage.fr/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+33612345678",
    "reason": "booking",
    "message": "Test message"
  }'
```

---

## 🔍 Troubleshooting

### Still Getting 405 Error?

**Check:**
1. Verify `.htaccess` exists in both `public_html/` and `public_html/api/`
2. Check mod_rewrite is enabled (ask hosting provider)
3. Verify `api/index.php` paths are correct
4. Check Laravel logs: `laravel-backend/storage/logs/laravel.log`

**Test directly:**
```
Visit: https://cindelnettoyage.fr/api/index.php
Should load Laravel (not error)
```

### Still Getting 404 Route Not Found?

**Check:**
1. Verify routes exist: Look at `laravel-backend/routes/api.php`
2. Clear route cache: `php artisan route:clear && php artisan route:cache`
3. Check `.env` has correct `APP_URL`
4. Verify CORS settings in `laravel-backend/config/cors.php`

**List routes:**
```bash
cd /home/username/laravel-backend
php artisan route:list
```

### CORS Errors in Browser?

Edit `laravel-backend/config/cors.php`:
```php
'allowed_origins' => [
    'https://cindelnettoyage.fr',
    'https://www.cindelnettoyage.fr',
    env('FRONTEND_URL', 'https://cindelnettoyage.fr'),
],
```

---

## 📋 Final Structure Checklist

After completing all steps:

```
✓ /home/username/laravel-backend/          (backend outside public_html)
✓ /home/username/public_html/index.html    (static frontend)
✓ /home/username/public_html/.htaccess     (routing rules)
✓ /home/username/public_html/api/          (Laravel public folder)
✓ /home/username/public_html/api/.htaccess (Laravel routing)
✓ Permissions: storage/ = 755
✓ Permissions: bootstrap/cache/ = 755
```

---

## 🚨 Common Mistakes to Avoid

1. ❌ Don't put Laravel backend IN public_html
2. ❌ Don't forget to update index.php paths
3. ❌ Don't skip the api/.htaccess file
4. ❌ Don't forget to set storage permissions
5. ❌ Don't forget to clear Laravel cache

---

## 📞 Need More Help?

If still having issues:

1. Check Laravel error logs: `laravel-backend/storage/logs/laravel.log`
2. Check cPanel error logs: cPanel → Metrics → Errors
3. Test API directly: `https://cindelnettoyage.fr/api/index.php`
4. Verify PHP version: Should be PHP 8.1 or higher

**Support**: hadri.abdelmoumen@gmail.com
