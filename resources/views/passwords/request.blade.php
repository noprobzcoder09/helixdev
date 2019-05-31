@extends('passwords.main')

@section('content')
  <div class="login-page">
    <div class="container">
      <div class="row">
        <div class="main-content">
          <div class="login-con">
            <form id="request-form" class="formLogin" method="POST" action="{{route('password.request.post')}}">
              <div class="logo-con margin-b">
                <img class="img-responsive" src="/img/helix-logo.png" alt="Helix" title="Helix">
              </div>
              <div class="alert alert-success" style="text-align:center;" role="alert">
                <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                FORGOT YOUR PASSWORD?<br><small>Enter your registered email address Email</small>
              </div>

              {{ csrf_field() }}
              <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email" name="email">
              </div>
              <button type="submit" class="btn btn-default margin-b">Submit</button>
              @if(Session::has('succeed_password_request'))
                {{ Session::get('succeed_password_request') }}
                <a href="{{ url('/#login') }}">Login here</a>
                {{!! Session::flush() }}
              @endif
              @if(Session::has('error_password_request'))
                <hr>
                <div class="alert alert-danger" style="text-align:center;" role="alert">
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                  {{ Session::get('error_password_request') }}
                </div>
                <a class="btn btn-primary btn-full" href="{{ url('/#login') }}"> << Login here </a>
                {{!! Session::flush() }}
              @endif
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection
