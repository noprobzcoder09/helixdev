<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Helpers\ValidationHelper;
use App\Http\Helpers\ConstantHelper;
use App\Http\Helpers\AppHelper;

use League\Fractal\Manager;
use League\Fractal\Resource\Collection as FractalCollection;
use League\Fractal\Resource\Item as FractalItem;

use App\Http\Transformers\Api\SubcontractorTransformer;

use Validator;

use App\SubContractor;
use App\SubContractorImage;
use App\SubContractorDocument;
use App\Company;
use App\State;

use DB;
use Auth;
use Carbon\Carbon;

class SubcontractorController extends Controller
{

    public function __construct(Request $request, Manager $manager)
    {
        $this->request  = $request;
        $this->fractal   = new $manager;
    }

    public function add()
    {

        DB::beginTransaction();

        try
        {
            $validator = Validator::make(
                $this->request->all(),
                ValidationHelper::$SUBCONTRACTOR
            );

            if($validator->fails())
            {
                return Response()->json(
                    ValidationHelper::error($validator->errors()),
                    400
                );
            }

            $company = Company::find(AppHelper::decrypt($this->request->route('id')));

            $arrNewSubCon = $this->request->all();
            // dd($arrNewSubCon);

            $arrNewSubCon['state_id'] = 1;
            $arrNewSubCon['created_by'] = Auth::user()->employee()->first()->id;
            $arrNewSubCon['company_id'] = $company->id;

            $newSubCon = SubContractor::addSubCon($arrNewSubCon);

            if($newSubCon) {

                $files = $this->request->file();
                if(array_key_exists('company_logo', $files) ) {

                    if( $this->request->hasFile('company_logo') &&
                        self::addLogo($newSubCon, $this->request->file('company_logo')) ) {
                        unset($files['company_logo']);
                    }
                }

                foreach($files as $key => $file) {

                    self::processDoc(
                        $newSubCon,
                        substr($key, 13), /* name */
                        $file
                    );

                }

                DB::commit();
                return Response()->json([
                    'result' => true,
                    'sub_con' => ['data' => $newSubCon],
                ]);

            }
        }
        catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);

    }

    public function update()
    {

        DB::beginTransaction();

        try{

            $email = $this->request->get('email');
            $subcontractor = SubContractor::find($this->request->route('sId'));

            /* check if subcontractor id exists or not */
            if( is_null( $subcontractor ) ){
                return Response()->json(ConstantHelper::$INVALID_ID);
            }

            $validations = ValidationHelper::$SUBCONTRACTOR;

            /* if email is not change then unset the email validation */
            if( $subcontractor->email == $email ){
                unset($validations['email']);
            }

            $validator = Validator::make($this->request->all(), $validations);
            if($validator->fails()){
                return Response()->json(ValidationHelper::error( $validator->errors() ));
            }

            /* if everything goes well then update */
            $update = SubContractor::patch(
                $this->request->route('sId'),
                $this->request->all()
            );

            if($update)
            {
                if($this->request->hasFile('company_logo')) {
                    self::addLogo($subcontractor, $this->request->file('company_logo'));
                }
                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_UPDATING_DATA);
            }

        } catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    public function lists()
    {
        $subcontractor = SubContractor::paginate( ConstantHelper::$PAGINATION_LIMIT );

        $resource = new FractalCollection( $subcontractor, new SubcontractorTransformer );
        $collection =  $this->fractal->createData( $resource )->toArray();

        DB::commit();
        return Response()->json(['result' => true, 'subcontractors' => $collection]);

    }

    public function view()
    {
        $subcontractor = SubContractor::find($this->request->route('sId'));
        $subcontractor->state = $subcontractor->state()->get();
        $subcontractor->logo = $subcontractor->getSubconLogo();
        $subcontractor->docs = $subcontractor->docs();
        if($subcontractor) {
            return Response()->json([
                'result' => true,
                'sub_contractor' => ['data' => $subcontractor],
                'sub_contractor_required_docs' => ['data' => config('requirements.sub_contractor_docs')]
            ]);
        }
        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    public function uploadDocs()
    {
        // dd($this->request->all());
        DB::beginTransaction();

        try
        {
            $subContractor = SubContractor::find($this->request->route('sId'));
            $files = $this->request->file();
            foreach($files as $key => $file) {
                self::processDoc(
                    $subContractor,
                    substr($key, 13), /* name */
                    $file
                );
            }

            $docs = $subContractor->docs();

            if($docs) {
                DB::commit();
                return Response()->json([
                    'result' => true,
                    'docs' => ['data' => $docs],
                ]);
            }
        }
        catch(\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR, 400);
    }

    public function delete()
    {

        DB::beginTransaction();
        try{
            $subcontractor = SubContractor::find( $this->request->route('sId') );

            if( is_null( $subcontractor ) ){
                return Response()->json(ConstantHelper::$INVALID_ID);
            }

            if( $subcontractor->delete() ){
                DB::commit();
                return Response()->json(ConstantHelper::$SUCCEED_DELETING_DATA);
            }

        } catch (\Exception $e) {
            DB::rollback();
        }

        return Response()->json(ConstantHelper::$SERVER_ERROR);
    }

    protected static function addLogo($sub_contractor, $logo_file)
    {

        DB::table('subcontractor_images')
            ->where('subcontractor_id', $sub_contractor->id)
            ->delete();

        $filename = 'subcon_'.time().'.'.$logo_file->getClientOriginalExtension();
        $path = $sub_contractor->getLogoPath() . $filename;
        $upload = AppHelper::upload( $path, $logo_file );

        if( $upload )
        {
            $date_time = new \DateTime();
            DB::table('subcontractor_images')->insert([
                'subcontractor_id' => $sub_contractor->id,
                'filename' => $filename,
                'created_at' => $date_time,
                'updated_at' => $date_time
            ]);
            return true;
        }

        return false;

    }

    protected function export()
    {

        $subContractors = SubContractor::whereCompanyId(
            AppHelper::decrypt($this->request->route('id'))
        );

        if($this->request->from && $this->request->to)
        {
            $from =  Carbon::parse(str_replace('-', '/', trim($this->request->from)));
            $to = Carbon::parse(str_replace('-', '/', trim($this->request->to)));

            $subContractors =
                $subContractors->whereDate('created_at', '>=', $from)
                ->whereDate('created_at', '<=', $to);
        }

        $subContractors = $subContractors->get();

        $subContractors->each(function($s)
        {
            $docsString = '';
            $docs = $s->docs();
            foreach($docs as $doc)
            {
               $docsString .= ' ' . $doc->filename;
            }

            $s->docs_string = $docsString;
        });

        $filename = 'export_subcontractor_'.time().'.csv';
        $columns = array(
            'Name'      => 'name',
            'Contact'   => 'contact',
            'Email' 	=> 'email',
            'Added' 	=> 'created_at',
            'Documents' => 'docs_string'
        );

        AppHelper::export($filename, $columns, $subContractors);
    }

    public function updateLogo()
    {

    }

    public function addDocument(){

        DB::beginTransaction();
        try{

            $file = $this->request->file('file');
            $subcontractor_id = AppHelper::decrypt( $this->request->get('id') );
            $subcontractor = SubContractor::find( $subcontractor_id );

            //check if subcontractor id exists or not
            if( is_null( $subcontractor ) ){
                return Response()->json(ConstantHelper::$INVALID_ID);
            }


            //check document validation
            $validator = Validator::make($this->request->all(), ValidationHelper::$SUBCONTRACTOR_DOCUMENT);
            if($validator->fails()){
                return Response()->json(ValidationHelper::error( $validator->errors() ));
            }

            $filename = 'subcontractor_'.time().'.'.$file->getClientOriginalExtension();
            $path = 'subcontractor/documents/'.$this->request->get('company_id').'/'.$subcontractor_id.'/'.$filename;
            $upload = AppHelper::upload( $path, $file );

            if( $upload ){

                //add document
                $array_request = ['name' => $this->request->get('name'), 'filename' => $filename, 'subcontractor_id' => $subcontractor_id];
                $subcontractor_document_add = SubContractorDocument::add( $array_request );

                if( $subcontractor_document_add ){
                    //add document
                    DB::commit();
                    return Response()->json(ConstantHelper::$SUCCEED_ADDED_DATA);
                }

            }

            return Response()->json(ConstantHelper::$SERVER_ERROR);

        } catch (\Exception $e) {
            DB::rollback();
            // something went wrong
        }
    }

    public function search()
    {

        $search = $this->request->get('keywords');

        //check document validation
        $validator = Validator::make($this->request->all(), ValidationHelper::$SEARCH_KEYWORDS);
        if($validator->fails()){
            return Response()->json(ValidationHelper::error( $validator->errors() ));
        }

        $subcontractor = SubContractor::search( $search, ['name' => 10, 'email' => 5])->paginate( ConstantHelper::$PAGINATION_LIMIT );

        $resource = new FractalCollection( $subcontractor, new SubcontractorTransformer );
        $collection =  $this->fractal->createData( $resource )->toArray();

        return Response()->json(['result' => true, 'subcontractors' => $collection]);

    }

    protected static function processDoc($subContractor, $name, $file)
    {

        $filename = "{$name}.".$file->getClientOriginalExtension();

        $path = $subContractor->getDocsPath() . $filename;
        $upload = AppHelper::upload( $path, $file );

        if($upload)
        {
            DB::table('subcontractor_docs')
                ->where('type', $name)
                ->where('subcontractor_id', $subContractor->id)
                ->delete();

            $date_time = new \DateTime();
            $r = DB::table('subcontractor_docs')->insert([
                'subcontractor_id' => $subContractor->id,
                'type' => $name,
                'filename' => $filename,
                'created_at' => $date_time,
                'updated_at' => $date_time
            ]);
            return $r;
        }

        return false;
    }
}
