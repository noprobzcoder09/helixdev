@extends('layout.client')

@section('title', 'Safety Videos')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">
				<span class="back"><img class="img-responsive" src="{{ url('img/client/arrow-back.png') }}"> <label>Back</label></span>
				<span class="continue"><label class="ms-view">Start Inspection</label><label class="sm-view">Start</label></span>

				<div class="sub-head">
					<div class="col-md-12">
						<p>Outstanding Inspection Tasks</p>
					</div>
				</div>

				<div class="inspections-content col-md-12">
					<h4>Safety/OHS Inspections</h4>
					<div class="body">
						<form>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 col-sm-3 col-xm-12 no-padding-l">
										<p>Site/Location</p>
									</div>
									<div class="col-md-9 col-sm-9 col-xm-12 no-padding-r">
										<input class="form-control" name="site_location" placeholder="Site/Location">
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 col-sm-3 col-xm-12 no-padding-l">
										<p>Supervisor</p>
									</div>
									<div class="col-md-9 col-sm-9 col-xm-12 no-padding-r">
										<input class="form-control" name="supervisor" placeholder="Supervisor">
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 col-sm-3 col-xm-12 no-padding-l">
										<p>Crew/Group</p>
									</div>
									<div class="col-md-9 col-sm-9 col-xm-12 no-padding-r">
										<textarea class="form-control" name="crew_group" rows="5" placeholder="Crew/Group"></textarea>
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 col-sm-3 col-xm-12 no-padding-l"></div>
									<div class="col-md-9 col-sm-9 col-xm-12 no-padding-r">
										<button class="btn btn-gps">Add GPS Location Details</button>
										<p class="location">Lat/Long: (-38.144416, 145.258772)</p>
										<p class="location">Address: 3 Sandstone Drive, Botanic Ridge</p>
									</div>
								</div>
							</div>

						</form>
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