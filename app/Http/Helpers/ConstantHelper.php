<?php

namespace App\Http\Helpers;

use DB;

class ConstantHelper {
	public static $HELIX_SUPER_ADMIN = 1;
	public static $HELIX_ADMIN = 2;
	public static $EMPLOYEE_ADMIN = 1;
	public static $EMPLOYEE_HR = 2;
	public static $PAGINATION_LIMIT = 20;

	public static $SERVER_ERROR = ['result' => false, 'message_code' => 'server_error', 'message' => 'Something wrong with the server'];
	
	public static $SUCCEED_ADDED_COMPANY = ['result' => true, 'message_code' => 'success_adding_company', 'message' => 'Successfully adding new company'];
	public static $SUCCEED_UPDATE_COMPANY = ['result' => true, 'message_code' => 'success_updating_company', 'message' => 'Successfully updating company'];
	public static $SUCCEED_ADDED_USER = ['result' => true, 'message_code' => 'success_adding_user', 'message' => 'Successfully adding New User'];
	public static $SUCCEED_UPDATE_USER = ['result' => true, 'message_code' => 'success_update_user', 'message' => 'Successfully update user'];
	
    public static $LOG_ADDED_NEW_USER = 'Added New User';

	public static $SUCCESS_LOGOUT = ['result' => true, 'message_code' => 'success_logout', 'message' => 'Successfully logout'];
	

	/* common */
	public static $BASE_PUBLIC_PATH = '/public/';

	public static $INVALID_ID = ['result' => false, 'message_code' => 'invalid_id', 'message' => 'Invalid Id.'];
	public static $SUCCEED_ADDED_DATA = ['result' => true, 'message_code' => 'success_adding_data', 'message' => 'Successfully adding New Data'];
	public static $SUCCEED_UPDATING_DATA = ['result' => true, 'message_code' => 'success_updating_data', 'message' => 'Successfully updating data'];
	public static $SUCCEED_DELETING_DATA = ['result' => true, 'message_code' => 'success_deleting_data', 'message' => 'Successfully deleting data'];
	public static $SUCCEED_UPLOAD_FILE = ['result' => true, 'message_code' => 'success_uploaded_file', 'message' => 'Successfully Uploaded a file'];
    public static $UNAUTHORIZED = ['result' => false, 'message_code' => 'authorized', 'message' => 'Unauthorized'];
    public static $IS_EXIST = ['result' => true, 'message_code' => 'is_exist', 'message' => 'Data is exist.'];
    public static $IS_NOT_EXIST = ['result' => false, 'message_code' => 'is_not_exist', 'message' => 'Data is not exist.'];

	/* company */
	public static $SUCCEED_ADDED_EMPLOYEE = ['result' => true, 'message_code' => 'success_adding_company', 'message' => 'Successfully added an employee'];
	public static $SUCCEED_UPDATE_EMPLOYEE = ['result' => true, 'message_code' => 'success_updating_company', 'message' => 'Successfully updated an employee'];

	public static $SUCCEED_ADDED_GROUP_INDUCTION = ['result' => true, 'message_code' => 'success_adding_group_induction', 'message' => 'Successfully added a group induction'];
	public static $SUCCEED_UPDATE_GROUP_INDUCTION = ['result' => true, 'message_code' => 'success_update_group_induction', 'message' => 'Successfully updated a group induction'];
	public static $SUCCEED_DELETE_GROUP_INDUCTION = ['result' => true, 'message_code' => 'success_delete_group_induction', 'message' => 'Successfully deleted a group induction'];
	public static $SUCCEED_ADDED_INDUCTION = ['result' => true, 'message_code' => 'success_adding_induction', 'message' => 'Successfully added a induction'];
	public static $SUCCEED_UPDATE_INDUCTION = ['result' => true, 'message_code' => 'success_update_induction', 'message' => 'Successfully updated an induction'];
	public static $SUCCEED_DELETED_INDUCTION = ['result' => true, 'message_code' => 'success_deleted_induction', 'message' => 'Successfully deleted a induction'];
	public static $SUCCEED_ADDED_SAFETY_VIDEO = ['result' => true, 'message_code' => 'success_adding_safety_video', 'message' => 'Successfully added a Safety video'];
	public static $SUCCEED_UPDATE_SAFETY_VIDEO = ['result' => true, 'message_code' => 'success_update_safety_video', 'message' => 'Successfully update a Safety video'];
	public static $SUCCEED_DELETED_SAFETY_VIDEO = ['result' => true, 'message_code' => 'success_deleted_video', 'message' => 'Successfully deleted a video'];
	public static $SUCCEED_COMPLETED_SAFETY_VIDEO = ['result' => true, 'message_code' => 'success_completed_safety_video', 'message' => 'Successfully completed a Safety video'];
	public static $ONLY_ONE_OPTIONS = ['result' => false, 'message_code' => 'only_one_options', 'message' => 'Please provide more than 2 options'];


	public static $SUCCEED_ADDED_INSPECTION_CATEGORY = ['result' => true, 'message_code' => 'success_added_inspection_category', 'message' => 'Successfully added an inspection category'];
	public static $SUCCEED_UPDATE_INSPECTION_CATEGORY = ['result' => true, 'message_code' => 'success_update_inspection_category', 'message' => 'Successfully updated the inspection category'];
	public static $SUCCEED_DELETE_INSPECTION_CATEGORY = ['result' => true, 'message_code' => 'success_delete_inspection_category', 'message' => 'Successfully deleted an inspection category'];

	public static $SUCCEED_ADDED_INSPECTION_ITEM_CATEGORY = ['result' => true, 'message_code' => 'success_added_inspection_item_category', 'message' => 'Successfully added an inspection item category'];
	public static $SUCCEED_DELETE_INSPECTION_ITEM_CATEGORY = ['result' => true, 'message_code' => 'success_delete_inspection_item_category', 'message' => 'Successfully deleted an inspection item category'];
	public static $SUCCEED_UPDATE_INSPECTION_ITEM_CATEGORY = ['result' => true, 'message_code' => 'success_update_inspection_item_category', 'message' => 'Successfully updated an inspection item category'];
	public static $SUCCEED_ADDED_INSPECTION = ['result' => true, 'message_code' => 'success_added_inspection', 'message' => 'Successfully added an inspection'];
	
	public static $SUCCEED_DELETE_INSPECTION = ['result' => true, 'message_code' => 'success_added_inspection', 'message' => 'Successfully delete an inspection'];
	public static $SUCCEED_UPDATE_INSPECTION = ['result' => true, 'message_code' => 'success_added_inspection', 'message' => 'Successfully update an inspection'];
	
	public static $SUCCEED_ADDED_SKILL = ['result' => true, 'message_code' => 'success_added_skill', 'message' => 'Successfully added a skill'];
	public static $SUCCEED_UPDATE_SKILL = ['result' => true, 'message_code' => 'success_update_skill', 'message' => 'Successfully updated skill'];
	public static $SUCCEED_DELETE_SKILL = ['result' => true, 'message_code' => 'success_delete_skill', 'message' => 'Successfully deleted skill'];

	public static $SUCCEED_ADDED_SKILL_ITEM = ['result' => true, 'message_code' => 'success_added_skill_item', 'message' => 'Successfully added a skill item'];
	public static $SUCCEED_UPDATE_SKILL_ITEM = ['result' => true, 'message_code' => 'success_update_skill_item', 'message' => 'Successfully updated skill item'];
	public static $SUCCEED_DELETE_SKILL_ITEM = ['result' => true, 'message_code' => 'success_delete_skill_item', 'message' => 'Successfully deleted skill item'];

	public static $SUCCEED_ADDED_GOLDEN_RULE = ['result' => true, 'message_code' => 'success_added_golden_rule', 'message' => 'Successfully added a Golden Rule'];
	public static $SUCCEED_UPDATE_GOLDEN_RULE = ['result' => true, 'message_code' => 'success_update_golden_rule', 'message' => 'Successfully update a Golden Rule'];
	public static $SUCCEED_DELETE_GOLDEN_RULE = ['result' => true, 'message_code' => 'success_delete_golden_rule', 'message' => 'Successfully delete a Golden Rule'];
	public static $SUCCEED_ADDED_EMERGENCY = ['result' => true, 'message_code' => 'success_add_emergency', 'message' => 'Successfully added Emergency'];
	public static $SUCCEED_UPDATE_EMERGENCY = ['result' => true, 'message_code' => 'success_update_emergency', 'message' => 'Successfully udpated Emergency'];
	public static $SUCCEED_ASSIGN_EMERGENCY = ['result' => true, 'message_code' => 'success_assign_emergency', 'message' => 'Successfully assigned Emergency'];
	public static $SUCCEED_RESIGN_EMERGENCY = ['result' => true, 'message_code' => 'success_resign_emergency', 'message' => 'Successfully resigned Emergency'];

	public static $SUCCEED_UPDATE_CHEMICAL = ['result' => true, 'message_code' => 'success_updated_chemical', 'message' => 'Successfully update chemical assessment'];

	public static $SUCCEED_ADDED_CHEMICAL_CATEGORY = ['result' => true, 'message_code' => 'success_added_chemical_category', 'message' => 'Successfully added a Chemical Category'];
	public static $SUCCEED_UPDATE_CHEMICAL_CATEGORY = ['result' => true, 'message_code' => 'success_update_chemical_category', 'message' => 'Successfully updated a Chemical Category'];
	public static $SUCCEED_DELETE_CHEMICAL_CATEGORY = ['result' => true, 'message_code' => 'success_delete_chemical_category', 'message' => 'Successfully deleted a Chemical Category'];

	public static $SUCCEED_ADDED_CHEMICAL_PPE = ['result' => true, 'message_code' => 'success_added_chemical_ppe', 'message' => 'Successfully added a Chemical PPE'];
	public static $SUCCEED_UPDATE_CHEMICAL_PPE = ['result' => true, 'message_code' => 'success_update_chemical_ppe', 'message' => 'Successfully updated a Chemical PPE'];
	public static $SUCCEED_DELETE_CHEMICAL_PPE = ['result' => true, 'message_code' => 'success_delete_chemical_ppe', 'message' => 'Successfully deleted a Chemical PPE'];

	public static $SUCCEED_UPDATE_OBSERVATION = ['result' => true, 'message_code' => 'success_added_chemical_ppe', 'message' => 'Successfully updated an observation'];

	/* projects */
	public static $SUCCEED_UPDATE_PROJECT = ['result' => true, 'message_code' => 'success_update_project', 'message' => 'Successfully updated a Project'];


	/* email */
    public static $SUCCEED_RESET_PASSWORD = ['result' => true, 'message_code' => 'success_reset_password', 'message' => 'Successfully reset password'];


	/* observation status */
	public static $OBSERVATION_OPEN = 1;
	public static $OBSERVATION_CLOSED_OUT = 2;
	public static $OBSERVATION_OVERDUE = 3;
	public static $OBSERVATION_IN_PROGRESS = 4;
	
	public static $OBSERVATION_TYPE_SAFE = 1;
	public static $OBSERVATION_TYPE_NEGATIVE = 0;
	
	/* inspection answers */
	public static $INSPECTION_ANSWER_COMPLIANT = 1;
	public static $INSPECTION_ANSWER_NON_COMPLIANT = 2;

	/* inspection status */
	public static $INSPECTION_OPEN = 1;
	public static $INSPECTION_CLOSED_OUT = 2;
	public static $INSPECTION_OVERDUE = 3;
	public static $INSPECTION_IN_PROGRESS = 4;

    /* common invalid option */
    public static $INVALID_OPTION = ['result' => false, 'message_code' => 'invalid_option', 'message' => 'Invalid method/Option'];

	public static $SUCCEED_ADDED_GROUP = ['result' => true, 'message_code' => 'success_added_group', 'message' => 'Successfully added a crew / group'];


	/* messaging */
	public static $SUCCEED_SEND_LOGIN_EMAIL = ['result' => true, 'message_code' => 'success_send_group', 'message' => 'Successfully send email login details'];
	public static $SUCCEED_SEND_LOGIN_SMS = ['result' => true, 'message_code' => 'success_send_group', 'message' => 'Successfully send email login details sms'];
    public static $EMPTY_RECIPIENTS = ['result' => false, 'message_code' => 'empty_recipients', 'message' => 'Empty recipients data.'];
}