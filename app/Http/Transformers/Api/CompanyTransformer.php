<?php

namespace App\Http\Transformers\Api;

use App\Company;
use App\State;
use League\Fractal\TransformerAbstract;

use App\Http\Helpers\AppHelper;

class CompanyTransformer extends TransformerAbstract
{
    protected $defaultIncludes = [];
    protected $availableIncludes = ['modules'];

    /**
     * Transform object into a generic array.
     *
     * @param User $user
     *
     * @return array
     *
     */
    public function transform( Company $company )
    {
        return [
            'id' => AppHelper::encrypt( (int)$company->id ),
            'id_display' => '# ' . $company->id,
            'name' => $company->name,
            'created_at' => date('M d, Y', strtotime($company->created_at->toDateTimeString())),
            'no_of_modules' => $company->modules()->count()
        ];
    }

    public function includeModules( Company $company ){
        return $this->item( $company->modules(), new CompanyTransformer() );
    }
}
