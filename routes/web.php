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
Route::domain('blog.lokalero.app')->group(function () {
    Route::get('/', 'Blog\HomeController@index')->name('index');
});

Route::prefix('/')->group(function()
{
	Route::get('/', function(){ return view('welcome'); });
	Route::name('index')->get('/contact', function() { return view('contact'); });
	Route::post('/subscribe', 'NewsletterController@subscribe');
	Route::post('/contact', 'ContactController@admin');
});


Route::prefix('api/')->group(function()
{
	Route::resource('projects', 'ProjectsController');
});

