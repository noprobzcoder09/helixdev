@extends('layout.client')

@section('title', 'Chemical Management')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">
				<span class="back"><img class="img-responsive" src="{{ url('img/client/arrow-back.png') }}"> <label>Back</label></span>

				<div class="body-container chemical col-md-12">
               <h5 class="fc-white">CHEMICAL MANAGEMENT</h5>

               <div class="title">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                     <div class="row">
                        <h4>LINE MARKING SPRAY</h4>
                     </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-6">
                     <div class="row">
                        <h4 class="txt-align-r"><a class="fc-white" href="javascript:void(0);">VIEW FULL SDS</a></h4>
                     </div>
                  </div>
                  <div class="clearfix"></div>
               </div>

					<div class="body">
             		<table class="table">
                     <tr>
                        <td width="185"><strong>Purpose/Use</strong></td>
                        <td>Marking out construction tasks</td>
                     </tr>
                     <tr>
                        <td><strong>Diesel Fuel</strong></td>
                        <td>
                           <div class="img-con">
                              <img class="img-responsive" src="{{ url('img/client/diesel-fuel.png') }}">
                           </div>
                           <p>Personal Protective Equipment Eyes - Safety Glasses or Chemical Goggles as required under AS/NZS 1337 Clothing - Normal working overall</p>
                        </td>
                     </tr>
                     <tr>
                        <td><strong>First Aid</strong></td>
                        <td>FIRST AID MEASURES Swallowed if swallowed DO NOT induce vomiting occurs lean patient forward or lay them down on their side with</td>
                     </tr>
                     <tr>
                        <td><strong>Health Considerations</strong></td>
                        <td>Acute Health Effects. If the product is handled in accordance with the label and this MSDS, there should be no adverse health effects. Symptoms and</td>
                     </tr>
                     <tr>
                        <td><strong>Storge</strong></td>
                        <td>HANDLING AND STORAGE *Store in a cool dry place away from direct sunlight. NO SMOKING. *Store away from any source of heat, ignition</td>
                     </tr>
                     <tr>
                        <td><strong>Risk Assessment</strong></td>
                        <td>YES <span>&nbsp;</span> <button class="btn btn-primary">OPEN RISK ASSESSMENT</button></td>
                     </tr>
                  </table>

						<div class="clearfix"></div>
               </div>

				<div class="clearfix"></div>
				</div>

			</div>

		</div>
	</div>

	<div class="clearfix"></div>
@endsection