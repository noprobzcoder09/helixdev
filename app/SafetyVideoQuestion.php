<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use DB;
use Illuminate\Database\Eloquent\SoftDeletes;

class SafetyVideoQuestion extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    protected $table = 'video_questions';

    public function options()
    {

        $options = DB::table('video_options')->where('video_question_id', $this->id)->get();
        if(!$options) {
            return [];
        }

        return $options;
    }

    public function answerOption()
    {
        $answer = DB::table('video_options')->where('id', $this->answer)->first();
        if(!$answer) {
            return false;
        }

        return $answer;
    }

}
