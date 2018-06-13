<?php  


namespace App\Http\Controllers\Blog;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() 
    {
        return 'T\'es dans le blog!';
    }
}
