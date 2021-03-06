@extends('layout.client')

@section('title', 'Safety Videos')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">

				<div class="inspections-content col-md-12">
					<h4>What did you see?</h4>
					<div class="body">
						<form>

							<div class="col-md-12">
								<div class="row">
									<div class="file-con">
										<input type="file" class="form-control" name="file">
										<label class="lbl-file" for="file"><img src="{{ url('img/client/upload-img.png') }}"></label>
									</div>									
								</div>
							</div>

							<div class="col-md-12 margin-t">
								<div class="row">
									<textarea class="form-control" name="description" rows="5" placeholder="Describe what you saw..."></textarea>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="alert alert-warning tip-box" role="alert">Tip: It is always best to do this when submittings on Observation as it will help to do the following.</div>
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