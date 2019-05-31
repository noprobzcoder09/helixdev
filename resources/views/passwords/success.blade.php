
@extends('passwords.main')

@section('content')
<div class="login-page">
  <div class="container">
    <div class="row">
      <div class="main-content">
        <div class="login-con">
            <div id="request-form" class="formLogin">
              <div class="logo-con margin-b">
                <img class="img-responsive" src="../../img/helix-logo.png" alt="Helix" title="Helix">
              </div>
              <div class="alert alert-success" style="text-align:center;" role="alert">
                <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                Successfully change password <a href="{{ route('client') }}#login">Go to home..</a>
              </div>              
            </div>
        </div>
      </div>
    </div>
  </div>
</div>


@endsection
