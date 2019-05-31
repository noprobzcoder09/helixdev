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
                  <p>Adequacy of Currency Controls</p>

                  <div class="content">

                     <div class="col-md-12 col-sm-12">
                        <div class="row">
                           <p><span class="fs-13">Is action required to reduce risk? <br/>List changes needed, by when and by whom</span></p>
                           <textarea class="form-control" rows="5" style="resize: none;"></textarea>
                        </div>
                     </div>

                     <div class="col-md-12 col-sm-12">
                        <div class="row">
                           <div class="inline-block">
                              <span class="fs-13">Is further action required?</span>
                              <div class="input-checkbox">
                                 <label>
                                    <input class="form-control" type="checkbox" name="action_required">
                                    <span></span>
                                 </label>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="col-md-12">
                        <div class="row">

                           <div class="col-md-12">
                              <div class="row">
                                 <div class="col-md-6 col-sm-6 col-xs-6 no-padding-l">
                                    <p>Risk Matrix</p>
                                 </div>
                                 <div class="col-md-6 col-sm-6 col-xs-6 no-padding-r">
                                    <p class="text-right">Yes/No</p>
                                 </div>
                              </div>
                           </div>

                           <div class="col-md-12 with-border padding-15-all">
                              
                              <div class="col-md-12">
                                 <div class="row">
                                    <div class="col-md-6 col-sm-6 col-xs-12 no-padding-l">
                                       <p>Likehood of Occuring?</p>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12 no-padding-r">
                                       <select name="likehood">
                                          <option value="Expected to Occur - Once per week">Expected to Occur - Once per week</option>
                                          <option value="Common - Once per month">Common - Once per month</option>
                                          <option value="Sometimes - Once per year">Sometimes - Once per year</option>
                                          <option value="Rarely - Once in the last 20 years">Rarely - Once in the last 20 years</option>
                                          <option value="Highly Unlikely - Once in more than 20 years">Highly Unlikely - Once in more than 20 years</option>
                                       </select>
                                    </div>
                                 </div>
                              </div>

                              <div class="col-md-12">
                                 <div class="row">
                                    <div class="col-md-6 col-sm-6 col-xs-12 no-padding-l">
                                       <p>Hazard Risk Assessment (Safety &amp; Enviro)</p>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12 no-padding-r">
                                       <select name="hazard">
                                          <option value="Fatality / Permanent Damage">Fatality / Permanent Damage</option>
                                          <option value="Permanent Injury / Long Term Effect and Large Area">Permanent Injury / Long Term Effect and Large Area</option>
                                          <option value="Lost Time Injury / Long Term Effect and Small Area">Lost Time Injury / Long Term Effect and Small Area</option>
                                          <option value="Medical Treatment / Short Term Effect and Large Area">Medical Treatment / Short Term Effect and Large Area</option>
                                          <option value="First Aid Injury / Short Term Effect and Small Area">First Aid Injury / Short Term Effect and Small Area</option>
                                       </select>
                                    </div>
                                 </div>
                              </div>

                           </div>

                        </div>
                     </div>
                     <div class="clearfix"></div>
                  </div>

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