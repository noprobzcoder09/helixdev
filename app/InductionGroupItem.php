<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InductionGroupItem extends Model
{
    protected $table = 'induction_group_items';

    public function induction()
    {
        return $this->belongsTo('App\Induction', 'induction_id', 'id');
    }
}
