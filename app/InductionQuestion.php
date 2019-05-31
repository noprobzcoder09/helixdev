<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InductionQuestion extends Model
{
    protected $table = 'induction_questions';
    protected $fillable = [
      'question', 'answer', 'induction_id'
    ];

    public function induction()
    {
        return $this->belongsTo('App\Induction', 'induction_id', 'id');
    }

    public function options()
    {
        return $this->hasMany('App\InductionQuestionOption');
    }
}
