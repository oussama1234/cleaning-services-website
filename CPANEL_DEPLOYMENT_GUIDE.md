# cPanel Deployment Guide - cindelnettoyage.fr

## Overview
This guide explains how to deploy your cleaning services website (Laravel backend + Next.js static frontend) to a cPanel server with PHP hosting (no Node.js required).

**Domain**: https://cindelnettoyage.fr  
**Tech Stack**: Laravel API + Static HTML/CSS/JS Frontend  
**Server**: LiteSpeed Web Server (cPanel)

---

## 📁 Directory Structure on cPanel

Your cPanel hosting should have the following structure:

```
/home/username/                          # Your cPanel home directory
├── public_html/                         # Public web root (domain points here)
│   ├── index.html                       # Frontend static files (from /out folder)
│   ├── 404.html
│   ├── images/
│   ├── _next/
│   ├── manifest.json
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── .htaccess                        # Apache/LiteSpeed configuration
│   └── api/                             # Laravel public folder (symbolic link)
│       └── index.php
│
├── laravel-backend/                     # Laravel application (outside public_html)
│   ├── app/
│   ├── bootstrap/
│   ├── config/
│   ├── database/
│   ├── public/                          # Laravel's public folder
│   │   └── index.php
│   ├── resources/
│   ├── routes/
│   ├── storage/
│   ├── vendor/
│   ├── .env                             # Laravel environment file
│   ├── artisan
│   └── composer.json
│
└── tmp/                                 # Temporary files
```

---

## 🚀 Deployment Steps

### Step 1: Prepare Your Files Locally

Before uploading, ensure you have:

1. **Laravel Backend Ready**:
   - Located at: `D:\Cleaning-Services-Website\laravel-backend`
   - `.env` file configured for production
   - Run `composer install --no-dev --optimize-autoloader` (if not done)

2. **Static Frontend Ready**:
   - Located at: `D:\Cleaning-Services-Website\out`
   - All files built and ready

### Step 2: Upload Laravel Backend

**Upload Location**: `/home/username/laravel-backend/`  
**(IMPORTANT: Outside public_html for security)**

1. **Via cPanel File Manager**:
   - Log into cPanel
   - Open File Manager
   - Navigate to your home directory (one level above `public_html`)
   - Create folder: `laravel-backend`
   - Upload all contents from `D:\Cleaning-Services-Website\laravel-backend\`

2. **Via FTP** (Recommended for large files):
   - Connect to your FTP server
   - Navigate to `/home/username/`
   - Create `laravel-backend` folder
   - Upload all Laravel files to this folder

**Files to Upload**:
- ✓ All Laravel folders (app, bootstrap, config, database, public, resources, routes, storage, vendor)
- ✓ .env file (production configuration)
- ✓ composer.json, composer.lock
- ✓ artisan

### Step 3: Upload Static Frontend Files

**Upload Location**: `/home/username/public_html/`  
**(This is your web root)**

1. **Via cPanel File Manager**:
   - Navigate to `public_html` folder
   - **DELETE** any existing index.html or index.php (if present)
   - Upload all contents from `D:\Cleaning-Services-Website\out\` directly into `public_html`

**Files to Upload** (from `out` folder):
- ✓ index.html
- ✓ 404.html
- ✓ icon.svg
- ✓ manifest.json
- ✓ robots.txt
- ✓ sitemap.xml
- ✓ images/ folder (entire folder)
- ✓ _next/ folder (entire folder)
- ✓ 404/ folder
- ✓ _not-found/ folder

### Step 4: Create API Symbolic Link or Copy

You need to make Laravel's `public` folder accessible at `/api` URL.

**Option A: Via SSH (Recommended)**:
```bash
cd /home/username/public_html
ln -s ../laravel-backend/public api
```

**Option B: Via cPanel File Manager (No SSH)**:
If symbolic links aren't working:
1. Copy the entire contents of `/home/username/laravel-backend/public/` 
2. Into `/home/username/public_html/api/`
3. Edit `/home/username/public_html/api/index.php` (see Step 5)

### Step 5: Configure Laravel's Entry Point

If you copied the public folder (Option B above), you need to update paths.

Edit `/home/username/public_html/api/index.php`:

**Change this**:
```php
require __DIR__.'/../vendor/autoload.php';
$app = require_once __DIR__.'/../bootstrap/app.php';
```

**To this**:
```php
require __DIR__.'/../../laravel-backend/vendor/autoload.php';
$app = require_once __DIR__.'/../../laravel-backend/bootstrap/app.php';
```

### Step 6: Set Permissions

**Via cPanel File Manager or FTP**:

Set the following permissions (CHMOD):

```
laravel-backend/storage/           → 755 (recursive)
laravel-backend/storage/logs/      → 755
laravel-backend/storage/framework/ → 755
laravel-backend/bootstrap/cache/   → 755
```

**Via SSH**:
```bash
cd /home/username/laravel-backend
chmod -R 755 storage
chmod -R 755 bootstrap/cache
```

### Step 7: Create .htaccess for Frontend Routing

Create or update `/home/username/public_html/.htaccess`:

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    
    # Force HTTPS
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
    
    # API Routes - Forward to Laravel
    RewriteCond %{REQUEST_URI} ^/api/
    RewriteRule ^api/(.*)$ /api/index.php [L,QSA]
    
    # Frontend Routes - Serve static files
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} !^/api/
    RewriteRule ^(.*)$ /index.html [L,QSA]
    
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

### Step 8: Configure Laravel .env File

Edit `/home/username/laravel-backend/.env` to ensure production settings:

```env
APP_NAME="Cindel Nettoyage API"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://cindelnettoyage.fr

# Database (configure your cPanel MySQL database)
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_user
DB_PASSWORD=your_database_password

# Email Configuration
RESEND_API_KEY=re_fkBf81td_uPD4XVsmDV4aKf5mVZu3pPKD
EMAIL_FROM=onboarding@resend.dev
EMAIL_TO=hadri.abdelmoumen@gmail.com

# CORS Configuration
FRONTEND_URL=https://cindelnettoyage.fr
```

### Step 9: Run Laravel Setup (Via SSH)

If you have SSH access:

```bash
cd /home/username/laravel-backend

# Install/update dependencies (if not done locally)
composer install --no-dev --optimize-autoloader

# Clear and cache config
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear

# Cache for performance
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run database migrations (if using database)
php artisan migrate --force
```

**No SSH Access?**
- Make sure you run `composer install` locally before uploading
- Upload the entire `vendor/` folder

### Step 10: Create Database (If Using MySQL)

1. **In cPanel**:
   - Go to **MySQL Databases**
   - Create a new database: e.g., `username_cindel`
   - Create a new user with a strong password
   - Add user to database with ALL PRIVILEGES
   - Update `.env` file with these credentials

2. **For SQLite** (current setup):
   - Create file: `/home/username/laravel-backend/database/database.sqlite`
   - Set permissions: `chmod 644 database.sqlite`
   - Keep `DB_CONNECTION=sqlite` in `.env`

---

## 🧪 Testing Your Deployment

### Test Frontend:
- Visit: https://cindelnettoyage.fr
- Should load your homepage (index.html)

### Test API:
- Visit: https://cindelnettoyage.fr/api/
- Should return Laravel welcome or API response

### Test Email Endpoint:
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

Expected Response:
```json
{"success":true,"message":"Réservation envoyée avec succès!"}
```

---

## 🔍 Troubleshooting

### Issue: 500 Internal Server Error

**Check**:
1. Laravel error logs: `/home/username/laravel-backend/storage/logs/laravel.log`
2. cPanel Error Log (in cPanel → Metrics → Errors)
3. Verify `.htaccess` syntax
4. Check file permissions (755 for folders, 644 for files)

### Issue: API Routes Not Working

**Solutions**:
1. Verify `/api/` symbolic link or folder exists
2. Check `.htaccess` rewrite rules
3. Ensure `mod_rewrite` is enabled (ask hosting provider)
4. Clear Laravel cache: `php artisan config:clear`

### Issue: CORS Errors

**Check** `/home/username/laravel-backend/config/cors.php`:
```php
'allowed_origins' => [
    'https://cindelnettoyage.fr',
    'https://www.cindelnettoyage.fr',
],
```

### Issue: Static Files Not Loading

**Solutions**:
1. Check that `_next` folder is uploaded completely
2. Verify file permissions (644 for files)
3. Clear browser cache
4. Check `.htaccess` isn't blocking static files

### Issue: Email Not Sending

**Check**:
1. Resend API key in `.env`
2. Laravel logs: `storage/logs/laravel.log`
3. Email recipient matches Resend account (or verify domain)

---

## 📋 Final Directory Structure Verification

After deployment, verify your structure:

```
public_html/
├── .htaccess           ✓ (frontend routing + API proxy)
├── index.html          ✓ (homepage)
├── 404.html            ✓
├── images/             ✓ (all images)
├── _next/              ✓ (Next.js assets)
└── api/                ✓ (symlink or copy of laravel-backend/public)
    └── index.php       ✓ (Laravel entry point)

laravel-backend/        ✓ (outside public_html)
├── app/                ✓
├── config/             ✓
├── storage/            ✓ (writable: 755)
├── vendor/             ✓
├── .env                ✓ (production config)
└── public/             ✓ (source for /api)
```

---

## 🔐 Security Checklist

- [ ] Laravel backend is OUTSIDE `public_html`
- [ ] `.env` file has `APP_DEBUG=false`
- [ ] `.env` file has `APP_ENV=production`
- [ ] Database credentials are secure
- [ ] Storage folders have correct permissions (755)
- [ ] API keys are not exposed in frontend code
- [ ] HTTPS is enforced via `.htaccess`
- [ ] Directory browsing is disabled

---

## 🎉 Success Indicators

✅ Homepage loads at https://cindelnettoyage.fr  
✅ Contact form submits successfully  
✅ Booking form works and sends emails  
✅ No console errors in browser  
✅ API endpoint responds at https://cindelnettoyage.fr/api/  
✅ SSL certificate shows green padlock  

---

## 📞 Support Information

**Created**: 2025-11-06  
**Domain**: https://cindelnettoyage.fr  
**Server**: LiteSpeed (cPanel)  
**Contact Email**: hadri.abdelmoumen@gmail.com

---

## Quick Reference Commands

### Via SSH (if available):
```bash
# Navigate to Laravel
cd /home/username/laravel-backend

# Clear all cache
php artisan optimize:clear

# Cache everything
php artisan optimize

# Check Laravel version
php artisan --version

# View logs
tail -f storage/logs/laravel.log
```

### Via cPanel:
- **File Manager**: Home → File Manager
- **Error Logs**: Metrics → Errors
- **PHP Version**: Software → Select PHP Version
- **Cron Jobs**: Advanced → Cron Jobs (if needed for Laravel scheduler)

---

**End of Deployment Guide**
