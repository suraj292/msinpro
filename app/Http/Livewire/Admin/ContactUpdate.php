<?php

namespace App\Http\Livewire\Admin;

use App\Models\contact;
use Livewire\Component;

class ContactUpdate extends Component
{
    public $flat_no, $locality, $city, $pin_code, $state, $country, $email_id, $phone_no, $contact;

    public function render()
    {
        return view('livewire.admin.contact_update')
            ->layout('layouts.admin');
    }
    protected $rules = [
        'pin_code' => 'integer|min:5',
        'email_id' => 'email',
        'phone_no' => 'min:10|integer'
    ];
    public function updated($propertyName)
    {
        $this->validateOnly($propertyName);
    }
    public function mount(){
        $this->contact = contact::find(1);
    }
    public function submit(){
        $contact = Contact::find(1);

        if ($contact != null){
            $update = Contact::find(1)
            ->update([
                'flat_no' => $this->flat_no != '' ? $this->flat_no : $contact->flat_no,
                'locality' => $this->locality != '' ? $this->locality : $contact->locality,
                'city' => $this->city != '' ? $this->city : $contact->city,
                'pin_code' => $this->pin_code != '' ? $this->pin_code : $contact->pin_code,
                'state' => $this->state != '' ? $this->state : $contact->state,
                'country' => $this->country != '' ? $this->country : $contact->country,
                'email_id' => $this->email_id != '' ? $this->email_id : $contact->email_id,
                'phone_no' => $this->phone_no != '' ? $this->phone_no : $contact->phone_no,
            ]);
            if ($update){
                $this->reset();
                session()->flash('contact_updated', 'Your Contact info has been Updated.');
            }
        }
        if ($contact == null){
            $insert = Contact::insert([
                'flat_no' => $this->flat_no,
                'locality' => $this->locality,
                'city' => $this->city,
                'pin_code' => $this->pin_code,
                'state' => $this->state,
                'country' => $this->country,
                'email_id' => $this->email_id,
                'phone_no' => $this->phone_no,
            ]);
            if ($insert){
                $this->reset();
                session()->flash('contact_insert', 'Your Contact info has been Saved.');
            }
        }

    }
}
