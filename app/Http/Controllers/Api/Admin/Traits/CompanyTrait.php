<?php

namespace App\Http\Controllers\Api\Admin\Traits;

use App\Http\Helpers\AppHelper;

trait CompanyTrait
{
	/**
	 * Returns the extracted company ID
	 *
	 * @return int
	 */
	public function getCompanyId()
	{
		// Fetch company id from route params
        $companyId = request()->route('id');

        return (int) AppHelper::decrypt($companyId);
	}
}