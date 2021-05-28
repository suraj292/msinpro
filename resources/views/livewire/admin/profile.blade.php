<div class="content-wrapper">

    <div class="row">
        <div class="col-md-10 grid-margin stretch-card mx-auto">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title text-center">Admin Profile</h4>
                    <p class="card-description text-center"> Update your Profile </p>

                    @if (session()->has('success'))
                        <span class="badge badge-success">
                            {{ session('success') }}
                        </span>
                    @endif

                    <form class="forms-sample" wire:submit.prevent="submit">

                        <div class="form-group">
                            <label for="exampleInputUsername1">Username</label>
                            <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Username" wire:model.lazy="username">
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">New Password</label>
                            <input type="password" class="form-control" placeholder="New Password" wire:model.lazy="password">
                        </div>
{{--                        <div class="form-group">--}}
{{--                            <label >Password hint</label>--}}
{{--                            <input type="text" class="form-control" placeholder="Password hint" wire:model.lazy="hint">--}}
{{--                        </div>--}}
                        <button type="submit" class="btn btn-gradient-primary mr-2">Update</button>
                        <a href="{{route('dashboard')}}" class="btn btn-light">Cancel</a>

                    </form>
                </div>
            </div>
        </div>
    </div>

</div>
