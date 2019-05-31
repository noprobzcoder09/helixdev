<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AlertHistoryReceiver extends Model
{
	public $timestamps = true;
    protected $table = 'alert_history_receiver';

    protected $fillable = [
        'alert_history_id',
        'recepient',
    ];

    public function employee(){
    	return $this->belongsTo('App\Employee','recepient','id');
    }

}
