<?php

namespace App\Http\Livewire;

use App\Models\admin_login;
use Livewire\Component;

class AdminLogin extends Component
{
    public $admin, $username, $password;

    public function render()
    {
        return view('livewire.admin-login')
            ->layout('layouts.admin_login');
    }

    public function submit(){

        $admin = admin_login::find(1);

        if ($admin->username == $this->username && $admin->password == $this->password){
            session()->put('admin', $admin->username);
            session()->save();
            return redirect(route('dashboard'));
        }else{
            session()->flash('failed', 'wrong credentials');
        }
    }
}
