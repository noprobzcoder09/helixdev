<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Greenhat extends Model
{
    protected $table = 'greenhat_programs';

    protected $fillable = [
    	'user_id', 
    	'company_id', 
    	'supervisor_id', 
    	'status', 
    	'const_mgmt_id', 
    	'plant_dept_id', 
    	'env_evaluator_id', 
    	'ohs_evaluator_id', 
    	'hr_followup_id', 
    	'created_by',
    	'comment',
    ];
}
