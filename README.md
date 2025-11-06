# Cleaning Services Website - Cindel Nettoyage

Professional cleaning services website built with Next.js and Laravel.

🌐 **Live Site**: [https://cindelnettoyage.fr](https://cindelnettoyage.fr)

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 16 (Static Export)
- **Styling**: Tailwind CSS
- **Animations**: GSAP
- **Language**: JavaScript/JSX

### Backend
- **Framework**: Laravel 12
- **Language**: PHP 8.3
- **Email Service**: Resend API
- **Database**: SQLite (configurable to MySQL)

## 📁 Project Structure

```
cleaning-services-website/
├── src/                          # Next.js source code
│   ├── app/
│   │   ├── components/          # React components
│   │   ├── utils/               # Utility functions
│   │   ├── layout.tsx           # Root layout
│   │   └── page.jsx             # Homepage
│   └── lib/                     # Libraries
│
├── laravel-backend/             # Laravel API
│   ├── app/
│   │   ├── Http/Controllers/Api/
│   │   │   ├── BookingController.php
│   │   │   └── ContactController.php
│   │   └── Services/
│   │       └── EmailService.php
│   ├── routes/
│   │   ├── web.php             # API routes
│   │   └── api.php
│   └── config/
│
├── public/                      # Static assets
│   └── images/
│
├── out/                         # Production build (generated)
│
└── Documentation files          # Deployment guides
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ and npm
- PHP 8.1+ and Composer
- Git

### Frontend Setup

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# The output will be in the /out folder
```

### Backend Setup

```bash
cd laravel-backend

# Install dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Run migrations (if using database)
php artisan migrate

# Start development server
php artisan serve
```

### Environment Variables

**Frontend** (`.env.production`):
```env
NEXT_PUBLIC_LARAVEL_API_URL=https://cindelnettoyage.fr/api
NEXT_PUBLIC_APP_URL=https://cindelnettoyage.fr
```

**Backend** (`laravel-backend/.env`):
```env
APP_NAME="Cindel Nettoyage API"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://cindelnettoyage.fr

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=onboarding@resend.dev
EMAIL_TO=your@email.com

FRONTEND_URL=https://cindelnettoyage.fr
```

## 📦 Deployment

### cPanel Deployment (Static Site + Laravel API)

1. **Build Frontend**:
   ```bash
   npm run build
   ```

2. **Upload Files**:
   - Upload `out/` folder contents to `public_html/`
   - Upload `laravel-backend/` folder to `/home/username/laravel-backend/` (outside public_html)

3. **Configure Laravel**:
   - Copy `laravel-backend/public/` to `public_html/api/` (or create symlink)
   - Update paths in `public_html/api/index.php`
   - Set permissions: `chmod -R 755 storage bootstrap/cache`

4. **Clear Cache**:
   ```bash
   php artisan optimize:clear
   ```

See `CPANEL_DEPLOYMENT_GUIDE.md` for detailed instructions.

## 🔧 API Endpoints

### Booking Endpoint
```
POST /api/booking
Content-Type: application/json

{
  "name": "John Doe",
  "phone": "+33612345678",
  "email": "john@example.com",
  "service": "Nettoyage de bureaux",
  "date": "2025-11-15",
  "time": "14:00"
}
```

### Contact Endpoint
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+33612345678",
  "reason": "booking",
  "message": "Your message here"
}
```

## 🎨 Features

- ✅ Responsive design (mobile-first)
- ✅ Professional animations (GSAP)
- ✅ Contact & booking forms
- ✅ Email notifications (Resend API)
- ✅ SEO optimized
- ✅ Static site generation
- ✅ CORS configured
- ✅ Security headers
- ✅ Cookie consent
- ✅ Legal modals (Privacy, Terms, Cookies)

## 📄 Documentation

- `CPANEL_DEPLOYMENT_GUIDE.md` - Complete cPanel deployment guide
- `DEPLOYMENT_CHECKLIST.md` - Quick deployment checklist
- `DEPLOYMENT_ARCHITECTURE.md` - Technical architecture details
- `FIX_DEPLOYMENT_ERRORS.md` - Troubleshooting guide

## 🧪 Testing

```bash
# Run Laravel tests
cd laravel-backend
php artisan test

# Test email functionality
npm run test:email
```

## 📝 License

Private project - All rights reserved

## 👤 Author

Oussama Meq

## 📞 Support

For support, contact: hadri.abdelmoumen@gmail.com

---

**Built with ❤️ for Cindel Nettoyage**
