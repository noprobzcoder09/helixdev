<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Alert extends Model
{
	public $timestamps = true;

	protected $fillable = [
        'subject',
        'short_text',
        'content',
        'type',
        'method',
        'employee_roles',
        'read',
        'url'
    ];

    protected $table = 'alert_contents';


}
