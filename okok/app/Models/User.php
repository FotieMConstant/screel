<?php

namespace App\Models;

//use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
//use Illuminate\Foundation\Auth\User as Authenticatable;
use Jenssegers\Mongodb\Auth\User as Authenticatable;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
use Illuminate\Auth\Authenticatable as AuthenticatableTrait;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Passport\HasApiTokens;

//use Laravel\Sanctum\HasApiTokens;

class User extends Eloquent implements AuthenticatableContract
{

    use AuthenticatableTrait;
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;

    protected $connection = 'mongodb';

    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'github_id',
        'github_token',
        'github_refresh_token',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
//    protected $appends = [
//        'profile_photo_url',
//        'name'
//    ];

//    public function isDistributor() {
//        return $this->category()->first()->name == 'Distributor';
//    }
//    public function isCustomer() {
//        return $this->category()->first()->name == 'Customer';
//    }

//    Attributes
//    public function getNameAttribute()
//    {
//        return $this->first_name.' '.$this->last_name;
//    }

//    relationships
//    public function category() {
//        return $this->belongsToMany(Category::class, 'user_category', 'user_id', 'category_id');
//    }
//    public function referrer() {
//        return $this->belongsTo(User::class, 'referred_by');
//    }
//    public function getAuthIdentifierName()
//    {
//        // TODO: Implement getAuthIdentifierName() method.
//    }
//
//    public function getAuthIdentifier()
//    {
//        // TODO: Implement getAuthIdentifier() method.
//    }
//
//    public function getAuthPassword()
//    {
//        // TODO: Implement getAuthPassword() method.
//    }
//
//    public function getRememberToken()
//    {
//        // TODO: Implement getRememberToken() method.
//    }
//
//    public function setRememberToken($value)
//    {
//        // TODO: Implement setRememberToken() method.
//    }
//
//    public function getRememberTokenName()
//    {
//        // TODO: Implement getRememberTokenName() method.
//    }
}
