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

Route::get('/', function(){
	return view('welcome');
});
// Contact page
Route::get('/contact', function(){
	return view('contact');
});
//Subscribe via MailChimp
Route::post('/subscribe', 'NewsletterController@subscribe');
// send email to admin
Route::post('/contact-lokalero', 'ContactController@sendToAdmin');


Route::prefix('api/')->group(function() 
{
	Route::resource('projects', 'ProjectsController');
});

Route::domain('blog.lokalero.app')->group(function () {
    Route::get('/', 'Blog\HomeController@index')->name('index');
});
