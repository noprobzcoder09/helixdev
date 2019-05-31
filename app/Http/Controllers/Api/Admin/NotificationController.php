<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Employee;
use App\Models\Greenhat;
use Auth;

use App\Services\NotificationServices;

class NotificationController extends Controller
{
	public function __construct(Request $request, NotificationServices $notification)
    {
        $this->request = $request;
        $this->notification = $notification;
    }

	function getNotifications($id) {
		$user_id = intval($id);

		$notifications = $this->notification->getNotifications($user_id);

		return response($notifications);
	}
}
