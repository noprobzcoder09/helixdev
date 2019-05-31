<?php

namespace App\Http\Transformers\Api;

use App\Employee;
use League\Fractal\TransformerAbstract;


class EmployeeTransformer extends TransformerAbstract
{
    protected $defaultIncludes = [];

    protected $availableIncludes = [];

    
    /**
     * Transform object into a generic array.
     *
     * @param Employee $employee
     *
     * @return array
     *
     */
    public function transform( Employee $employee )
    {
        return [
            'id'            => $employee->id,
            'id_display'    => '# ' . $employee->id,
            'name'          => $employee->first_name . ' ' .  $employee->last_name
        ];
    }
   
}
