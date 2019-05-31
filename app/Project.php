<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $table = 'projects';
    protected $fillable = ['name'];

    public function groups()
    {
        return $this->hasMany('App\Group');
    }

    public static function addProject($companyId, $arrNewProject)
    {

        $arrNewProject['company_id'] = $companyId;
        $project = new self();
        $project->name = $arrNewProject['name'];
        $project->company_id = $companyId;

        if(isset($arrNewProject['project_id'])) {
            $project->project_id = $arrNewProject['project_id'];
        }

        if ($project->save()) {
            return $project;
        }

        return false;
    }
}
