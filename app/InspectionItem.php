<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use DB;
use App\Http\Helpers\ConstantHelper;

class InspectionItem extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];
    protected $table = 'inspection_items';
    protected $appends = ['image_url', 'assigned_to_name'];

    protected $fillable = [
        'name',
        'options',
        'not_applicable',
        'inspection_item_category_id',
        'inspection_id'
    ];

    public function employee()
    {
        return $this->belongsTo('App\Employee', 'assigned_to', 'id');
    }

    public function assignedTo()
    {
        return $this->belongsTo('App\Employee', 'assigned_to', 'id');
    }

    public function inspection()
    {
        return $this->belongsTo('App\Inspection', 'inspection_id', 'id');
    }

    public function options()
    {
        $options = DB::table('inspection_item_options')->where('inspection_item_id', $this->id)->get();
        return $options;
    }

    public function getImageStoragePath()
    {
        return ConstantHelper::$BASE_PUBLIC_PATH."inspection_items/images/{$this->id}/";
    }

    public function getImageUrl()
    {
        $filename = DB::table('inspection_images')->where('inspection_item_id', $this->id)->first();

        if($filename) {
            return config('fileapi.path_inspection_item_image') . "{$this->id}/{$filename->filename}";
        }

        return '';
    }

    public function getImageUrlAttribute()
    {
        $filename = DB::table('inspection_images')->where('inspection_item_id', $this->id)->first();

        if($filename) {
            return config('fileapi.path_inspection_item_image') . "{$this->id}/{$filename->filename}";
        }

        return '';
    }

    public function getAssignedToNameAttribute()
    {
        if($this->assignedTo && $this->assignedTo->employee)
        {
            return $this->assignedTo->employee->full_name;
        }
        return '';
    }
    
    public static function checkOptions($toCheckOptions)
    {

        $strOptions = "";
        $options = [];
        foreach(config('requirements.inspection_options') as $key => $option)
        {
            $strOptions .= $option['id'] . ",";
            $options[] = $option['id'];
        }

        $toCheckOptions = explode(',', $toCheckOptions);
        $filtered_options = [];

        foreach($toCheckOptions as $option) {

            if(in_array(trim($option), $options, true)) {
                $filtered_options[] = trim($option);
            }
        }

        if(count($filtered_options) > 0) {
            return $filtered_options;
        }

        return false;
    }

    public static function addInspectionItem($arrItem)
    {

        $inspectionItem = new self();
        $inspectionItem->fill($arrItem);

        if( $inspectionItem->save() ) {
            // dd($arrItem);
            return true;
        }

        return false;
    }

    public static function addItem($arrNewItem)
    {

        $filtered_options = self::checkOptions($arrNewItem['options']);

        if($filtered_options) {
            $item = new self();
            $item->fill($arrNewItem);
            $item->status = ConstantHelper::$INSPECTION_IN_PROGRESS;
            if($item->save()) {

                $date_time = new \DateTime();
                foreach($filtered_options as $option) {
                    DB::table('inspection_item_options')->insert([
                        'option' => $option,
                        'created_at' => $date_time,
                        'updated_at' => $date_time,
                        'inspection_item_id' => $item->id
                    ]);
                }
                return true;
            }
        }
        return false;
    }
}
