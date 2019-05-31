<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubContractorImage extends Model
{
	use SoftDeletes;

	protected $table = 'subcontractor_images';
	protected $fillable = [
		'filename',
		'subcontractor_id',
	];

	protected $dates = ['deleted_at'];

	public static function add( $request = array() ){
		$subcontractorImage = new self;
		$subcontractorImage->filename 					= $request['filename'];
		$subcontractorImage->subcontractor_id 	= $request['subcontractor_id'];

		return ( $subcontractorImage->save() )		?		true 		: 	false;

	}

	public static function patch( $id, $request = array() ){

		//dd( $request );exit;

		$subcontractor = self::find( $id );

		//dd($subcontractor);exit;
		$subcontractor->fill($request);
		return ( $subcontractor->update() ) 	?		true :		false;
	}

}