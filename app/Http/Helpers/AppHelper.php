<?php

namespace App\Http\Helpers;

use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Support\Facades\Mail;

use Storage;

class AppHelper {

    static $encrypt_method = "AES-256-CBC";
    static $secret_key = 'app94@pp';
    static $secret_iv = 'app94@ppv1';

    //string encrypt
    public static function encrypt( $string ){
        // hash
        $key = hash('sha256', self::$secret_key);
        // iv - encrypt method AES-256-CBC expects 16 bytes - else you will get a warning
        $iv = substr(hash('sha256',  self::$secret_iv), 0, 16);
        $output = openssl_encrypt( (string)$string, self::$encrypt_method, $key, 0, $iv );
        $output = base64_encode($output);
        return $output;
    }

    //string decrypt
    public static function decrypt( $string ){
        // hash
        $key = hash('sha256', self::$secret_key);
        // iv - encrypt method AES-256-CBC expects 16 bytes - else you will get a warning
        $iv = substr(hash('sha256',  self::$secret_iv), 0, 16);
        $output = openssl_decrypt( base64_decode( (string)$string ), self::$encrypt_method, $key, 0, $iv);
        return $output;
    }

    public static function generatePassword() {
        $password = str_random(5);
        $hash = self::encrypt($password);
        return compact('password', 'hash');
    }
    /**
     * Upload File
     *
     * @param       $path Path of the file
     * @param       $source Source of the file
     * @return      json response
     */
    public static function upload($path, $source){
        $disk = Storage::disk('local');
        $upload = $disk->put($path, fopen($source, 'r+'));
        return ( $upload ) 	? 	true 	: 	false;
    }

    /**
     * Export CSV
     *
     * @param       $filename filename of the file
     * @param       $columns CSV headers and Model field
     * @return      $object model object
     */
    public static function export($filename, $columns, $object){
        $handle = fopen('php://memory', 'w'); 
        
        //add csv headers
        fputcsv($handle, array_keys($columns));    

        // loop object
        foreach($object as $obj) {
            //loop column values for model field
            $list = array();
            foreach( $columns as $column ){
                array_push($list, $obj->$column);
            }
            fputcsv($handle, $list );
            
        }
        // reset the file pointer to the start of the file
        fseek($handle, 0);
        
        // tell the browser it's going to be a csv file
        header('Content-Type: application/csv');
        // tell the browser we want to save it instead of displaying it
        header('Content-Disposition: attachment; filename="'.$filename.'";');
        
        // make php send the generated csv lines to the browser
        fpassthru($handle);
    }
    
    public static function hasSubConDocs($doc) {
        $docs = config('requirements.sub_contractor_docs');
        $result = false;
        in_array($doc, $docs) ? $result = true : $result = false;

        return $result;
    }
}
