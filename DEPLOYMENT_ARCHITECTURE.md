# 🏗️ Deployment Architecture - cindelnettoyage.fr

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              https://cindelnettoyage.fr                         │
│                   (LiteSpeed/cPanel)                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    .htaccess Router                             │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ IF /api/* → Forward to Laravel                            │  │
│  │ ELSE      → Serve static HTML/CSS/JS                      │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                    │                      │
         ┌──────────┘                      └──────────┐
         ▼                                            ▼
┌─────────────────────┐                  ┌─────────────────────┐
│  Static Frontend    │                  │   Laravel API       │
│  (public_html/)     │                  │  (via /api/)        │
├─────────────────────┤                  ├─────────────────────┤
│ • index.html        │                  │ • POST /booking     │
│ • 404.html          │                  │ • POST /contact     │
│ • images/           │                  │                     │
│ • _next/            │                  │ Resend Email API    │
│ • manifest.json     │                  │        ↓            │
│ • robots.txt        │                  │   📧 Email Sent     │
│ • sitemap.xml       │                  │                     │
└─────────────────────┘                  └─────────────────────┘
```

---

## Directory Mapping

### Local → cPanel Mapping

```
LOCAL MACHINE                         cPANEL SERVER
════════════════════════              ══════════════════════════════

D:\Cleaning-Services-Website\        /home/username/
│                                     │
├─ out/                   ──────────▶ ├─ public_html/
│  ├─ .htaccess                       │  ├─ .htaccess
│  ├─ index.html                      │  ├─ index.html
│  ├─ 404.html                        │  ├─ 404.html
│  ├─ images/                         │  ├─ images/
│  ├─ _next/                          │  ├─ _next/
│  └─ manifest.json                   │  ├─ manifest.json
│                                     │  └─ api/ ─────┐ (symlink)
│                                     │               │
├─ laravel-backend/       ──────────▶ ├─ laravel-backend/
   ├─ app/                               ├─ app/
   ├─ config/                            ├─ config/
   ├─ public/ ◀──────────────────────────┼─ public/ ◀─┘
   │  └─ index.php                       │  └─ index.php
   ├─ routes/                            ├─ routes/
   ├─ storage/                           ├─ storage/
   ├─ vendor/                            ├─ vendor/
   └─ .env                               └─ .env
```

---

## Request Flow

### 1. User Visits Homepage

```
User Browser
    │
    ↓ GET https://cindelnettoyage.fr/
    │
[public_html/.htaccess]
    │
    ├─ Check: Is it /api/* ? → NO
    │
    ↓ Serve static file
    │
[public_html/index.html]
    │
    ↓ Return HTML + Assets
    │
User sees homepage ✓
```

### 2. User Submits Booking Form

```
User Browser (Frontend)
    │
    ↓ POST https://cindelnettoyage.fr/api/booking
    │  {name, phone, email, service, date, time}
    │
[public_html/.htaccess]
    │
    ├─ Check: Is it /api/* ? → YES
    │
    ↓ Forward to Laravel
    │
[public_html/api/index.php] (symlink to laravel-backend/public/)
    │
    ↓ Load Laravel
    │
[laravel-backend/routes/api.php]
    │
    ↓ Route: POST /booking → BookingController@store
    │
[laravel-backend/app/Http/Controllers/Api/BookingController.php]
    │
    ↓ Validate data
    │
[laravel-backend/app/Services/EmailService.php]
    │
    ↓ Send email via Resend API
    │
[Resend API]
    │
    ↓ Email delivered
    │
hadri.abdelmoumen@gmail.com ✉️ ✓
    │
    ↓ Return JSON response
    │
{"success": true, "message": "Réservation envoyée avec succès!"}
    │
    ↓ Display success message
    │
User sees confirmation ✓
```

### 3. User Visits Invalid Page

```
User Browser
    │
    ↓ GET https://cindelnettoyage.fr/invalid-page/
    │
[public_html/.htaccess]
    │
    ├─ Check: Does file exist? → NO
    ├─ Check: Is it /api/* ? → NO
    │
    ↓ Fallback to index.html
    │
[public_html/index.html]
    │
    ↓ Next.js handles routing
    │
User sees 404 page ✓
```

---

## URL Structure

| URL | Handler | Response |
|-----|---------|----------|
| `https://cindelnettoyage.fr/` | Static HTML | Homepage |
| `https://cindelnettoyage.fr/about` | Static HTML (fallback) | About page |
| `https://cindelnettoyage.fr/images/logo.png` | Static File | Image |
| `https://cindelnettoyage.fr/_next/...` | Static File | JS/CSS Assets |
| `https://cindelnettoyage.fr/api/` | Laravel | API Response |
| `https://cindelnettoyage.fr/api/booking` | Laravel Controller | JSON Response |
| `https://cindelnettoyage.fr/api/contact` | Laravel Controller | JSON Response |

---

## Security Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Security Layers                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. HTTPS/SSL (LiteSpeed)                                   │
│     └─ All traffic encrypted                                │
│                                                             │
│  2. .htaccess                                               │
│     ├─ Force HTTPS redirect                                 │
│     ├─ Disable directory browsing                           │
│     └─ Security headers (X-Frame-Options, etc.)             │
│                                                             │
│  3. Laravel Backend (Outside public_html)                   │
│     ├─ Source code not web-accessible                       │
│     ├─ Only /public folder exposed via /api                 │
│     └─ .env file protected                                  │
│                                                             │
│  4. Laravel Validation                                      │
│     ├─ Input validation (BookingController)                 │
│     ├─ CSRF protection (if needed)                          │
│     └─ Rate limiting (configurable)                         │
│                                                             │
│  5. CORS Configuration                                      │
│     └─ Only cindelnettoyage.fr allowed                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Technology Stack

### Frontend (Static)
- **Framework**: Next.js 16 (exported as static HTML)
- **Styling**: Tailwind CSS
- **Animations**: GSAP
- **Build Output**: HTML, CSS, JS (no Node.js runtime needed)

### Backend (API)
- **Framework**: Laravel 11
- **Runtime**: PHP (cPanel built-in)
- **Database**: SQLite (or MySQL)
- **Email**: Resend API

### Server
- **Web Server**: LiteSpeed
- **Hosting**: cPanel
- **SSL**: Let's Encrypt (cPanel Auto SSL)
- **Domain**: cindelnettoyage.fr

---

## File Size Reference

```
Total Deployment Size: ~2.78 MB (frontend) + Laravel backend

Frontend (out/):
├─ HTML Files:        ~50 KB
├─ JavaScript:        ~1.5 MB
├─ CSS:              ~200 KB
├─ Images:           ~1 MB
└─ Other:            ~30 KB

Laravel Backend:
├─ Vendor (~20-50 MB depending on packages)
├─ Source Code (~5 MB)
└─ Storage/Cache (minimal)
```

---

## Environment Variables

### Frontend (.env.production)
```env
NEXT_PUBLIC_LARAVEL_API_URL=https://cindelnettoyage.fr/api
NEXT_PUBLIC_APP_URL=https://cindelnettoyage.fr
```

### Backend (laravel-backend/.env)
```env
APP_URL=https://cindelnettoyage.fr
FRONTEND_URL=https://cindelnettoyage.fr
RESEND_API_KEY=re_***
EMAIL_TO=hadri.abdelmoumen@gmail.com
```

---

## Performance Optimizations

- ✓ Static HTML (no server-side rendering)
- ✓ Gzip compression enabled
- ✓ Browser caching (1 year for images, 1 month for CSS/JS)
- ✓ Optimized images (unoptimized flag for Next.js)
- ✓ Laravel config/route caching
- ✓ CDN-ready architecture

---

**Last Updated**: 2025-11-06
