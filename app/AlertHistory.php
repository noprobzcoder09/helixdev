<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AlertHistory extends Model
{
	public $timestamps = true;

    protected $appends = ['file_url'];
    protected $table = 'alert_history';

    protected $fillable = [
        'user_id',
        'alert_content_id',
    ];

    public function alert(){
    	return $this->hasMany('App\Alert','id','alert_content_id');
    }

    public function recepient(){
    	return $this->hasMany('App\AlertHistoryReceiver', 'alert_history_id', 'id');
    }

    public function attachment(){
        return $this->belongsTo('App\AlertFile', 'alert_content_id', 'alert_content_id');
    }

    public function getFileUrlAttribute($value) {
        if($this->attachment) {
            return config('fileapi.path_alerts_attachments') . $this->attachment->alert_content_id . '/' . $this->attachment->filename;
        }
        return '';
    }

}
