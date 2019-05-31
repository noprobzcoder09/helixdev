<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Helpers\ValidationHelper;
use App\Http\Helpers\ConstantHelper;
use App\Http\Helpers\AppHelper;

use App\Company;
use App\Resource;

use DB;
use Auth;
use Validator;
class ResourcesController extends Controller
{

    public function __construct(Request $request){
        $this->request  = $request;
    }

    protected function categories()
    {
        $categories = config('requirements.resource_categories');
        $company_id = AppHelper::decrypt($this->request->route('id'));
        foreach($categories as $key => $val)
        {
            $resources = Resource::where('category', $val['id'])
                ->where('company_id', $company_id)
                ->get();

            if($resources)
            {
                $categories[$key]['resources'] = $resources;
            }
        }
        return Response()->json([
            'result'     => true,
            'categories' => ['data' => $categories]
        ]);
    }

    protected function add()
    {


        DB::beginTransaction();

        try
        {
            $validator = Validator::make($this->request->all(), ValidationHelper::$RESOURCE);

            if ($validator->fails()) {
                return Response()->json(ValidationHelper::error( $validator->errors() ), 400);
            }

            $company_id = AppHelper::decrypt($this->request->route('id'));
            $resource = Resource::create(
                array_merge(['company_id' => $company_id],
                $this->request->all())
            );

            if($resource) {

                if($this->request->hasFile('resource_image'))
                {
                 //   dd($this->request->all());
                    self::processFile($resource, $this->request->file('resource_image'));
                }

                DB::commit();

                return Response()->json([
                    'result' => true,
                    'new_resource' => ['data' => $resource]
                ]);
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
            $validator = Validator::make($this->request->all(), ValidationHelper::$RESOURCE);

            if($validator->fails()){
                return Response()->json(ValidationHelper::error( $validator->errors() ), 400);
            }
            
            $resource = Resource::find($this->request->route('rId'));

            if($resource)
            {
                $resource->name = $this->request->name;
                $resource->body = $this->request->body;
                $resource->category = $this->request->category;
                $resource->update();

                if($this->request->hasFile('resource_image'))
                {
                    self::processFile($resource, $this->request->file('resource_image'));
                }

                DB::commit();

                return Response()->json([
                    'result' => true,
                    'updated_resource' => ['data' => $resource]
                ]);
            }
        } catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    protected function view()
    {

    }

    protected function delete()
    {
        DB::beginTransaction();
        try{
            $resource = Resource::find($this->request->route('rId') );

            if( is_null( $resource ) ){
                return Response()->json(ConstantHelper::$INVALID_ID);
            }

            if( $resource->delete() ){
                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_DELETING_DATA);
            }

        } catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    private static function processFile($resource, $file)
    {
//        $filename = 'resource_'.time().'.'.$file->getClientOriginalExtension();
        $filename = $file->getClientOriginalName();
        $path =  $resource->getFileStoragePath() . '/attachments/' . $resource->id . '/' .$filename;

        $upload = AppHelper::upload( $path, $file );

        if($upload)
        {
            $resource->file = $file->getClientOriginalName();
            return $resource->update() ? true : false;
        }

        return false;
    }
}
