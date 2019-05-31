<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Sofa\Eloquence\Eloquence;

class ObservationImage extends Model
{
    protected $table = 'observation_images';
    use SoftDeletes;
    use Eloquence;

    protected $fillable = [
    	'pre_action_photo_filename',
        'post_action_photo_filename',
        'verified_action_photo_filename',
        'observation_id',        
    ];
    protected $dates = ['deleted_at'];

    public static function add($arrNewObservationImage){
        $newObservationImage = new self;
        $newObservationImage->fill($arrNewObservationImage);

        return ($newObservationImage->save())	? $newObservationImage : false;
    }
}
