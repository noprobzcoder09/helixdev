<?php

namespace Helix\Services\Employee;

use Carbon\Carbon;
use Helix\Support\RoleManager;
use App\Employee as BaseEmployee;

class Employee extends BaseEmployee
{
    /**
     * Retrieve all by company
     *
     * @param int $id
     * @return static
     */
    public static function findByCompany($id)
    {
        return static::company($id)->get();
    }

    // /**
    //  * Retrieve all skilled by month
    //  *
    //  * @param Carbon|string $dt
    //  * @return \Illuminate\Support\Collection
    //  */
    // public static function skilledByMonth($dt)
    // {
    //     $start = Carbon::parse($dt)->startOfMonth();
    //     $end = Carbon::parse($dt)->endOfMonth();

    //     return static::whereSkilled(true)->whereBetween('skilled_date', [$start, $end])->get();
    // }

    /**
     * Scope a query to filter by company.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeCompany($query, $id)
    {
        return $query->where('company_id', $id);
    }

    /**
     * Scope a query to filter by skilled date.
     *
     * @param boolean $skilled
     * @param Carbon|string $start
     * @param Carbon|string $end
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeStatusBetween($query, $skilled, $start, $end)
    {
        $start = Carbon::parse($start);
        $end = Carbon::parse($end);

        $dateField = $skilled ? 'skilled_date' : 'unskilled_date';

        return $query->whereSkilled($skilled)
                    ->whereBetween($dateField, [$start, $end]);
    }

    /**
     * The roles that belong to the employee.
     */
    public function roles()
    {
        return $this->belongsToMany('Helix\Services\Employee\Role', 'employee_skill', 'employee_id', 'skill_id');
    }

    /**
     * The skills that belong to the employee.
     */
    public function skills()
    {
        return $this->belongsToMany('Helix\Services\Employee\Skill', 
                        'employee_skill_item', 
                        'employee_id', 
                        'skill_item_id')
                    ->withPivot('skill_id')
                    ->withTimestamps();
    }

    /**
     * Count all active skills by role
     *
     * @param int $role
     * @param \Carbon\Carbon $dt
     * @return int
     */
    public function countActiveSkillsByRole($role, $dt = null)
    {
        $baseQuery = $this->skills()->wherePivot('skill_id', $role);

        if ( ! is_null($dt)) {
            $start = Carbon::parse($dt)->startOfMonth();
            $end = Carbon::parse($dt)->endOfMonth();

            $baseQuery->wherePivot('created_at', '>', $start)
                    ->wherePivot('created_at', '<', $end);
        }

        return $baseQuery->get()->count();
    }

    /**
     * Determine if employee is skilled/gap
     *
     * @return boolean
     */
    public function isSkilled()
    {
        foreach ($this->roles as $role) {
            $roleManager = RoleManager::load($role);
            // If any skill don't match the total skills, will be assumed GAP
            // Immediately stop the loop execution
            if ( ! $roleManager->employeeSkillMatched($this)) {
                return false;
            }
        }

        return true;
    }

    /**
     * Update employee status to skilled/gap
     *
     * @param boolean|null $status
     */
    public function updateStatus($status = null)
    {
        if (is_null($status)) {
            $status = $this->isSkilled();
        }

        if ($status) {
            $this->skilled_date = Carbon::now();
        } else {
            $this->unskilled_date = Carbon::now();
        }

        $this->skilled = $status;
        $this->save();
    }

    /**
     * Returns string formatted status
     *
     * @return string
     */
    public function stringStatus()
    {
        if ($this->roles->isEmpty()) {
            return '-';
        }

        return $this->skilled ? 'skilled' : 'skills gap';
    }

}
