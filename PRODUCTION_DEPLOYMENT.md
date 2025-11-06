# 🚀 Production Deployment Guide - Cindel Nettoyage

## ✅ Pre-Deployment Checklist

### 1. **Environment Variables**
Update these in your hosting platform (Vercel/Netlify/etc.):

```env
# Resend API Key
RESEND_API_KEY=re_fkBf81td_uPD4XVsmDV4aKf5mVZu3pPKD

# Email Configuration
EMAIL_FROM=contact@cindelnettoyage.fr  # ⚠️ Change after domain verification
EMAIL_TO=hadri.abdelmoumen@gmail.com   # Your receiving email

# App Configuration
NEXT_PUBLIC_APP_URL=https://cindelnettoyage.fr
```

### 2. **Domain Configuration at Resend**

#### Step 1: Add Your Domain
1. Go to [Resend Dashboard → Domains](https://resend.com/domains)
2. Click **"Add Domain"**
3. Enter: `cindelnettoyage.fr`

#### Step 2: Add DNS Records
Resend will provide DNS records. Add them to your domain provider:

**Example Records:**
```
Type: TXT
Name: _resend
Value: [Provided by Resend]

Type: CNAME
Name: resend._domainkey
Value: [Provided by Resend]

Type: MX
Name: @
Value: [Provided by Resend]
Priority: 10
```

#### Step 3: Verify Domain
- Wait 5-30 minutes for DNS propagation
- Click **"Verify"** in Resend dashboard
- ✅ Once verified, update `EMAIL_FROM=contact@cindelnettoyage.fr`

### 3. **Update Email Receiving Address**

**Current:** `EMAIL_TO=oussama.meq@gmail.com` (for testing)  
**Update to:** `EMAIL_TO=hadri.abdelmoumen@gmail.com`

### 4. **Logo Configuration**

✅ Logo is already configured to use environment variable:
- **Development:** `http://localhost:3000/images/cindel-nettoyage-logo.png`
- **Production:** `https://cindelnettoyage.fr/images/cindel-nettoyage-logo.png`

**Make sure the logo file exists at:**
```
public/images/cindel-nettoyage-logo.png
```

---

## 🌐 Deployment Steps

### Option A: Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (if not already):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Set Environment Variables:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add all variables from `.env.local`
   - Make sure to select "Production" environment

5. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

6. **Configure Custom Domain:**
   - Vercel Dashboard → Your Project → Settings → Domains
   - Add: `cindelnettoyage.fr`
   - Follow DNS configuration instructions

### Option B: Deploy to Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Initialize:**
   ```bash
   netlify init
   ```

4. **Set Environment Variables:**
   - Netlify Dashboard → Site Settings → Environment Variables
   - Add all variables from `.env.local`

5. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

---

## 🔍 Post-Deployment Testing

### 1. **Test Website**
- ✅ Visit: `https://cindelnettoyage.fr`
- ✅ Check logo loads correctly
- ✅ Navigate through all sections
- ✅ Test mobile responsive design

### 2. **Test Booking Form**
1. Go to: `https://cindelnettoyage.fr#booking`
2. Fill out the form with test data
3. Submit booking
4. **Expected:** Email arrives at `hadri.abdelmoumen@gmail.com`

### 3. **Test Contact Form**
1. Go to: `https://cindelnettoyage.fr#contact`
2. Fill out contact form
3. Submit
4. **Expected:** Email arrives at `hadri.abdelmoumen@gmail.com`

### 4. **Check Email Templates**
- ✅ Logo displays correctly (from `https://cindelnettoyage.fr/images/cindel-nettoyage-logo.png`)
- ✅ All contact information is correct
- ✅ Emails don't go to spam (after domain verification)

---

## 🎯 Performance Optimizations

### Already Implemented:
- ✅ Image optimization (Next.js automatic)
- ✅ Lazy loading components
- ✅ GSAP animations with scroll triggers
- ✅ Responsive design
- ✅ SEO-friendly structure

### Recommended Post-Deploy:

1. **Enable Analytics:**
   - Add Google Analytics or Vercel Analytics
   - Track form submissions and user behavior

2. **Add Sitemap:**
   ```bash
   # Install package
   npm install next-sitemap

   # Generate sitemap
   npx next-sitemap
   ```

3. **Enable Caching:**
   - Configure CDN caching headers
   - Enable static page generation where possible

4. **Monitor Performance:**
   - Use Lighthouse reports
   - Monitor Core Web Vitals
   - Check PageSpeed Insights

---

## 🔒 Security Checklist

- ✅ API keys stored in environment variables (not in code)
- ✅ `.env.local` is in `.gitignore`
- ✅ CORS configured properly
- ✅ Input validation on all forms
- ⚠️ **TODO:** Add rate limiting to API routes (recommended for production)
- ⚠️ **TODO:** Add reCAPTCHA to forms (optional but recommended)

---

## 🐛 Troubleshooting

### Issue: Emails Not Sending

**Check:**
1. ✅ `RESEND_API_KEY` is correct in environment variables
2. ✅ Environment variables are set in production (not just in `.env.local`)
3. ✅ API routes are accessible: `/api/book` and `/api/contact`
4. ✅ Check Resend dashboard for error logs

### Issue: Logo Not Loading in Emails

**Check:**
1. ✅ `NEXT_PUBLIC_APP_URL` is set to `https://cindelnettoyage.fr`
2. ✅ Logo file exists at `/public/images/cindel-nettoyage-logo.png`
3. ✅ Logo is publicly accessible at `https://cindelnettoyage.fr/images/cindel-nettoyage-logo.png`

### Issue: Website Not Accessible

**Check:**
1. ✅ Domain DNS is configured correctly
2. ✅ SSL certificate is active (HTTPS)
3. ✅ Build completed successfully
4. ✅ All dependencies installed

---

## 📊 Monitoring & Maintenance

### Daily:
- Check email inbox for new bookings/contacts
- Monitor Resend dashboard for email delivery

### Weekly:
- Review website analytics
- Check for any error reports
- Test booking/contact forms

### Monthly:
- Update dependencies: `npm audit fix`
- Review and respond to customer feedback
- Update content if needed

---

## 📝 Important Notes

### Current Configuration:
- ✅ **Domain:** https://cindelnettoyage.fr
- ✅ **Email Receiving:** hadri.abdelmoumen@gmail.com
- ✅ **Phone:** +33 6 40 60 40 57
- ✅ **Address:** 115 Avenue Saint Vincent De Paul, Dax
- ✅ **Branding:** Cindel Nettoyage (logo + text)

### Next Steps After Deployment:
1. ✅ Verify domain at Resend
2. ✅ Update `EMAIL_FROM` to `contact@cindelnettoyage.fr`
3. ✅ Test all forms end-to-end
4. ✅ Add website to Google Search Console
5. ✅ Submit sitemap to search engines
6. ✅ Monitor initial traffic and conversions

---

## 🆘 Support Resources

- **Next.js Documentation:** https://nextjs.org/docs
- **Resend Documentation:** https://resend.com/docs
- **Vercel Support:** https://vercel.com/support
- **Email Testing Tool:** https://www.mail-tester.com/

---

**🎉 Ready for Production!**

Your website is configured and ready to deploy to `https://cindelnettoyage.fr`
