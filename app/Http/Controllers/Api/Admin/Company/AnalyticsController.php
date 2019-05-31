<?php

namespace App\Http\Controllers\Api\Admin\Company;

use Validator;
use Carbon\Carbon;
use Helix\Support\RoleManager;
use App\Http\Helpers\AppHelper;
use Helix\Services\Employee\Role;
use Helix\Response\ResponseTrait;
use Helix\Services\Employee\Skill;
use App\Http\Controllers\Controller;
use Helix\Services\Employee\Employee;
use App\Http\Controllers\Api\Admin\Traits\CompanyTrait;

class AnalyticsController extends Controller
{
    use ResponseTrait,
        CompanyTrait;
    /**
     * List of company roles
     *
     * @var \Illuminate\Support\Collection
     */
    protected $companyRoles;

    /**
     * List of all company employees
     *
     * @var \Illuminate\Support\Collection
     */
    protected $companyEmployees;

    /**
     * Class constructor
     *
     */
    public function __construct()
    {
        $this->companyRoles = $this->allRoles();
        $this->companyEmployees = $this->allEmployees()->get();
    }
    /**
     * Company Analytics
     *
     * @return json
     */
    public function overview()
    {
        $skilledCount = $skilledGapCount = 0;
        $employees = $this->companyEmployees;

        $mappedEmployees = $employees->map(function($employee) 
            use (&$skilledCount, 
                &$skilledGapCount) {

            $status = $employee->stringStatus();

            if ($status != '-') {
                $employee->skilled ? $skilledCount++ : $skilledGapCount++;
            }

            return [
                'id' => $employee->id,
                'name' => $employee->name,
                'roles_count' => $employee->roles->count(),
                'status' => $status,
            ];
        });

        return $this->successResponse('analytics', [
            'graph' => [
                'monthly_skilled' => $this->monthlyOverview()->pluck('skilled'),
                'skills_gap' => $skilledGapCount,
                'skilled' => $skilledCount
            ],
            'employees' => $mappedEmployees,
        ]);

    }

    /**
     * Monthly calculation
     *
     * Computes end-of-month total number of skilled employees
     * @param \Carbon\Carbon $dt
     * @return json
     */
    public function monthlyOverview()
    {
        $currentMonth = Carbon::now()->startOfYear();
        $end = Carbon::now()->subMonth()->endOfMonth();

        $skilledEmployees = $this->allEmployees()
                        ->statusBetween(true, $currentMonth, $end)
                        ->get();
        $unSkilledEmployees = $this->allEmployees()
                        ->statusBetween(false, $currentMonth, $end)
                        ->get();

        $employees = $skilledEmployees->merge($unSkilledEmployees);

        while ( ! $currentMonth->isSameMonth()) {
            
            $skilledCount = $skillGapCount = 0;
            $current = $currentMonth;

            $skilledCount = $employees->where('skilled_date', '>', $current->startOfMonth())
                ->where('skilled_date', '<', $current->endOfMonth())
                ->where('skilled', true)->count();

            $skillGapCount = $employees->where('unskilled_date', '>', $current->startOfMonth())
                ->where('unskilled_date', '<', $current->endOfMonth())
                ->where('skilled', false)->count();

            $monthlyBreakdown[$currentMonth->format('Y_m')] = [
                'month' => $currentMonth->format('M Y'),
                'skilled' => $skilledCount,
                'gap' => $skillGapCount,
            ];

            $currentMonth->addMonthNoOverflow();
        }

        return collect($monthlyBreakdown);
    }

    /**
     * CSV export by month
     *
     * @return CSV
     */
    public function exportByMonth()
    {
        $carbonFrom = Carbon::createFromFormat('m-d-Y', request('from'));
        $carbonTo = Carbon::createFromFormat('m-d-Y', request('to'));

        $currentMonth = clone $carbonFrom;
        $start = $carbonFrom->startOfMonth();
        $end = $carbonTo->endOfMonth();
        $monthlyBreakdown = [];

        $skilledEmployees = $this->allEmployees()
                        ->statusBetween(true, $start, $end)
                        ->get();
        $unSkilledEmployees = $this->allEmployees()
                        ->statusBetween(false, $start, $end)
                        ->get();

        $employees = $skilledEmployees->merge($unSkilledEmployees);

        $rolesAssignedCount = $skillsAssignedCount = 0;

        while ( ! $currentMonth->greaterThan($end)) {
            
            $skilledCount = $skillGapCount = 0;
            $current = $currentMonth;

            $skilledEmployees = $employees->where('skilled_date', '>', $current->startOfMonth())
                ->where('skilled_date', '<', $current->endOfMonth())
                ->where('skilled', true);

            $unSkilledEmployees = $employees->where('unskilled_date', '>', $current->startOfMonth())
                ->where('unskilled_date', '<', $current->endOfMonth())
                ->where('skilled', false);

            // Total Assigned Roles/Skills
            $skilledEmployees->each(function($employee) use (&$rolesAssignedCount, &$skillsAssignedCount) {
                $rolesAssignedCount += $employee->roles()->count();
                $skillsAssignedCount += $employee->skills()->count();
            });

            // Skilled/UnSkilled Counts
            $skilledCount = $skilledEmployees->count();
            $skillGapCount = $unSkilledEmployees->count();

            $obj = new \stdClass;
            $obj->month = $currentMonth->format('M Y');
            $obj->skilled = $skilledCount;
            $obj->gap = $skillGapCount;
            $obj->rolesAssigned = $rolesAssignedCount;
            $obj->skillsAssigned = $skillsAssignedCount;

            $monthlyBreakdown[] = $obj;

            $currentMonth->addMonthNoOverflow();
        }

        $columns = [
            'Month and Year' => 'month',
            'Skilled' => 'skilled',
            'Skills Gap' => 'gap',
            'Roles Assigned' => 'rolesAssigned',
            'Skills Assigned' => 'skillsAssigned',
        ];

        $filename = 'Skills_Gap_Analysis_Monthly_' . $carbonFrom->format('mdY') . '_' . $carbonTo->endOfMonth()->format('mdY');

        $total = collect($monthlyBreakdown);

        $monthlyBreakdown[] = (object) [
            'month' => 'Total',
            'skilled' => $total->sum('skilled'),
            'gap' => $total->sum('gap'),
            'rolesAssigned' => $total->sum('rolesAssigned'),
            'skillsAssigned' => $total->sum('skillsAssigned'),
        ];

        AppHelper::export($filename, $columns, $monthlyBreakdown);
    }

    /**
     * CSV export by employee
     *
     * @return CSV
     */
    public function exportByEmployee()
    {
        $carbonFrom = Carbon::createFromFormat('m-d-Y', request('from'));
        $carbonTo = Carbon::createFromFormat('m-d-Y', request('to'));

        $from = $carbonFrom->format('Y-m-d');
        $to = $carbonTo->format('Y-m-d');
        $employees = $this->companyEmployees
                            ->where('created_at', '>', $from)
                            ->where('created_at', '<', $to);

        $mappedEmployees = $employees->map(function($employee) {
            
            $skilledRoles = $gappedRoles = 0;
            $rolesCount = $employee->roles->count();
            $status = $employee->stringStatus();

            if ($status != '-') {
                foreach ($employee->roles as $role) {
                    // If any skill don't match the total skills, will be assumed GAP
                    RoleManager::load($role)->employeeSkillMatched($employee) ? $skilledRoles++ : $gappedRoles;
                }
            }

            $obj = new \stdClass;
            $obj->name = $employee->name;
            $obj->status = $status;
            $obj->rolesCount = $rolesCount;
            $obj->skilledRoles = $skilledRoles;
            $obj->gapRoles = $gappedRoles;

            return $obj;
        });

        $columns = [
            'Name' => 'name',
            'Status' => 'status',
            'Total Roles' => 'rolesCount',
            'Roles Skilled' => 'skilledRoles',
            'Roles Gap' => 'gapRoles',
        ];

        $filename = 'Skills_Gap_Analysis_' . $carbonFrom->format('mdY') . '_' . $carbonTo->format('mdY');

        $mappedEmployees->push((object) [
            'name' => 'Total',
            'status' => '',
            'rolesCount' => $mappedEmployees->sum('rolesCount'),
            'skilledRoles' => $mappedEmployees->sum('skilledRoles'),
            'gapRoles' => $mappedEmployees->sum('gapRoles'),
        ]);

        AppHelper::export($filename, $columns, $mappedEmployees);
    }

    /**
     * Retrieve all employees associated to certain company
     *
     * @param /Carbon/Carbon|string $createdAt
     * @return /Illuminate/Support/Collection
     */
    protected function allEmployees($createdAt = null)
    {
        $company = $this->getCompanyId();
        $baseQuery = Employee::with('roles')->company($company);

        if ( ! is_null($createdAt)) {
            $baseQuery->where('created_at', '<', $createdAt);
        }
                         
        return $baseQuery;
    }

    /**
     * Return all roles associated to company
     *
     * @return /Illuminate/Support/Collection
     */
    protected function allRoles()
    {
        $company = $this->getCompanyId();
        return Role::findByCompany($company);
    }
}
