<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\SubContractorDocumentType;

class SubContractorDocument extends Model
{

	protected $table = 'subcontractor_docs';
	
	public static function add( $request = array() ){

		//add document type
		$subcontractor_document_type = new SubContractorDocumentType;
		$subcontractor_document_type->name = $request['name'];

		if( $subcontractor_document_type->save() ){
			$subcontractor_document = new self;
			$subcontractor_document->filename 									= $request['filename'];
			$subcontractor_document->subcontractor_id 					= $request['subcontractor_id'];
			$subcontractor_document->subcontractor_doc_type_id 	= $subcontractor_document_type->id;

			return ( $subcontractor_document->save() )		?		true 		: 	false;
		}

		return false;

	}

	public static function patch( $id, $request = array() ){

		//dd( $request );exit;

		$subcontractor = self::find( $id );

		//dd($subcontractor);exit;
		$subcontractor->fill($request);
		return ( $subcontractor->update() ) 	?		true :		false;
	}

}