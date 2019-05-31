@extends('layout.client')

@section('title', 'Safety Videos')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">
				<span class="back"><img class="img-responsive" src="{{ url('img/client/arrow-back.png') }}"> <label>Back</label></span>

				<div class="sub-head">
					<div class="col-md-12">
						<p>Outstanding Inspection Tasks</p>
					</div>
				</div>

				<div class="inspections-content col-md-12">
					<h4>Site Inspection Summary</h4>
					<div class="body summary">
						<ul>
							<li>Does the site require traffic mangement?<br/>Traffic Management required for Concrete deliveries <span class="check"><i class="fa fa-check" aria-hidden="true"></i></span></li>
							<li>Does the site require traffic mangement?<br/>Traffic Management required for Concrete deliveries <span class="wrong"><i class="fa fa-times" aria-hidden="true"></i></span></li>
							<li>Does the site require traffic mangement?<br/>Traffic Management required for Concrete deliveries <span class="check"><i class="fa fa-check" aria-hidden="true"></i></span></li>
							<li>Does the site require traffic mangement?<br/>Traffic Management required for Concrete deliveries <span class="check"><i class="fa fa-check" aria-hidden="true"></i></span></li>
							<li>Does the site require traffic mangement?<br/>Traffic Management required for Concrete deliveries <span class="check"><i class="fa fa-check" aria-hidden="true"></i></span></li>
							<li>Does the site require traffic mangement?<br/>Traffic Management required for Concrete deliveries <span class="wrong"><i class="fa fa-times" aria-hidden="true"></i></span></li>
							<li>Does the site require traffic mangement?<br/>Traffic Management required for Concrete deliveries <span class="wrong"><i class="fa fa-times" aria-hidden="true"></i></span></li>
							<li>Does the site require traffic mangement?<br/>Traffic Management required for Concrete deliveries <span class="check"><i class="fa fa-check" aria-hidden="true"></i></span></li>
						</ul>
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