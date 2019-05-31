@extends('layout.client')

@section('title', 'Safety Videos')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">
				<span class="back"><img class="img-responsive" src="{{ url('img/client/arrow-back.png') }}"> <label>Back</label></span>
				<span class="continue">Next</span>

				<div class="sub-head">
					<div class="col-md-12">
						<p>Outstanding Inspection Tasks</p>
					</div>
				</div>

				<div class="inspections-content col-md-12">
					<h4>Site Inspection <span class="counter">1/13</span></h4>
					<div class="body">
						<form>

							<div class="col-md-12">
								<div class="row">
									<p class="margin-b">Does the site require traffic management?</p>
									<div class="radio-group">
										<input type="radio" class="form-control" name="traffic_management" value="Compliant" >
										<label class="btn btn-primary">Compliant</label>
									</div>

									<div class="radio-group">
										<input type="radio" class="form-control" name="traffic_management" value="Non-Compliant" >
										<label class="btn btn-primary">Non-Compliant</label>
									</div>

									<div class="radio-group not-applicable">
										<input type="radio" class="form-control" name="traffic_management" value="N/A" >
										<label class="btn btn-primary">N/A</label>
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<textarea class="form-control" name="describe" rows="5" placeholder="Describe what you saw..."></textarea>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<textarea class="form-control" name="action_required" rows="4" placeholder="Action required..."></textarea>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 col-sm-2 hidden-xs no-padding-l">
										<p>Assign Action</p>
									</div>
									<div class="col-md-9 col-sm-10 col-xs-12 no-padding-r input-dt">
										<input class="form-control" name="assign_action" placeholder="Assign Action">
									</div>								
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 col-sm-2 hidden-xs no-padding-l">
										<p>Action Due</p>
									</div>
									<div class="col-md-9 col-sm-10 col-xs-12 no-padding-r input-dt">
										<input class="form-control action_due" name="action_due" placeholder="Action Due">
										<span class="calendar-icon"><img src="{{ url('img/client/calendar-icon.png') }}"></span>
									</div>								
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="file-con">
										<input type="file" class="form-control" name="file">
										<label class="lbl-file" for="file"><img src="{{ url('img/client/upload-img.png') }}"></label>
									</div>									
								</div>
							</div>

							<div class="clearfix"></div>
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
    	$('.lbl-file').on('click', function(){
    		$('.file-con input').click();
    	});
    	$( ".action_due" ).datepicker();
	});
})( jQuery );
</script>
@endsection