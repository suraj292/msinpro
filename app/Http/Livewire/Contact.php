<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Contact extends Component
{
    public $contacts, $address;
    public function render()
    {
        return view('livewire.contact');
    }
    public function mount(){
        $contact = \App\Models\contact::find(1);
        if ($contact != null){
            //$x = [$contact->flat_no,$contact->locality,$contact->city,$contact->pin_code,$contact->state,$contact->country,$contact->email_id,$contact->phone_no];
            $this->address = [$contact->flat_no,$contact->locality,$contact->city];
            $this->contacts = \App\Models\contact::find(1);
        }

    }
}
