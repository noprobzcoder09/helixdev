<?php

namespace App\Http\Transformers\Api;

use App\SubContractor;
use League\Fractal\TransformerAbstract;

use App\Http\Helpers\AppHelper;

class SubcontractorTransformer extends TransformerAbstract
{
    protected $defaultIncludes = [];

    protected $availableIncludes = [];

   

    /**
     * Transform object into a generic array.
     *
     * @param User $user
     *
     * @return array
     *
     */
    public function transform( SubContractor $subcontractor )
    {
        return [
            'id'            => $subcontractor->id,
            'company_id'    => AppHelper::encrypt( (int)$subcontractor->company_id ),
            'name'          => $subcontractor->name,            
            'contact'       => $subcontractor->contact,
            'email_address' => $subcontractor->email,
            'public_liability' => 'Yes',
            'work_cover'       => 'Yes',
            'status'        => 'Docs Provided',
            'type'          => $subcontractor->type,
            'approved'      => $subcontractor->approved,
            'address'       => $subcontractor->address,
            'postal_code'   => $subcontractor->postal_code,
            'abn'           => $subcontractor->abn,
        ];
    }

    public function includeCompany( SubContractor $subcontractor ){

    }

   
}
