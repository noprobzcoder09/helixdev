@extends('layout.client')

@section('title', 'Safety Videos')

@section('content')

	<div class="col-md-12 emergency">
		<div class="row">
			<div class="content-container">

				<div class="emergency-container col-md-12">
					<h4>IN CASE OF EMERGENCY, PLEASE TAP BELOW</h4>
					<div class="hotline">
						<div class="img">
							<img class="img-responsive" src="{{ url('img/client/hotline.png') }}">
							<div class="button-action">
								<button class="btn btn-hotline" role="button">Click Here</button>
							</div>
						</div>
					</div>
					<div class="map">
						<div class="col-sm-7 col-xs-12">
							<div class="visible-xs">
								<img class="img-responsive" src="{{ url('img/client/map.png') }}">
							</div>
						</div>
						<div class="map-details col-sm-5 col-xs-12">
							<p>Tell the Operator</p>
							<p>Address: 3 Sandstone Dr, Botanic Ridge VIC 3977</p>
							<p>GPS Co-ordinate:</br>
								Latitude: -38.1443745</br>
								Longitude: 145.2586735</p>
							<p>Response Required<br/>
								POLICE, FIRE OR<br/>
								AMBULANCE</p>
						</div>
						<div class="clearfix"></div>
					</div>
					<div class="response">
						<h4>EMERGENCY RESPONSE COORDINATORS</h4>
						<div class="coordinators">
							<table>
								<tr>
									<td>Simon Jim</td>
									<td>OHS Manager</td>
									<td>0412 345 678</td>
								</tr>
								<tr>
									<td>John Doe</td>
									<td>Project Manager</td>
									<td>0412 345 678</td>
								</tr>
								<tr>
									<td>Simon Says</td>
									<td>OHS Manager</td>
									<td>0412 345 678</td>
								</tr>
							</table>
						</div>
					</div>

					<div class="response">
						<h4>EMERGENCY RESPONSE COORDINATORS</h4>
						<div class="environmental">
							<table>
								<tr>
									<td>Simon Jim</td>
									<td>OHS Manager</td>
									<td>0412 345 678</td>
								</tr>
								<tr>
									<td>John Doe</td>
									<td>Project Manager</td>
									<td>0412 345 678</td>
								</tr>
								<tr>
									<td>Simon Says</td>
									<td>OHS Manager</td>
									<td>0412 345 678</td>
								</tr>
							</table>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>

			</div>

			
			<div class="col-md-12 bottom-logo">
				<img class="img-responsive" src="{{ url('img/client/helix-logo.png') }}" alt="{{ env('APP_NAME') }}" title="{{ env('APP_NAME') }}"/>
			</div>
			

		</div>
	</div>

	<div class="clearfix"></div>
	
<script type="text/javascript">
(function( $ ) {
})( jQuery );
</script>
@endsection