<?php

namespace App\Http\Controllers\Api\Admin;

use App\InspectionItemCategory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Helpers\ValidationHelper;
use App\Http\Helpers\ConstantHelper;
use App\Http\Helpers\AppHelper;

use App\InspectionCategory;
use App\Company;
use App\Inspection;
use App\InspectionItem;
use App\InspectionSetup;

use DB;
use Auth;
use Validator;
use Illuminate\Support\Collection;
use Carbon\Carbon;

class InspectionController extends Controller
{
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    protected function delete()
    {
        DB::beginTransaction();

        try
        {
            $inspection = Inspection::find($this->request->route('iId'));

            if($inspection && $inspection->delete())
            {
                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_DELETE_INSPECTION);
            }
        } catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    protected function deleteItem()
    {
        DB::beginTransaction();

        try
        {
            $inspectionItem = InspectionItem::find($this->request->route('itemId'));

            if($inspectionItem && $inspectionItem->delete())
            {
                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_DELETE_INSPECTION);
            }
        } catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    protected function update()
    {

        DB::beginTransaction();

        try {

            $inspection = Inspection::find($this->request->route('iId'));

            if($inspection)
            {
                $inspection->fill([
                    'title' => $this->request->title,
                    'inspection_category_id' => $this->request->inspection_category_id
                ]);

                if($inspection->update()) {
                    DB::commit();
                    return Response()->json(ConstantHelper::$SUCCEED_UPDATE_INSPECTION);
                }
            }
        } catch(\Exception $e) {
          DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function updateItem()
    {

        DB::beginTransaction();

        try {
            $item = InspectionItem::find($this->request->route('itemId'));

            if($item)
            {

                $item->required_action = $this->request->required_action;
                $item->description = $this->request->description;
                $item->status = (int) $this->request->status;
                $item->answer = (int) $this->request->answer;

                if($this->request->name) {
                    $item->name = $this->request->name;
                }

                if($this->request->options) {
                    $item->options = $this->request->options;
                }

                if($this->request->assigned_to) {
                    $assignTo = (int) $this->request->assigned_to;
                    if($assignTo) {
                        $item->assigned_to = $assignTo;
                    }
                }

                if($this->request->not_applicable) {
                    $item->not_applicable = $this->request->not_applicable;
                }

                if($this->request->inspection_item_category_id) {
                    $item->inspection_item_category_id = $this->request->inspection_item_category_id;
                }

                if($this->request->action_due) {
                    $item->action_due = date_create($this->request->action_due);
                }
                if($this->request->inspectionPhoto) {
                    self::clientProcessImage($item, $this->request->file('inspectionPhoto'));
                }

                if($item->update()) {
                    DB::commit();
                    return Response()->json(ConstantHelper::$SUCCEED_UPDATE_INSPECTION);
                }
            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function add()
    {

        DB::beginTransaction();

        try {
            $company = Company::find(AppHelper::decrypt($this->request->route('id')));

            $arrNewInspection = $this->request->all();
            $arrNewInspection['company_id'] = $company->id;
            $arrNewInspection['created_by'] = Auth::user()->employee()->first()->id;

            $validator = Validator::make($arrNewInspection, ValidationHelper::$INSPECTION);
            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }

            $inspection = Inspection::addInspection($arrNewInspection);
            if($inspection) {
                DB::commit();
                return Response()->json([
                    'result' => true,
                    'new_inspection_id' => ['data' => $inspection->id]
                ]);

            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function addItem()
    {
        DB::beginTransaction();
      //  dd($this->request->all());
        try
        {
            $inspection = Inspection::find($this->request->route('iId'));

            if(!$inspection) {
                return Response()->json(ConstantHelper::$SERVER_ERROR);
            }

            $arrNewItem = $this->request->all();
            $arrNewItem['inspection_id'] = $inspection->id;
            $validator = Validator::make($arrNewItem, ValidationHelper::$INSPECTION_ITEM);

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }

            $inspection = InspectionItem::addItem($arrNewItem);

            if($inspection) {
                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_ADDED_INSPECTION);

            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function view()
    {
        $inspection = Inspection::find($this->request->route('iId'));

        if($inspection)
        {
            $inspection->items = $inspection->items;
            $inspection->inspectedBy;
            return Response()->json([
                'result' => true,
                'inspection' => ['data' => $inspection],
                'option_keys' => config('requirements.inspection_options_key')
            ]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function viewItem()
    {
        $inspectionItem = InspectionItem::find($this->request->route('itemId'));

        if($inspectionItem) {
            if(is_null($inspectionItem->status)) {
                $inspectionItem->status = ConstantHelper::$INSPECTION_IN_PROGRESS;
            }
            $inspectionItem->employee;
            $inspectionItem->image_url = $inspectionItem->getImageUrl();
            $inspectionItem->buttons = config('requirements.inspection_options_key_buttons')[$inspectionItem->options];
            $inspectionItem->inspection = $inspectionItem->inspection;
            return Response()->json(['result' => true, 'inspection_item' => ['data' => $inspectionItem], 'option_keys' => config('requirements.inspection_options_key')]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function lists()
    {
        $company = Company::find(AppHelper::decrypt($this->request->route('id')));
        $inspections = Inspection::where('company_id', $company->id)->get();
        $inspections->each(function($inspection) {
            $inspection->items = [];
        });
        return Response()->json([
            'result'             => true,
            'inspections'        => $inspections,
            'inspection_options' =>
                ['data' => config('requirements.inspection_options')]
        ]);
    }

    protected function categoryAdd()
    {
        DB::beginTransaction();

        try {
            $validator = Validator::make($this->request->all(), ValidationHelper::$INSPECTION_CATEGORY);

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }

            $company = Company::find(AppHelper::decrypt($this->request->route('id')));
            $inspectionCategory = new InspectionCategory();
            $inspectionCategory->name = $this->request->name;
            $inspectionCategory->company_id = $company->id;
            $inspectionCategory->created_by = Auth::user()->employee()->first()->id;

            if($inspectionCategory->save()) {
                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_ADDED_INSPECTION_CATEGORY);

            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function categoryLists()
    {
        $inspectionCategories = InspectionCategory::where('company_id', AppHelper::decrypt($this->request->route('id')))->get();
        if($inspectionCategories) {
            return Response()->json(['result'=>true, 'inspection_categories'=>['data' => $inspectionCategories]]);
        }
        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function getCategories()
    {
        $company = Company::find(AppHelper::decrypt($this->request->route('id')));

        $categories = InspectionCategory::all();
        foreach($categories as $category)
        {
            $inspections = Inspection::where('inspection_category_id', $category->id)
                ->where('company_id', $company->id)
                ->where('isClone', false)
                ->get();
            $category->inspections = $inspections;
        }

        $itemCategories = InspectionItemCategory::all()->toArray();
        $inspections = Inspection::where('company_id', $company->id)->get();
        $itemCategories[] = ['name' => 'Other/Add', 'add' => true];
        return Response()->json([
            'result'=>true,
            'inspections' => ['data'=>$inspections],
            'categories'=>['data' => $categories],
            'item_categories' => ['data' => $itemCategories],
            'inspection_options_btn' => ['data' => config('requirements.inspection_options_key_buttons')],
            'inspection_options' => ['data' => config('requirements.inspection_options')]
        ]);
    }

    protected function categoryView()
    {

        $inspectionCategory = InspectionCategory::where('id', $this->request->route('cId'))->where('company_id', AppHelper::decrypt($this->request->route('id')))->first();
        if($inspectionCategory) {
            return Response()->json(['result'=>true, 'inspection_category'=>['data' => $inspectionCategory]]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function categoryUpdate()
    {
        DB::beginTransaction();

        try {
            $validator = Validator::make($this->request->all(), ValidationHelper::$INSPECTION_CATEGORY);

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }


            $inspectionCategory = InspectionCategory::where('company_id', AppHelper::decrypt($this->request->route('id')))->where('id', $this->request->route('cId'))->first();

            if($inspectionCategory)
            {
                $inspectionCategory->name = $this->request->name;
                if($inspectionCategory->save()) {
                    DB::commit();
                    return Response()->json(ConstantHelper::$SUCCEED_UPDATE_INSPECTION_CATEGORY);
                }
            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function categoryDelete()
    {
        $inspectionCategory = InspectionCategory::where('id', $this->request->route('cId'))->where('company_id', AppHelper::decrypt($this->request->route('id')))->first();
        if($inspectionCategory->delete()) {
            return Response()->json(ConstantHelper::$SUCCEED_DELETE_INSPECTION_CATEGORY);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function itemCategoryAdd()
    {
        DB::beginTransaction();

        try
        {
            $company = Company::find(AppHelper::decrypt($this->request->route('id')));

            $arrNewItemCategory = $this->request->all();
            $arrNewItemCategory['company_id'] = $company->id;
            $validator = Validator::make($arrNewItemCategory, ValidationHelper::$INSPECTION_ITEM_CATEGORY);

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }

            $itemCategory = new InspectionItemCategory();
            $itemCategory->fill($arrNewItemCategory);

            if($itemCategory->save()) {
                DB::commit();
                return Response()->json([
                    'result' => true,
                    'new_item_category' => ['data' => $itemCategory]
                ]);
            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function itemCategoryList()
    {
        $company = Company::find(AppHelper::decrypt($this->request->route('id')));
        $itemCategories = InspectionItemCategory::where('company_id', $company->id)->get();
        return Response()->json(['result'=>true, 'inspection_item_categories' => ['data' => $itemCategories]]);
    }

    protected function itemCategoryView()
    {
        $itemCategory = InspectionCategory::find($this->request->route('itemId'));

        if($itemCategory) {
            return Response()->json(['result' => true, 'inspection_item_category' => ['data' => $itemCategory]]);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);

    }

    protected function itemCategoryUpdate()
    {
        DB::beginTransaction();

        try
        {

            $itemCategory = InspectionItemCategory::find($this->request->route('itemId'));

            if(!$itemCategory) {
                return Response()->json(ConstantHelper::$SERVER_ERROR);
            }

            $validator = Validator::make($this->request->all(), ValidationHelper::$INSPECTION_ITEM_CATEGORY_UPDATE);

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()));
            }

            $itemCategory->name = $this->request->name;
            if($itemCategory->save()) {
                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_UPDATE_INSPECTION_ITEM_CATEGORY);

            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function itemCategoryDelete()
    {

        $itemCategory = InspectionItemCategory::find($this->request->route('itemId'));

        if($itemCategory)
        {

            if($itemCategory->delete()) {
                return Response()->json(ConstantHelper::$SUCCEED_DELETE_INSPECTION_ITEM_CATEGORY);
            }
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected function export()
    {
        //dd($this->request->all());
        $inspections = Inspection::whereCompanyId(
            AppHelper::decrypt($this->request->route('id'))
        );

        if($this->request->from && $this->request->to)
        {
            $from =  Carbon::parse(str_replace('-', '/', trim($this->request->from)));
            $to = Carbon::parse(str_replace('-', '/', trim($this->request->to)));

            $inspections =
                $inspections->whereDate('created_at', '>=', $from)
                    ->whereDate('created_at', '<=', $to);
        }

        $inspections = $inspections->get();
      //  dd($inspections->toArray());
        $columns = array(
            'ID'        => 'id',
            'Inspector'     => 'inspector_name',
            'Category'      => 'category_name',
            'Inspection'    => 'title',
            'Positive / Negative' => 'pos_neg',
            'Action' 	    => 'action'
        );

        $filename = 'export_inspection'. str_replace("-", "", $this->request->from . "_" . $this->request->to) . ".csv";

        AppHelper::export($filename, $columns, $inspections);

    }

    /* Client Side */
    protected function clientHome()
    {
        $companyId = AppHelper::decrypt($this->request->route('id'));
        $categories = InspectionCategory::all();

        foreach($categories as $category)
        {
            $inspections = Inspection::where('inspection_category_id', $category->id)
                            ->where('company_id', $companyId)
                            ->where('isClone', false)
                            ->get();
            $category->inspections = $inspections;
        }

        $outstandingInspections = InspectionItem::where('assigned_to', Auth::user()->employee->id)
            ->where('isClone', false)
            ->get();

        $fOutstandingInspections = new Collection;
        $outstandingInspections->each(function($item)
        {
            $item->employee = $item->employee;
            $item->inspection = $item->inspection;
        });

        foreach($outstandingInspections as $i) {
          //  if($i->inspection->isSetup) {
                $fOutstandingInspections[] = $i;
           // }
        }

        return Response()->json([
            'result' => true,
            'categories' => ['data' => $categories],
            'outstanding_inspections' => ['data' => $fOutstandingInspections]
        ]);

    }

    protected function clientSetup()
    {
        DB::beginTransaction();

        try
        {
            $validator = Validator::make(
                $this->request->all(),
                ValidationHelper::$CLIENT_INSPECTION_START
            );

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()), 400);
            }

            $new = self::copyInspection($this->request->iId, $this->request->all());
            
            if($new)
            {
                DB::commit();
                return Response()->json([
                    'result'     => true,
                    'inspection' => ['data' => $new]
                ]);
            }

        } catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    protected function clientViewInspection()
    {

        $inspection = Inspection::find($this->request->route('iId'));

        if($inspection)
        {

            if($this->request->page == 0) {
                $pagination = InspectionItem::where('inspection_id', $inspection->id)->paginate();
            } else {
                $pagination = InspectionItem::where('inspection_id', $inspection->id)->paginate(1);
            }

            $inspection->buttons = config('requirements.inspection_options_key_buttons');

            $result = array(
                'result'     => true,
                'inspection' => ['data' => $inspection],
                'pagination' => ['data' => $pagination]
            );

            if($this->request->item) {

              $inspectionItem = InspectionItem::find($this->request->item);
              if( $inspectionItem->getImageUrl() !== null ) {
                $inspectionItem->image_url = $inspectionItem->getImageUrl();
              }

              $result['inspection_item'] =['data' => $inspectionItem] ;
            }

            return Response()->json($result);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    protected function clientUpdateInspectionItem()
    {

        DB::beginTransaction();

        try
        {
            $validations = ValidationHelper::$CLIENT_INSPECTION_ITEM_UPDATE;

            /* action due required if theres assigned to from inspection client entry */
            if($this->request->assigned_to)
            {
                $validations['action_due'] = 'required';
            }

            $validator = Validator::make(
                $this->request->all(),
                $validations
            );

            if($validator->fails()) {
                return Response()->json(ValidationHelper::error($validator->errors()), 400);
            }

            $inspectionItem = InspectionItem::find($this->request->id);
            $inspectionItem->answer = (int) $this->request->answer;
            $inspectionItem->action_due = $this->request->action_due;
            $inspectionItem->required_action = $this->request->required_action;
            $inspectionItem->description = $this->request->description;

            if($this->request->assigned_to) {
                $assignTo = \App\Employee::find($this->request->assigned_to);
                $service = new \App\Services\NotificationServices();
                $service->addNotification(Auth::id(), $assignTo->user->id, 'Inspections', 'You have been assigned with a new inspection by ' . Auth::user()->employee->first_name, $this->request->inspection_link);
                $inspectionItem->assigned_to = $this->request->assigned_to;
            }

            if($this->request->isDone) {
                $inspectionItem->isDone = true;
            }

            if($inspectionItem->update())
            {
                if($this->request->inspection_photo) {
                    self::clientProcessImage($inspectionItem, $this->request->file('inspection_photo'));
                }
                
                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_UPDATE_INSPECTION);
            }

        } catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    protected function clientSummary()
    {

        $inspection = Inspection::find($this->request->route('iId'));

        if($inspection)
        {
            $inspection->isSetup = true;
            $inspection->inspected_by = Auth::user()->employee->id;

            if( $inspection->save())
            {
                \App\Log::add([
                    'user_id' => Auth::user()->id,
                    'content' => config('logs.inspection.complete'),
                    'company_id' => Auth::user()->employee->company_id,
                ]);
            }

            return Response()->json(ConstantHelper::$SUCCEED_UPDATE_INSPECTION);
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);

    }

    private function clientPaginateInspections($setup)
    {
        $pagination = Inspection::where('inspection_id', $setup->inspection_id)->paginate(1);

        return $pagination;
    }

    private static function clientProcessImage($inspectionItem, $file) {
        $filename = 'inspection_'.time().'.'.$file->getClientOriginalExtension();
        $path = $inspectionItem->getImageStoragePath() . $filename;
        $upload = AppHelper::upload( $path, $file );
        if($upload)
        {
            DB::table('inspection_images')->where('inspection_item_id', $inspectionItem->id)->delete();
            $date_time = new \DateTime();
            $r = DB::table('inspection_images')->insert([
                'filename' => $filename,
                'inspection_item_id' => $inspectionItem->id,
                'created_at' => $date_time,
                'updated_at' => $date_time
            ]);

            return $r;
        }

        return false;
    }

    /**
     * @param $id --- inspection id
     * @param $data --- data for inspection
     * return bool
     */
    private static function copyInspection($id, $data)
    {
        $inspection = Inspection::find($id);

        if($inspection)
        {
            $clone = $inspection->replicate();
            $clone->fill($data);
            $clone->isClone = true;
            $clone->save();

            $items = InspectionItem::where('inspection_id', $inspection->id)
                    ->where('isClone', false)
                    ->get();

            $items->each(function($i) use($clone){
                $c = $i->replicate();
                $c->answer = 0;
                $c->inspection_id = $clone->id;
                $c->isClone = true;

                $c->save();

                \App\CorrectiveAction::insert([
                    'inspection_item_id' => $c->id,
                    'company_id'     => $c->inspection->company_id,
                    'created_at'     => new \DateTime(),
                    'updated_at'     => new \DateTime()
                ]);
            });

            return $clone;
        }

        return false;
    }
}
