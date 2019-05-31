<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SafetyVideoQuestionOption extends Model
{
    protected $table = 'video_options';
    protected $fillable = [
      'option', 'value', 'video_question_id'  
    ];
}
