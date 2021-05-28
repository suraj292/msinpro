<?php

namespace App\Http\Livewire;

use App\Models\contact;
use Livewire\Component;

class Footer extends Component
{
    public $contacts, $address;
    public function render()
    {
        return view('livewire.footer');
    }
    public function mount(){
        $contact = contact::find(1);
        if ($contact != null){
            //$x = [$contact->flat_no,$contact->locality,$contact->city,$contact->pin_code,$contact->state,$contact->country,$contact->email_id,$contact->phone_no];
            $this->address = [$contact->flat_no,$contact->locality,$contact->city];
            $this->contacts = contact::find(1);
        }

    }
}
