<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Sofa\Eloquence\Eloquence;

class EmployeeCompletedInduction extends Model
{
    use eloquence;
    
    protected $table = 'employee_completed_inductions';

    public function employee()
    {
        return $this->belongsTo('App\Employee', 'employee_id', 'id');
    }
}
