<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//ログイン画面
Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//ユーザ新規登録画面
Route::get('/regist', function () {
    return Inertia::render('Regist', [
        'data' => [
            'message' => 'これはJSON形式です。',
        ],
    ]);
})->name('regist');

Route::get('/new-regist', function () {
    return Inertia::render('Welcome');
})->name('new-regist');

//投稿一覧画面
Route::get('/post_list', function () {
    return Inertia::render('PostList');
})->name('post_list');

Route::get('/user', function () {
    return Inertia::render('User');
})->name('user');

Route::get('/user_edit', function () {
    return Inertia::render('User_edit');
})->name('user_edit');

Route::get('my-posts', function () {
    return [
        'data' => [
            'message' => 'これは自分の投稿一覧です'
        ]
    ];
});

Route::get('like-lists', function () {
    return [
        'data' => [
            'message' => 'これは自分の投稿一覧です'
        ]
    ];
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
