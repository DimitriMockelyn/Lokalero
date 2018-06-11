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

Route::prefix('api/')->group(function() 
{
	Route::resource('projects', 'ProjectsController');
});

//Subscribe
Route::post('/subscribe', 'NewsletterController@subscribe');
// send email to admin
Route::post('/contact-lokalero', 'ContactController@sendToAdmin');

Route::get('/', function(){
	return view('welcome');
});


