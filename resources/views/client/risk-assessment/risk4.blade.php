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
                  <p><span class="fs-13">Current controls are inadequate if not present when SDS required them or if not funstioning well. Consider each control does the SDS recommend it and is it present?</span></p>

                  <table class="table">
                     <thead>
                        <tr>
                           <th>Adequate Controls</th>
                           <th class="txt-align-c">Yes/No</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>Isolation</td>
                           <td align="center">
                              <div class="input-checkbox">
                                 <label>
                                    <input class="form-control" type="checkbox" name="isolation">
                                    <span></span>
                                 </label>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>Local Extraction/Ventilation</td>
                           <td align="center">
                              <div class="input-checkbox">
                                 <label>
                                    <input class="form-control" type="checkbox" name="local_extraction">
                                    <span></span>
                                 </label>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>General ventilation</td>
                           <td align="center">
                              <div class="input-checkbox">
                                 <label>
                                    <input class="form-control" type="checkbox" name="general_ventilation">
                                    <span></span>
                                 </label>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>Natural ventilation</td>
                           <td align="center">
                              <div class="input-checkbox">
                                 <label>
                                    <input class="form-control" type="checkbox" name="eyes">
                                    <span></span>
                                 </label>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>Other engineering controls</td>
                           <td align="center">
                              <div class="input-checkbox">
                                 <label>
                                    <input class="form-control" type="checkbox" name="eyes">
                                    <span></span>
                                 </label>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>Safe work method</td>
                           <td align="center">
                              <div class="input-checkbox">
                                 <label>
                                    <input class="form-control" type="checkbox" name="eyes">
                                    <span></span>
                                 </label>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>Reduce quantity and or concentration</td>
                           <td align="center">
                              <div class="input-checkbox">
                                 <label>
                                    <input class="form-control" type="checkbox" name="eyes">
                                    <span></span>
                                 </label>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>Information (at least MSDS and Label)</td>
                           <td align="center">
                              <div class="input-checkbox">
                                 <label>
                                    <input class="form-control" type="checkbox" name="eyes">
                                    <span></span>
                                 </label>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>Ongoing training (hazards, safe uses, PPE, health surveillance)</td>
                           <td align="center">
                              <div class="input-checkbox">
                                 <label>
                                    <input class="form-control" type="checkbox" name="eyes">
                                    <span></span>
                                 </label>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>Reduce quantity and or concentration</td>
                           <td align="center">
                              <div class="input-checkbox">
                                 <label>
                                    <input class="form-control" type="checkbox" name="eyes">
                                    <span></span>
                                 </label>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>Personal protective equipment</td>
                           <td align="center">
                              <div class="input-checkbox">
                                 <label>
                                    <input class="form-control" type="checkbox" name="eyes">
                                    <span></span>
                                 </label>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>First aid supplier/equipment</td>
                           <td align="center">
                              <div class="input-checkbox">
                                 <label>
                                    <input class="form-control" type="checkbox" name="eyes">
                                    <span></span>
                                 </label>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>Evacuation or emergency plan and required emergency equipment</td>
                           <td align="center">
                              <div class="input-checkbox">
                                 <label>
                                    <input class="form-control" type="checkbox" name="eyes">
                                    <span></span>
                                 </label>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>

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