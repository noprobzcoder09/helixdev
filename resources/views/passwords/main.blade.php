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
  	<script src="{{ mix('js/plugins.js') }}"></script>
  	<script src="{{ mix('js/client.js') }}"></script>
  </head>
  <body>
  	<div class="main-container">
  	   @yield('content')
  	</div>
  </body>
</html>
