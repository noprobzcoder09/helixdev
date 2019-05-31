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
                  <p>Possible Routes of Exposure</p>

                  <div class="input-checkbox">

                     <div class="col-md-6 col-sm-6 no-padding">
                        <label>
                           <input class="form-control" type="checkbox" name="eyes">
                           <span>Eyes</span>
                        </label>
                     </div>

                     <div class="col-md-6 col-sm-6 no-padding">                           
                        <label>
                           <input class="form-control" type="checkbox" name="ingestion">
                           <span>Ingestion</span>
                        </label>
                     </div>

                     <div class="col-md-6 col-sm-6 no-padding">
                        <label>
                           <input class="form-control" type="checkbox" name="skin">
                           <span>Skin</span>
                        </label>
                     </div>

                     <div class="col-md-6 col-sm-6 no-padding">
                        <label>
                           <input class="form-control" type="checkbox" name="absorption">
                           <span>Absorption</span>
                        </label>
                     </div>

                     <div class="col-md-6 col-sm-6 no-padding">
                        <label>
                           <input class="form-control" type="checkbox" name="inhalation">
                           <span>Inhalation</span>
                        </label>
                     </div>

                     <div class="col-md-6 col-sm-6 no-padding">
                        <label>
                           <input class="form-control" type="checkbox" name="injection">
                           <span>Injection</span>
                        </label>
                     </div>

                     <div class="clearfix"></div>
                  </div>

                  <!--  -->
                  <p class="margin-top-10">Monitoring Required</p>
                  <div class="input-checkbox">

                     <div class="col-md-12 col-sm-12 no-padding">
                        <label>
                           <input class="form-control" type="checkbox" name="health_monitoring">
                           <span>Health Monitoring</span>
                        </label>
                     </div>

                     <div class="col-md-12 col-sm-12 no-padding">                           
                        <label>
                           <input class="form-control" type="checkbox" name="air_monitoring">
                           <span>Air Monitoring</span>
                        </label>
                     </div>

                     <div class="clearfix"></div>
                  </div>

                  <!--  -->
                  <p class="margin-top-10">Conclusion</p>
                  <div class="input-checkbox">

                     <div class="col-md-12 col-sm-12 no-padding">
                        <label>
                           <input class="form-control" type="checkbox" name="risk_significant">
                           <span>Risk not significant now and not likely to increase</span>
                        </label>
                     </div>

                     <div class="col-md-12 col-sm-12 no-padding">                           
                        <label>
                           <input class="form-control" type="checkbox" name="risk_significant">
                           <span>Risk not significant but effectively controlled at the moment</span>
                        </label>
                     </div>

                     <div class="col-md-12 col-sm-12 no-padding">                           
                        <label>
                           <input class="form-control" type="checkbox" name="risk_significant">
                           <span>Risk not significant and not adequately controlled at the moment</span>
                        </label>
                     </div>

                     <div class="col-md-12 col-sm-12 no-padding">                           
                        <label>
                           <input class="form-control" type="checkbox" name="risk_significant">
                           <span>Uncertain about risks; more detailed assessment required</span>
                        </label>
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