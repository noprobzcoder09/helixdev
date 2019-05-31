<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InductionQuestionOption extends Model
{
    protected $table = 'induction_question_options';
    protected $fillable = [
        'name', 'value', 'question_id'
    ];

    public function question()
    {
        return $this->belongsTo('App\InductionQuestion', 'question_id', 'id');
    }
}
