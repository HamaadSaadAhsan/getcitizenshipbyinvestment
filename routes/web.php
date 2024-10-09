<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware(['auth'])->prefix('/admin')->group(function() {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth'])->name('admin.dashboard');

    Route::get('posts', [PostController::class, 'index'])->name('admin.posts');
    Route::get('posts/create', [PostController::class, 'create'])->name('admin.posts.create');
    Route::post('posts/store', [PostController::class, 'store'])->name('admin.posts.store');
    Route::get('posts/{post}', [PostController::class, 'show'])->name('admin.posts.show');
    Route::patch('posts/{post}', [PostController::class, 'update'])->name('admin.posts.update');
    Route::post('posts/{post}/image', [PostController::class, 'updateImage'])->name('admin.posts.image.update');

    Route::post('image/upload', [ImageController::class, 'upload'])->name('image.upload');
    Route::get('test', [PostController::class, 'test']);

});

Route::middleware(['auth'])->group(function (){
    Route::controller(\App\Http\Controllers\CategoryController::class)->group(function (){
        Route::get('category/{category}', 'show')->name('category.show');
    });
});

Route::get('/storage/images/{filename}', function ($filename) {
    $path = Storage::path("images/{$filename}");

    if (!File::exists($path)) {
        abort(404);
    }

    return response()->file($path);
})->name('storage.images');

Route::get('posts/{author}', [PostController::class, 'postsByAuthor'])->name('posts.author');
Route::post('category/{category}/posts', [PostController::class, 'postsByCategory'])->name('category.posts');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/{category}/{slug}', [PostController::class, 'post_public_view'])->name('posts.show');

require __DIR__.'/auth.php';
