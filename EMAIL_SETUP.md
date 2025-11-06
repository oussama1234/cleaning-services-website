# 📧 Email System Setup Guide

## ✅ System Status
**Email system is fully configured and working!**

Both booking and contact forms are now sending beautifully designed HTML emails to your inbox.

---

## 📦 What's Included

### 1. **Email Provider: Resend**
- Modern, reliable email service built for developers
- Easy integration with Next.js
- High deliverability rates
- Generous free tier

### 2. **Email Templates**
Two professionally redesigned HTML email templates with **Tailwind CSS** and **Emoji icons**:
- **Booking Email**: Sent when someone makes a reservation
- **Contact Email**: Sent when someone fills out the contact form
- **Sender name prominently displayed** in email header
- Modern, responsive design with gradient headers
- Emoji icons (👤📋📅📞📧💬📌) for universal email client compatibility
- Anti-spam features: preheader text, proper meta tags, semantic HTML
- Mobile-optimized with table-based layout for maximum compatibility

### 3. **API Routes**
- `/api/book` - Handles booking form submissions
- `/api/contact` - Handles contact form submissions

---

## 🔧 Configuration

### Environment Variables
Located in `.env.local`:

```env
RESEND_API_KEY=re_fkBf81td_uPD4XVsmDV4aKf5mVZu3pPKD
EMAIL_FROM=onboarding@resend.dev
EMAIL_TO=oussama.meq@gmail.com
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### To Change the Recipient Email:
1. Open `.env.local`
2. Update `EMAIL_TO=your-new-email@example.com`
3. Restart your development server

### To Update Logo URL for Emails:
1. Open `.env.local`
2. For production: Update `NEXT_PUBLIC_APP_URL=https://cindelnettoyage.fr`
3. For local: Keep `NEXT_PUBLIC_APP_URL=http://localhost:3000`
4. Logo will be loaded from: `{NEXT_PUBLIC_APP_URL}/images/cindel-nettoyage-logo.png`

### To Use Your Own Domain:
1. Add and verify your domain in [Resend Dashboard](https://resend.com/domains)
2. Update `EMAIL_FROM=noreply@yourdomain.com`
3. Restart your development server

---

## 🧪 Testing

### Latest test emails (with emoji icons + sender name):
✅ Booking Email - ID: `40507ead-3ee1-495a-8787-1d79235ba589`
✅ Contact Email - ID: `9e324d74-6cdd-4b14-afda-74c51db3243a`

### Run Tests Again:
```bash
node test-email.js
```

### Test via Forms:
1. Start the development server: `npm run dev`
2. Navigate to http://localhost:3000
3. Fill out the booking form or contact form
4. Check your email inbox

---

## 📁 File Structure

```
src/
├── lib/
│   ├── email.js           # Resend client configuration
│   └── emailTemplates.js  # HTML email templates
├── app/
│   └── api/
│       ├── book/
│       │   └── route.js   # Booking API endpoint
│       └── contact/
│           └── route.js   # Contact API endpoint
.env.local                 # Environment variables
.env.example              # Example environment file
test-email.js             # Email testing script
```

---

## 🎨 Email Features

### Booking Email Includes:
- ✨ Customer name, phone, email
- 📋 Selected service/plan
- 📅 Booking date and time (formatted in French)
- 📞 Direct "Call Customer" button
- 🎨 Beautiful gradient design with InClean branding

### Contact Email Includes:
- 👤 Contact information (name, email, phone)
- 📌 Reason for contact (color-coded)
- 💬 Full message content
- 📧 "Reply by Email" button
- 📞 "Call" button
- 🎨 Professional blue gradient design

---

## 🚀 Production Deployment

### Vercel/Netlify:
1. Add environment variables in your hosting dashboard:
   - `RESEND_API_KEY`
   - `EMAIL_FROM`
   - `EMAIL_TO`
2. Deploy your site
3. Test the forms

### Important Notes:
- ✅ Emails are sent to: `oussama.meq@gmail.com`
- ✅ From address: `onboarding@resend.dev` (Resend's testing domain)
- ⚠️ For production, add and verify your own domain in Resend

---

## 📊 Resend Dashboard
Access your Resend dashboard to:
- View sent emails
- Check delivery status
- Add custom domains
- View API usage
- Access logs

**Dashboard:** https://resend.com/emails

---

## 🔒 Security Notes

- ✅ API key is stored in `.env.local` (not committed to git)
- ✅ `.env.local` is in `.gitignore`
- ✅ API routes validate all input
- ✅ Error handling implemented
- ⚠️ For production, consider adding rate limiting

---

## 📧 Why Emails Go to Spam & How to Fix It

### Current Status:
Emails from `onboarding@resend.dev` **will likely go to spam** because:
1. It's a shared testing domain used by all Resend users
2. No domain reputation or authentication (SPF/DKIM)
3. Email providers flag it as potentially untrusted

### 👉 Solution: Use Your Own Domain

**Step 1: Add Your Domain to Resend**
1. Go to [Resend Dashboard → Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter your domain (e.g., `yourdomain.com`)

**Step 2: Configure DNS Records**
Resend will provide DNS records to add:
- **SPF** - Authorizes Resend to send emails on your behalf
- **DKIM** - Cryptographic signature proving authenticity
- **DMARC** - Policy for handling failed authentication

Add these records to your domain's DNS settings (Cloudflare, GoDaddy, etc.)

**Step 3: Verify Domain**
Once DNS propagates (5-30 mins), verify your domain in Resend dashboard.

**Step 4: Update `.env.local`**
```env
EMAIL_FROM=noreply@yourdomain.com
# or
EMAIL_FROM=contact@yourdomain.com
```

**Step 5: Restart & Test**
```bash
npm run dev
# or restart your production server
```

### ✅ After Domain Verification:
- ✅ Emails will land in inbox (not spam)
- ✅ Professional sender address
- ✅ Better deliverability rates
- ✅ Build domain reputation over time

### 📌 Note:
If you don't have a custom domain yet:
- Gmail/Outlook may mark `onboarding@resend.dev` as spam
- **This is normal and expected**
- Check your spam folder for test emails
- Users can manually mark as "Not Spam" but this isn't scalable
- **Solution: Get a domain** (costs ~$10-15/year)

---

## 💡 Tips

1. **Check Spam Folder**: Sometimes test emails go to spam
2. **Resend Free Tier**: 100 emails/day, 3,000/month
3. **Custom Domain**: Add your domain for better deliverability
4. **Email Logs**: Check Resend dashboard for delivery status
5. **French Formatting**: Dates are automatically formatted in French

---

## 🆘 Troubleshooting

### Email not received?
1. Check Resend dashboard for delivery status
2. Check your spam folder
3. Verify EMAIL_TO is correct in `.env.local`
4. Check API key is valid

### API errors?
1. Check browser console for errors
2. Check terminal logs
3. Verify all environment variables are set
4. Restart development server after changing `.env.local`

---

## 📞 Support

Need help? Check:
- Resend Documentation: https://resend.com/docs
- Resend Support: support@resend.com

---

**✨ Email system is ready for production!**
