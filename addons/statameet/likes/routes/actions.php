<?php

use Illuminate\Support\Facades\Route;
use Statameet\Likes\Http\Controllers\AddLikeController;

Route::post('/', [AddLikeController::class, '__invoke'])->name('likes.store');
