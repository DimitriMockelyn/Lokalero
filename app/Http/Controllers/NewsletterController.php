<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ContactMail;
use App\Http\Requests\Subscriber;
use Newsletter;
class NewsletterController extends Controller
{
    public function subscribe(Subscriber $request) {
    if ( ! Newsletter::isSubscribed($request->email) ) {
        Newsletter::subscribe($request->email);
    }
    }
}
