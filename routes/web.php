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
	Route::name('index')->get('/lokal-citoyen', function() { return view('lokal-citoyen'); });
	Route::name('index')->get('/lokal-association', function() { return view('lokal-association'); });
	Route::name('index')->get('/lokal-pro', function() { return view('lokal-pro'); });
	Route::name('index')->get('/lokal-collectivite', function() { return view('lokal-collectivite'); });
	Route::name('index')->get('/plateforme-de-crowdfunding', function() { return view('plateforme-de-crowdfunding'); });
	Route::post('/subscribe', 'NewsletterController@subscribe');
	Route::post('/contact', 'ContactController@admin');
});




Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
