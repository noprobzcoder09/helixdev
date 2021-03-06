@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="onboarding">
		<div class="col-md-12 no-padding">
			<div class="left-container">
				<div class="top-content">
					<div class="col-md-9 col-sm-6 col-xs-6">
						<div class="row">
							<h4 class="breadcrumbs">HR > OPENWORKER > LOGIN</h4>
						</div>
					</div>
					<div class="col-md-3 col-sm-6">
						<div class="row">
							<button class="btn btn-primary btn-save pull-right top-page-btn" type='button' role='btn'>
									<i class="fa fa-floppy-o" aria-hidden="true"></i> SAVE LOGIN DETAILS
							</button>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>

				<div class="col-md-12 body-content">
					<div class="row">
						<div class="frmInduction">
							<div class="tab-header">
								<h4>GARRY BENNETT LOGIN DETAILS</h4>
							</div>
							<div class="body">
								<form class="frmAddPerson">
									<div class="col-md-8">
										<div class="with-borders">
											<div class="col-md-12">
												<div class="row no-margin-bottom">
													<div class="col-md-4 no-padding-l">
														<p><strong>EMAIL:</strong></p>
													</div>
													<div class="col-md-8 no-padding-r">
														<p>g.bennett@hotmail.com</p>
													</div>
												</div>
											</div>

											<div class="col-md-12">
												<div class="row no-margin-bottom">
													<div class="col-md-4 no-padding-l">
														<p><strong>PASSWORD:</strong></p>
													</div>
													<div class="col-md-8 no-padding-r">
														<p>******************</p>
													</div>
												</div>
											</div>

											<div class="col-md-12">
												<div class="row">
													<div class="col-md-4 no-padding-l">
														<p><strong>ADMIN ACCESS:</strong></p>
													</div>
													<div class="col-md-8 no-padding-r">
														<div class="checkbox-slider--b-flat">
															<label>
																<input type="checkbox" name="admin_access" class="modules-cb">
																<span></span>
															</label>
														</div>
													</div>
												</div>
											</div>

											<hr style="width:100%;border-color:#95989A;">


											<div class="col-md-12">
												<div class="row">
													<div class="col-md-4 no-padding-l">
														<p><strong>RESEND DETAILS:</strong></p>
													</div>
													<div class="col-md-8 no-padding-r">
														<div class="row">
															<div class="col-md-6"><button class="btn btn-primary btn-common" style="width:100%">EMAIL LOGIN DETAILS</button></div>
															<div class="col-md-6"><button class="btn btn-primary btn-common" style="width:100%;">SMS LOGIN DETAILS</button></div>
														</div>
													</div>
												</div>
											</div>
											<div class="clearfix"></div>

										</div>
										<div class="clearfix"></div>
									</div>
									<div class="col-md-4">
										<div class="col-md-12">
											<div class="row">
												<div class="upload-photo">
													<div class="fileinput fileinput-new">
                            <div class="fileinput-preview thumbnail" data-trigger="fileinput"></div>
                          </div>
												</div>
												<div class="btn-action">
													<button type="button" class="btn btn-primary">ENROLL IN PROGRAM/SITE ENROLMENT</button>
													<button type="button" class="btn btn-primary">ADD/EDIT QUALIFICATION OR DOCS</button>
													<button type="button" class="btn btn-primary">EDIT PROFILE</button>
													<button type="button" class="btn btn-primary">LOGIN DETAILS</button>
													<button type="button" class="btn btn-primary">SEND MESSAGE</button>
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
@endsection
