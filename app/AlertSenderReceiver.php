<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AlertSenderReceiver extends Model
{
	public $timestamps = true;
    protected $table = 'alert_receivers';

    protected $fillable = ['alert_content_id', 'sender', 'recepient'];

    public function employee(){
    	return $this->belongsTo('App\Employee','recepient','id');
    }

}
