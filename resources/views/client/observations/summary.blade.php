@extends('layout.client')

@section('title', 'Safety Videos')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">

				<div class="observations-content col-md-12">
					<h4>SAFETY HAZARD OBSERVATION SUMMARY</h4>
					<div class="body">

						<div class="summary">

							<div class="col-md-12 summary-items">
								<div class="col-sm-5 col-xs-12 no-padding-l">
									<p>What did you do about this?</p>
								</div>
								<div class="col-sm-7 col-xs-12 no-padding-r">
									<p>Trip Hazard</p>
								</div>

								<div class="col-sm-5 col-xs-12 no-padding-l">
									<p>Initial Photo:</p>
								</div>
								<div class="col-sm-7 col-xs-12 no-padding-r">
									<img class="img-responsive" src="{{ url('img/client/loader.png') }}">
								</div>
								<div class="clearfix"></div>
							</div>

							<div class="col-md-12 summary-items">
								<div class="col-sm-5 no-padding-l">
									<p><strong>Category:</strong></p>
								</div>
								<div class="col-sm-7 no-padding-r">
									<p><strong>Plant &amp; Equipement</strong></p>
								</div>

								<div class="col-sm-5 no-padding-l">
									<p>What did you do:</p>
								</div>
								<div class="col-sm-7 no-padding-r">
									<p>Move the trip hazard</p>
								</div>

								<div class="col-sm-5 no-padding-l">
									<p>Further action are required:</p>
								</div>
								<div class="col-sm-7 no-padding-r">
									<p>Signage is required</p>
								</div>

								<div class="col-sm-5 no-padding-l">
									<p>Post Action Photo:</p>
								</div>
								<div class="col-sm-7 no-padding-r">
									<img class="img-responsive" src="{{ url('img/client/machines.png') }}">
								</div>
								<div class="clearfix"></div>
							</div>

							<div class="col-md-12 summary-items">
								<div class="col-sm-5 no-padding-l">
									<p>Location:</p>
								</div>
								<div class="col-sm-7 no-padding-r">
									<p>Station Street Yard</p>
								</div>

								<div class="col-sm-5 no-padding-l">
									<p>GPS Details:</p>
								</div>
								<div class="col-sm-7 no-padding-r">
									<img class="img-responsive" src="{{ url('img/client/gps-loc.png') }}">
									<p><span>( -38.144416, 145.258772 )</span><br/><span>3 Sandstone Drive, Botanic Ridge</span></p>
								</div>
								<div class="clearfix"></div>
							</div>

							<div class="clearfix"></div>
						</div>								
					</div>					

					<div class="clearfix"></div>
				</div>

				<div class="col-md-12 bottom-logo">
					<img class="img-responsive" src="{{ url('img/client/helix-logo.png') }}" alt="{{ env('APP_NAME') }}" title="{{ env('APP_NAME') }}"/>
				</div>

			</div>

		</div>
	</div>

	<div class="clearfix"></div>
	
<script type="text/javascript">
(function( $ ) {
    $(document).ready(function() {
	});
})( jQuery );
</script>
@endsection