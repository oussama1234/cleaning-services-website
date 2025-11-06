# ⚡ Quick Fix Summary - 405 & 404 Errors

## ❌ Current Problem
- 405 Method Not Allowed on API requests
- 404 Route Not Found when submitting forms  
- Backend folder is INSIDE `public_html` (security risk)

## ✅ Solution in 3 Main Steps

### 1️⃣ Move Backend Outside public_html

**Current (WRONG):**
```
public_html/backend/  ❌
```

**Fixed (CORRECT):**
```
/home/username/laravel-backend/  ✅ (outside public_html)
```

**How to do it:**
- In cPanel File Manager, go up one level from `public_html`
- Create folder: `laravel-backend`
- Move all contents from `public_html/backend/` to `laravel-backend/`
- Delete empty `backend/` folder

---

### 2️⃣ Fix API Folder & Paths

**Create proper API link:**

**Via SSH:**
```bash
cd /home/username/public_html
rm -rf api/
ln -s ../laravel-backend/public api
```

**OR Via cPanel (No SSH):**
1. Delete `public_html/api/` folder
2. Copy `laravel-backend/public/` contents to `public_html/api/`
3. Edit `public_html/api/index.php`:

**Change lines 17-18 from:**
```php
require __DIR__.'/../vendor/autoload.php';
$app = require_once __DIR__.'/../bootstrap/app.php';
```

**To:**
```php
require __DIR__.'/../../laravel-backend/vendor/autoload.php';
$app = require_once __DIR__.'/../../laravel-backend/bootstrap/app.php';
```

---

### 3️⃣ Upload Correct .htaccess Files

**A) Upload to `public_html/.htaccess`:**

Located in your project at: `D:\Cleaning-Services-Website\out\.htaccess`

**B) Create `public_html/api/.htaccess`:**

Located in your project at: `D:\Cleaning-Services-Website\api-htaccess.txt`

Rename it to `.htaccess` when uploading to `/public_html/api/`

---

## 🎯 Files You Need to Upload

### From `D:\Cleaning-Services-Website\`:

1. **`out/.htaccess`** → Upload to `/public_html/.htaccess`
2. **`api-htaccess.txt`** → Rename and upload as `/public_html/api/.htaccess`

---

## ✅ Verification Steps

After making changes:

1. **Test Homepage:**
   - Visit: https://cindelnettoyage.fr
   - Should load ✓

2. **Test API Directly:**
   - Visit: https://cindelnettoyage.fr/api/index.php
   - Should NOT give 405 or 500 error

3. **Test Form Submission:**
   - Submit booking form on website
   - Should get success message

4. **Check Permissions:**
   - Set `laravel-backend/storage/` to 755
   - Set `laravel-backend/bootstrap/cache/` to 755

5. **Clear Laravel Cache (If SSH available):**
```bash
cd /home/username/laravel-backend
php artisan config:clear
php artisan route:clear
```

---

## 📋 Final Structure

```
/home/username/
│
├── laravel-backend/           ✅ Outside public_html
│   ├── app/
│   ├── bootstrap/
│   ├── config/
│   ├── public/
│   │   └── index.php
│   ├── routes/
│   │   └── api.php          (has /booking, /contact routes)
│   ├── storage/              (755 permissions)
│   ├── vendor/
│   └── .env
│
└── public_html/               ✅ Web root  
    ├── .htaccess              ✅ Routes /api/* to Laravel
    ├── index.html             ✅ Static frontend
    ├── images/
    ├── _next/
    └── api/                   ✅ Symlink or copy of laravel-backend/public/
        ├── .htaccess          ✅ Laravel routing
        └── index.php          ✅ Correct paths to laravel-backend/
```

---

## 🆘 Still Having Issues?

### Check Laravel Logs:
```
laravel-backend/storage/logs/laravel.log
```

### Test API Works:
```bash
# Test if API loads
curl https://cindelnettoyage.fr/api/

# Test booking endpoint
curl -X POST https://cindelnettoyage.fr/api/booking \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"+33612345678","email":"test@test.com","service":"Test","date":"2025-11-15","time":"14:00"}'
```

### Common Issues:

**Still 405?**
- Check both .htaccess files are uploaded
- Verify mod_rewrite is enabled (ask hosting)
- Check index.php paths

**Still 404?**  
- Run: `php artisan route:list` to see routes
- Clear cache: `php artisan config:clear`
- Check routes exist in `laravel-backend/routes/api.php`

---

## 📞 Support
Full documentation: `FIX_DEPLOYMENT_ERRORS.md`

**Email**: hadri.abdelmoumen@gmail.com
