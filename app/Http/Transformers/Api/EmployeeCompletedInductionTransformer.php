<?php

namespace App\Http\Transformers\Api;

use League\Fractal\TransformerAbstract;

use App\EmployeeCompletedInduction;

class EmployeeCompletedInductionTransformer extends TransformerAbstract
{
    protected $defaultIncludes = [];
    protected $availableIncludes = [];

    public function transform (EmployeeCompletedInduction $cInduction)
    {
        $employee = $cInduction->employee()->first();
        return
        [
            'id'                => $cInduction->id,
            'id_display'        => "#{$cInduction->id}",
            'name'              => $employee->first_name . ' ' . $employee->last_name,
            'inductions'        => $employee->completed_inductions()->count(),
            'last_completion'   => date('M d, Y', strtotime($cInduction->updated_at->toDateTimeString()))
        ];
    }

}
