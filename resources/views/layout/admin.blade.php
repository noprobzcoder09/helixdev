<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en-US" prefix="og: http://ogp.me/ns#" class="no-js">
<head>
	<title>{{ env('APP_NAME') }} - @yield('title')</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700" rel="stylesheet"> -->
	<link href="https://fonts.googleapis.com/css?family=Play:400,700" rel="stylesheet">

	<link href="{{ mix('css/all.css') }}" rel="stylesheet">
	<link href="{{ mix('css/app.css') }}" rel="stylesheet">
	<link href="{{ mix('css/media.css') }}" rel="stylesheet">

	<!--script src="{{ mix('js/core.js') }}"></script-->
	<script src="{{ mix('js/manifest.js') }}"></script>
	<script src="{{ mix('js/vendor.js') }}"></script>
	<script src="{{ mix('js/app.js') }}"></script>
	<script src="{{ mix('js/plugins.js') }}"></script>


</head>
<body>
	<div class="main-container">
		<div class="header">
			<div class="container">
				<div class="col-md-2 col-sm-3 col-xs-4">
					<img class="img-responsive" src="{{ url('img/Helix-Solutions.png') }}" alt="{{ env('APP_NAME') }}" title="{{ env('APP_NAME') }}" width="100%"/>
				</div>
				<div class="col-md-8 col-sm-8 col-xs-8 pull-right">
					<div class="row">
						<div class="settings pull-right">
							<button class="btn btn-settings"><i class="fa fa-cog" aria-hidden="true"></i></span></button>
						</div>
						<div class="user pull-right">
							<span>Hi, Jake Dummett</span>
							<span><img class="img-responsive" src="{{ url('img/user-img.png') }}"></span>
						</div>
						<div class="ext-settings" style="display:none;">
							<ul>
								<li><a href="javascript:void(0);">Users</a></li>
								<li><a href="javascript:void(0);">Edit Profile</a></li>
								<li><a href="javascript:void(0);">Logout</a></li>
							</ul>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="main-content">
					@yield('content')
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
</body>
<script type="text/javascript">
	jQuery('button.open').on('click', function(){
		toastr.remove();
		toastr['success']('Open');
	});
	jQuery('.btn-settings').on('click', function(){
		jQuery('.ext-settings').slideToggle('fast');
	});
</script>
</html>