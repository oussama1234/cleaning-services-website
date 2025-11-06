# Quick Start Guide - InClean Landing Page

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` (or the port shown in terminal)

### 3. View the Site
The site is now running with all sections:
- ✅ Header with sticky navigation
- ✅ Hero carousel with autoplay
- ✅ CTA card
- ✅ About section
- ✅ 8 service cards
- ✅ Promo banner
- ✅ 3 pricing plans
- ✅ Progressive booking form
- ✅ Testimonials carousel
- ✅ Contact section with form
- ✅ Footer with newsletter

## 📸 Replace Placeholder Images

Currently using SVG placeholders. Replace with real images:

```bash
# Images needed in public/images/:
- hero-1.jpg, hero-2.jpg, hero-3.jpg (carousel)
- about-1.jpg, about-2.jpg, about-3.jpg (about section)
- service-1.jpg through service-8.jpg (services)
- avatar-1.jpg through avatar-4.jpg (testimonials)
```

Use the AI image prompt from README.md to generate professional images.

## ⚙️ Quick Customization

### Change Phone Number
Search and replace `+1-234-567-8900` in:
- `src/app/components/Header.jsx`
- `src/app/components/HeroCarousel.jsx`
- `src/app/components/CTACard.jsx`
- `src/app/components/ContactSection.jsx`
- `src/app/components/Footer.jsx`

### Change Company Name
Search and replace `InClean` across all files.

### Update Services
Edit `src/app/components/ServicesGrid.jsx`:
- Modify the `services` array
- Update titles, descriptions, prices, times

### Adjust Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#0f766e',  // Your brand color
  accent: '#F59E0B',   // CTA buttons
}
```

## 🎬 Animation Controls

All animations use GSAP. Common parameters to adjust:

- **Duration**: `duration: 0.8` (in seconds)
- **Delay**: `delay: 0.2` or `stagger: 0.15`
- **Easing**: `ease: 'power3.out'` (try: power1-4, back, elastic)
- **Distance**: `y: 40` (pixels to move)

Find these in each component's `useEffect` hooks.

## 🧪 Test Features

1. **Header Navigation**: Click menu items → smooth scroll to sections
2. **Hero Carousel**: Wait 6s for auto-advance, or click prev/next
3. **Booking Form**: Fill fields → auto-advances → submit → confetti!
4. **Contact Form**: Fill and submit → success message
5. **Mobile Menu**: Resize to mobile → hamburger menu appears

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚨 Common Issues

**Issue**: Images not showing
- **Fix**: Run `npm run generate-images` or add your own images

**Issue**: Animations not working
- **Fix**: GSAP should auto-install. Clear node_modules and reinstall.

**Issue**: Forms not submitting
- **Fix**: API routes at `/api/book` and `/api/contact` are stubs. Check console logs.

**Issue**: Port 3000 in use
- **Fix**: Next.js will auto-use next available port (3001, 3002, etc.)

## 📚 Next Steps

1. Replace placeholder images with professional photos
2. Configure API routes to send emails (use Resend, SendGrid, etc.)
3. Add Google Analytics or tracking
4. Set up database for bookings (optional)
5. Deploy to Vercel, Netlify, or your hosting

## 🎯 Key Technologies

- **Next.js 14**: App Router with React Server Components
- **GSAP**: Premium animation library with ScrollTrigger
- **Tailwind CSS**: Utility-first CSS framework
- **lucide-react**: Icon library (only one used per requirements)

## 💡 Tips

- All components are in `src/app/components/`
- Main page assembly is in `src/app/page.jsx`
- API routes are in `src/app/api/`
- Global styles in `src/app/globals.css`
- Tailwind config in `tailwind.config.js`

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- Review component comments for animation details
- Visit GSAP docs: https://greensock.com/docs/
- Tailwind docs: https://tailwindcss.com/docs

---

**Happy Building! 🎉**
