<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Module extends Model
{
    protected $table = 'modules';

    public function company()
    {
        return $this->belongsTo('App\Company', 'company_id', 'id');
    }

    public function feature()
    {
        return $this->belongsTo('App\Feature', 'feature_id', 'id');
    }
    
}
