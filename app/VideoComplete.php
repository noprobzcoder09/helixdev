<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VideoComplete extends Model
{
    protected $table = "video_certifications";
    protected $appends = ['updated_at_date'];

    public function video()
    {
        return $this->belongsTo('App\SafetyVideo', 'video_id', 'id');
    }

    public function employee()
    {
        return $this->belongsTo('App\Employee', 'employee_id', 'id');
    }

    public function getUpdatedAtDateAttribute() {
      return $this->updated_at->toFormattedDateString();
    }

}
