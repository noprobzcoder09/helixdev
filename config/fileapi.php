<?php

$baseUrl = '/public';
$pathSubConDocs = $baseUrl . "/subcon/docs/{id}/";
$pathEmployeeDocs = $baseUrl . '/employee/docs';
$paths = [
    $pathSubConDocs,
    $pathEmployeeDocs
];

return [

    /*
    |--------------------------------------------------------------------------
    | File paths
    |--------------------------------------------------------------------------
    |
    | 'path' => ['/images/event/']
    |
    | Gets file from '/storage/image/event/' directory.
    |
    */

    'path' => $paths,
    'watermark' => 'public/img/watermark.png',
    'default_thumbs' => ['S' => '96x96', 'M' => '256x256', 'L' => '480x480'],

    'compress_quality' => 90,

    /*
    |--------------------------------------------------------------------------
    | Enable Api upload
    |--------------------------------------------------------------------------
    |
    | Set to true to upload files via this route :
    |
    | POST /upload/images/event/the-file-name
    |
    */

    'enable_api_upload' => false,
    'api_prefix' => '/api/v1',

    'middlewares' => [], // middlewares that wrap the api upload route
    'path_subcon_docs' => 'images/subcon/docs/',
    'path_company_logo' => 'images/subcon/logo/',
    'path_user_avatar' => 'images/employee/avatar/',
    'path_user_doc' => 'images/employee/docs/',
    'path_company_main_logo' => 'images/companies/logo/',
    'path_observation_image' => 'images/observation/images/',
    'path_inspection_item_image' => 'images/inspection/images/',
    'path_chemical_image' => 'images/chemical/images/',
    'path_chemical_msds' => 'images/chemical/msds/',
    'path_resources_attachments' => 'images/resources/attachments/',
    'path_alerts_attachments' => 'images/alert_contents/attachment/'
];
