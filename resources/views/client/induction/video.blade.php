@extends('layout.client')

@section('title', 'Safety Videos')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">
				<span class="back"><img class="img-responsive" src="{{ url('img/client/arrow-back.png') }}"> <label>Back</label></span>
				<span class="continue">Continue</span>
				
				<div class="videos-container col-md-12">
					<div class="video-title">
						<h4>Title Of The Video Here</h4>
					</div>
					<div class="video-player">
						<iframe width="100%" height="497" src="https://www.youtube.com/embed/3JluqTojuME" frameborder="0" allowfullscreen></iframe>
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