# 🚀 Quick Deployment Checklist - cindelnettoyage.fr

## Pre-Upload Checklist
- [ ] Built Next.js frontend (`npm run build` completed)
- [ ] `out/` folder exists with all files
- [ ] `.htaccess` file is in `out/` folder
- [ ] Laravel `.env` configured for production
- [ ] Composer dependencies installed (`vendor/` folder exists)

---

## Upload Steps

### 1️⃣ Upload Laravel Backend
**Location**: `/home/username/laravel-backend/`

**Upload these folders/files**:
```
✓ app/
✓ bootstrap/
✓ config/
✓ database/
✓ public/
✓ resources/
✓ routes/
✓ storage/
✓ vendor/
✓ .env
✓ artisan
✓ composer.json
✓ composer.lock
```

### 2️⃣ Upload Frontend Static Files
**Location**: `/home/username/public_html/`

**Upload everything from `out/` folder**:
```
✓ .htaccess
✓ index.html
✓ 404.html
✓ icon.svg
✓ manifest.json
✓ robots.txt
✓ sitemap.xml
✓ images/ (folder)
✓ _next/ (folder)
✓ 404/ (folder)
✓ _not-found/ (folder)
```

### 3️⃣ Create API Link
**Choose one method**:

**Option A - SSH**:
```bash
cd /home/username/public_html
ln -s ../laravel-backend/public api
```

**Option B - Manual Copy**:
- Copy `/laravel-backend/public/` to `/public_html/api/`
- Edit `/public_html/api/index.php` (update paths as per guide)

---

## Post-Upload Configuration

### 4️⃣ Set Permissions
```
laravel-backend/storage/           → 755
laravel-backend/bootstrap/cache/   → 755
```

### 5️⃣ Run Laravel Commands (if SSH available)
```bash
cd /home/username/laravel-backend
php artisan config:clear
php artisan config:cache
php artisan route:cache
```

---

## Testing Checklist

- [ ] Visit https://cindelnettoyage.fr (homepage loads)
- [ ] Check browser console (no errors)
- [ ] Visit https://cindelnettoyage.fr/api/ (Laravel responds)
- [ ] Test contact form (submits successfully)
- [ ] Test booking form (submits successfully)
- [ ] Check email received at hadri.abdelmoumen@gmail.com
- [ ] Test on mobile device
- [ ] Verify HTTPS (green padlock)

---

## Important File Locations Summary

| What | Local Path | cPanel Path |
|------|------------|-------------|
| Laravel Backend | `D:\Cleaning-Services-Website\laravel-backend\` | `/home/username/laravel-backend/` |
| Frontend Files | `D:\Cleaning-Services-Website\out\` | `/home/username/public_html/` |
| .htaccess | `D:\Cleaning-Services-Website\out\.htaccess` | `/home/username/public_html/.htaccess` |
| Laravel .env | `D:\Cleaning-Services-Website\laravel-backend\.env` | `/home/username/laravel-backend/.env` |

---

## Key URLs After Deployment

- **Homepage**: https://cindelnettoyage.fr
- **API Base**: https://cindelnettoyage.fr/api/
- **Booking Endpoint**: https://cindelnettoyage.fr/api/booking
- **Contact Endpoint**: https://cindelnettoyage.fr/api/contact

---

## Troubleshooting Quick Fixes

### 500 Error
1. Check Laravel logs: `laravel-backend/storage/logs/laravel.log`
2. Verify permissions: `storage/` = 755
3. Clear cache: `php artisan config:clear`

### API Not Working
1. Verify `/api/` folder exists in `public_html`
2. Check `.htaccess` in `public_html`
3. Test directly: `https://cindelnettoyage.fr/api/index.php`

### CORS Error
1. Check `laravel-backend/config/cors.php`
2. Ensure `FRONTEND_URL=https://cindelnettoyage.fr` in `.env`
3. Clear Laravel cache

---

## Contact
**Email**: hadri.abdelmoumen@gmail.com  
**Domain**: https://cindelnettoyage.fr

**Deployment Date**: _____________
