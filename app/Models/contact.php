<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class contact extends Model
{
    use HasFactory;
    protected $table = "contact";
    public $timestamps = false;
    protected $fillable = ['flat_no','locality','city','pin_code','state','country','email_id','phone_no'];
}
