<?php

namespace Helix\Response;

use Illuminate\Http\JsonResponse;

trait ResponseTrait
{
	/**
	 * Returns success-formatted response
	 *
	 * @param string $label
	 * @param array $data
	 * @return json
	 */
	public function successResponse($label, $data = [])
	{
		$response = [
			'result' => true,
			$label => [
				'data' => $data
			]
		];

		return $this->toJson($response);
	}

	/**
	 * Returns error-formatted response
	 *
	 * @param string $message
	 * @return json
	 */
	public function failResponse($message = 'error')
	{
		$response = [
			'result' => false,
			'error_message' => $message
		];

		return $this->toJson($response);
	}

	/**
	 * Convert to Json
	 *
	 * @param array $data
	 * @param int $status
	 * @param array $headers
	 * @param int $options
	 * @return json
	 */
	protected function toJson($data, $status = 200, $headers = [], $options = 0)
	{
		return new JsonResponse($data, $status, $headers, $options);
	}
}