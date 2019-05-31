<?php

namespace App\Http\Controllers\Api\Client;

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

                if(!$video->enable_questions) {
                    $video->count_question = 0;
                }
            });
            return Response()->json(['result' => true, 'videos' => ['data' => $videos]]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
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

}
