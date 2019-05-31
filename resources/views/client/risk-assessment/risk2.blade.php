@extends('layout.client')

@section('title', 'Chemical Management')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">
				<span class="back"><img class="img-responsive" src="{{ url('img/client/arrow-back.png') }}"> <label>Back</label></span>
				<span class="continue">CONTINUE</span>

				<div class="body-container risk-assessment col-md-12">
               <h5 class="fc-white">CHEMICAL RISK ASSESSMENT</h5>

					<h4>SUBSTANCE: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CASTROL MOTOR OIL</h4>
					<div class="body padding-15-all">
                  <p>Nature of the Hazard</p>

                  <div class="input-checkbox">

                     <div class="col-md-6 col-sm-6 no-padding">
                        <label>
                           <input class="form-control" type="checkbox" name="toxic">
                           <span>Toxic</span>
                        </label>
                     </div>

                     <div class="col-md-6 col-sm-6 no-padding">                           
                        <label>
                           <input class="form-control" type="checkbox" name="toxic">
                           <span>Teratogenic</span>
                        </label>
                     </div>

                     <div class="col-md-6 col-sm-6 no-padding">
                        <label>
                           <input class="form-control" type="checkbox" name="toxic">
                           <span>Harmful</span>
                        </label>
                     </div>

                     <div class="col-md-6 col-sm-6 no-padding">
                        <label>
                           <input class="form-control" type="checkbox" name="toxic">
                           <span>Asphyxiant</span>
                        </label>
                     </div>

                     <div class="col-md-6 col-sm-6 no-padding">
                        <label>
                           <input class="form-control" type="checkbox" name="toxic">
                           <span>Culture Heritage</span>
                        </label>
                     </div>

                     <div class="col-md-6 col-sm-6 no-padding">
                        <label>
                           <input class="form-control" type="checkbox" name="toxic">
                           <span>Flammable</span>
                        </label>
                     </div>

                     <div class="col-md-6 col-sm-6 no-padding">
                        <label>
                           <input class="form-control" type="checkbox" name="toxic">
                           <span>Sensitiser</span>
                        </label>
                     </div>

                     <div class="col-md-6 col-sm-6 no-padding">
                        <label>
                           <input class="form-control" type="checkbox" name="toxic">
                           <span>Explosive</span>
                        </label>
                     </div>

                     <div class="col-md-6 col-sm-6 no-padding">
                        <label>
                           <input class="form-control" type="checkbox" name="toxic">
                           <span>Carcinogenio</span>
                        </label>
                     </div>

                     <div class="col-md-6 col-sm-6 no-padding">
                        <label>
                           <input class="form-control" type="checkbox" name="toxic">
                           <span>Environmental</span>
                        </label>
                     </div>

                     <div class="col-md-6 col-sm-6 no-padding">
                        <label>
                           <input class="form-control" type="checkbox" name="toxic">
                           <span>Mutagenic</span>
                        </label>
                     </div>

                     <div class="col-md-6 col-sm-6 no-padding">
                        <div class="input-text">
                           <div class="col-md-3 col-sm-3 col-xs-3 no-padding">
                              <p>Other</p>
                           </div>
                           <div class="col-md-9 col-sm-9 col-xs-9 no-padding">
                              <input class="form-control" type="text" name="other">
                           </div>
                           <div class="clearfix"></div>
                        </div>                           
                     </div>

                     <div class="clearfix"></div>
                  </div>
               </div>

					<div class="clearfix"></div>
            </div>

				<div class="clearfix"></div>
			</div>
		</div>
	</div>

	<div class="clearfix"></div>
   <div class="col-md-12 bottom-logo">
       <img class="img-responsive" src="{{ url('/img/client/helix-logo.png') }}" alt="{{ env('APP_NAME') }}" title="{{ env('APP_NAME') }}"/>
   </div>
@endsection