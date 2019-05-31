<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $table = 'skills';

    public function items()
    {
        return $this->hasMany('App\SkillItem');
    }
}
