@extends('passwords.main')
@section('content')
  <div class="login-page">
    <div class="container">
      <div class="row">
        <div class="main-content">
          <div class="login-con">
            <form id="request-form" class="formLogin" method="POST" action="{{ route('password.change.post') }}">
              <div class="logo-con margin-b">
                <img class="img-responsive" src="/img/helix-logo.png" alt="Helix" title="Helix">
              </div>
              <div class="alert alert-success" style="text-align:center;" role="alert">
                <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                UPDATE YOUR PASSWORD?<br><small>Enter your new password</small>
              </div>
                {{ csrf_field() }}
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                <input type="hidden" name="email" value="{{ $email }}" >
                <div class="form-group margin-b">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" name="password">
                    <input type="checkbox" onchange="document.getElementById('pwd').type = this.checked ? 'text' : 'password'"> view password
                </div>
                <div class="form-group margin-b">
                  <label> Re-enter Password:</label>
                  <input type="password" class="form-control" id="repwd" name="repeat_password">
                  <input type="checkbox" onchange="document.getElementById('repwd').type = this.checked ? 'text' : 'password'"> view re-entered password
                </div>
                <button type="submit" class="btn btn-default margin-t">Submit</button>
                @if(Session::has('error'))
                    <p>{{ Session::get('error') }}</p>
                    {!! Session::flush() !!}
                @endif
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

@endsection
