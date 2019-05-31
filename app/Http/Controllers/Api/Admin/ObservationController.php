<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Helpers\ValidationHelper;
use App\Http\Helpers\ConstantHelper;
use App\Http\Helpers\AppHelper;

use Validator;

use App\Observation;
use App\ObservationImage;
use App\Company;

use DB;
use Auth;
use App\Log;

use App\Services\ObservationService;

class ObservationController extends Controller
{
    public function __construct(Request $request){
        $this->request  = $request;
        //$this->fractal   = new $manager;
    }

    protected function add()
    {
        DB::beginTransaction();

        try {

            $company = Company::find(AppHelper::decrypt($this->request->route('id')));
            $arrNewObservation = $this->request->all();
            $arrNewObservation['company_id'] = $company->id;
            $arrNewObservation['employee_id'] = Auth::user()->employee()->first()->id;

            $validator = Validator::make($arrNewObservation, ValidationHelper::$OBSERVATION);

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }

            $observation = Observation::add($arrNewObservation);

            if($observation) {
                //upload pre action and post action images
                $uploadPreImage = $this->uploadImage($observation->id,'pre',$this->request->pre_action_photo);
                $uploadPostImage = $this->uploadImage($observation->id,'post',$this->request->post_action_photo);

                if( $uploadPreImage && $uploadPostImage ){
                    DB::commit();
                    return Response()->json(ConstantHelper::$SUCCEED_ADDED_DATA);
                }
            }

        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function lists()
    {
        $company = Company::find(AppHelper::decrypt($this->request->route('id')));
        $observations = Observation::where('company_id', $company->id)->get();
        $observations->each(function($observation) {
            $observation->items = [];
        });
        return Response()->json([
            'result'             => true,
            'observations'       => $observations,
        ]);
    }

    protected function view()
    {
        $observation = Observation::find($this->request->route('oId'));

        if($observation) {
            $observationCategories = json_decode(config('requirements.observation_categories'), true);
            if(!is_null($observation->category) && $observation->category) {
                $observation->category = $observationCategories['categories'][$observation->category];
            }
            $observation->sub_categories = $observation->subCategoriesToString();
            $observation->images = $observation->getImages();
            $observation->inspector;
            $observation->createdBy;
            return Response()->json([
                'result' => true,
                'observation' => ['data' => $observation],
            ]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function export()
    {
        $observations = Observation::whereCompanyId( AppHelper::decrypt( $this->request->route('id') ) )->get();
        $filename = 'export_observation_'.time().'.csv';
        $columns = array(
            //'ID' => 'id',
            'Seen' => 'seen',
            'Performed Action' => 'performed_action',
            'Further Action' 	=> 'further_action',
            'Status' 	=> 'further_action',
        );
        AppHelper::export($filename, $columns, $observations);
    }

    protected function update()
    {
       // dd($this->request->all());
        DB::beginTransaction();

        try {
            $observation = Observation::find($this->request->route('oId'));

            if($observation)
            {
                $observation->seen = $this->request->seen;
                $observation->action_performed = $this->request->action_performed;
                $observation->further_action = $this->request->further_action;
                $observation->status = $this->request->status;
                $observation->performed_by = $this->request->performed_by;
                $observation->created_by = $this->request->created_by;
                $observation->description = $this->request->description;
                $observation->due = $this->request->due;

                if($observation->update())
                {
                    $employee = \App\Employee::find($observation->performed_by);
                    if($employee)
                    {
                        $links = config('requirements.alert_links.observation');
                        $links['observation_id'] = $observation->id;
                        $links['type'] = 'observation';
                        $service = new \App\Services\NotificationServices();
                        $service->addNotification(
                            Auth::id(),
                            $employee->user->id,
                            'Observation',
                            'You have been assigned to a observation by ' . Auth::user()->employee->first_name . ' ' . Auth::user()->employee->last_name,
                            json_encode($links)
                        );
                    }

                    DB::commit();
                    return Response()->json(ConstantHelper::$SUCCEED_ADDED_DATA);
                }
            }
        } catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);

    }

    /* Client Side */

    protected function clientStart()
    {
        DB::beginTransaction();

        try
        {
            $company = Company::find(AppHelper::decrypt($this->request->route('id')));
            $validator = Validator::make($this->request->all(), ValidationHelper::$OBSERVATION_START);

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()),400);
            }

            $observation = new Observation();
            $observation->seen = $this->request->seen;
            $observation->created_by = Auth::user()->employee->id;
            $observation->company_id = $company->id;
            $observation->status = ConstantHelper::$OBSERVATION_IN_PROGRESS;
            if($observation->save())
            {
                $result = self::uploadImage($observation, 'pre', $this->request->file('observation_photo'));
                if($result) {
                    DB::commit();
                    $jsonResult = ConstantHelper::$SUCCEED_ADDED_DATA;
                    $jsonResult['new_observation_id'] = ['data' => $observation->id];
                    return Response()->json($jsonResult);
                }
            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function clientView() {

        $observation = Observation::find($this->request->route('oId'));

        if($observation) {
            $observation->images = $observation->getImages();
            $subCategories = DB::table('observation_categories')->where('observation_id', $observation->id)->get();
            $observation->sub_categories = $subCategories;
            return Response()->json([
                'result' => true,
                'observation' => ['data' => $observation],
                'observation_categories' => ['data' => json_decode(config('requirements.observation_categories'), true)]
            ]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);

    }

    protected function clientAction()
    {
        DB::beginTransaction();

        try {
            /* validations here */

            $observation = Observation::find($this->request->route('oId'));
            if($observation)
            {

                $observation->type = (int) $this->request->selected_type;
                $observation->location = $this->request->location;
                $observation->category = $this->request->selected_category;
                $observation->description = $this->request->description;

                if($observation->save()) {
                    /* insert observation selected categories*/
                    $dateTime = new \DateTime();
                    DB::table('observation_categories')->where('observation_id', $observation->id)->delete();
                    foreach($this->request->categories as $key => $category)
                    {
                        if(isset($category['isChecked']) && $category['isChecked']) {
                            DB::table('observation_categories')->insert([
                                [
                                    'sub_category' => $key,
                                    'category'  => $category['category'],
                                    'observation_id' => $observation->id,
                                    'created_at' => $dateTime,
                                    'updated_at' => $dateTime
                                ]
                            ]);
                        }
                    }
                    DB::commit();
                    return Response()->json(ConstantHelper::$SUCCEED_UPDATE_OBSERVATION);
                }
            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    protected function clientSummary()
    {

        DB::beginTransaction();

        try {
            /* validations here */
            $validator = Validator::make($this->request->all(), ValidationHelper::$OBSERVATION_SUMMARY);

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()),400);
            }

            $observation = Observation::find($this->request->route('oId'));
            if($observation)
            {
                $observation->description = $this->request->description;
                $observation->action_performed = $this->request->action_performed;
                $observation->further_action = $this->request->further_action;
                $observation->isAction = true;

                if($observation->update()) {
                    $result = self::uploadImage($observation, 'post', $this->request->file('observation_photo'));

                    if($result) {
                        DB::commit();
                        Log::add([
                            'user_id' => Auth::user()->id,
                            'content' => config('logs.observation.submit'),
                            'company_id' => Auth::user()->employee->company_id,
                        ]);
                        return Response()->json(ConstantHelper::$SUCCEED_UPDATE_OBSERVATION);
                    }
                }
            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    protected function clientVerify()
    {

        DB::beginTransaction();

        try {

            $observation = Observation::find($this->request->route('oId'));

            if($observation)
            {
                $observation->verification_comment = $this->request->verification_comment;
                $observation->status = 2;
                if($observation->update())
                {
                    $resultImage = self::uploadImage(
                        $observation,
                        'verified',
                        $this->request->file('observation_photo')
                    );

                    if($resultImage) {
                        DB::commit();
                        return Response()->json(ConstantHelper::$SUCCEED_UPDATE_OBSERVATION);
                    }
                }
            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    protected function clientAssignments()
    {
       // dd($this->request->user('api')->id);


//        try
//        {

            return Response()->json([
                'result'     => true,
                'pagination' => ObservationService::getClientAssignments($this->request->user('api')->id)
            ]);

//        } catch (\Exception $e) {
//            return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
//        }
    }

    protected function clientList()
    {
        dd($this->request->user('api')->id);
    }

    protected static function uploadImage($observation, $prefix, $file)
    {
        $filename = $prefix.'_observation_'.time().'.'.$file->getClientOriginalExtension();
        $path =  $observation->storagePath().$observation->id.'/'.$filename;
        $upload = AppHelper::upload( $path, $file );

        if( $upload ){

            $column = $prefix.'_action_photo_filename';

            $observationImage = ObservationImage::updateOrCreate(
                ['observation_id' => $observation->id],
                [$column => $filename]
            );
            return ( $observationImage ) ?  $observationImage : false;
        }
        return false;
    }
}
