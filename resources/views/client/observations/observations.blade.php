@extends('layout.client')

@section('title', 'Safety Videos')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">

				<div class="observations-content col-md-12">

					<div class="col-md-12">
						<div class="row">
							<img class="img-responsive" src="{{ url('img/client/car-icon.png') }}">
						</div>
					</div>

					<div class="body">
						<form>

							<div class="input-con">
								<h4>Observation Category</h4>

								<div class="input-body">
									<div class="col-md-12">
										<div class="row">
											<div class="col-md-3 col-sm-3 col-xs-6 padding-half">
												<button type="button" class="btn-category btn active" href="#safety" aria-controls="safety" role="tab" data-toggle="tab">Safety</button>
											</div>
											<div class="col-md-3 col-sm-3 col-xs-6 padding-half">
												<button tyle="button" class="btn-category btn" href="#environment" aria-controls="environment" role="tab" data-toggle="tab">Environment</button>
											</div>
											<div class="col-md-3 col-sm-3 col-xs-6 padding-half">
												<button tyle="button" class="btn-category btn" href="#quality" aria-controls="quality" role="tab" data-toggle="tab">Quality</button>
											</div>
											<div class="col-md-3 col-sm-3 col-xs-6 padding-half">
												<button tyle="button" class="btn-category btn" href="#public" aria-controls="public" role="tab" data-toggle="tab">Public</button>
											</div>

											<div class="clearfix"></div>
										</div>
									</div>

									<div class="clearfix"></div>
								</div>

								<div class="tab-content">
									<div role="tabpanel" class="tab-pane active in fade" id="safety">
										<div class="input-con">
											<h4>Observation Type</h4>

											<div class="input-body observe-type">
												<div class="col-md-6 col-sm-6 col-xs-6 padding-half">
													<label>
														<input type="radio" name="observation_type" value="Hazard">
														<span>Hazard</span>
													</label>
												</div>
												<div class="col-md-6 col-sm-6 col-xs-6 padding-half">
													<label>
														<input type="radio" name="observation_type" value="Positive">
														<span>Positive</span>
													</label>
												</div>
												<div class="clearfix"></div>
											</div>
										</div>

										<div class="input-con">
											<h4>Observation Sub-Category</h4>

											<div class="input-body input-checkbox">
												<label>
													<input type="checkbox" name="sub_category" value="PPE">
													<span>PPE</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Traffic">
													<span>Traffic</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Chemical">
													<span>Chemical</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Lifting">
													<span>Lifting</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Risk Assessment">
													<span>Risk Assessment</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Competency">
													<span>Competency</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="House Keeping">
													<span>House Keeping</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Plant">
													<span>Plant</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="PTW">
													<span>PTW</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Excavation">
													<span>Excavation</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Exclusive/Signage">
													<span>Exclusive/Signage</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Other">
													<span>Other</span>
												</label>
												<div class="clearfix"></div>
											</div>
										</div>

										<div class="input-con">
											<h4>Observation Location</h4>
											<div class="input-body">
												<div class="col-sm-2">
													<p class="description">Description</p>
												</div>
												<div class="col-sm-5">
													<input type="text" name="description" placeholder="Description">
												</div>
												<div class="col-sm-5">
													<button class="btn btn-gps">Add GPS Location</button>
												</div>

												<div class="clearfix"></div>
											</div>
										</div>
									</div>

									<div role="tabpanel" class="tab-pane fade" id="environment">
										<div class="input-con">
											<h4>Observation Type</h4>

											<div class="input-body observe-type">
												<div class="col-md-6 col-sm-6 padding-half">
													<label>
														<input type="radio" name="observation_type" value="Hazard">
														<span>Hazard</span>
													</label>
												</div>
												<div class="col-md-6 col-sm-6 padding-half">
													<label>
														<input type="radio" name="observation_type" value="Positive">
														<span>Positive</span>
													</label>
												</div>
												<div class="clearfix"></div>
											</div>
										</div>

										<div class="input-con">
											<h4>Observation Sub-Category</h4>

											<div class="input-body input-checkbox">
												<label>
													<input type="checkbox" name="sub_category" value="Spill">
													<span>Spill</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Fauna">
													<span>Fauna</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Flora">
													<span>Flora</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Land Owner">
													<span>Land Owner</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Noise">
													<span>Noise</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Dust">
													<span>Dust</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Culture Heritage">
													<span>Culture Heritage</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Weed/Seed">
													<span>Weed/Seed</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Pollution">
													<span>Pollution</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Waste Disposal">
													<span>Waste Disposal</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Sediment Control">
													<span>Sediment Control</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Other">
													<span>Other</span>
												</label>
												<div class="clearfix"></div>
											</div>
										</div>

										<div class="input-con">
											<h4>Observation Location</h4>
											<div class="input-body">
												<div class="col-sm-2">
													<p class="description">Description</p>
												</div>
												<div class="col-sm-5">
													<input type="text" name="description" placeholder="Description">
												</div>
												<div class="col-sm-5">
													<button class="btn btn-gps">Add GPS Location</button>
												</div>

												<div class="clearfix"></div>
											</div>
										</div>
									</div>

									<div role="tabpanel" class="tab-pane fade" id="quality">
										<div class="input-con">
											<h4>Observation Type</h4>

											<div class="input-body observe-type">
												<div class="col-md-6 col-sm-6 padding-half">
													<label>
														<input type="radio" name="observation_type" value="Hazard">
														<span>Hazard</span>
													</label>
												</div>
												<div class="col-md-6 col-sm-6 padding-half">
													<label>
														<input type="radio" name="observation_type" value="Positive">
														<span>Positive</span>
													</label>
												</div>
												<div class="clearfix"></div>
											</div>
										</div>

										<div class="input-con">
											<h4>Observation Sub-Category</h4>

											<div class="input-body input-checkbox">
												<label>
													<input type="checkbox" name="sub_category" value="Mechanical">
													<span>Mechanical</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Product">
													<span>Product</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Workmanship">
													<span>Workmanship</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Procedure">
													<span>Procedure</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="House Keeping">
													<span>House Keeping</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Other">
													<span>Other</span>
												</label>
												<div class="clearfix"></div>
											</div>
										</div>

										<div class="input-con">
											<h4>Observation Location</h4>
											<div class="input-body">
												<div class="col-sm-2">
													<p class="description">Description</p>
												</div>
												<div class="col-sm-5">
													<input type="text" name="description" placeholder="Description">
												</div>
												<div class="col-sm-5">
													<button class="btn btn-gps">Add GPS Location</button>
												</div>

												<div class="clearfix"></div>
											</div>
										</div>
									</div>

									<div role="tabpanel" class="tab-pane fade" id="public">
										<div class="input-con">
											<h4>Observation Type</h4>

											<div class="input-body observe-type">
												<div class="col-md-6 col-sm-6 padding-half">
													<label>
														<input type="radio" name="observation_type" value="Hazard">
														<span>Hazard</span>
													</label>
												</div>
												<div class="col-md-6 col-sm-6 padding-half">
													<label>
														<input type="radio" name="observation_type" value="Positive">
														<span>Positive</span>
													</label>
												</div>
												<div class="clearfix"></div>
											</div>
										</div>

										<div class="input-con">
											<h4>Observation Sub-Category</h4>

											<div class="input-body input-checkbox">
												<label>
													<input type="checkbox" name="sub_category" value="Security">
													<span>Security</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Unauthorised Entry">
													<span>Unauthorised Entry</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Feedback/Complaint">
													<span>Feedback/Complaint</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Access">
													<span>Access</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Traffic Control">
													<span>Traffic Control</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="3rd Parties">
													<span>3rd Parties</span>
												</label>
												<label>
													<input type="checkbox" name="sub_category" value="Other">
													<span>Other</span>
												</label>
												<div class="clearfix"></div>
											</div>
										</div>

										<div class="input-con">
											<h4>Observation Location</h4>
											<div class="input-body">
												<div class="col-sm-2">
													<p class="description">Description</p>
												</div>
												<div class="col-sm-5">
													<input type="text" name="description" placeholder="Description">
												</div>
												<div class="col-sm-5">
													<button class="btn btn-gps">Add GPS Location</button>
												</div>

												<div class="clearfix"></div>
											</div>
										</div>
									</div>
								</div>


							</div>						

							<div class="clearfix"></div>
						</form>
					</div>					

					<div class="clearfix"></div>
				</div>

				<div class="col-md-12 bottom-logo">
					<img class="img-responsive" src="{{ url('img/client/helix-logo.png') }}" alt="{{ env('APP_NAME') }}" title="{{ env('APP_NAME') }}"/>
				</div>

			</div>

		</div>
	</div>

	<div class="clearfix"></div>
	
<script type="text/javascript">
(function( $ ) {
    $(document).ready(function() {
    	$('.lbl-file').on('click', function(){
    		$('.file-con input').click();
    	});
    	$( ".action_due" ).datepicker();
	});
})( jQuery );
</script>
@endsection