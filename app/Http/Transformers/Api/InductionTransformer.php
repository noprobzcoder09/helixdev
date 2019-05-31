<?php

namespace App\Http\Transformers\Api;

use League\Fractal\TransformerAbstract;
use App\Http\Helpers\AppHelper;

use App\Induction;

class InductionTransformer extends TransformerAbstract
{
    protected $defaultIncludes = [];
    protected $availableIncludes = [];

    public function transform (Induction $induction)
    {
        return
        [
            'id' => $induction->id,
            'title' => $induction->title
        ];
    }

}
