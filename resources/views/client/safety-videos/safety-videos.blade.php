@extends('layout.client')

@section('title', 'Safety Videos')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">
				<div class="type">
					<div class="col-md-12">
						<p><span class="list-view current">LIST</span> | <span class="grid-view">GRID</span></p>
					</div>
				</div>

				<div class="videos-container col-md-12">

					@for ($i = 0; $i < 10; $i++)
					<div class="col-md-12 col-sm-12 videos-con list-item">
						<div class="row">
							<div class="videos">
								<div class="video-con col-sm-5 col-xs-6">
									<div class="row">
										<img class="img-responsive" src="{{ url('img/client/video.png') }}">
									</div>
								</div>
								<div class="content col-sm-7 col-xs-6">
									<p class="title">Video Title 01</p>
									<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat vitae magna quis laoreet. Integer sit amet nibh risus. Curabitur ultrices porttitor magna non dignissim.</p>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
					</div>
					@endfor

				<div class="clearfix"></div>
				</div>

			</div>

			<!--
			<div class="col-md-12 bottom-logo">
				<img class="img-responsive" src="{{ url('img/client/helix-logo.png') }}" alt="{{ env('APP_NAME') }}" title="{{ env('APP_NAME') }}"/>
			</div>
			-->

		</div>
	</div>

	<div class="clearfix"></div>
	
<script type="text/javascript">
(function( $ ) {
    $(document).ready(function() {
	    $('.list-view').on('click', function(){
	    	$('.grid-view').removeClass('current');
	    	$(this).addClass('current');
	    	$('.videos-con').removeClass('grid-item');
	    	$('.videos-con').addClass('list-item');
	    });

	    $('.grid-view').on('click', function(){
	    	$('.list-view').removeClass('current');
	    	$(this).addClass('current');
	    	$('.videos-con').removeClass('list-item');
	    	$('.videos-con').addClass('grid-item');
	    });

	    var m736 = window.matchMedia( "(max-width: 736px)" ),
	    	m414 = window.matchMedia( "(max-width: 414px)" ),
	    	m375 = window.matchMedia( "(max-width: 375px)" ),
	    	m320 = window.matchMedia( "(max-width: 320px)" );

	    if (m736.matches) {
	    	$('p.description').text();
	    }

	    if (m414.matches) {
	    	var text_slice = $('p.description').text().slice(0, 50);
	    	$('p.description').text(text_slice);
	    }

	    if (m375.matches) {
	    	var text_slice = $('p.description').text().slice(0, 40);
	    	$('p.description').text(text_slice);
	    }

	    if (m320.matches) {
	    	var text_slice = $('p.description').text().slice(0, 15);
	    	$('p.description').text(text_slice);
	    }

	});

	$(window).resize(function() {
		var m736 = window.matchMedia( "(max-width: 736px)" ),
	    	m414 = window.matchMedia( "(max-width: 414px)" ),
	    	m375 = window.matchMedia( "(max-width: 375px)" ),
	    	m320 = window.matchMedia( "(max-width: 320px)" );

	    if (m736.matches) {
	    	$('p.description').text();
	    }

	    if (m414.matches) {
	    	var text_slice = $('p.description').text().slice(0, 50);
	    	$('p.description').text(text_slice);
	    }

	    if (m375.matches) {
	    	var text_slice = $('p.description').text().slice(0, 40);
	    	$('p.description').text(text_slice);
	    }

	    if (m320.matches) {
	    	var text_slice = $('p.description').text().slice(0, 15);
	    	$('p.description').text(text_slice);
	    }
	});

})( jQuery );
</script>
@endsection