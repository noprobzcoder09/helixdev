@extends('layout.client')

@section('title', 'Safety Videos')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">

				<div class="alerts-content col-md-12">

					<div class="body">

						<div class="tab-control">
							<div class="desktop-tab">
								<div class="col-md-6 col-sm-6 col-xs-6 no-padding">
									<button type="button" class="btn-tab-desktop btn active btn-company" href="#company" aria-controls="company" role="tab" data-toggle="tab" data-tab="USER ALERTS">Company Alerts</button>
								</div>
								<div class="col-md-6 col-sm-6 col-xs-6 no-padding">
									<button tyle="button" class="btn-tab-desktop btn btn-user" href="#user" aria-controls="user" role="tab" data-toggle="tab" data-tab="USER ALERTS">User Alerts</button>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="mobile-tab">
								<div class="dropdown">
									<button class="btn btn-primary dropdown-toggle dropdown-alerts-toggle" type="button" data-toggle="dropdown">
										<span class="tab-title">Company Alerts</span>
										<span class="indicator"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
									</button>
									<ul class="dropdown-menu">
										<li><a class="btn-tab btn active btn-company" href="#company" aria-controls="company" role="tab" data-toggle="tab" data-tab="COMPANY ALERTS">Company Alerts</a></li>
										<li><a class="btn-tab btn btn-user" href="#user" aria-controls="user" role="tab" data-toggle="tab" data-tab="USER ALERTS">User Alerts</a></li>	
									</ul>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>

						<div class="tab-content">
							<div role="tabpanel" class="tab-pane active in fade" id="company">
								<div class="alert-con">
									
									@for ($i = 1; $i <= 10; $i++)
										<div class="col-md-9 col-sm-9 no-padding">
											<p>Company Alert {{$i}}</p>
										</div>
										<div class="col-md-3 col-sm-3 no-padding">
											<p>08/01/2017</p>
										</div>
										<div class="clearfix"></div>
									@endfor

								</div>
							</div>

							<div role="tabpanel" class="tab-pane" id="user">
								<div class="alert-con">
									
									@for ($i = 1; $i <= 10; $i++)
										<div class="col-md-9 col-sm-9 no-padding">
											<p>User Alert {{$i}}</p>
										</div>
										<div class="col-md-3 col-sm-3 no-padding">
											<p>08/01/2017</p>
										</div>
										<div class="clearfix"></div>
									@endfor

								</div>
							</div>	
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
    	$(document).on('click', '.mobile-tab .btn-tab', function(){
    		$('.mobile-tab .btn-tab').removeClass('active');
    		$('.dropdown-alerts-toggle .tab-title').text( $(this).attr('data-tab') );
    	});
    	$(document).on('click', '.mobile-tab .dropdown-menu li', function(){
    		$('.mobile-tab .dropdown-menu li').removeClass('active');
    		$(this).addClass('active');
    	});
		$(document).on('click', '.btn-tab-desktop', function(){
			var indicator = $(this).attr('aria-controls');
		   $('.btn-tab-desktop').removeClass('active');
		   $(this).addClass('active');
		   $('.dropdown-alerts-toggle .tab-title').text( $(this).attr('data-tab') );
		   $('.dropdown-menu .btn-'+indicator).parent('li').addClass('active');
		});
	});
})( jQuery );
</script>
@endsection