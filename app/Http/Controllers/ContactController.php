<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ContactLokaleroRequest;
use App\Mail\ContactLokalero;
use Mail;

class ContactController extends Controller
{
    /**
     * Send a contact mail to the admin
     * @param App\Http\Requests\ContactLokaleroRequest
     * @return void
     */
    public function admin(ContactLokaleroRequest $request) {
    	Mail::to('ophelie@lokalero.fr')->send(new ContactLokalero($request));
    }
}
