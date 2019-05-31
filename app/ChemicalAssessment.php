<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChemicalAssessment extends Model
{
    protected $table = 'chemical_assessments';
    protected $fillable = ['chemical_id', 'form', 'employee_id'];

    public function chemical()
    {
        return $this->belongsTo('App\Chemical');
    }

    public function employee()
    {
        return $this->belongsTo('App\Employee');
    }
}
