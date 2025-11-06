# 🔄 Alternative Simple Setup

If the standard approach isn't working, try this simpler method.

## Simpler Approach: Everything in public_html (Less Secure but Works)

### Structure:
```
public_html/
├── index.html           (frontend)
├── images/
├── _next/
├── .htaccess
└── api.php              (single file API handler)
```

---

## Step 1: Upload debug-server.php

1. Upload `debug-server.php` to your `public_html/` folder
2. Visit: `https://cindelnettoyage.fr/debug-server.php`
3. Take a screenshot or copy all the information
4. **Send me the results** so I can see what's wrong
5. DELETE the file after

---

## Step 2: Simplified API Setup (If Laravel routing not working)

Create a single `public_html/api.php` file that handles everything:

```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://cindelnettoyage.fr');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get request path
$path = $_GET['action'] ?? '';

// Load Laravel
$backend_path = __DIR__ . '/backend'; // or '../laravel-backend'
if (!file_exists($backend_path . '/vendor/autoload.php')) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Backend not found']);
    exit;
}

require $backend_path . '/vendor/autoload.php';
$app = require_once $backend_path . '/bootstrap/app.php';

// Boot Laravel
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$request = Illuminate\Http\Request::capture();
$response = $kernel->handle($request);

// Forward to Laravel
$response->send();
$kernel->terminate($request, $response);
```

**Usage:**
- Booking: `POST https://cindelnettoyage.fr/api.php?action=booking`
- Contact: `POST https://cindelnettoyage.fr/api.php?action=contact`

---

## Step 3: Update Frontend API Calls

If using `api.php` approach, you'll need to update your frontend to call:

```javascript
// Instead of: /api/booking
// Use: /api.php?action=booking

fetch('https://cindelnettoyage.fr/api.php?action=booking', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
```

---

## What I Need From You

Please do the following and share the results:

### 1. Upload and run debug-server.php
Tell me what it shows for:
- PHP Version
- Backend exists?
- API folder exists?
- .htaccess files exist?
- Laravel loads?

### 2. Try accessing directly:
- Visit: `https://cindelnettoyage.fr/api/index.php`
- What error do you see?

### 3. Check your current structure:
Take a screenshot or describe:
- Where is the `backend` or `laravel-backend` folder?
- Where is the `api` folder?
- Are they in `public_html` or outside?

### 4. Check error logs:
- In cPanel, go to: Metrics → Errors
- What's the latest error message?

---

## Common Issues & Quick Fixes

### Issue: "Backend not found"
**Fix:** Make sure Laravel backend is uploaded completely with `vendor/` folder

### Issue: "Permission denied"
**Fix:** Set storage folder permissions to 755

### Issue: "Class not found"
**Fix:** Run `composer install` or upload complete `vendor/` folder

### Issue: ".htaccess not working"
**Fix:** Check if mod_rewrite is enabled (ask hosting provider)

---

## Nuclear Option: Direct Laravel Access

If nothing works, expose Laravel directly:

1. Copy entire `laravel-backend/public/` to `public_html/api/`
2. Edit `public_html/api/index.php` to load Laravel from wherever it is
3. Don't use .htaccess routing, access directly: `/api/index.php/booking`

---

## Let Me Help You Debug

Upload `debug-server.php` and share the output. I need to see:
1. What PHP version you're running
2. Where files actually are on your server
3. If Laravel can load at all
4. What the actual error messages are

Once I see the debug output, I can give you exact fixes for YOUR specific setup.
