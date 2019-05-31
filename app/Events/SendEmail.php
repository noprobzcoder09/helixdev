<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

use Illuminate\Support\Facades\Mail;


class SendEmail
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($employees, $alert_content, $file)
    {
        //$emails = ['noprobz09@gmail.com', 'noel@skyrockit.com'];
        if ($employees && $employees->count() > 0) {

            $emails = [];

            //$emails = ['noprobz09@gmail.com', 'noel@skyrockit.com'];

            foreach ($employees as $employee) {
                array_push($emails, $employee->email);
            }

            if (!empty($emails)) {
                Mail::send('emails.messaging.send', ['content' => $alert_content->content], function ($message) use ($emails, $alert_content, $file) {
                    $message->to($emails)->subject($alert_content->subject);

                    if (!empty($file)) {
                        $message->attach($file->getRealPath(), [
                            'as' => $file->getClientOriginalName(),
                            'mime' => $file->getMimeType()
                        ]);
                    }

                });
            }

        }
    }
}
