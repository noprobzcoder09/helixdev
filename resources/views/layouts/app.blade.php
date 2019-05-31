<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
		<link href="{{ mix('css/all.css') }}" rel="stylesheet">
		<link href="{{ mix('css/app.css') }}" rel="stylesheet">
		<link href="{{ mix('css/media.css') }}" rel="stylesheet">

		<script src="{{ mix('js/core.js') }}"></script>
		<script src="{{ mix('js/main.js') }}"></script>
		<script src="{{-- mix('js/app.js') --}}"></script>

    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body>
    <div id="app">
        

        @yield('content')
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
