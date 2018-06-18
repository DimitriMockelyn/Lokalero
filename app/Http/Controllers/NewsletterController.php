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
    	$newsletter = $subscriber->newsletter ? 'Oui' : 'Non';
    	$prevent = $subscriber->prevenir_lancement ? 'Oui' : 'Non';
	    if ( ! Newsletter::isSubscribed($subscriber->email) ) {
	    	Newsletter::subscribe($subscriber->email, ['ZIPCODE' => $subscriber->zipcode, 
	    		'COMMENT' => $subscriber->comment_connu,
	    		'NEWSLETTER' => $newsletter,
	    		'PREVENT' => $prevent,
	    		'FNAME' => $subscriber->name
	    	]);
	        return  Response::json(['success' => 'Merci pour votre inscription : )']);
	    }
	    else {
	    	return  Response::json(['error' => 'Vous êtes déjà inscrit']);
	    }
    }
}
