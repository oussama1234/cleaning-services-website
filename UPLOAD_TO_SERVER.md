# 📤 Upload to Your Own Server

## 📁 Files to Upload

Upload **ALL** of these to your server:

```
Cleaning-Services-Website/
├── .next/                  ✅ (Entire folder - build output)
├── public/                 ✅ (Entire folder - images, favicon, etc.)
├── src/                    ✅ (Entire folder - source code)
├── node_modules/           ✅ (Entire folder - or run npm install on server)
├── package.json            ✅
├── package-lock.json       ✅
├── next.config.mjs         ✅
├── tailwind.config.js      ✅
├── postcss.config.mjs      ✅
└── .env.local              ✅ (Create this on server with your variables)
```

## 🔧 Server Requirements

Your server needs:
- **Node.js**: Version 18 or higher
- **npm**: Latest version
- **Port**: 3000 (or any port you configure)

## 📝 Steps to Deploy

### 1. Upload Files via FTP/SFTP

Use FileZilla or any FTP client:
- Host: Your server IP
- Username: Your SSH username
- Password: Your password
- Upload everything to: `/home/youruser/cindelnettoyage.fr/` (or your web directory)

### 2. Connect to Your Server via SSH

```bash
ssh your-username@your-server-ip
```

### 3. Navigate to Your Project

```bash
cd /path/to/cindelnettoyage.fr
```

### 4. Install Dependencies (if you didn't upload node_modules)

```bash
npm install --production
```

### 5. Create .env.local on Server

```bash
nano .env.local
```

Paste this:
```env
RESEND_API_KEY=re_fkBf81td_uPD4XVsmDV4aKf5mVZu3pPKD
EMAIL_FROM=onboarding@resend.dev
EMAIL_TO=hadri.abdelmoumen@gmail.com
NEXT_PUBLIC_APP_URL=https://cindelnettoyage.fr
```

Save: `Ctrl+X`, then `Y`, then `Enter`

### 6. Start the Server

```bash
npm start
```

Or use PM2 for production (keeps it running):

```bash
npm install -g pm2
pm2 start npm --name "cindelnettoyage" -- start
pm2 save
pm2 startup
```

### 7. Configure Your Web Server

#### If using **Nginx**:

Create config file:
```bash
sudo nano /etc/nginx/sites-available/cindelnettoyage.fr
```

Paste this:
```nginx
server {
    listen 80;
    server_name cindelnettoyage.fr www.cindelnettoyage.fr;

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

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/cindelnettoyage.fr /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### If using **Apache**:

Create `.htaccess` or VirtualHost config:
```apache
<VirtualHost *:80>
    ServerName cindelnettoyage.fr
    ServerAlias www.cindelnettoyage.fr
    
    ProxyPreserveHost On
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
</VirtualHost>
```

### 8. Install SSL Certificate (HTTPS)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d cindelnettoyage.fr -d www.cindelnettoyage.fr
```

---

## 🎯 Quick Upload Guide (Summary)

1. **Upload via FTP**:
   - Upload entire project folder
   - Make sure `.next` folder is included

2. **SSH to server**:
   ```bash
   cd /path/to/project
   npm install
   npm start
   ```

3. **Keep it running**:
   ```bash
   pm2 start npm --name "cindelnettoyage" -- start
   ```

4. **Point domain to your server IP** in your domain DNS settings

---

## 🔄 Alternative: Pre-built Standalone

For better performance, use Next.js standalone mode:

1. Add to `next.config.mjs`:
```javascript
const nextConfig = {
  output: 'standalone',
};
```

2. Rebuild:
```bash
npm run build
```

3. Upload only:
   - `.next/standalone/` folder
   - `.next/static/` folder
   - `public/` folder

4. On server:
```bash
node .next/standalone/server.js
```

---

## ❓ Don't Have Node.js on Server?

If your server only supports static files (Apache/Nginx without Node.js):

**You need to use a different hosting solution** because Next.js requires Node.js to run.

Options:
- Use **Vercel** (free, easiest)
- Upgrade server to support Node.js
- Use VPS (DigitalOcean, Linode, AWS)

---

## 📞 Need Help?

Common issues:
- **Port 3000 already in use**: Change port in start command: `PORT=3001 npm start`
- **Module not found**: Run `npm install` again
- **Permission denied**: Use `sudo` or check file permissions
- **Site not loading**: Check if PM2 is running: `pm2 status`

Check logs:
```bash
pm2 logs cindelnettoyage
```

---

## ✅ Checklist

- [ ] All files uploaded to server
- [ ] Node.js installed on server
- [ ] Dependencies installed (`npm install`)
- [ ] `.env.local` created with correct values
- [ ] Server started (`npm start` or `pm2 start`)
- [ ] Nginx/Apache configured
- [ ] SSL certificate installed
- [ ] Domain DNS points to server IP
- [ ] Test website at https://cindelnettoyage.fr

---

**🎉 Your site will be live!**
