@extends('layout.client')

@section('title', 'Client')

@section('content')

	<div class="col-md-12 home-con">
		<div class="row">
			<div class="top-container">
					
				<div class="col-xs-4 items">
					<a href="javascript:void(0);">
						<div class="img-con">
							<img class="img-responsive" src="{{ url('img/client/inductions.png') }}">
						</div>
						<p class="heading">Inductions</p>
					</a>
				</div>

				<div class="col-xs-4 items">
					<a href="javascript:void(0);">
						<div class="img-con">
							<img class="img-responsive" src="{{ url('img/client/chemical.png') }}">
						</div>
						<p class="heading">Chemical Management</p>
					</a>
				</div>

				<div class="col-xs-4 items">
					<a href="javascript:void(0);">
						<div class="img-con">
							<img class="img-responsive" src="{{ url('img/client/inspections.png') }}">
						</div>
						<p class="heading">Inspections</p>
					</a>
				</div>

				<div class="col-xs-4 items">
					<a href="javascript:void(0);">
						<div class="img-con">
							<img class="img-responsive" src="{{ url('img/client/safety_videos.png') }}">
						</div>
						<p class="heading">Safety Videos</p>
					</a>
				</div>

				<div class="col-xs-4 items">
					<a href="javascript:void(0);">
						<div class="img-con">
							<img class="img-responsive" src="{{ url('img/client/observation.png') }}">
						</div>
						<p class="heading">Observation</p>
					</a>
				</div>

				<div class="clearfix"></div>
			</div>

			<div class="bottom-container">

				<div class="col-xs-4 items">
					<a href="javascript:void(0);">
						<div class="img-con">
							<img class="img-responsive" src="{{ url('img/client/emergency.png') }}">
						</div>
						<p class="heading">Emergency<br/>Info</p>
					</a>
				</div>

				<div class="col-xs-4 items">
					<a href="javascript:void(0);">
						<div class="img-con">
							<img class="img-responsive" src="{{ url('img/client/alerts.png') }}">
						</div>
						<p class="heading">Alerts</p>
					</a>
				</div>

				<div class="col-xs-4 items">
					<a href="javascript:void(0);">
						<div class="img-con">
							<img class="img-responsive" src="{{ url('img/client/resources.png') }}">
						</div>
						<p class="heading">Resources</p>
					</a>
				</div>

				<div class="clearfix"></div>				
			</div>

			<div class="col-md-12 bottom-logo">
				<img class="img-responsive" src="{{ url('img/client/helix-logo.png') }}" alt="{{ env('APP_NAME') }}" title="{{ env('APP_NAME') }}"/>
			</div>

		</div>
	</div>

	<div class="clearfix"></div>
	

@endsection