<?php

namespace App\Http\Livewire\Admin;

use App\Models\admin_login;
use Livewire\Component;

class Profile extends Component
{
    public $username, $password;
    public function render()
    {
        return view('livewire.admin.profile')
            ->layout('layouts.admin');
    }
    public function submit(){
        $user = admin_login::find(1);
        $data = $user->update([
            'username' => $this->username != '' ? $this->username : $user->username,
            'password' => $this->password != '' ? $this->password : $user->password,
            //'pass_hint' => $this
        ]);
        if ($data){
            session()->flash('success', 'Successfully updated your Profile');
            $this->reset();
        }
    }
}
