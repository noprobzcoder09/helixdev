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

               <div class="content">

                  <table class="table header">
                     <thead>
                        <tr>
                           <th>SUBSTANCE</th>
                           <th>DIESEL</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td><strong>PHOTO</strong></td>
                           <td>
                              <div class="img-con">
                                 <img width="40%" class="img-responsive" src="{{ url('img/ohs/risk-assessment/diesel.png') }}">
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td><strong>MSDS</strong></td>
                           <td><button class="btn btn-primary"><img class="img-responsive" src="{{ url('img/download-icon-blue.png') }}" style="width: 15px;"></button></td>
                        </tr>
                        <tr>
                           <td><strong>Use</strong></td>
                           <td>Fuel tanks on compressors and pumps</td>
                        </tr>
                        <tr>
                           <td><strong>Location</strong></td>
                           <td>Various locations across the project</td>
                        </tr>
                        <tr>
                           <td><strong>Quantity</strong></td>
                           <td>Various from 2-100 lt</td>
                        </tr>
                        <tr>
                           <td><strong>Frequency</strong></td>
                           <td>Variable, dependant upon hydrotest frequesncy</td>
                        </tr>
                        <tr>
                           <td><strong>By</strong></td>
                           <td>Operator for hydro</td>
                        </tr>
                        <tr>
                           <td><strong>Hazard</strong></td>
                           <td>Sensitiser, Carcinogenic, Environmental</td>
                        </tr>
                        <tr>
                           <td><strong>Monitor</strong></td>
                           <td>No</td>
                        </tr>
                        <tr>
                           <td><strong>Conclusion</strong></td>
                           <td>None</td>
                        </tr>
                        <tr>
                           <td><strong>Route</strong></td>
                           <td>Oral</td>
                        </tr>
                        <tr>
                           <td><strong>Adequate Controls</strong></td>
                           <td>Yes</td>
                        </tr>
                        <tr>
                           <td><strong>Additional</strong></td>
                           <td>None</td>
                        </tr>
                        <tr>
                           <td><strong>Risk</strong></td>
                           <td>Life threatening injury or death</td>
                        </tr>
                        <tr>
                           <td><strong>Likelihood</strong></td>
                           <td>Remote but not Impossible</td>
                        </tr>
                        <tr>
                           <td><strong>Matrix</strong></td>
                           <td>Low (1-4)</td>
                        </tr>
                        <tr>
                           <td><strong>Actions</strong></td>
                           <td>None</td>
                        </tr>
                        <tr>
                           <td><strong>Name</strong></td>
                           <td>John Cameron</td>
                        </tr>
                        <tr>
                           <td><strong>Approved</strong></td>
                           <td>Gary Keith</td>
                        </tr>
                        <tr>
                           <td><strong>Project</strong></td>
                           <td>East - West Link</td>
                        </tr>
                        <tr>
                           <td><strong>Date</strong></td>
                           <td>8:41am 16-01-2017</td>
                        </tr>
                     </tbody>
                  </table>

                  <div class="clearfix"></div>
               </div>
				</div>

			</div>

		</div>
	</div>

	<div class="clearfix"></div>
   <div class="col-md-12 bottom-logo">
       <img class="img-responsive" src="{{ url('/img/client/helix-logo.png') }}" alt="{{ env('APP_NAME') }}" title="{{ env('APP_NAME') }}"/>
   </div>
@endsection