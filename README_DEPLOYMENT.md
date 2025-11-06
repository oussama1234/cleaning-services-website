# 📦 Deployment Package - cindelnettoyage.fr

## 🎯 Quick Overview

This package contains a complete cleaning services website ready for cPanel deployment.

- **Domain**: https://cindelnettoyage.fr
- **Frontend**: Static HTML/CSS/JS (Next.js exported)
- **Backend**: Laravel API (PHP)
- **No Node.js required on server** ✓

---

## 📂 What You Have

### 1. `out/` folder → Upload to `public_html/`
Contains the complete static website:
- ✓ Homepage (index.html)
- ✓ All pages and assets
- ✓ .htaccess (routing configuration)
- **Size**: 2.78 MB, 57 files

### 2. `laravel-backend/` folder → Upload to `/home/username/laravel-backend/`
Contains the API backend:
- ✓ Laravel application
- ✓ Email service (Resend API)
- ✓ Production .env configured
- **IMPORTANT**: Keep outside public_html for security

### 3. Documentation Files
- `CPANEL_DEPLOYMENT_GUIDE.md` - Complete step-by-step guide
- `DEPLOYMENT_CHECKLIST.md` - Quick checklist
- `DEPLOYMENT_ARCHITECTURE.md` - Technical architecture
- `test-email-endpoints.ps1` - Testing script

---

## 🚀 Simple 3-Step Deployment

### Step 1: Upload Laravel Backend
```
Location: /home/username/laravel-backend/
Upload:   Entire laravel-backend/ folder
```

### Step 2: Upload Frontend
```
Location: /home/username/public_html/
Upload:   Everything from out/ folder
```

### Step 3: Link API
```bash
# Via SSH (Recommended):
cd /home/username/public_html
ln -s ../laravel-backend/public api

# Or manually copy laravel-backend/public/ to public_html/api/
```

---

## ✅ What's Already Configured

- ✓ Production environment variables
- ✓ CORS settings (cindelnettoyage.fr allowed)
- ✓ Email service (Resend API)
- ✓ Static export optimized
- ✓ HTTPS forcing (.htaccess)
- ✓ Security headers
- ✓ Caching rules

---

## 🔗 URLs After Deployment

| Purpose | URL |
|---------|-----|
| Homepage | https://cindelnettoyage.fr |
| API Booking | https://cindelnettoyage.fr/api/booking |
| API Contact | https://cindelnettoyage.fr/api/contact |

---

## 📋 Post-Deployment Checklist

After uploading files:

1. [ ] Set permissions: `storage/` and `bootstrap/cache/` to 755
2. [ ] Test homepage loads
3. [ ] Test booking form
4. [ ] Test contact form
5. [ ] Verify email received at hadri.abdelmoumen@gmail.com

---

## 🆘 Need Help?

### Quick Troubleshooting

**500 Error?**
- Check Laravel logs: `laravel-backend/storage/logs/laravel.log`
- Verify permissions on storage folder (755)

**API Not Working?**
- Verify `/api/` folder exists in public_html
- Check `.htaccess` is uploaded

**Email Not Sending?**
- Verify Resend API key in `laravel-backend/.env`
- Check Laravel logs

---

## 📚 Full Documentation

For detailed instructions, see:
- **`CPANEL_DEPLOYMENT_GUIDE.md`** - Complete deployment guide
- **`DEPLOYMENT_CHECKLIST.md`** - Step-by-step checklist
- **`DEPLOYMENT_ARCHITECTURE.md`** - Technical details

---

## 📞 Support

**Email**: hadri.abdelmoumen@gmail.com  
**Domain**: https://cindelnettoyage.fr  
**Created**: 2025-11-06

---

## 🎉 You're Ready!

Everything is built and configured. Just upload to cPanel and your website will be live!

**Good luck with your deployment! 🚀**
