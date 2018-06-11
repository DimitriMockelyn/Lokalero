<?php

namespace App\Http\Controllers;
use Response;
use Illuminate\Http\Request;
use App\ContactMail;
use App\Http\Requests\Subscriber;
use Newsletter;
class NewsletterController extends Controller
{
    public function subscribe(Subscriber $request) {
	    if ( ! Newsletter::isSubscribed($request->email) ) {
	        Newsletter::subscribe($request->email);
	        	return  ['success' => 'Vous venez de vous inscrire, merci : )'];
	    }
	    else {
	    	return ['error' => 'Vous êtes déjà inscrit'];
	    }
    }
}
