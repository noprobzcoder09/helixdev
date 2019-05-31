<?php

namespace Helix\Services\Employee;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
	/**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'skill_items';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'skill_id'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = ['skill_id', 'pivot'];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['role_id'];

    /**
     * Returns appended 'role_id' attribute
     *
     * @return int
     */
    public function getRoleIdAttribute()
    {
        return $this->skill_id;
    }
}