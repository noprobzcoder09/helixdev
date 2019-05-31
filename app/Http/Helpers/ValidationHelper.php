<?php

namespace App\Http\Helpers;

class ValidationHelper {

    /* subcontractor validation */
    public static $SUBCONTRACTOR =
    [
        'name'              => 'required',
        'contact'           => 'required',
        'contact_number'    => 'required',
        'email'             => 'required|unique:subcontractors,email',
        'address'           => 'required',
        'state_id'          => 'required',
        'postal_code'       => 'required',
        'abn'               => 'required',
        'type'              => 'required'
    ];

    //image validation
    public static $SUBCONTRACTOR_LOGO =
    [
        'file'          => 'required|mimes:jpg,jpeg,png',
    ];

    //subcontractor document
    public static $SUBCONTRACTOR_DOCUMENT =
    [
        'file'          => 'required|mimes:pdf,doc,docx,rtf,odt',
        'name'          => 'required',
    ];

    //messaging
    public static $MESSAGING =
    [
        //'file'          => 'mimes:png,jpg,jpeg',
        //'recepient'     => 'required',
        'subject'       => 'required',
        //'short_text'     => 'required',
        'body'          => 'required',
        'employee_role_id' => 'required',
        'method'        => 'required',
        'type'          => 'required',


    ];

    //image validation
    public static $IMAGE_FILE =
    [
        'file'          => 'mimes:jpg,jpeg,png',
    ];

    //messaging view
    public static $MESSAGING_VIEW =
    [
        'id'        => 'required',
    ];

    public static $SEARCH_KEYWORDS =
    [
        'keywords'      => 'required',
    ];

    public static $EMPLOYEE =
    [
        'first_name'    => 'required',
        'last_name'     => 'required',
        'email'         => 'required',
        'mobile'        => 'required',
        'dob'           => 'required',
        'state_id'      => 'required'
    ];

    public static $EMPLOYEE_UPDATE = [
        'first_name'    => 'required',
        'last_name'     => 'required',
        'email'         => 'required|unique:subcontractors,email',
        'mobile'        => 'required',
        'dob'           => 'required',
        'state_id'      => 'required'
    ];

    public static $EMPLOYEE_DOCUMENT = [
        'file'          => 'required|mimes:pdf,doc,docx,rtf,odt,jpeg,png',
        'type'          => 'required',
    ];

    public static $PROJECT =
    [
        'name'          => 'required|unique:projects',
    ];

    public static $GROUP_INDUCTION =
    [
        'name'         => 'required|unique:induction_groups',
    ];

    public static $INDUCTION =
    [
        'title'         => 'required',
        'video_link'    => 'required',
        'questions'     => 'required'
    ];

    public static $SAFETY_VIDEO =
    [
        'title'         => 'required|unique:videos',
        'link'          => 'required|url',
        'description'   => 'required',
    ];

    public static $SAFETY_UPDATE_VIDEO =
    [
        'link'          => 'required|url',
        'description'   => 'required'
    ];

    public static $SAFETY_QUESTION =
    [
        'question'      => 'required|unique:video_questions',
        'answer'        => 'required',
        'options'       => 'required'
    ];

    public static $INSPECTION_CATEGORY =
    [
        'name'          => 'required|unique:inspection_categories'
    ];

    public static $INSPECTION_ITEM_CATEGORY =
    [
        'name'          => 'required|unique:inspection_item_categories',
        'company_id'    => 'required'
    ];

    public static $INSPECTION_ITEM_CATEGORY_UPDATE =
    [
        'name'         => 'required|unique:inspection_items',
    ];

    public static $INSPECTION =
    [
        'title'         => 'required|unique:inspections',
        'company_id'    => 'required',
        'inspection_category_id' => 'required'
    ];

    public static $SKILL =
    [
        'name'         => 'required|unique:skills',
    ];

    public static $SKILL_ITEM =
    [
        'name'         => 'required|unique:skill_items',
    ];

    public static $GOLDEN_RULE =
    [
        'name'         => 'required|unique:golden_rules',
    ];

    public static $INSPECTION_ITEM =
    [
        'name'         => 'required|unique:inspection_items',
        'inspection_item_category_id' => 'required',
        'options'      => 'required'
    ];

    public static $CLIENT_INSPECTION_ITEM_UPDATE =
    [
        'id'                => 'required',
        'answer'            => 'required',
        'description'       => 'required',
        'not_applicable'    => 'required',
        'inspection_photo'  => 'required'
    ];

    public static $CLIENT_INSPECTION_START =
    [
        'supervisor'        => 'required',
        'site_location'     => 'required'
    ];

    public static $PASSWORD_FORGOT =
    [
        'email'  => 'required',
    ];

    public static $OBSERVATION =
    [
        'seen'                      => 'required',
        'pre_action_photo'          => 'required|mimes:jpg,jpeg,png',
        'category_id'               => 'required',
        'type'                      => 'required',
        'sub_category_id'           => 'required',
        'performed_action'          => 'required',
        'further_action'            => 'required',
        'post_action_photo'         => 'required|mimes:jpg,jpeg,png',
        'location'                  => 'required',
        'gps'                       => 'required',
    ];

    public static $OBSERVATION_START =
    [
        'seen'  => 'required',
       // 'supervisor' => 'required',
        'observation_photo' => 'required'
    ];

    public static $OBSERVATION_SUMMARY =
    [
        //'description'       => 'required',
        'action_performed'  => 'required',
        'further_action'    => 'required',
        'observation_photo' => 'required'
    ];


    public static $EMERGENCY =
    [
        'role'              => 'required',
        'name'              => 'required',
        'mobile'            => 'required',
        'group'             => 'required'
    ];

    public static $CHEMICAL = [
        'substance'         => 'required|unique:chemicals',
        'issue_date'        => 'required',
        'ppes'              => 'required',
        'image'             => 'required',
        'msds'              => 'required',
        'groups'            => 'required'
    ];


    public static $CHEMICAL_CATEGORY =
    [
        'name'              => 'required'
    ];

    public static $RESOURCE =
    [
        'name'              => 'required',
        'body'              => 'required',
        'category'          => 'required'
    ];


    /**
     * return lists of validation errors
     *
     * @return json response
     */
    public static function error( $validation_errors ){
        return ['result' => false, 'message_code' => 'error_validation', 'message' => $validation_errors ];
    }


}
