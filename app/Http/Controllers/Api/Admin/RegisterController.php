<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Helpers\AppHelper;
use App\Http\Helpers\ConstantHelper;
use App\Services\ChartService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Observation;
use App\Inspection;
use App\CorrectiveAction;
use App\OnlineTraining;
use DB;

class RegisterController extends Controller {

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    protected function observations()
    {
        $observations = Observation::all();

        foreach($observations as $observation)
        {
             switch($observation->status) {
                case 1: {
                    $observation->action = "YES";
                    } break;
                default: {
                    $observation->action = "NO";
                    } break;
            }
            
            $observation->sub_categories = $observation->subCategoriesToString();

            if(is_null($observation->status)) {
                $observation->status = 4;
            }

            $observation->status = config('requirements.observation_status')[$observation->status];
        }

        return Response()->json([
            'result' => true,
            'observations' => ['data' => $observations],
            'charts' => ['data' => ChartService::observations()]
        ]);
    }

    protected function inspections()
    {
        $inspections = Inspection::where('inspected_by', '!=', NULL)->where('isClone', true)->get();

        $inspections->each(function($i)
        {

            if($i->inspected_by) {
                $i->inspector_name = $i->inspectedBy->first_name . ' ' . $i->inspectedBy->last_name;
            }

            $i->compliant_count = $i->getComplianceNonInfo();
            $i->category = $i->category;

            if(is_null($i->status)) {
                $i->status = ConstantHelper::$INSPECTION_IN_PROGRESS;
            }
            
        });

        return Response()->json([
            'result'        => true,
            'inspections'   => ['data' => $inspections],
            'charts'        => ['data' => ChartService::inspections()]
        ]);
    }

    protected function correctiveActions()
    {

        $actions = CorrectiveAction::where('company_id', AppHelper::decrypt($this->request->id))
            ->orderBy('updated_at', 'desc')
            ->paginate(3);

        return Response()->json([
            'result'                => true,
            'test'                  => $actions,
            'corrective_actions'    => ['data' => $actions],
            'charts'                => ['data' => ChartService::correctActions()]
        ]);
    }

    public function completedTrainings()
    {
        $companyId = AppHelper::decrypt($this->request->route('id'));

        $this->request->keywords
            ? $keywords = $this->request->get('keywords') : $keywords = '';

        $trainings = OnlineTraining::where('company_id', $companyId);
        $trainings = $trainings->search( $keywords, ['full_name' => 10, 'title' => 10])
            ->orderBy('id', 'desc')
            ->paginate(100);

        return Response()->json([
            'result'              => true,
            'completed_trainings' => ['data' => $trainings],
            'charts'              => ['data' => ChartService::onlineTraining()]
        ]);
    }
    
    public function correctActionExport()
    {
        $observations = Observation::whereCompanyId( AppHelper::decrypt( $this->request->route('id') ) )->get();
        $filename = 'export_observation_'.time().'.csv';
        $columns = array(
            //'ID' => 'id',
            'Seen' => 'seen',
            'Performed Action' => 'performed_action',
            'Further Action' 	=> 'further_action',
            'Status' 	=> 'further_action',
        );
        AppHelper::export($filename, $columns, $observations);
    }
}
