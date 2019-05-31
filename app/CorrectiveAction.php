<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class CorrectiveAction extends Model
{
    protected $table = 'corrective_actions';
    protected $fillable = ['observation_id', 'inspection_id'];
    protected $appends = [
        'date',
        'name',
        'result',
        'type',
        'seen',
        'status',
        'due',
        'isObservation',
        'isInspection'
    ];

    public function inspectionItem()
    {
        return $this->belongsTo('App\InspectionItem');
    }

    public function observation()
    {
        return $this->belongsTo('App\Observation');
    }

    public function company()
    {
        return $this->belongsTo('App\Company');
    }

    public function getDateAttribute()
    {
        return $this->getAttrInfo('date');
    }

    public function getNameAttribute()
    {
        return $this->getAttrInfo('name');
    }

    public function getResultAttribute()
    {
        return $this->getAttrInfo('result');
    }

    public function getTypeAttribute()
    {
        return $this->getAttrInfo('type');
    }

    public function getSeenAttribute()
    {
        return $this->getAttrInfo('seen');
    }

    public function getStatusAttribute()
    {
        return $this->getAttrInfo('status');
    }

    public function getDueAttribute()
    {
        return $this->getAttrInfo('due');
    }

    public function getIsObservationAttribute()
    {
        return $this->getAttrInfo('isObservation');
    }

    public function getIsInspectionAttribute()
    {
        return $this->getAttrInfo('isInspection');
    }
    
    public function getAttrInfo($fieldName)
    {

        $output = '';
        $outputHtml = '';

        switch($fieldName)
        {
            case 'date':
            {
                if($this->created_at) {
                    $output = $this->created_at->format('Y-m-d');
                }

                }break;

            case 'name':
            {

                if($this->observation) {
                    $output = $this->observation->createdBy->full_name;
                } else {
                    if($this->inspectionItem->assignedTo) {
                        $output = $this->inspectionItem->assignedTo->full_name;
                    }
                }

                }break;

            case 'result':
            {

                if($this->observation)
                {
                    $output = $this->observation->type_content['name'];
                    $class = "";
                    $label = "";

                    switch($this->observation->type)
                    {
                        case 0:
                        {
                            $label = 'NEGATIVE';
                            $class = 'fc-red';
                            }break;

                        case 1:
                        {
                            $label = 'POSITIVE';
                            $class = 'fc-green';
                            }break;
                    }


                    $outputHtml = "<span class='{$class}'>{$label}</span>";

                } else {

                    $class = "";

                    switch($this->inspectionItem->answer)
                    {
                        case 1:
                        {
                            $output = 'POSITIVE';
                            $class = 'fc-green';
                            }break;
                        case 2:
                        {
                            $output = 'NEGATIVE';
                            $class = 'fc-red';
                            }break;
                        case 3:
                        {
                            $output = 'N/A';
                            $class = 'fc-orange';
                            }break;
                    }

                    $outputHtml = "<span class='{$class}'>{$output}</span>";
                }

                }break;

            case 'type':
            {
                $class = "fc-blue";

                if($this->observation) {
                    $output = 'observation';
                } else {
                    $output = 'inspection';
                }

                $outputHtml = "<span class='{$class}'>{$output}</span>";

                }break;

            case 'seen':
            {

                if($this->observation) {
                    $output = $this->observation->seen;
                } else {
                    $output = $this->inspectionItem->description;
                }

                }break;

            case 'status':
            {
                $class = "";
                
                if($this->observation)
                {
                    if(is_null($this->observation->status)) {
                        $this->observation->status = 4;
                    }

                    $status = config('requirements.observation_status')[$this->observation->status];
                    $class = $status['class'];
                    $output = $status['name'];

                } else {

                    switch($this->inspectionItem->answer)
                    {
                        case 1:
                        {
                            $output = 'OPEN';
                            $class = 'fc-green';
                        }break;
                        case 2:
                        {
                            $output = 'CLOSED OUT';
                            $class = 'fc-green';
                        }break;
                        case 3:
                        {
                            $output = 'OVERDUE';
                            $class = 'fc-red';
                        }break;
                        case 4:
                        {
                            $output = 'IN PROGRESS';
                            $class = 'fc-orange';
                        }break;
                    }

                }

                $outputHtml = "<span class='{$class}'>{$output}</span>";
                }break;

            case 'due':
            {

                $class = "fc-blue";

                if($this->observation)
                {
                    $output = Carbon::parse($this->observation->due)->toFormattedDateString();
                } else {
                    $output = Carbon::parse($this->inspectionItem->action_due)->toFormattedDateString();
                }

                $outputHtml = "<span class='{$class}'>{$output}</span>";

                }break;

            case 'isObservation':
                {

                    if($this->observation)
                    {
                        $output = true;
                    } else {
                        $output = false;
                    }

                }break;

            case 'isInspection':
                {

                    if($this->inspectionItem)
                    {
                        $output = true;
                    } else {
                        $output = false;
                    }

                }break;

            default:
                {
                    $output = '';
                }break;
        }

        return [
            'text' => $output,
            'html' => $outputHtml
        ];
    }
}
