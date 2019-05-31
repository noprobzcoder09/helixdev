<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InspectionCategory extends Model
{
    protected $table = 'inspection_categories';

    public function inspections()
    {
        return $this->hasMany('App\Inspection');
    }
}
