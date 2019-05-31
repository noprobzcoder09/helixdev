<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Http\Helpers\ConstantHelper;
use Sofa\Eloquence\Eloquence;
use DB;

class SubContractor extends Model
{
    use SoftDeletes;
    use Eloquence;

    protected $table = 'subcontractors';
    protected $fillable = [
        'company_id',
        'created_by',
        'name',
        'contact',
        'contact_number',
        'email',
        'type',
        'approved',
        'address',
        'state_id',
        'postal_code',
        'abn',
        'type',
    ];
    protected $dates = ['deleted_at'];

    public function state()
    {
        return $this->belongsTo('App\State', 'state_id', 'id');
    }

    public function docs()
    {
        $docs = DB::table('subcontractor_docs')->where('subcontractor_id', $this->id)->get();

        $docs->each(function($doc) {
            $doc->image_url =  config('fileapi.path_subcon_docs') . $this->id . '/' . $doc->filename;

            if (strpos($doc->filename, '.pdf') !== false) {
                $doc->file_type = true;
            }else {
                $doc->file_type = false;
            }
        });
        return $docs;
    }

    public function getDocsPath()
    {
        return ConstantHelper::$BASE_PUBLIC_PATH."subcon/docs/{$this->id}/";
    }

    public function getLogoPath()
    {
        return ConstantHelper::$BASE_PUBLIC_PATH."subcon/logo/{$this->id}/";
    }

    public function getSubconLogo()
    {
        $subcon_logo = DB::table('subcontractor_images')->where('subcontractor_id', $this->id)->get();

        if(count($subcon_logo)) {
            $image_url =  config('fileapi.path_company_logo') . $this->id . '/' . $subcon_logo[0]->filename;
        } else {
            $image_url = '';
        }

        return $image_url;

    }

    public static function addSubCon($arrNewSubCon)
    {
        $newSubCon = new self();
        $newSubCon->fill($arrNewSubCon);

        if($newSubCon->save()) {
            return $newSubCon;
        }

        return false;
    }

    public static function add($request = array())
    {
        $subcontractor = new self;
        $subcontractor->name 			= $request['name'];
        $subcontractor->company_id 		= $request['company_id'];
        $subcontractor->contact 		= $request['contact'];
        $subcontractor->email 			= $request['email'];
        $subcontractor->type 			= $request['type'];
        $subcontractor->approved 		= $request['approved'];
        $subcontractor->address 		= $request['address'];
        $subcontractor->postal_code 	= $request['postal_code'];
        $subcontractor->abn 			= $request['abn'];

        return ( $subcontractor->save() )	?	true 	: 	false;

    }

    public static function patch( $id, $request = array() ){

        $subcontractor = self::find( $id );

        $subcontractor->fill($request);
        return ( $subcontractor->update() ) 	?		true :		false;
    }

}