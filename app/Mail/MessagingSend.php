<?php

namespace App\Mail;

use App\Http\Helpers\AppHelper;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ForgotPassword extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    private $user;
    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $arrPassword = AppHelper::generatePassword();
        $this->user->password = bcrypt($arrPassword['password']);
        if( $this->user->save() ) {
            return $this->from(config('mail.from.address'))
                ->view('emails.forgot_password')
                ->with(['password' => $arrPassword['password']]);
        }
        return false;
    }
}
