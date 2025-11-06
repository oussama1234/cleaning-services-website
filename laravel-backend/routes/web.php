<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\ContactController;

// API Routes (in web.php for static frontend)
// Note: /api prefix is handled by .htaccess, so routes are just /booking and /contact
Route::post('/booking', [BookingController::class, 'store']);
Route::post('/contact', [ContactController::class, 'store']);

// Welcome page
Route::get('/', function () {
    return view('welcome');
});
