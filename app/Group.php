<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Sofa\Eloquence\Eloquence;
use DB;
use Illuminate\Support\Collection;

class Group extends Model
{
    use Eloquence;
    protected $table = 'groups';
    protected $fillable = ['name', 'company_id', 'project_id'];

    public function project()
    {
        return $this->hasOne('App\Project', 'id', 'project_id');
    }

    public function getChemicals()
    {
        $groupChemicals = DB::table('chemical_groups')->where('group_id', $this->id)->get();
        $chemicals = new Collection;

        foreach($groupChemicals as $c)
        {
            $chemical = \App\Chemical::find($c->chemical_id);

            if($chemical) {
                $chemicals[] = $chemical;
            }
        }

        return $chemicals;
    }

}
