<?php

namespace App;

use App\Http\Helpers\ConstantHelper;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\InspectionItem;
use App\InspectionCategory;

class Inspection extends Model
{
    use softDeletes;

    protected $dates = ['deleted_at'];
    protected $table = 'inspections';
    protected $appends = [
        'inspector_name',
        'action',
        'pos_neg',
        'category_name'
    ];
    protected $fillable = [
        'title',
        'created_by',
        'company_id',
        'company_id',
        'inspection_category_id'
    ];

    public function createdBy() {
        return $this->belongsTo('App\Employee', 'created_by', 'id');
    }

    public function inspectedBy() {
        return $this->belongsTo('App\Employee', 'inspected_by', 'id');
    }

    public function items()
    {
        return $this->hasMany('App\InspectionItem');
    }

    public function category() {
        return $this->belongsTo('App\InspectionCategory', 'inspection_category_id');
    }

    public function isAction()
    {
        $items = InspectionItem::where('inspection_id', $this->id)
            ->where('required_action', '!=', NULL)
            ->count();

        return $items > 0 ? true : false;
    }

    public function getInspectorNameAttribute()
    {
        if($this->inspectedBy)
        {
            return $this->inspectedBy->full_name;
        }

        return '';
    }

    public function getActionAttribute()
    {
        return $this->isAction() ? 'YES' : 'NO';
    }

    public function getPosNegAttribute()
    {
        $comp = $this->getComplianceNonInfo();

        return $comp['compliant'] . '/' . $comp['non_compliant'];
    }

    public function getCategoryNameAttribute()
    {
        if($this->category)
        {
            return $this->category->name;
        }

        return '';
    }

    public function getComplianceNonInfo()
    {
        $comp = InspectionItem::where('inspection_id', $this->id)->where('answer', 1)->count();
        $non = InspectionItem::where('inspection_id', $this->id)->where('answer', '>=', 2)->count();

        return [
            'compliant' => $comp,
            'non_compliant' => $non
        ];
    }

    public static function getDetailInspections($companyId)
    {
        $inspections = self::where('company_id', $companyId)->get();

        if($inspections) {
            $inspections->each(function($inspection) {
                $items = InspectionItem::where('inspection_id', $inspection->id)->get();
                $inspection->items = $items;
            });

            return $inspections;
        }

        return [];
    }

    public static function addInspection($arrNewInspection)
    {
        $inspection = new self();
        $inspection->fill($arrNewInspection);

        if($inspection->save())
        {

            if($arrNewInspection['items'])
            {
                foreach($arrNewInspection['items'] as $item)
                {

                    $inspectionItem = new InspectionItem();
                    $inspectionItem->name = $item['name'];
                    $inspectionItem->options = $item['options'];
                    $inspectionItem->inspection_item_category_id = $item['inspection_item_category_id'];
                    $inspectionItem->inspection_id = $inspection->id;

                    if(isset($item['not_applicable']) && $item['not_applicable'] == 'true') {
                        $inspectionItem->not_applicable = 1;
                    }
                    $inspectionItem->save();
                }
            }
            return $inspection;
        }

        return false;
    }

}
