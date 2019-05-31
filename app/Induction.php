<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use DB;
use App\InductionGroupItem;

class Induction extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];
    protected $table = 'inductions';

    protected $fillable = [
        'title', 'video_link', 'description', 'group_id', 'created_by'
    ];

    public function company()
    {
        return $this->belongsTo('App\Company', 'company_id', 'id');
    }

    public function questions()
    {
        return $this->hasMany('App\InductionQuestion');
    }

    public static function addInduction($arrNewInduction)
    {
        $induction = new self();
        $induction->fill($arrNewInduction);

        if ($induction->save())
        {

            if (isset($arrNewInduction['categories'])) {
                $dateTime = new \DateTime;
                foreach($arrNewInduction['categories'] as $id) {
                    DB::table('induction_group_items')->insert([
                        'group_id'      => (int) $id,
                        'induction_id'  => $induction->id,
                        'created_at'    => $dateTime,
                        'updated_at'    => $dateTime
                    ]);
                }
            }

            foreach($arrNewInduction['questions'] as $arrQuestion)
            {
                $question = new \App\InductionQuestion();
                $question->question =  $arrQuestion['question'];
                $question->induction_id = $induction->id;

                if ($question->save())
                {
                    $options = $arrQuestion['options'];
                    $c = 1;
                    foreach($options as $key => $option)
                    {
                        if(strlen($option['value']) <= 0) {
                            continue;
                        }
                        $newOption = new \App\InductionQuestionOption();
                        $newOption->name = 'option ' . $c;
                        $newOption->value = $option['value'];
                        $newOption->question_id = $question->id;
                        $newOption->save();
                        if($newOption && ($arrQuestion['answer'] == $option['value'])) {
                            $question->answer = $newOption->name;
                            $question->update();
                        }
                        $c++;
                    }
                }
            }
            return true;
        }

        return false;
    }

    public static function updateInduction($id, $arrNewInduction)
    {
        $induction = self::find($id);

        if($induction)
        {
            $induction->fill($arrNewInduction);

            if($induction->update()) {

                if (isset($arrNewInduction['categories']))
                {
                    // delete categories
                    InductionGroupItem::where('induction_id', $induction->id)->delete();

                    $dateTime = new \DateTime;
                    foreach($arrNewInduction['categories'] as $id)
                    {
                        DB::table('induction_group_items')->insert([
                            'group_id'      => (int) $id,
                            'induction_id'  => $induction->id,
                            'created_at'    => $dateTime,
                            'updated_at'    => $dateTime
                        ]);
                    }

                    foreach($arrNewInduction['questions'] as $arrQuestion)
                    {
                        if(isset($arrQuestion['id'])) {
                            $question = \App\InductionQuestion::find($arrQuestion['id']);
                            $question->question = $arrQuestion['question'];
                            $question->induction_id = $induction->id;
                        } else {
                            $question = new \App\InductionQuestion();
                            $question->question =  $arrQuestion['question'];
                            $question->induction_id = $induction->id;
                        }


                        if ($question && $question->save())
                        {
                            $options = $arrQuestion['options'];
                            // delete existing options
                            DB::table('induction_question_options')->where('question_id', $question->id)->delete();

                            $c = 1;
                            foreach($options as $key => $option)
                            {
                                if(strlen($option['value']) <= 0) {
                                    continue;
                                }
                                $newOption = new \App\InductionQuestionOption();
                                $newOption->name = 'option ' . $c;
                                $newOption->value = $option['value'];
                                $newOption->question_id = $question->id;
                                $newOption->save();
                                if($newOption && ($arrQuestion['answer'] == $option['value'])) {
                                    $question->answer = $option['value'];
                                    $question->update();
                                }
                                $c++;
                            }
                        }
                    }
                }
            }
            return true;
        }

        return false;

    }

    public static function viewInduction($id)
    {
        $induction = self::find($id);

        if($induction)
        {
            $questions = $induction->questions()->get();
            foreach($questions as $key => $question) {
                $options = DB::table('induction_question_options')->where('question_id', $question->id)->get();
                $question->options = $options;
                $questions[$key] = $question;
            }

            $categories = InductionGroupItem::where('induction_id', $id)->select('group_id')->get();
            $ids = [];
            foreach($categories as $id) {
                $ids[] = $id->group_id;
            }
            $induction->questions = $questions;
            $induction->categoryIds = $ids;

            $videoHtml = '';
            if(preg_match('/vimeo/', $induction->video_link)) {
                // vimeo
                $vmsArr = explode('/', $induction->video_link);
                $num = false;
                foreach($vmsArr as $vm) {
                    if(is_numeric($vm)) {
                        $num = $vm;
                        break;
                    }
                }
                $induction->isVimeo = true;
                $videoHtml = "<iframe id=\"iframe_pop_video\" src=\"//player.vimeo.com/video/{$num}?autoplay=0&amp;byline=0&amp;title=0&amp;badge=0&amp;portrait=0&amp;api=1&amp;player_id=iframe_pop_video\" width=\"100%\" height=\"100%\" frameborder=\"0\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\"></iframe>";
            }  else {
                $videoHtml = '<div id="video-link"><a href="{{safety.view.link}}"></a></div>';
            }

            $induction->htmlVideo = $videoHtml;
            return $induction;
        }

        return false;
    }
}
