<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ContactLokaleroRequest;
use App\Mail\ContactLokalero;
use Mail;

class ContactController extends Controller
{
    public function admin(ContactLokaleroRequest $request) {
    	Mail::to('ophelie@lokalero.fr')->send(new ContactLokalero($request));
    }
}
