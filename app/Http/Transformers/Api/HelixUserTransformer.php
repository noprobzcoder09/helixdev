<?php

namespace App\Http\Transformers\Api;

use App\HelixUser;
use League\Fractal\TransformerAbstract;

use App\Http\Helpers\AppHelper;

class HelixUserTransformer extends TransformerAbstract
{
    protected $defaultIncludes = [];

    protected $availableIncludes = ['user'];

    /**
     * Transform object into a generic array.
     *
     * @param User $user
     *
     * @return array
     *
     */
    public function transform( HelixUser $helixUser )
    {
        return [
            'id'          => AppHelper::encrypt( (int)$helixUser->id ),
            'firstname'   => (int)$helixUser->first_name,
            'lastname'    => $helixUser->last_name,
            'mobile'      => $helixUser->mobile,
        ];
    }

    public function includeUser( HelixUser $helixUser ){
        return $this->item( $helixUser->user, new UserTransformer() );
    }

}
