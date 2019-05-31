<?php

namespace Helix\Services\Employee;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
	/**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'skills';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'company_id', 'created_by'];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['skills_count'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = ['pivot'];

    /**
     * Retrieve by company ID
     *
     * @param int $id
     * @return \Illuminate\Support\Collection|null
     */
    public static function findByCompany($id)
    {
    	return static::company($id)->get();
    }

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
     * Skills relationship
     *
     * @return \Illuminate\Database\Query\Builder
     */
    public function skills()
    {
        return $this->hasMany('Helix\Services\Employee\Skill', 'skill_id');
    }

    /**
     * The employees that belong to the role.
     */
    public function employees()
    {
        return $this->belongsToMany('Helix\Services\Employee\Employee', 'employee_skill', 'skill_id', 'employee_id');
    }

    /**
     * Returns appended 'skills_count' attribute
     *
     * @return int
     */
    public function getSkillsCountAttribute()
    {
        return $this->skills->count();
    }

}