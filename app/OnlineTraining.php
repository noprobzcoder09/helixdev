<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Sofa\Eloquence\Eloquence;

class OnlineTraining extends Model
{
    use Eloquence;
    
    protected $appends = ['full_name', 'title', 'pdf_url', 'type'];
    protected $table = 'online_training_registers';

    public function video()
    {
        return $this->belongsTo('App\SafetyVideo', 'video_id', 'id');
    }

    public function induction()
    {
        return $this->belongsTo('App\Induction', 'induction_id', 'id');
    }

    public function employee()
    {
        return $this->belongsTo('App\Employee', 'employee_id', 'id');
    }

    public function getFullnameAttribute($value) {
        return $this->employee->first_name . ' ' . $this->employee->last_name;
    }

    public function getTitleAttribute()
    {
        if($this->video) {
            return $this->video->title;
        } else if($this->induction) {
            return $this->induction->title;
        }
        return '';
    }

    public function getTypeAttribute()
    {
        if($this->video) {
            return 'SAFETY VIDEO';
        } else if($this->induction) {
            return 'INDUCTION';
        }
        return '';
    }

    public function getPdfUrlAttribute()
    {

        $url = '';
        if($this->video_id) {
            $url = "pdf/video-complete/{$this->video_id}";
        } else {
            $url = "pdf/induction-complete/{$this->induction_id}";
        }

        return $url;
    }
}