<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Emergency extends Model
{
    protected $table = 'emergency_response';
    protected $fillable = [
        'role',
        'name',
        'mobile',
        'employee_id',
        'company_id',
        'group'
    ];

    public function employee()
    {
        return $this->belongsTo('App\Employee', 'employee_id', 'id');
    }
}
