<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubContractorDocumentType extends Model
{
	use SoftDeletes;

  protected $table = 'subcontractor_doc_types';
  protected $fillable = [
       	'name',
    ];

  protected $dates = ['deleted_at'];

	

}