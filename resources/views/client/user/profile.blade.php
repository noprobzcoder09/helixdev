@extends('layout.client')

@section('title', 'Safety Videos')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">
				<span class="continue" ui-sref="main.safety-videos.questions({id:safety.view.id})">Save</span>

				<div class="profile-content col-md-12">
					<h4>User Profile</h4>
					<div class="body">					

						<form>
							
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-5 col-sm-5 no-padding-l input-con">
										<div class="upload-photo">
											<div class="fileinput fileinput-new" data-provides="fileinput">
												<div class="fileinput-preview thumbnail" data-trigger="fileinput"></div>
												<div class="upload-btn">
													<span class="btn btn-outline btn-file btn btn-primary">
													<span class="fileinput-new"><i class="fa fa-upload" aria-hidden="true"></i> UPLOAD IMAGE</span>
													<span class="fileinput-exists"> Change </span>
													<input type="hidden" value="" name="..."><input type="file" name=""> </span>
													<a href="javascript:;" class="btn btn-danger fileinput-exists " data-dismiss="fileinput"> Remove </a>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-7 col-sm-7 no-padding-r input-con">
										<p>&nbsp;</p>
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-5 col-sm-5 no-padding-l input-con">
										<p>Username</p>
									</div>
									<div class="col-md-7 col-sm-7 no-padding-r input-con">
										<input type="text" name="username" value="j.doe">
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-5 col-sm-5 no-padding-l input-con">
										<p>Password</p>
									</div>
									<div class="col-md-7 col-sm-7 no-padding-r input-con">
										<input type="password" name="password" value="">
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-5 col-sm-5 no-padding-l input-con">
										<p>Change Password</p>
									</div>
									<div class="col-md-7 col-sm-7 no-padding-r input-con">
										<input type="password" name="change_password" value="">
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-5 col-sm-5 no-padding-l input-con">
										<p>Name</p>
									</div>
									<div class="col-md-7 col-sm-7 no-padding-r input-con">
										<input type="text" name="name" value="John Doe">
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-5 col-sm-5 no-padding-l input-con">
										<p>Contact Number</p>
									</div>
									<div class="col-md-7 col-sm-7 no-padding-r input-con">
										<input type="text" name="contact_number" value="0400 000 000">
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-5 col-sm-5 no-padding-l input-con">
										<p>Email</p>
									</div>
									<div class="col-md-7 col-sm-7 no-padding-r input-con">
										<input type="email" name="email" value="j.doe@work.com.au">
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-5 col-sm-5 no-padding-l input-con">
										<p>Worksite</p>
									</div>
									<div class="col-md-7 col-sm-7 no-padding-r input-con">
										<div class="filter">
											<select class="chosen-select" data-placeholder="WORKSITE">
												<option value=""></option>
												@for ($i = 1; $i < 5; $i++)
													<option value="">Option {{ $i }}</option>
												@endfor
											</select>
										</div>
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-5 col-sm-5 no-padding-l input-con">
										<p>Date of Birth</p>
									</div>
									<div class="col-md-7 col-sm-7 no-padding-r input-dt input-con">
										<input type="text" name="birth_date" value="" class="datepicker">
										<span class="calendar-icon"><img src="{{ url('img/client/calendar-icon.png') }}"></span>
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-5 col-sm-5 no-padding-l input-con">
										<p>Address</p>
									</div>
									<div class="col-md-7 col-sm-7 no-padding-r input-con">
										<input type="text" name="address" value="123 Station St.">
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-5 col-sm-5 no-padding-l input-con">
										<p>State</p>
									</div>
									<div class="col-md-7 col-sm-7 no-padding-r input-con">
										<div class="filter">
											<select class="chosen-select" data-placeholder="STATE">
												<option value=""></option>
												@for ($i = 1; $i < 5; $i++)
													<option value="">State {{ $i }}</option>
												@endfor
											</select>
										</div>
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-5 col-sm-5 no-padding-l input-con">
										<p>Next of Kin Name</p>
									</div>
									<div class="col-md-7 col-sm-7 no-padding-r input-con">
										<input type="text" name="kin_name" value="Jane Doe">
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-5 col-sm-5 no-padding-l input-con">
										<p>Next of Kin Mobile</p>
									</div>
									<div class="col-md-7 col-sm-7 no-padding-r input-con">
										<input type="text" name="kin_mobile" value="0412 345 678">
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-5 col-sm-5 no-padding-l input-con">
										<p>Next of Kin Relationship</p>
									</div>
									<div class="col-md-7 col-sm-7 no-padding-r input-con">
										<input type="text" name="kin_relationship" value="Wife">
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-5 col-sm-5 no-padding-l input-con">
										<p>Medical Conditions</p>
									</div>
									<div class="col-md-7 col-sm-7 no-padding-r input-con">
										<input type="text" name="medical_conditions" value="Asthma">
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-5 col-sm-5 no-padding-l input-con">
										<p>Allergies</p>
									</div>
									<div class="col-md-7 col-sm-7 no-padding-r input-con">
										<input type="text" name="allergies" value="Peanuts">
									</div>
								</div>
							</div>

							<div class="clearfix"></div>
						</form>

					</div>
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
    	$('.chosen-select').chosen({
    		"disable_search": true
    	});

    	$( ".datepicker" ).datepicker();
	});
})( jQuery );
</script>
@endsection