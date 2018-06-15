<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
class ContactLokalero extends Mailable
{
    use Queueable, SerializesModels;
    public $contact;

    /**
     * Create a new message instance.
     * @param App\Http\Requests\ContactLokaleroRequest
     * @return void
     */
    public function __construct($contact)
    {
        $this->contact = $contact;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
        ->from($this->contact['email'])
        ->subject($this->contact['subject'])
        ->markdown('emails.contact-lokalero');
    }
}
