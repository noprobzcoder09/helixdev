<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ObservationAssignment extends Model
{
    protected $table = 'observation_assignments';

    public function observation()
    {
        return $this->belongsTo('App\Observation', 'observation_id', 'id');
    }
}
