@extends('layout.client')

@section('title', 'Chemical Management')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">
				<span class="back"><img class="img-responsive" src="{{ url('img/client/arrow-back.png') }}"> <label>Back</label></span>
				<span class="continue">ADD</span>

				<div class="body-container chemical col-md-12">

					<h4>MSDS LIBRARY</h4>
               <div class="library">
                  <ul>
                     @for ($i = 1; $i <= 6; $i++)
                        <li>
                           <span class="col-md-8 col-sm-8 col-xs-12 no-padding-l">
                              Line Marking Spray
                           </span>
                           <span class="col-md-4 col-sm-4 col-xs-12 no-padding-r txt-align-r">
                              <button class="btn btn-primary" data-dialog="openDialog">OPEN</button>
                              <button class="btn btn-primary">REMOVE</button>
                           </span>
                           <div class="clearfix"></div>
                        </li>
                     @endfor
                  </ul>
               </div>

						<div class="clearfix"></div>
               </div>

				<div class="clearfix"></div>
				</div>

			</div>

		</div>
	</div>

	<div class="clearfix"></div>

   <div id="openDialog" class="dialog">
  <div class="dialog__overlay"></div>
  <div class="dialog__content">
    <div class="morph-shape">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 560 280" preserveAspectRatio="none">
        <rect x="3" y="3" fill="none" width="556" height="276"></rect>
      </svg>
    </div>
    <div class="dialog-inner">
      <button class="action close-diaglog" data-dialog-close=""><i class="fa fa-times" aria-hidden="true"></i></button>

      <div class="header">
        <h4>ADD CREW/LOCATION</h4>
      </div>
      <div class="body">
         <div class="col-md-12 col-sm-12">
            <div class="row">
               <div class="col-md-6 col-sm-6 no-padding-l">
                  <p>Add Crew/Location</p>
               </div>
               <div class="col-md-6 col-sm-6 no-padding">
                  <input class="form-control" name="crew_location" placeholder="Add Crew/Location">
               </div>
            </div>
         </div>
         <div class="clearfix"></div>
      </div>
      <div class="body border-top">
         <div class="col-md-12 col-sm-12 txt-align-c">
            <div class="row">
               <button class="btn btn-primary btn-half">+ ADD CREW/LOCATION</button>
            </div>
         </div>
         <div class="clearfix"></div>
      </div>
    </div>
  </div>
</div>

<script>
   $( function() {

      var dlgtrigger = document.querySelector( '[data-dialog]' ),
        somedialog = document.getElementById( dlgtrigger.getAttribute( 'data-dialog' ) ),
        dlg = new DialogFx( somedialog );

      dlgtrigger.addEventListener( 'click', dlg.toggle.bind(dlg) );
  } );
</script>
@endsection