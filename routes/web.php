<?php

use Illuminate\Support\Facades\Route;

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

//Public
Route::get('/', App\Http\Livewire\Home::class)->name('home');
Route::get('product', App\Http\Livewire\Product::class)->name('product');
Route::get('industries', App\Http\Livewire\Industries::class)->name('industries');
Route::get('services', App\Http\Livewire\Services::class)->name('services');
Route::get('team', App\Http\Livewire\Team::class)->name('team');
Route::get('about', App\Http\Livewire\About::class)->name('about');
Route::get('contact', App\Http\Livewire\Contact::class)->name('contact');

// Admin
Route::get('admin', App\Http\Livewire\AdminLogin::class)->name('login')->middleware('R_admin');
Route::group(['prefix'=>'admin', 'middleware'=>['admin']], function (){
    Route::get('dashboard', App\Http\Livewire\Admin\Home::class)->name('dashboard');
    Route::get('profile', App\Http\Livewire\Admin\Profile::class)->name('profile');
    Route::get('contacts', App\Http\Livewire\Admin\ContactUpdate::class)->name('update_contacts');
});
