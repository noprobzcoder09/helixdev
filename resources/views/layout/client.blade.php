<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en-US" prefix="og: http://ogp.me/ns#" class="no-js">
<head>
	<title>{{ env('APP_NAME') }} - @yield('title')</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700" rel="stylesheet"> -->
	<link href="https://fonts.googleapis.com/css?family=Play:400,700" rel="stylesheet">

	<link href="{{ mix('css/all.css') }}" rel="stylesheet">
	<link href="{{ mix('css/client.css') }}" rel="stylesheet">

	<script>
	    window.Laravel = <?php echo json_encode([
	        'csrfToken' => csrf_token(),
	    ]); ?>
	</script>
	<script src="{{ mix('js/core.js') }}"></script>
	<script src="{{ mix('js/app.js') }}"></script>
	<script src="{{ mix('js/plugins.js') }}"></script>
	<script src="{{ mix('js/client.js') }}"></script>
</head>
<body>
	<div class="main-container">
		<div class="header">
			<div class="container">

				<div class="col-md-12 company-logo">
					<div class="row">
						<img class="img-responsive" src="{{ url('img/client/company-logo.png') }}" alt="{{ env('APP_NAME') }}" title="{{ env('APP_NAME') }}"/>
					</div>
				</div>

				<div class="nav">
					<a href="#menu"><span></span></a>
				</div>

				<nav id="menu">
					<ul>
						<li><a href="javascript:void(0)" class="induction">Induction</a></li>
						<li><a href="javascript:void(0)" class="inspection">Inspection</a></li>
						<li><a href="javascript:void(0)" class="chemical">Chemical Management</a></li>
						<li><a href="javascript:void(0)" class="resources">Resources</a></li>
						<li><a href="javascript:void(0)" class="observation">Observation</a></li>
						<li><a href="javascript:void(0)" class="incidents">Incidents</a></li>
						<li><a href="javascript:void(0)" class="emergency">Emergency Info</a></li>
						<li><a href="javascript:void(0)" class="alerts">Alerts</a></li>

						<div class="bottom-menu">
							<li><a href="javascript:void(0)" class="profile">User Profile</a></li>
							<li><a href="javascript:void(0)" class="admin">Admin Panel</a></li>
							<li><a href="javascript:void(0)" class="logout">Logout</a></li>
						</div>
						<li><a href="javascript:void(0)">&nbsp;</a></li>
						<li><a href="javascript:void(0)">&nbsp;</a></li>
						<li><a href="javascript:void(0)">&nbsp;</a></li>
					</ul>
				</nav>

				<div class="clearfix"></div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="main-content">
							@yield('content')
						</div>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
</body>
<script type="text/javascript">
(function( $ ) {
	$(document).ready(function() {
		$('nav#menu').mmenu({
			navbars : [
				{
					height 	: 4,
					content : [
						'<img src="{{ url("img/client/company-logo.png") }}" />'
					]
				}
			],
			extensions: [
	            "pagedim-black"
	        ]
		});
	});
})( jQuery );
</script>
</html>