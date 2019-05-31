<?php

namespace App\Http\Controllers\Api\Admin;


use App\ChemicalAssessment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Helpers\ValidationHelper;
use App\Http\Helpers\ConstantHelper;
use App\Http\Helpers\AppHelper;

use App\Company;
use App\ChemicalCategory;
use App\Chemical;
use App\ChemicalMsdsImage;

use DB;
use Auth;
use Validator;

class ChemicalController extends Controller
{
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    protected function add()
    {

        DB::beginTransaction();

        try
        {

            $validator = Validator::make($this->request->all(), ValidationHelper::$CHEMICAL);
            $request = $this->request->all();
            $request['created_by'] = Auth::user()->employee->id;
            $request['company_id'] = AppHelper::decrypt($this->request->route('id'));

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()), 400);
            }

            $chemical = Chemical::create($request);

            if($chemical->save())
            {
                $ppeIds = explode(',', $this->request->ppes);
                $groups = explode(',', $this->request->groups);

                foreach($ppeIds as $id)
                {
                    DB::table('chemical_item_ppes')->insert([
                        ['ppe_id' => (int) $id, 'chemical_id' => $chemical->id]
                    ]);
                }

                foreach($groups as $g)
                {
                    if((int) $g) {
                        DB::table('chemical_groups')->insert([
                            ['chemical_id' => $chemical->id, 'group_id' => (int) $g]
                        ]);
                    }
                }

                if($this->request->hasFile('image')) {
                    self::processImage($chemical, $this->request->file('image'));
                }

                if($this->request->hasFile('msds')) {
                    self::processFile($chemical, $this->request->file('msds'));
                }

                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_ADDED_DATA);
            }

        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);

    }

    protected function lists()
    {

        $chemicals = Chemical::whereCompanyId(AppHelper::decrypt($this->request->route('id')))
            ->orderBy('id', 'desc')
            ->paginate(100);

        return Response()->json([
            'result' => true,
            'chemicals' => ['data' => $chemicals]
        ]);

    }

    protected function libraries() {
        $chemicals = Chemical::whereCompanyId(AppHelper::decrypt($this->request->route('id')))->get();

        return Response()->json([
            'result' => true,
            'libraries' => ['data' => $chemicals]
        ]);
    }

    protected function view()
    {
        $chemical = Chemical::getChemical($this->request->route('cId'));

        if($chemical)
        {
            $chemical->chemicalGroups->each(function($g){
              $g->group;
            });

            return Response()->json([
                'result' => true,
                'chemical' => ['data' => $chemical]
            ]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function update()
    {
        DB::beginTransaction();

        try {

            $chemical_id =  $this->request->route('cId');
            $chemical = Chemical::find($chemical_id);

            //check if chemical exist in the Database
            if( is_null($chemical) ) {
              return Response()->json(ConstantHelper::$INVALID_ID);
            }

            if($chemical->substance == $this->request->get('substance')) {
              unset(ValidationHelper::$CHEMICAL['substance']);
            }

            if(!$this->request->get('image')) {
              unset(ValidationHelper::$CHEMICAL['image']);
            }

            if(!$this->request->get('msds')) {
              unset(ValidationHelper::$CHEMICAL['msds']);
            }

            $validator = Validator::make($this->request->all(), ValidationHelper::$CHEMICAL);
            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }

            $chemical->fill( $this->request->all() );

            if($chemical->update())
            {
              $ppeIds = explode(',', $this->request->ppes);
              $groups = explode(',', $this->request->groups);

              DB::table('chemical_item_ppes')->where('chemical_id', '=', $chemical_id)->delete();
              foreach($ppeIds as $id) {
                  DB::table('chemical_item_ppes')->insert([
                      ['ppe_id' => (int) $id, 'chemical_id' => $chemical_id]
                  ]);
              }

              DB::table('chemical_groups')->where('chemical_id', '=', $chemical_id)->delete();
              foreach($groups as $g)
              {
                if((int) $g) {
                  DB::table('chemical_groups')->insert([
                      ['chemical_id' => $chemical_id, 'group_id' => (int) $g]
                  ]);
                }
              }

              if($this->request->hasFile('image')) {
                DB::table('chemical_msds_images')->where('chemical_id', $chemical_id)->where('type', 'image')->delete();

                self::processImage($chemical, $this->request->file('image'));
              }

              if($this->request->hasFile('msds')) {
                DB::table('chemical_msds_images')->where('chemical_id', $chemical_id)->where('type', 'msds')->delete();

                self::processFile($chemical, $this->request->file('msds'));
              }

              DB::commit();
              return Response()->json(ConstantHelper::$SUCCEED_ADDED_DATA);
            }

        }
        catch(\Exception $e) {
            DB::rollback();
        }
    }

    protected function deleteImage() {

    }
    protected function delete()
    {

      DB::beginTransaction();
      try{
          $chemical = Chemical::find( $this->request->route('cId') );

          if( is_null( $chemical ) ){
              return Response()->json(ConstantHelper::$INVALID_ID);
          }

          if( $chemical && $chemical->delete() ){
              DB::commit();
              return Response()->json(ConstantHelper::$SUCCEED_DELETING_DATA);
          }

      } catch (\Exception $e) {
          DB::rollback();
      }

      return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function categoryAdd()
    {
        DB::beginTransaction();

        try
        {
            $validator = Validator::make($this->request->all(), ValidationHelper::$CHEMICAL);

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }

            $newCategory = new ChemicalCategory();
            $newCategory->name = $this->request->name;

            if($newCategory->save()) {
                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_ADDED_CHEMICAL_CATEGORY);
            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function categoryLists()
    {
        $categories = Emergency::all();

        return Response()->json([
            'result' => true,
            'chemical_categories' => ['data' => $categories]
        ]);
    }

    protected function categoryUpdate()
    {
        DB::beginTransaction();

        try
        {
            $validator = Validator::make($this->request->all(), ValidationHelper::$CHEMICAL_CATEGORY);

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }

            $category = ChemicalCategory::find($this->request->route('catId'));

            if($category)
            {
                $category->name = $this->request->name;
                if($category->save()) {
                    DB::commit();
                    return Response()->json(ConstantHelper::$SUCCEED_UPDATE_CHEMICAL_CATEGORY);
                }
            }

        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function categoryView()
    {
        $category = ChemicalCategory::find($this->request->route('catId'));

        if($category) {
            return Response()->json([
                'result' => true,
                'chemical_category' => ['data' => $category]
            ]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function categoryDelete()
    {
        $category = ChemicalCategory::find($this->request->route('catId'));

        if($category && $category->delete())
        {
            return Response()->json(ConstantHelper::$SUCCEED_DELETE_CHEMICAL_CATEGORY);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function ppeAdd()
    {
        DB::beginTransaction();

        try {
            $validator = Validator::make($this->request->all(), ValidationHelper::$EMPLOYEE_DOCUMENT);

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }

            if(!in_array($this->request->type, Employee::employeeRequiredDocs())) {
                return Response()->json(ValidationHelper::error(['invalid_type' => 'invalid employee requirement type']));
            }

            $companyId = AppHelper::decrypt($this->request->route('id'));
            $company = Company::find($companyId);
            $employeeId =$this->request->route('eId');
            $employee = Employee::find($employeeId);

            if($company && $employee->isMyCompany($company)) {

                $result = self::processDoc($employee, $this->request->type, $this->request->file('file'));

                if($result) {
                    DB::commit();
                    return Response()->json(ConstantHelper::$SUCCEED_UPLOAD_FILE);
                }
            }

        }
        catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function ppeLists()
    {
        $ppeList = DB::table('chemical_ppes')->get();

        return Response()->json([
            'result' => true,
            'chemical_ppes' => ['data' => $ppeList]
        ]);
    }

    protected function ppeUpdate()
    {

    }

    protected function ppeView()
    {

    }

    protected function ppeDelete()
    {

    }

    private static function processIcon($ppe, $icon)
    {
        if(File::exists(public_path($ppe->getPpePath())))
        {
            Storage::deleteDirectory(public_path($ppe->getIconPath()));
        }

        DB::table('chemical_ppe_images')->where('ppe_id', $ppe->id)->delete();

        $filename = 'ppe_'.time().'.'. $icon->getClientOriginalExtension();
        $path = $ppe->getPpePath() . $filename;
        $upload = AppHelper::upload( $path, $icon );

        if($upload)
        {
            $date_time = new \DateTime();
            DB::table('chemical_ppe_images')->insert([
                'ppe_id' => $ppe->id,
                'filename' => $filename,
                'created_at' => $date_time,
                'updated_at' => $date_time
            ]);
            return true;
        }

        return false;
    }

    private static function processImage($chemical, $file)
    {
        $filename = 'chemical_'.time().'.'.$file->getClientOriginalExtension();
        $path =  $chemical->getImageStoragePath().$chemical->id.'/'.$filename;
        $upload = AppHelper::upload( $path, $file );

        if($upload)
        {
            $dateTime = new \DateTime();
            $result = DB::table('chemical_msds_images')->insert([
                [
                    'chemical_id' => $chemical->id,
                    'filename' => $filename,
                    'created_at' => $dateTime,
                    'updated_at' => $dateTime,
                    'type' => 'image'
                ]
            ]);

            return ( $result ) ?  true : false;
        }

        return false;
    }

    private static function processFile($chemical, $file)
    {
        $filename = 'chemical_'.time().'.'.$file->getClientOriginalExtension();
        $path =  $chemical->getMSDSStoragePath().$chemical->id.'/'.$filename;
        $upload = AppHelper::upload( $path, $file );

        if($upload)
        {
            $dateTime = new \DateTime();
            $result = DB::table('chemical_msds_images')->insert([
                [
                    'chemical_id' => $chemical->id,
                    'filename' => $filename,
                    'created_at' => $dateTime,
                    'updated_at' => $dateTime,
                    'type' => 'msds'
                ]
            ]);

            return ( $result ) ?  true : false;
        }

        return false;
    }


    /* client side */

    protected function clientViewGroupChemicals()
    {
        $group = \App\Group::find($this->request->route('gId'));

        if($group)
        {
           $group->chemicals = $group->getChemicals();
            return Response()->json([
                'group' => ['data' => $group]
            ]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function clientViewAssessmentData()
    {
        /* chemicals */
        $chemicals = Chemical::all();

        /* assessment serialize */

        return Response()->json([
            'chemicals' => ['data' => $chemicals],
            'assessment' => ['data' =>  json_decode(file_get_contents(storage_path() . '/serializes/assessment.json'), true)
            ]
        ]);
    }

    protected function clientViewImage()
    {
        $chemical = Chemical::find($this->request->route('cId'));

        if($chemical) {
            return Response()->json(
                [
                    'result' => true,
                    'image' => ['data' => $chemical->getImageUrl()]
                ]
            );
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function clientDoneAssessment() {

        DB::beginTransaction();

        try
        {
            $chemical = Chemical::find($this->request->route('cId'));

            if($chemical && $chemical->save())
            {
                \App\ChemicalAssessment::create([
                    'chemical_id'  => $chemical->id,
                    'form'         => json_encode($this->request->all()),
                    'employee_id'  => $this->request->user('api')->employee->id
                ]);
                \App\Log::add([
                    'user_id' => $this->request->user('api')->id,
                    'content' => config('logs.chemical.completed'),
                    'company_id' => $this->request->user('api')->employee->company_id,
                ]);

                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_UPDATE_CHEMICAL);
            }
        } catch(\Exception $e) {
            DB::rollback();
        }


        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);

    }
}
