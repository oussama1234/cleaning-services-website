# InClean - Professional Cleaning Service Landing Page

A pixel-perfect, fully animated one-page landing website for a professional cleaning company. Built with Next.js (App Router), Tailwind CSS, and GSAP animations.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14+ (App Router), React 18+, Tailwind CSS, GSAP, lucide-react
- **Full GSAP Animations**: Timeline-based animations with ScrollTrigger for all sections
- **Responsive Design**: Mobile-first approach, works on all devices
- **Accessibility**: Semantic HTML, ARIA attributes, keyboard navigation, focus outlines
- **Hero Carousel**: Auto-playing carousel with progress dots and GSAP transitions
- **Progressive Form**: Booking form with step-by-step reveal and confetti success animation
- **Testimonials Carousel**: Auto-playing testimonials with typewriter-like text animation
- **Contact Forms**: Floating label animations, accessible validation
- **Micro-interactions**: Button ripple effects, hover animations, icon movements
- **API Routes**: Backend stubs for booking and contact form submissions

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🖼️ Image Placeholders

The project requires the following images. Place them in `public/images/` directory:

### Hero Carousel (3 images)
- `hero-1.jpg` - Professional cleaning woman with cleaning supplies
- `hero-2.jpg` - Cleaning professional in action
- `hero-3.jpg` - Happy cleaning service provider

### About Section (3 images)
- `about-1.jpg` - Professional cleaning service
- `about-2.jpg` - Eco-friendly cleaning products
- `about-3.jpg` - Experienced cleaning team

### Services (8 images)
- `service-1.jpg` - Home cleaning service
- `service-2.jpg` - Office cleaning service
- `service-3.jpg` - Deep cleaning service
- `service-4.jpg` - Window cleaning service
- `service-5.jpg` - Garden/outdoor cleaning
- `service-6.jpg` - Upholstery cleaning
- `service-7.jpg` - Move-out cleaning
- `service-8.jpg` - Sanitization service

### Testimonials (4 avatar images)
- `avatar-1.jpg` - Customer avatar 1
- `avatar-2.jpg` - Customer avatar 2
- `avatar-3.jpg` - Customer avatar 3
- `avatar-4.jpg` - Customer avatar 4

### AI Image Generation Prompt

Use this prompt to generate consistent images:

```
"Photorealistic portrait of a professional cleaning woman holding a spray bottle and microfiber cloth, bright studio lighting, clean uniform with subtle company logo, neutral soft background, high resolution, natural pose, smiling, carrying cleaning supplies"
```

For service images, vary the prompt to show specific cleaning activities (office cleaning, window cleaning, etc.).

## 🎨 Design System

### Colors
- **Primary**: `#0f766e` (Teal) - Main brand color
- **Accent**: `#F59E0B` (Amber) - Call-to-action buttons
- **Background**: `#ffffff` (White)
- **Muted**: `#F3F4F6` (Light gray)
- **Card**: `#F8FAFC` (Very light gray)

### Typography
- **Font**: Inter system font stack
- **Headings**: Bold with generous line-height
- **Body**: Regular weight, comfortable reading size

### Design Principles
- Flat design aesthetic
- 2xl rounded corners for cards
- Subtle shadows
- Clean, modern, professional look

## 🎬 GSAP Animations

### Implementation Details

All animations use GSAP for hardware-accelerated performance:

1. **Hero Carousel**
   - Slide-in animations with staggered text reveals
   - Progress bar animations synced to autoplay timer
   - Character-by-character heading animations

2. **Scroll Animations**
   - ScrollTrigger with `start: "top 80%"`
   - Staggered reveals for service cards
   - Fade-up animations for sections

3. **Button Interactions**
   - Ripple "bomb" effect on click
   - Scale and pulse animations
   - Hover state transitions

4. **Form Animations**
   - Progressive reveal on input completion
   - Confetti success animation
   - Floating label transitions

### Animation Timings

To adjust animation timings, look for these common patterns in component files:

```javascript
// Example timeline
const tl = gsap.timeline();
tl.from(element, { 
  y: 40,                    // Adjust vertical movement
  opacity: 0,               // Fade effect
  duration: 0.8,            // Animation duration
  ease: 'power3.out',       // Easing function
  stagger: 0.15             // Delay between multiple elements
});
```

## 📱 Sections

1. **Header/Navigation** - Sticky header with blur effect and mobile menu
2. **Hero Carousel** - Full-width carousel with autoplay and manual controls
3. **CTA Card** - Phone call-to-action with hover animations
4. **About Section** - Company info with feature chips and image collage
5. **Services Grid** - 8 service cards with pricing and booking CTAs
6. **Promo Banner** - Special offer with animated sweep effect
7. **Pricing Plans** - 3 pricing tiers with ripple button effects
8. **Booking Form** - Progressive microform with success animation
9. **Testimonials** - Auto-playing carousel with ratings
10. **Contact Section** - Contact details and animated form
11. **Footer** - Links, newsletter signup, social icons

## 🔧 Configuration

### Contact Information

Update contact details in the following files:

- `src/app/components/Header.jsx` - Phone number in CTAs
- `src/app/components/HeroCarousel.jsx` - Phone numbers in slides array
- `src/app/components/CTACard.jsx` - Phone number and display
- `src/app/components/ContactSection.jsx` - Phone, email, address
- `src/app/components/Footer.jsx` - Footer contact info

### Service Configuration

Modify services in `src/app/components/ServicesGrid.jsx`:

```javascript
const services = [
  {
    id: 1,
    icon: Home,
    title: 'Service Name',
    description: 'Service description',
    price: '$XX - $XXX',
    time: 'X-Xh',
    image: '/images/service-X.jpg',
  },
  // ...
];
```

### API Endpoints

The booking and contact forms submit to:

- `/api/book` - Booking form submissions
- `/api/contact` - Contact form submissions

Replace the stub implementations in:
- `src/app/api/book/route.js`
- `src/app/api/contact/route.js`

**Production Integration**:
- Add database connection (MongoDB, PostgreSQL, etc.)
- Integrate email service (SendGrid, Resend, etc.)
- Add SMS notifications (Twilio, etc.)
- Connect to CRM system
- Implement calendar/scheduling integration

## ♿ Accessibility

- All interactive elements are keyboard navigable
- ARIA labels on navigation controls and form inputs
- Semantic HTML structure (h1, h2, h3, section, nav, etc.)
- Focus visible outlines on all interactive elements
- Form validation with `aria-invalid` and `aria-live` regions
- Alt text on all images
- Proper heading hierarchy

## 📦 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── HeroCarousel.jsx
│   │   ├── CTACard.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── ServicesGrid.jsx
│   │   ├── PromoBanner.jsx
│   │   ├── PricingPlans.jsx
│   │   ├── BookingCard.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── api/
│   │   ├── book/
│   │   │   └── route.js
│   │   └── contact/
│   │       └── route.js
│   ├── globals.css
│   ├── layout.tsx
│   └── page.jsx
public/
├── images/
│   ├── hero-1.jpg
│   ├── service-1.jpg
│   ├── avatar-1.jpg
│   └── ...
tailwind.config.js
package.json
README.md
```

## 🚀 Deployment

The project is ready to deploy on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting**

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📝 Notes

- All icons are from lucide-react (no other icon libraries used)
- GSAP animations are hardware-accelerated (transform/opacity only)
- Smooth scrolling is enabled globally
- Images use Next.js Image component for optimization
- Mobile-responsive with appropriate breakpoints

## 🔨 Development Tips

1. **Add New Service**: Edit `ServicesGrid.jsx` services array
2. **Change Colors**: Update `tailwind.config.js` color values
3. **Adjust Animations**: Modify GSAP timeline parameters in component files
4. **Update Content**: Edit text directly in component JSX
5. **Add Sections**: Create new component and import in `page.jsx`

## 📄 License

This project is created for demonstration purposes. Modify and use as needed.

## 🤝 Support

For questions or issues:
- Check component comments for animation details
- Review GSAP documentation: https://greensock.com/docs/
- Tailwind CSS docs: https://tailwindcss.com/docs

---

**Built with ❤️ using Next.js, GSAP, and Tailwind CSS**
