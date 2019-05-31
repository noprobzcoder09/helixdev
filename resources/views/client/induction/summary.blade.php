@extends('layout.client')

@section('title', 'Safety Videos')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">
				<span class="continue">Done</span>

				<div class="summary-container col-md-12">
					<div class="summary-content">
						<div class="summary-con">
							<div class="top-content">
								<img class="img-responsive" src="{{ url('img/client/company-logo.png') }}">
								<h4>CERTIFICATE</h4>
								<p>OF COMPLETION OF AN INDUCTION VIDEO</p>
							</div>
							<div class="middle-content">
								<p>This Certificate is awarded to</p>
								<h4>First and Last Name</h4>
								<p>For completing the "Title of the Video here" on January 1, 2017.</p>
							</div>
							
							<a href="javascript:void(0)">Download Your Certificate</a>

						</div>
					</div>
				<div class="clearfix"></div>
				</div>

			</div>			

		</div>
	</div>

	<div class="clearfix"></div>
	
<script type="text/javascript">
(function( $ ) {
})( jQuery );
</script>
@endsection