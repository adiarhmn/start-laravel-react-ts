<?php

use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::prefix('admin')->group(function () {
    Route::get('/', function () {
        return Inertia::render('admin/dashboardPage');
    })->name('admin.dashboard');

    Route::controller(UserController::class)
        ->prefix('users')
        ->group(function () {
            Route::get('/', 'index')->name('admin.users');
        });
});
