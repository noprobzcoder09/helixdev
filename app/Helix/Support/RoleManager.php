<?php

namespace Helix\Support;

use Helix\Services\Employee\Role;
use Helix\Services\Employee\Employee;

class RoleManager
{
	/**
	 * Role container
	 *
	 * @var \Helix\Services\Employee\Role
	 */
	protected $role = null;

	/**
	 * Constructor
	 *
	 * @param \Helix\Services\Employee\Role $role
	 */
	public function __construct(Role $role)
	{
		$this->role = $role;
	}

	/**
	 * Load Role by id
	 *
	 * @param int|Role $id
	 * @return static|null
	 */
	public static function load($id)
	{
		if ($id instanceof Role) {
			$role = $id;
		} else {
			$role = Role::find($id);
		}

		if (is_null($role)) {
			return;
		}

		return new static($role);
	}

	/**
	 * Count associated skills
	 *
	 * @return int
	 */
	public function skillCount()
	{
		return $this->role->skills_count;
	}

	/**
	 * Count active skills by employee
	 *
	 * @param Employee $employee
	 * @return int
	 */
	public function countActiveSkillsByEmployee($employee)
	{
		return $employee->countActiveSkillsByRole($this->role->id);
	}

	/**
	 * Determine if the total skills count associated with role
	 * is equal to employee's total skills count
	 *
	 * @param Employee $employee
	 * @return boolean
	 */
	public function employeeSkillMatched($employee)
	{
		return $this->skillCount() == $this->countActiveSkillsByEmployee($employee);
	}
}