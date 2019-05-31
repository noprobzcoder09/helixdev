<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChemicalGroup extends Model
{
    //
    protected $table = 'chemical_groups';

    public function group() {
      return $this->belongsTo('App\Group');
    }

}
