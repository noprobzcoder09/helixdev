<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
//use Illuminate\Database\Eloquent\SoftDeletes;

class AlertGroupRecipient extends Model
{
    //use SoftDeletes;

	public $timestamps = true;
    protected $table = 'alert_group_recipients';

    protected $fillable = ['company_id', 'employee_id', 'employee_role_id'];

    public function employee(){
        return $this->belongsTo('App\Employee', 'employee_id', 'id');
    }
}
