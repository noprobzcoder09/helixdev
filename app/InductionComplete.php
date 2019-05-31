<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InductionComplete extends Model
{
    protected $table = 'induction_certifications';
    protected $appends = ['updated_at_date'];

    public function induction()
    {
        return $this->belongsTo('App\Induction', 'induction_id', 'id');
    }

    public function employee()
    {
        return $this->belongsTo('App\Employee', 'employee_id', 'id');
    }

    public function getUpdatedAtDateAttribute() {
      return $this->updated_at->toFormattedDateString();
    }
}
