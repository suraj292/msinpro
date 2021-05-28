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

Route::get('/', App\Http\Livewire\Home::class)->name('home');
Route::get('product', App\Http\Livewire\Product::class)->name('product');
Route::get('industries', App\Http\Livewire\Industries::class)->name('industries');
Route::get('services', App\Http\Livewire\Services::class)->name('services');
Route::get('team', App\Http\Livewire\Team::class)->name('team');
Route::get('about', App\Http\Livewire\About::class)->name('about');
Route::get('contact', App\Http\Livewire\Contact::class)->name('contact');
