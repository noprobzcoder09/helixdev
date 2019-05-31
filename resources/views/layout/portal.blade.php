<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en-US" prefix="og: http://ogp.me/ns#" class="no-js">
<head>
	<title>{{ env('APP_NAME') }} - @yield('title')</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700" rel="stylesheet"> -->
	<link href="https://fonts.googleapis.com/css?family=Play:400,700" rel="stylesheet">

	<link href="{{ mix('css/all.css') }}" rel="stylesheet">
	<link href="{{ mix('css/portal.css') }}" rel="stylesheet">
	<link href="{{ mix('css/media.css') }}" rel="stylesheet">
	<script> 
		window.Laravel = <?php echo json_encode([
			'csrfToken' => csrf_token(),
		]); ?>
	</script>
	<script src="{{ mix('js/core.js') }}"></script>
	<script src="{{ mix('js/app.js') }}"></script>
	<script src="{{ mix('js/plugins.js') }}"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.js"></script>
	<script src="{{ mix('js/main.js') }}"></script>

</head>
<body>
	<div class="main-container">
		<div class="header">
			<div class="container no-padding">
				<div class="col-md-2 col-sm-3 col-xs-4">
					<div class="row">
						<img class="img-responsive" src="{{ url('img/Helix-Solutions.png') }}" alt="{{ env('APP_NAME') }}" title="{{ env('APP_NAME') }}" width="160"/>
					</div>
				</div>
				<div class="col-md-8 col-sm-8 col-xs-8 pull-right">
					<div class="row">
						<div class="notification pull-right">
							<button class="btn btn-notif"><i class="fa fa-info" aria-hidden="true"></i></button>
						</div>
						<div class="settings pull-right">
							<button class="btn btn-settings" data-toggle="dropdown" id="menu1" type="button"><i class="fa fa-cog" aria-hidden="true"></i></button>
						</div>
						<div class="user pull-right">
							<span>Hi, Jake Dummett</span>
							<span><img class="img-responsive" src="{{ url('img/user-img.png') }}"></span>
						</div>
						<div class="ext-settings" style="display:none;" role="menu" aria-labelledby="menu1">
							<ul>
								<li class="edit-profile"><a href="javascript:void(0);">Edit Profile</a></li>
								<li class="logout"><a href="javascript:void(0);">Logout</a></li>
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
				<div class="col-md-2 no-padding-l">
					<div class="nav-con">
						<div class="nav-top">
							<ul>
								<li><a href="" class="current">DASHBOARD</a></li>
								<li><a href="">SUB-CONTRACTORS</a></li>
								<li><a href="">HR</a></li>
								<li><a href="">OHS</a></li>
							</ul>
						</div>
						<div class="nav-bottom">
							<ul>
								<li><a href="">REPORTING</a></li>
								<li><a href="">ADMIN</a></li>
							</ul>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
				<div class="col-md-10 no-padding">
					<div class="main-content">
						@yield('content')
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
	<div class="overlay"></div>
	<div class="loader">
		<div class="spinner">
			<div class="rect1"></div>
			<div class="rect2"></div>
			<div class="rect3"></div>
			<div class="rect4"></div>
			<div class="rect5"></div>
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
