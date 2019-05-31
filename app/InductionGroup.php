<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InductionGroup extends Model
{
    protected $table = 'induction_groups';

    public function inductions()
    {
        return $this->hasMany('App\Induction');
    }

    public function items()
    {
        return $this->hasMany('App\InductionGroupItem', 'group_id');
    }

    public static function getCategories($companyId)
    {
        $categories = self::where('company_id', $companyId)->get();

        if(!$categories) return [];

        $categories->each(function($category)
        {
            $items = $category->items()->get();
            $items->each(function($item) {
                $induction = $item->induction()->first();
                if($induction) {
                    $item->induction = $induction;
                }
            });
            $category->items = $items;
        });
        
        return $categories;
    }
}
