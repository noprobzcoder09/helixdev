<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Helpers\ConstantHelper;
use App\SafetyVideoQuestion;
use App\SafetyVideoQuestionOption;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Helpers\AppHelper;
use App\Http\Helpers\ValidationHelper;

use App\Company;
use App\SafetyVideo;

use Validator;
use DB;
use Auth;

class SafetyVideoController extends Controller
{
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    protected function lists()
    {
        $company = Company::find(AppHelper::decrypt($this->request->route('id')));

        if($company) {
            $videos = SafetyVideo::where('company_id', $company->id)->get();
            $videos->each(function($video) {

                $video->count_question = $video->countQuestions();

                $video->isCompleted = $video->isCompletedEmployee(Auth::user()->employee()->first()->id);
                if(!$video->enable_questions) {
                    $video->count_question = 0;
                }
            });
            return Response()->json(['result' => true, 'videos' => ['data' => $videos]]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function add()
    {

        DB::beginTransaction();

        try
        {
            $company = Company::find(AppHelper::decrypt($this->request->route('id')));

            if($company)
            {
                $validator = Validator::make($this->request->all(), ValidationHelper::$SAFETY_VIDEO);

                if($validator->fails()) {
                    return Response()->json(ValidationHelper::error($validator->errors()), 400);
                }

                $arrNewVideo = $this->request->all();
                $arrNewVideo['company_id'] = $company->id;
                $arrNewVideo['created_by'] = Auth::user()->employee()->first()->id;

                $video = SafetyVideo::addVideo($arrNewVideo);

                if ($video) {

                    $result = self::addQuestions($video, $this->request->questions);

                    if($result) {
                        DB::commit();
                        $result= ConstantHelper::$SUCCEED_ADDED_SAFETY_VIDEO;
                        $result['video'] = ['data' => $video];
                        return Response()->json($result);
                    }

                }
            }
        }
        catch(\Exception $e)
        {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    protected function view()
    {
        $company = Company::find(AppHelper::decrypt($this->request->route('id')));
        $video =  SafetyVideo::find($this->request->route('sId'));

        if($company && $video)
        {
            $questions = SafetyVideoQuestion::where('video_id',  $video->id)->get();

            if($questions) {
                foreach($questions as $key => $question) {
                    $options = SafetyVideoQuestionOption::where('video_question_id', $question->id)->get();
                    $answer = $question->answerOption();
                    $questions[$key]->answer = $answer->option;
                    $questions[$key]->options = $options;
                }
            } else {
                $questions = array();
            }

            $videoHtml = '';
            if(preg_match('/vimeo/', $video->link)) {
                // vimeo
                $vmsArr = explode('/', $video->link);
                $num = false;
                foreach($vmsArr as $vm) {
                    if(is_numeric($vm)) {
                        $num = $vm;
                        break;
                    }
                }
                $video->isVimeo = true;
                $videoHtml = "<iframe id=\"iframe_pop_video\" src=\"//player.vimeo.com/video/{$num}?autoplay=0&amp;byline=0&amp;title=0&amp;badge=0&amp;portrait=0&amp;api=1&amp;player_id=iframe_pop_video\" width=\"100%\" height=\"100%\" frameborder=\"0\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\"></iframe>";
            }  else {
                $videoHtml = '<div id="video-link"><a href="{{safety.view.link}}"></a></div>';
            }

            $video->htmlVideo = $videoHtml;
            $video->questions = $questions;
            return Response()->json(['result' => true, 'video' => ['data' => $video]]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function update()
    {

        DB::beginTransaction();

        try {

            $video =  SafetyVideo::find($this->request->route('sId'));

            if($video)
            {

                $request = $this->request->all();

                if($request['title'] == $video->title) {
                    unset($request['title']);
                    $validations = ValidationHelper::$SAFETY_UPDATE_VIDEO;
                } else {
                    $validations = ValidationHelper::$SAFETY_VIDEO;
                }

                $validator = Validator::make($request, $validations);

                if($validator->fails()) {
                    return Response()->json(ValidationHelper::error($validator->errors()), 400);
                }

                $company = Company::find(AppHelper::decrypt($this->request->route('id')));
                $video =  SafetyVideo::find($this->request->route('sId'));

                if($video)
                {
                    $arrUpdateVideo = $this->request->all();
                    $arrUpdateVideo['company_id'] = $company->id;
                    $arrUpdateVideo['created_by'] = Auth::user()->employee()->first()->id;

                    $video = SafetyVideo::updateVideo($video->id, $arrUpdateVideo);

                    if($video)
                    {
                        $result = self::updateQuestions($video, $this->request->questions);

                        if($result) {
                            DB::commit();
                        }

                        $result= ConstantHelper::$SUCCEED_UPDATE_SAFETY_VIDEO;
                        $result['video'] = ['data' => $video];
                        return Response()->json($result);
                    }
                }

            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    protected function delete()
    {
        $video =  SafetyVideo::find($this->request->route('sId'));

        if($video->delete()) {
            return Response()->json(ConstantHelper::$SUCCEED_DELETED_SAFETY_VIDEO);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function addQuestion()
    {

        DB::beginTransaction();

        try {
            $video =  SafetyVideo::find($this->request->route('sId'));

            $validator = Validator::make($this->request->all(), ValidationHelper::$SAFETY_QUESTION);

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()), 400);
            }

            $options = $this->request->options;
            if(count($options) <= 1) {
                return Response()->json(ConstantHelper::$ONLY_ONE_OPTIONS, 400);
            }

            if($video)
            {
                $newQuestion = new SafetyVideoQuestion();
                $newQuestion->video_id = $video->id;
                $newQuestion->question = $this->request->question;

                if($newQuestion->save())
                {

                    foreach($options as $option)
                    {
                        if($option['option'] == '' || $option['value'] == '') {
                            DB::rollback();

                            return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
                            break;
                        }
                        $dateTime = new \DateTime();
                        $newOption = new SafetyVideoQuestionOption();
                        $newOption->option = $option['option'];
                        $newOption->value = $option['value'];
                        $newOption->video_question_id = $newQuestion->id;
                        $newOption->save();

                        if($newOption && ($this->request->answer === $option['option']))
                        {
                            $newQuestion->answer = $newOption->id;
                            $newQuestion->update();
                        }
                    }
                }
                DB::commit();
                $newQuestion->options = $newQuestion->options();
                $newQuestion->answer = $newQuestion->answerOption();
                return Response()->json([
                    'result' => true,
                    'question' => ['data'=>$newQuestion]
                ]);
            }


        } catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    protected function deleteQuestion()
    {
        $question =  SafetyVideoQuestion::find($this->request->route('qId'));

        if($question->delete()) {
            return Response()->json(ConstantHelper::$SUCCEED_DELETED_SAFETY_VIDEO);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function completeVideo()
    {
        DB::beginTransaction();

        try
        {
            $video =  SafetyVideo::find($this->request->route('sId'));

            if($video)
            {

                $videoComplete = new \App\VideoComplete();
                $videoComplete->employee_id = Auth::user()->employee()->first()->id;

                if(!$this->request->isPassed) {
                    $videoComplete->isPassed = false;
                } else {
                    $videoComplete->isPassed = $this->request->isPassed;
                }

                $videoComplete->video_id = $video->id;

                if($videoComplete->save())
                {
                    $result = ConstantHelper::$SUCCEED_COMPLETED_SAFETY_VIDEO;
                    $result['video_complete_id'] = $videoComplete->id;
                    $result['video_complete'] = $videoComplete;
                    if($videoComplete->isPassed)
                    {
                        $training = new \App\OnlineTraining();
                        $training->employee_id = $this->request->user('api')->employee->id;
                        $training->video_id = $video->id;
                        $training->company_id = $this->request->user('api')->employee->company_id;
                        $training->full_name = $this->request->user('api')->employee->full_name;
                        $training->title = $video->title;
                        $training->save();
                    }
                    \App\Log::add([
                        'user_id' => $this->request->user('api')->id,
                        'content' => config('logs.safety_video.completed'),
                        'company_id' => $this->request->user('api')->employee->id,
                    ]);

                    DB::commit();
                    return Response()->json($result);
                }
            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    private static function addQuestions($video, $questions)
    {
        if($video)
        {
            foreach($questions as $question)
            {
                if(strlen($question['question']) <= 0)
                {
                    continue;
                }
                $newQuestion = new SafetyVideoQuestion();
                $newQuestion->video_id = $video->id;
                $newQuestion->question = $question['question'];


                if ($newQuestion->save())
                {
                    $answerFound = false;
                    if (!isset($question['options']) || count($question['options']) < 2) {
                        return false;
                    }

                    foreach($question['options'] as $option)
                    {

                        $dateTime = new \DateTime();
                        $newOption = new SafetyVideoQuestionOption();

                        if($option['value'] == '') return false;
                        $newOption->option = $option['option'];
                        $newOption->value = $option['value'];
                        $newOption->video_question_id = $newQuestion->id;
                        $newOption->save();

                        if($newOption && ($question['answer'] == $option['option']))
                        {

                            $answerFound = true;
                            $newQuestion->answer = $newOption->id;
                            $newQuestion->update();
                        }
                    }

                    if(!$answerFound) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    private static function updateQuestions($video, $questions)
    {
        if($video)
        {
            foreach($questions as $question)
            {
                // check existing question
                if(isset($question['id']))
                {
                    $eQuestion = SafetyVideoQuestion::find($question['id']);
                   // dd($question);
                    if(!$eQuestion) return false;
                    $eQuestion->question = $question['question'];

                  //  dd($eQuestion);
                    if ($eQuestion->update())
                    {

                        DB::table('video_options')->where('video_question_id', $eQuestion->id)->delete();
                        $answerFound = false;
                        if (!isset($question['options']) || count($question['options']) < 2) {
                            return false;
                        }

                        foreach($question['options'] as $option)
                        {
                            $newOption = new SafetyVideoQuestionOption();

                            if($option['value'] == '') return false;
                            $newOption->option = $option['option'];
                            $newOption->value = $option['value'];
                            $newOption->video_question_id = $eQuestion->id;
                            $newOption->save();

                            if($newOption && ($question['answer'] == $option['option']))
                            {

                                $answerFound = true;
                                $eQuestion->answer = $newOption->id;
                                $eQuestion->update();
                            }
                        }

                        if(!$answerFound) {
                            return false;
                        }
                    }
                }
                else {
                    $newQuestion = new SafetyVideoQuestion();
                    $newQuestion->video_id = $video->id;
                    $newQuestion->question = $question['question'];

                    if ($newQuestion->save())
                    {
                        $answerFound = false;
                        if (!isset($question['options']) || count($question['options']) < 2) {
                            return false;
                        }

                        foreach($question['options'] as $option)
                        {
                            $newOption = new SafetyVideoQuestionOption();

                            if($option['value'] == '') return false;
                            $newOption->option = $option['option'];
                            $newOption->value = $option['value'];
                            $newOption->video_question_id = $newQuestion->id;
                            $newOption->save();

                            if($newOption && ($question['answer'] == $option['option']))
                            {

                                $answerFound = true;
                                $newQuestion->answer = $newOption->id;
                                $newQuestion->update();
                            }
                        }

                        if(!$answerFound) {
                            return false;
                        }
                    }
                }
            }
        }

        return true;
    }
}
