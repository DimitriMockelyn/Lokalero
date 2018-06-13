<?php

namespace App\Http\Controllers;
use Response;
use Illuminate\Http\Request;
use App\ContactMail;
use App\Http\Requests\Subscriber;
use Newsletter;
class NewsletterController extends Controller
{
    public function subscribe(Subscriber $subscriber) { 
	    if ( ! Newsletter::isSubscribed($request->email) ) {
	    	Newsletter::subscribe($subscriber->email, ['ZIPCODE' => $subscriber->zipcode]);
	        return  Response::json(['sucess' => 'Merci pour votre inscription : )' ]);
	    }
	    else {
	    	return  Response::json(['error' => 'Vous êtes déjà inscrit']);
	    }
    }
}
