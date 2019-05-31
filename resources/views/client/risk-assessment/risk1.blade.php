@extends('layout.client')

@section('title', 'Chemical Management')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">
				<span class="back"><img class="img-responsive" src="{{ url('img/client/arrow-back.png') }}"> <label>Back</label></span>
				<span class="continue">CONTINUE</span>

				<div class="body-container risk-assessment col-md-12">

					<h4>CHEMICAL RISK ASSESSMENT</h4>
					<div class="body padding-10">
                     <div class="col-md-12">
                        <div class="col-md-3 col-sm-3 no-padding-l display-none">
                           <p>Substance</p>
                        </div>
                        <div class="col-md-9 col-sm-9 col-xs-12 no-padding-r">
                           <select class="form-control" name="substance" placeholder="Substance" >
                              <option value="">Option 1</option>
                              <option value="">Option 2</option>
                           </select>
                        </div>
                        <div class="clearfix"></div>
                     </div>
                     <div class="clearfix"></div>

                     <div class="content padding-top-20 border-top">

                        <div class="col-md-12">
                           <div class="col-md-4 col-sm-4 col-xs-12 no-padding-l">
                              <p>How is it used?</p>
                           </div>
                           <div class="col-md-8 col-sm-8 col-xs-12 no-padding-r">
                              <input class="form-control" type="text" name="how_used">
                           </div>
                           <div class="clearfix"></div>                        
                        </div>

                        <div class="col-md-12">
                           <div class="col-md-4 col-sm-4 col-xs-12 no-padding-l">
                              <p>Where is it used?</p>
                           </div>
                           <div class="col-md-8 col-sm-8 col-xs-12 no-padding-r">
                              <input class="form-control" type="text" name="where_used">
                           </div>
                           <div class="clearfix"></div>                        
                        </div>

                        <div class="col-md-12">
                           <div class="col-md-4 col-sm-4 col-xs-12 no-padding-l">
                              <p>Quantities used?</p>
                           </div>
                           <div class="col-md-8 col-sm-8 col-xs-12 no-padding-r">
                              <input class="form-control" type="text" name="quantities_used">
                           </div>
                           <div class="clearfix"></div>                          
                        </div>

                        <div class="col-md-12">
                           <div class="col-md-4 col-sm-4 col-xs-12 no-padding-l">
                              <p>Frequency/Duration used?</p>
                           </div>
                           <div class="col-md-8 col-sm-8 col-xs-12 no-padding-r">
                              <input class="form-control" type="text" name="frequency_used">
                           </div>
                           <div class="clearfix"></div>                          
                        </div>

                        <div class="col-md-12">
                           <div class="col-md-4 col-sm-4 col-xs-12 no-padding-l">
                              <p>Who is it used by?</p>
                           </div>
                           <div class="col-md-8 col-sm-8 col-xs-12 no-padding-r">
                              <input class="form-control" type="text" name="used_by">
                           </div> 
                           <div class="clearfix"></div>                         
                        </div>

                        <div class="clearfix"></div>
                     </div>

						<div class="clearfix"></div>
               </div>

				   <div class="clearfix"></div>
				</div>

			</div>

		</div>
	</div>

	<div class="clearfix"></div>
   <div class="col-md-12 bottom-logo">
       <img class="img-responsive" src="{{ url('/img/client/helix-logo.png') }}" alt="{{ env('APP_NAME') }}" title="{{ env('APP_NAME') }}"/>
   </div>
@endsection