<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use DB;
use App\VideoComplete;

class SafetyVideo extends Model
{
    use SoftDeletes;
    
    protected $dates = ['deleted_at'];
    protected $table = 'videos';
    protected $fillable = [
        'title', 'link', 'enable_questions', 'description', 'company_id', 'created_by'
    ];

    public function countQuestions()
    {
        $count = DB::table('video_questions')->where('video_id', $this->id)->count();
        return $count;
    }

    public function isCompletedEmployee($id) {
        $videoComplete = DB::table('video_certifications')->where('video_id', $this->id)->where('employee_id', $id)->orderBy('created_at', 'desc')->first();

        if(!$videoComplete) return false;

        $videoComplete->isPassed ? $result = true : $result = false;
        return $result;
    }

    public static function addVideo($arrNewVideo)
    {
        $video = new self();
        $video->fill($arrNewVideo);

        if ($video->save())
        {
            return $video;
        }

        return false;
    }
    
    public static function updateVideo($id, $arrUpdateVideo)
    {
        $video = self::find($id);
        $video->fill($arrUpdateVideo);

        if($video->update()) {
            return $video;
        }
    }


}
