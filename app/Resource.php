<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
    protected $fillable = [
        'name',
        'body',
        'category',
        'company_id'
    ];

    protected $appends = ['file_url'];
    protected $table = 'resources';

    public function getFileStoragePath()
    {
        return 'public/resources';
    }
    
    public function getFileUrlAttribute()
    {
        if(is_null($this->file)) {
            return '';
        }
        $image_url =  config('fileapi.path_resources_attachments') . $this->id . '/' . $this->file;
        return $image_url;
    }

}
