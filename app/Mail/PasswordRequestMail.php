<?php

namespace App\Mail;

use App\Http\Helpers\AppHelper;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\User;

class PasswordRequestMail extends Mailable
{
    use Queueable, SerializesModels;
    public $user;
    public $hash;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
        $toHash = $this->user->email;
        $this->hash = AppHelper::encrypt($toHash);
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.users.request');
    }
}
