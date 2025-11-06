# Deployment Guide

## ✅ Pre-Deployment Checklist

Before deploying, ensure:

- [ ] Replace all placeholder images with professional photos
- [ ] Update contact information (phone, email, address)
- [ ] Configure API routes for real email/database integration
- [ ] Test all forms and interactions
- [ ] Update company name and branding
- [ ] Add Google Analytics or tracking (optional)
- [ ] Set up environment variables
- [ ] Test responsive design on mobile/tablet
- [ ] Run production build locally: `npm run build && npm start`
- [ ] Check accessibility with browser DevTools

## 🚀 Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js apps.

### Method 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Method 2: Using GitHub

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel auto-detects Next.js and deploys

### Environment Variables (Vercel)

Add these in Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
RESEND_API_KEY=your_email_api_key
DATABASE_URL=your_database_url
```

## 🌐 Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Build and deploy
npm run build
netlify deploy --prod --dir=.next
```

Or connect your GitHub repo at [netlify.com](https://netlify.com)

### Build Settings (Netlify)

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Functions directory**: `netlify/functions` (if using)

## ☁️ Deploy to AWS Amplify

1. Visit [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Connect your Git repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Output directory**: `.next`
5. Deploy

## 🐳 Deploy with Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t inclean-website .
docker run -p 3000:3000 inclean-website
```

## 🖥️ Deploy to VPS (DigitalOcean, Linode, etc.)

### 1. Setup Server

```bash
# SSH into your server
ssh user@your-server-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2
```

### 2. Deploy Application

```bash
# Clone your repository
git clone https://github.com/yourusername/inclean-website.git
cd inclean-website

# Install dependencies
npm ci --only=production

# Build
npm run build

# Start with PM2
pm2 start npm --name "inclean" -- start

# Save PM2 config
pm2 save
pm2 startup
```

### 3. Setup Nginx Reverse Proxy

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 4. Setup SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## 📧 Email Integration (Post-Deployment)

### Option 1: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Get API key
3. Install: `npm install resend`
4. Update `src/app/api/book/route.js`:

```javascript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const body = await request.json();
  
  await resend.emails.send({
    from: 'bookings@yourdomain.com',
    to: 'admin@yourdomain.com',
    subject: 'New Booking',
    html: `<p>New booking from ${body.name}</p>`
  });
  
  return NextResponse.json({ success: true });
}
```

### Option 2: SendGrid

```bash
npm install @sendgrid/mail
```

```javascript
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
```

### Option 3: Nodemailer (SMTP)

```bash
npm install nodemailer
```

```javascript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

## 💾 Database Integration

### Option 1: MongoDB Atlas

```bash
npm install mongodb
```

### Option 2: PostgreSQL (Supabase)

```bash
npm install @supabase/supabase-js
```

### Option 3: Prisma ORM

```bash
npm install prisma @prisma/client
npx prisma init
```

## 🔒 Environment Variables

Create `.env.local` for local development:

```bash
# API Keys
RESEND_API_KEY=your_key_here
SENDGRID_API_KEY=your_key_here

# Database
DATABASE_URL=your_database_url

# Site Config
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PHONE=+1-234-567-8900
NEXT_PUBLIC_EMAIL=info@yourdomain.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Important**: Never commit `.env.local` to Git!

## 📊 Add Analytics

### Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `src/app/layout.tsx`:

```javascript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## 🔍 SEO Optimization

Update `src/app/layout.tsx`:

```javascript
export const metadata = {
  title: 'InClean - Professional Cleaning Services',
  description: 'Expert cleaning services for your home and office. Book now for 10% off!',
  keywords: 'cleaning services, home cleaning, office cleaning, professional cleaners',
  openGraph: {
    title: 'InClean - Professional Cleaning Services',
    description: 'Expert cleaning services for your home and office.',
    url: 'https://yourdomain.com',
    siteName: 'InClean',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};
```

## 🚦 Performance Optimization

```bash
# Analyze bundle size
npm run build

# Check Lighthouse score
# Use Chrome DevTools → Lighthouse
```

### Optimize Images

```bash
# Install sharp for image optimization
npm install sharp
```

Images using `next/image` are already optimized!

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run deploy # Add your deployment command
```

## 📝 Post-Deployment

- [ ] Test all features on live site
- [ ] Submit sitemap to Google Search Console
- [ ] Set up monitoring (e.g., UptimeRobot)
- [ ] Configure email notifications for form submissions
- [ ] Test forms with real submissions
- [ ] Check mobile responsiveness
- [ ] Monitor performance with Lighthouse
- [ ] Set up error tracking (e.g., Sentry)

## 🆘 Troubleshooting

**Build fails**: Check Node.js version (needs 18+)

**Images not loading**: Ensure `public/images/` is included in deployment

**API routes fail**: Check environment variables are set

**Animations laggy**: Enable hardware acceleration in browser

## 📚 Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [GSAP Performance Tips](https://greensock.com/docs/v3/GSAP/gsap.config())

---

**Need Help?** Open an issue or contact support!
