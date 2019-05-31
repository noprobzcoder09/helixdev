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
               <div class="info">
                  <div class="extreme padding-10-15">
                     <span class="fc-white">Risk Matrix Level: EXTREME</span>
                  </div>
               </div>
					<div class="body padding-15-all">
                  <div class="content">

                     <div class="col-md-12 col-sm-12">
                        <div class="row">
                           <p><span class="fs-13">High Risk (INTOLERABLE, significant and urgent actions required) <br/>Corrective actions taken if needed (please state below)</span></p>
                           <textarea class="form-control" rows="6" name="high_risk" style="resize: none;"></textarea>
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