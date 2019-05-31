@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="onboarding">
		<div class="col-md-12 no-padding">
			<div class="left-container">
				<div class="top-content">
					<div class="col-md-9 col-sm-6 col-xs-6">
						<div class="row">
							<h4 class="breadcrumbs">HR > Onboarding</h4>
						</div>
					</div>
					<div class="col-md-3 col-sm-6">
						<div class="row">
							<button class="btn btn-primary btn-save pull-right" type='button' role='btn'>
									+ ADD
							</button>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>

				<div class="col-md-12 body-content">
					<div class="row">
						<div class="frmInduction">
							<div class="tab-header">
								<h4>ADD NEW PERSON</h4>
							</div>
							<div class="body">
								<form class="frmAddPerson">
									<div class="col-md-8">
										<div class="row">
											<div class="col-md-3 no-padding-l">
												<p>FIRST NAME</p>
											</div>
											<div class="col-md-9 no-padding-r">
												<input class="form-control" type="text" name="first_name">
											</div>
										</div>

										<div class="row">
											<div class="col-md-3 no-padding-l">
												<p>LAST NAME</p>
											</div>
											<div class="col-md-9 no-padding-r">
												<input class="form-control" type="text" name="last_name">
											</div>
										</div>

										<div class="row">
											<div class="col-md-3 no-padding-l">
												<p>EMAIL</p>
											</div>
											<div class="col-md-9 no-padding-r">
												<input class="form-control" type="text" name="email_address">
											</div>
										</div>

										<div class="row">
											<div class="col-md-3 no-padding-l">
												<p>MOBILE</p>
											</div>
											<div class="col-md-9 no-padding-r">
												<input class="form-control" type="text" name="mobile_number">
											</div>
										</div>

										<div class="row">
											<div class="col-md-3 no-padding-l">
												<p>DATE OF BIRTH</p>
											</div>
											<div class="col-md-9 no-padding-r">
												<div class="input-group input-medium date date-picker" data-date-format="dd-mm-yyyy" data-date-start-date="+0d">
														<input type="text" class="form-control">
														<span class="input-group-btn">
																<button class="btn default" type="button">
																		<i class="fa fa-calendar"></i>
																</button>
														</span>
												</div>
											</div>
										</div>

										<div class="row">
											<div class="col-md-3 no-padding-l">
												<p>ADDRESS</p>
											</div>
											<div class="col-md-9 no-padding-r">
												<input class="form-control" type="text" name="address">
											</div>
										</div>

										<div class="row">
											<div class="form-group">
												<div class="col-md-3 no-padding-l">
													<p>STATE</p>
												</div>
												<div class="col-md-9 no-padding-r">
													<div class="row">
														<div class="col-md-6">
															<select class="form-control state" name="state">
																<option value="AAT">AAT</option>
																<option value="ACT">ACT</option>
																<option value="HIMI">HIMI</option>
																<option value="JBT">JBT</option>
																<option value="NSW">NSW</option>
																<option value="NT">NT</option>
																<option value="Qld">Qld</option>
																<option value="SA">SA</option>
																<option value="Tas">Tas</option>
																<option value="Vic">Vic</option>
																<option value="WA">WA</option>
															</select>
														</div>
														<div class="col-md-2">
															<p>POSTCODE</p>
														</div>
														<div class="col-md-4">
															<input class="form-control" type="text" name="postcode">
														</div>
													</div>
												</div>
											</div>
										</div>

										<div class="row">
											<div class="col-md-3 no-padding-l">
												<p>NEXT OF KIN NAME</p>
											</div>
											<div class="col-md-9 no-padding-r">
												<input class="form-control" type="text" name="kin_name">
											</div>
										</div>

										<div class="row">
											<div class="col-md-3 no-padding-l">
												<p>NEXT OF KIN MOBILE</p>
											</div>
											<div class="col-md-9 no-padding-r">
												<input class="form-control" type="text" name="kin_mobile">
											</div>
										</div>

										<div class="row">
											<div class="col-md-3 no-padding-l">
												<p class="no-margin">NEXT OF KIN RELATIONSHIP</p>
											</div>
											<div class="col-md-9 no-padding-r">
												<input class="form-control" type="text" name="kin_rekationshp">
											</div>
										</div>

										<div class="row">
											<div class="col-md-3 no-padding-l">
												<p>MEDICAL CONDITIONS</p>
											</div>
											<div class="col-md-9 no-padding-r">
												<input class="form-control" type="text" name="medical_conditions">
											</div>
										</div>

										<div class="row">
											<div class="col-md-3 no-padding-l">
												<p>ALERGIES</p>
											</div>
											<div class="col-md-9 no-padding-r">
												<div class="row">
													<div class="col-md-12">
														<input class="form-control alergies" type="text" name="alergies">
														<div class="clearfix"></div>
													</div>
													<div class="col-md-6">
													  <label><input type="checkbox" name="sub_contractor_employee" value="" class="icheckbox">SUB-CONTRACTOR EMPLOYEE</label>
													</div>
													<div class="col-md-6">
														<select class="form-control acme-list chosen-select" multiple name="acme">
															<option value="ACME LANDSCAPING">ACME LANDSCAPING</option>
															<option value="ACME TRANSPORT">ACME TRANSPORT</option>
															<option value="ACME ELECTRICAL">ACME ELECTRICAL</option>
															<option value="ACME PLUMBING">ACME PLUMBING</option>
															<option value="ACME PLASTERING">ACME PLASTERING</option>
														</select>
													</div>
													<div class="clearfix"></div>
													<div class="col-md-12">
													  <label><input type="checkbox" name="admin_access" value="" class="icheckbox">ADMIN ACCESS</label>
													</div>
													<div class="clearfix"></div>
												</div>
											</div>
										</div>

									</div>

									<div class="col-md-4">
										<div class="col-md-12">
											<div class="row">
												<div class="upload-photo">
													<div class="fileinput fileinput-new" data-provides="fileinput">
                            <div class="fileinput-preview thumbnail" data-trigger="fileinput"></div>
                            <div class="upload-btn">
                              <span class="btn btn-outline btn-file btn btn-primary">
                              <span class="fileinput-new"><i class="fa fa-upload" aria-hidden="true"></i> UPLOAD IMAGE</span>
                              <span class="fileinput-exists"> Change </span>
                              <input type="hidden" value="" name="..."><input type="file" accept="image/*;capture=camera"> </span>
                              <a href="javascript:;" class="btn btn-danger fileinput-exists " data-dismiss="fileinput"> Remove </a>
                            </div>
                          </div>
												</div>
											</div>
										</div>
									</div>

									<div class="clearfix"></div>
								</form>
							</div>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
		<div class="clearfix"></div>
	</div>
	<script>
		$( function() {
			$('.date-picker').datepicker({
			 	startDate: '-3d'
			});
			$(".chosen-select").chosen();
	  } );
   </script>
@endsection
