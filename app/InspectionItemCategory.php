<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class InspectionItemCategory extends Model
{
    use softDeletes;

    protected $table = 'inspection_item_categories';
    protected $dates = ['deleted_at'];
    protected $fillable = [
        'name',
        'company_id'
    ];
    
}
