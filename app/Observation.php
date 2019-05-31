<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Sofa\Eloquence\Eloquence;
use DB;
use Carbon\Carbon;

class Observation extends Model
{
    protected $table = 'observations';
    protected $appends = [
        'created_by_name',
        'assigned_to_name',
        'due_date',
        'type_content',
        'close_out_image_url'
    ];
    use SoftDeletes;
    use Eloquence;

    protected $dates = ['deleted_at'];

    public function inspector()
    {
        return $this->belongsTo('App\Employee', 'performed_by', 'id');
    }

    public function createdBy()
    {
        return $this->belongsTo('App\Employee', 'created_by', 'id');
    }

    public function image()
    {
        return $this->hasOne('App\ObservationImage', 'observation_id', 'id');
    }

    public function subCategories()
    {

        $subCategories = DB::table('observation_categories')
            ->where('observation_id', $this->id)
            ->get();
        return $subCategories;
    }

    public function getCreatedByNameAttribute()
    {
        if($this->createdBy)
        {
            return $this->createdBy->full_name;
        }

        return '';
    }

    public function getAssignedToNameAttribute()
    {
        if($this->inspector)
        {
            return $this->inspector->full_name;
        }

        return '';

    }

    public function getDueDateAttribute()
    {
        return Carbon::parse($this->due)->toFormattedDateString();
    }

    public function getTypeContentAttribute()
    {
        if(is_null($this->type)) {
            $this->type = 0;
        }
        return config('requirements.observation_type')[$this->type];
    }

    public function subCategoriesToString()
    {

        $subs = $this->subCategories();
        $str = '';
        foreach($subs as $key => $s)
        {
            $str .= $s->sub_category;
            if ($key == 0) {
                $str .= ',';
            }
        }

        return $str;
    }

    public function getPreImageUrl()
    {
        $image = ObservationImage::where('observation_id', $this->id)->first();
        if($image && $image->pre_action_photo_filename) {
            return "images/observation/images/{$this->id}/{$image->pre_action_photo_filename}";
        }

        return '';
    }

    public function getPostImageUrl()
    {
        $image = ObservationImage::where('observation_id', $this->id)->first();
        if($image && $image->post_action_photo_filename) {
            return "images/observation/images/{$this->id}/{$image->post_action_photo_filename}";
        }

        return '';
    }
    
    public function getVerifiedImageUrl()
    {
        $image = ObservationImage::where('observation_id', $this->id)->first();
        if($image && $image->verified_photo_filename) {
            return "images/observation/images/{$this->id}/{$image->verified_photo_filename}";
        }

        return '';
    }

    public function getCloseOutImageUrlAttribute()
    {
        $image = ObservationImage::where('observation_id', $this->id)->first();
        if($image && $image->verified_action_photo_filename) {
            return "images/observation/images/{$this->id}/{$image->verified_action_photo_filename}";
        }

        return '';
    }

    public function getImages()
    {
        return [
            'pre'  => $this->getPreImageUrl(),
            'post' => $this->getPostImageUrl(),
            'verified' => $this->getVerifiedImageUrl()
        ];
    }

    public function storagePath()
    {
        return 'public/observation/images/';    
    }
    
    public static function add($arrNewObservation)
    {
        $newObservation = new self;
        $newObservation->fill($arrNewObservation);

        return ($newObservation->save()) ? $newObservation : false;
    }
}
