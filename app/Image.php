<?php

namespace App;
use DB;

class Image extends Model
{
    public static function UploadLogo($type, $file)
    {
        switch($type)
        {
            case 'company': {
                return self::UploadCompanyLogo($file);
            }
        }
    }
    
    public static function UploadCompanyLogo($file) 
    {
        
    }
}
