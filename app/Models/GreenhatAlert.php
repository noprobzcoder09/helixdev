<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GreenhatAlert extends Model
{
    protected $table = 'greenhat_alerts';

    protected $fillable = ['sender', 'receiver', 'department', 'employee'];
}
