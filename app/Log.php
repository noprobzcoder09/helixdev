<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    protected $table = 'logs';

    public function company()
    {
        return $this->belongsTo('App\Company', 'company_id', 'id');
    }

    public static function add($data)
    {
        $data['created_at'] = date('Y-m-d h:i:s', time());
        $data['updated_at'] = date('Y-m-d h:i:s', time());

        if(self::insert($data)) return true;

        return false;
    }
}
