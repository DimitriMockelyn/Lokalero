<?php

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
Route::get('/', function () {
    return view('welcome');
});

//store email (data)
Route::post('/save-contact', 'StoreMailController@save');
// send email to admin
Route::post('/contact-lokalero', 'ContactLokaleroController@send');


