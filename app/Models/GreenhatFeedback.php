<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GreenhatFeedback extends Model
{
    protected $table = 'greenhat_feedbacks';

    protected $fillable = [
    	'user_id', 
    	'greenhat_program_id', 
    	'feedback', 
    	'feedback_by', 
    ];


    /*public function getFeedbackAttribute(){
    	return json_decode($this->feedback);
    }*/
}
