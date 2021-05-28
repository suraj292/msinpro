<?php

namespace App\Http\Livewire\Admin;

use App\Models\admin_login;
use Livewire\Component;

class Navbar extends Component
{
    public $admin;
    public function render()
    {
        return view('livewire.admin.navbar');
    }
    public function mount(){
        $this->admin = admin_login::find(1);
    }
    public function signout(){
        session()->flush();
        return redirect(route('login'));
    }
}
