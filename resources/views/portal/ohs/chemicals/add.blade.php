@extends('layout.portal')

@section('title', 'Client')

@section('content') 

	<div class="col-md-12 no-padding chemicals add">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-8 col-sm-6 col-xs-6">
					<div class="row">
						<h4 class="breadcrumbs">OHS &gt; CHEMICAL MANAGEMENT</h4>
					</div>
				</div>
				<div class="col-md-4 pull-right">
					<div class="row btn-action">
                    <button type="button" role="btn" class="btn btn-primary pull-right top-page-btn">+ ADD</button>
                </div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content">
				<div class="row">
					<h5 class="fc-white">CHEMICAL MANAGEMENT</h5>
	
					<h4>ADD NEW</h4>
					
					<div class="body">
						<form>
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 no-padding-l">
										<p>SUBSTANCE</p>
									</div>
									<div class="col-md-9 no-padding-r">
										<input class="form-control" type="text" name="substance">
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 no-padding-l">
										<p>Type</p>
									</div>
									<div class="col-md-9 no-padding-r">
										<input class="form-control" type="text" name="type">
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 no-padding-l">
										<p>Issue Date</p>
									</div>
									<div class="col-md-9 no-padding-r input-dt">
										<input class="form-control .issue_date" type="text" name="issue_date">
										<span class="calendar-icon"><img src="{{ url('img/client/calendar-icon.png') }}"></span>
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 no-padding-l">
										<p>Company</p>
									</div>
									<div class="col-md-9 no-padding-r">
										<input class="form-control" type="text" name="company">
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 no-padding-l">
										<p>Hazchem</p>
									</div>
									<div class="col-md-9 no-padding-r">
										<input class="form-control" type="text" name="hazchem">
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 no-padding-l">
										<p>UN	</p>
									</div>
									<div class="col-md-9 no-padding-r">
										<input class="form-control" type="text" name="un">
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 no-padding-l">
										<p>Classification</p>
									</div>
									<div class="col-md-9 no-padding-r">
										<input class="form-control" type="text" name="classification">
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 no-padding-l">
										<p>PPE</p>
									</div>
									<div class="col-md-9 no-padding-r">

										<div class="col-md-4 padding-half-r">
											<div class="ppe-con">
												<div class="icon">
													<img class="img-responsive" src="{{ url('img/ohs/chemicals/mask.png') }}">
												</div>
												<div class="heading">
													RESPIRATORS <br/>MUST BE WORN
												</div>
											</div>
										</div>

										<div class="col-md-4 padding-half">
											<div class="ppe-con">
												<div class="icon">
													<img class="img-responsive" src="{{ url('img/ohs/chemicals/face-shield.png') }}">
												</div>
												<div class="heading">
													FACE SHIELD <br/>MUST BE WORN
												</div>
											</div>
										</div>

										<div class="col-md-4 padding-half-l">
											<div class="ppe-con">
												<div class="icon">
													<img class="img-responsive" src="{{ url('img/ohs/chemicals/dust-mask.png') }}">
												</div>
												<div class="heading">
													DUST MASK <br/>MUST BE WORN
												</div>
											</div>
										</div>

										<div class="col-md-4 padding-half-r">
											<div class="ppe-con">
												<div class="icon">
													<img class="img-responsive" src="{{ url('img/ohs/chemicals/ear-protection.png') }}">
												</div>
												<div class="heading">
													EAR PROTECTION <br/>MUST BE WORN
												</div>
											</div>
										</div>

										<div class="col-md-4 padding-half">
											<div class="ppe-con">
												<div class="icon">
													<img class="img-responsive" src="{{ url('img/ohs/chemicals/hand-protection.png') }}">
												</div>
												<div class="heading">
													HAND PROTECTION <br/>MUST BE WORN
												</div>
											</div>
										</div>

										<div class="col-md-4 padding-half-l">
											<div class="ppe-con">
												<div class="icon">
													<img class="img-responsive" src="{{ url('img/ohs/chemicals/safety-footwear.png') }}">
												</div>
												<div class="heading">
													SAFETY FOOTWEAR <br/>MUST BE WORN
												</div>
											</div>
										</div>

										<div class="col-md-4 padding-half-r">
											<div class="ppe-con">
												<div class="icon">
													<img class="img-responsive" src="{{ url('img/ohs/chemicals/eye-protection.png') }}">
												</div>
												<div class="heading">
													EYE PROTECTION <br/>MUST BE WORN
												</div>
											</div>
										</div>

										<div class="col-md-4 padding-half">
											<div class="ppe-con">
												<div class="icon">
													<img class="img-responsive" src="{{ url('img/ohs/chemicals/protective-clothing.png') }}">
												</div>
												<div class="heading">
													PROTECTIVE CLOTHING MUST BE WORN
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 no-padding-l">
										<p>PPE Details</p>
									</div>
									<div class="col-md-9 no-padding-r">
										<input class="form-control" type="text" name="ppe_details">
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 no-padding-l">
										<p>Health Hazards</p>
									</div>
									<div class="col-md-9 no-padding-r">
										<input class="form-control" type="text" name="health_hazards">
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 no-padding-l">
										<p>First Aid</p>
									</div>
									<div class="col-md-9 no-padding-r">
										<input class="form-control" type="text" name="first_aid">
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 no-padding-l">
										<p>Storage</p>
									</div>
									<div class="col-md-9 no-padding-r">
										<input class="form-control" type="text" name="storage">
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3 no-padding-l">
										<p>MSDS</p>
									</div>
									<div class="col-md-9 no-padding-r">
										<div class="fileinput fileinput-new" data-provides="fileinput">
											<span class="btn btnFileUpload">
												<span class="fileinput-new"><span><img src="{{ url('img/paper-clip.png') }}" width="25"></span>&nbsp;&nbsp;ATTACH A PHOTO</span>
												<span class="fileinput-exists">Change</span>
												<input id="required_doc_public_liability" accept="image/jpeg,image/gif,image/png,application/pdf" type="file">
												<span class="fileinput-filename"></span>
											</span>
										</div>
									</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</form>
					</div>

					<div class="clearix"></div>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
	<div class="clearfix"></div>

<script type="text/javascript">
(function( $ ) {
	$(document).ready(function() {
    	$( ".issue_date" ).datepicker();
	});
})( jQuery );
</script>
@endsection
