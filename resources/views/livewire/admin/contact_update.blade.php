<div class="content-wrapper">
    <div class="page-header">
        <h3 class="page-title"> Update Contact Details </h3>
    </div>
    <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">

                    @if (session()->has('contact_updated'))
                        <span class="badge badge-success">
                            {{ session('contact_updated') }}
                        </span>
                    @endif
                    @if (session()->has('contact_insert'))
                        <span class="badge badge-success">
                        {{ session('contact_insert') }}
                    </span>
                    @endif

                    <form class="forms-sample" wire:submit.prevent="submit">
                        <div class="form-group">
                            <label >Flat / House number</label>
                            <input type="text" class="form-control" placeholder="{{$contact->flat_no!=''?$contact->flat_no:'A 23/2'}}" wire:model.lazy="flat_no">
                        </div>
                        <div class="form-group">
                            <label >Locality</label>
                            <input type="text" class="form-control" placeholder="{{$contact->locality!=''?$contact->locality:'District Center'}}" wire:model.lazy="locality">
                        </div>
                        <div class="form-group">
                            <label >City</label>
                            <input type="text" class="form-control" placeholder="{{$contact->city!=''?$contact->city:'Janakpuri'}}" wire:model.lazy="city">
                        </div>
                        <div class="form-group">
                            <label >Pin Code</label>
                            <input type="text" class="form-control" placeholder="{{$contact->pin_code!=''?$contact->pin_code:'10010'}}" wire:model="pin_code">
                            @error('pin_code') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group">
                            <label >State</label>
                            <input type="text" class="form-control" placeholder="{{$contact->state!=''?$contact->state:'Delhi'}}" wire:model.lazy="state">
                        </div>
                        <div class="form-group">
                            <label >Country</label>
                            <input type="text" class="form-control" placeholder="{{$contact->country!=''?$contact->country:'India'}}" wire:model.lazy="country">
                        </div>
                        <div class="form-group">
                            <label >Email ID</label>
                            <input type="text" class="form-control" placeholder="{{$contact->email_id!=''?$contact->email_id:'Yourname@gmail.com'}}" wire:model="email_id">
                            @error('email_id') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-group">
                            <label >Phone number</label>
                            <input type="text" class="form-control" placeholder="{{$contact->phone_no!=''?$contact->phone_no:'+91 1234567890city'}}" wire:model="phone_no">
                            @error('phone_no') <span class="text-danger">{{ $message }}</span> @enderror
                        </div>

                        <button type="submit" class="btn btn-gradient-primary mr-2">Submit</button>
                        <a class="btn btn-light" href="{{route('dashboard')}}">Cancel</a>
                    </form>

                </div>
            </div>
        </div>
    </div>
</div>
