<?php

namespace App\Http\Transformers\Api;

use App\User;
use League\Fractal\TransformerAbstract;

use App\Http\Helpers\AppHelper;

class UserTransformer extends TransformerAbstract
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
    public function transform( User $user )
    {
        return [
            'id' => AppHelper::encrypt( (int)$user->id ),
            'email_address'   => $user->email,
        ];
    }
}
