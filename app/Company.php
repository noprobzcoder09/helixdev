<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Http\Helpers\AppHelper;
use App\Http\Helpers\ConstantHelper;
use App\Module;
use App\Feature;
use DB;

class Company extends Model
{
    protected $table = "companies";

    protected $fillable = [
        'name',
        'link',
        'contact_name',
        'email',
        'accounts_contact',
        'accounts_email',
        'mobile',   
        'abn',
        'status',
        'state_id',
        'created_by',
        'deleted_at',
        'created_at',
        'updated_at'
    ];

    protected $appends = ['modules_str'];

    public function createdBy()
    {
        return $this->belongsTo('App\HelixUser', 'created_by', 'id');
    }

    public function state()
    {
        return $this->belongsTo('App\State', 'state_id', 'id');
    }

    public function modules()
    {
        $modules = DB::table('modules')->where('company_id', $this->id)->get();

        if($modules) {
            return $modules;
        }

        return [];
    }

    public function modulesIds()
    {
        $modules = $this->modules()->get();
        $arrModules = [];
        foreach($modules as $m) {
            $arrModules[] = $m->id;
        }

        return $arrModules;
    }

    public function insertModules($modules)
    {
        $date_time = new \DateTime();
        /* */
        DB::table('modules')->where('company_id', $this->id)->delete();
        foreach($modules as $m)
        {
            $feature = Feature::where('key', $m)->first();

            if($feature)
            {

                DB::table('modules')->insert([
                    [
                        'company_id' => $this->id,
                        'key' => $m,
                        'status' => 1,
                        'feature_id' => $feature->id,
                        'created_at'=>$date_time,
                        'updated_at'=>$date_time
                    ]
                ]);
            }
        }
    }

    public function logs()
    {
        return $this->hasMany('App\Log');
    }

    public function getCompanyLogoPath()
    {
        return ConstantHelper::$BASE_PUBLIC_PATH."companies/logo/{$this->id}/";
    }

    public function logo()
    {
        /* if company is only a test data */
        if($this->isSample)
        {
            return '../../img/client/company-logo.png';
        }

        $logo = db::table('company_logos')->where('company_id', $this->id)->first();

        if($logo) {
            return config('fileapi.path_company_main_logo') . $this->id . '/' . $logo->filename;
        }

        return '/img/helix-logo.jpg';
    }

    public function cryptedId()
    {
        return AppHelper::encrypt($this->id);
    }

    public function getModulesStrAttribute()
    {

        $modules = DB::table('modules')->where('company_id', $this->id)->get();
        $keys = [];

        foreach($modules as $m)
        {
            $module = Feature::find($m->feature_id);

            if($module) {
                $keys[] = $module->key;
            }
        }

        return $keys;
    }
}