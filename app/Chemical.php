<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use DB;

class Chemical extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    protected $table = 'chemicals';
    protected $appends = ['msds', 'has_assessment'];
    protected $fillable = [
        'substance',
        'issue_date',
        'type',
        'chemical_company',
        'hazchem',
        'un',
        'classification',
        'health_hazards',
        'first_aid',
        'storage',
        'ppe_text',
        'created_by',
        'company_id'
    ];

    public function assessments()
    {
        return $this->hasMany('App\ChemicalAssessment', 'chemical_id', 'id');
    }

    public function chemicalGroups ()
    {
      return $this->hasMany('App\ChemicalGroup', 'chemical_id', 'id');
    }

    public function getImageStoragePath()
    {
        return 'public/chemical/images/';
    }

    public function getMSDSStoragePath()
    {
        return 'public/chemical/msds/';
    }

    public function getImageUrl()
    {
        $chemical = ChemicalMsdsImage::where('chemical_id', $this->id)->where('type', 'image')->first();

        if($chemical) {
            return config('fileapi.path_chemical_image') . "{$this->id}/{$chemical->filename}";
        }

        return '';
    }

    public function getMSDSUrl()
    {
        $chemical = ChemicalMsdsImage::where('chemical_id', $this->id)->where('type', 'msds')->first();

        if($chemical) {
            return config('fileapi.path_chemical_msds') . "{$this->id}/{$chemical->filename}";
        }

        return '';
    }

    public function getHasAssessmentAttribute()
    {
        if (ChemicalAssessment::where('chemical_id', '=', $this->id)->exists()) {
            return true;
        }

        return false;
    }

    public function getMsdsAttribute()
    {
        $chemical = ChemicalMsdsImage::where('chemical_id', $this->id)->where('type', 'msds')->first();

        if($chemical) {
            return config('fileapi.path_chemical_msds') . "{$this->id}/{$chemical->filename}";
        }

        return '';
    }

    public static function getChemical($id)
    {
        $chemical = self::find($id);

        if($chemical)
        {
            $chemical->image_url = $chemical->getImageUrl();
            $chemical->msds = $chemical->getMSDSUrl();

            foreach($chemical->assessments as $a)
            {
                $a->employee;
            }

            $ids = DB::table('chemical_item_ppes')->where('chemical_id', $chemical->id)->pluck('ppe_id')->toArray();

            $ppes = DB::table('chemical_ppes')->whereIn('id', $ids)->get();
            $chemical->ppes = $ppes;
            return $chemical;
        }

        return false;
    }
}
