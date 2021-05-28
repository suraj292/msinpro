<div class="auth-form-light text-left p-5">
    <div class="brand-logo">
        <img src="{{asset('assets/images/logo.svg')}}" alt="logo">
    </div>
    <h4>Hello! let's get started</h4>
    <h6 class="font-weight-light">Sign in to continue.</h6>
    <form class="pt-3" wire:submit.prevent="submit">
        <div class="form-group">
            <input type="text" class="form-control form-control-lg" placeholder="Username" wire:model.lazy="username">
        </div>
        <div class="form-group">
            <input type="password" class="form-control form-control-lg" placeholder="Password" wire:model.lazy="password">
        </div>
        <div class="mt-3">
            <button class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" type="submit">SIGN IN</button>
        </div>
        @if(session()->has('failed'))
        <p style="padding: 10px; color: #ff4545;">{{session('failed')}}</p>
        @endif
    </form>
</div>
