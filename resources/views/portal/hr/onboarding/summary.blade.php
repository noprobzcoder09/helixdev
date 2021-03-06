@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="onboarding">
		<div class="col-md-12 no-padding">
			<div class="left-container">
				<div class="top-content">
					<div class="col-md-9 col-sm-6 col-xs-6">
						<div class="row">
							<h4 class="breadcrumbs">HR > On-boarding > SUMMARY</h4>
						</div>
					</div>
					<div class="col-md-3 col-sm-6">
						<div class="row">

						</div>
					</div>
					<div class="clearfix"></div>
				</div>

				<div class="col-md-12 body-content">
					<div class="row">
						<div class="form">
							<div class="tab-header">
								<h4 class="header-title">Gary Bennett</h4>
							</div>
							<div class="body">
								<div class="col-md-8">
									<div class="with-borders">

										<div class="col-md-12">
											<div class="row">
												<div class="col-md-4 no-padding-l">
													<p><strong>EMAIL:</strong></p>
												</div>
												<div class="col-md-8 no-padding-r">
													<p>g.bennett@hotmail.com</p>
												</div>
											</div>
										</div>

										<div class="col-md-12">
											<div class="row">
												<div class="col-md-4 no-padding-l">
													<p><strong>MOBILE:</strong></p>
												</div>
												<div class="col-md-8 no-padding-r">
													<p>0476 977 098</p>
												</div>
											</div>
										</div>

										<div class="col-md-12">
											<div class="row">
												<div class="col-md-4 no-padding-l">
													<p><strong>DATE OF BIRTH:</strong></p>
												</div>
												<div class="col-md-8 no-padding-r">
													<p>23/12/71</p>
												</div>
											</div>
										</div>

										<div class="col-md-12">
											<div class="row">
												<div class="col-md-4 no-padding-l">
													<p><strong>ADDRESS:</strong></p>
												</div>
												<div class="col-md-8 no-padding-r">
													<p>12 Station St, Malvern</p>
												</div>
											</div>
										</div>

										<div class="col-md-12">
											<div class="row">
												<div class="form-group">
													<div class="col-md-4 no-padding-l">
														<p><strong>STATE:</strong></p>
													</div>
													<div class="col-md-8 no-padding-r">
														<div class="row">
															<div class="col-md-6"><p>VIC</p></div>
															<div class="col-md-3"><p>POSTCODE:</p></div>
															<div class="col-md-3"><p>3198</p></div>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div class="col-md-12">
											<div class="row">
												<div class="col-md-4 no-padding-l">
													<p><strong>NEXT OF KIN NAME:</strong></p>
												</div>
												<div class="col-md-8 no-padding-r">
													<p>Jenny Bennett</p>
												</div>
											</div>
										</div>

										<div class="col-md-12">
											<div class="row">
												<div class="col-md-4 no-padding-l">
													<p><strong>NEXT OF KIN MOBILE:</strong></p>
												</div>
												<div class="col-md-8 no-padding-r">
													<p>0428 654 321</p>
												</div>
											</div>
										</div>

										<div class="col-md-12">
											<div class="row">
												<div class="col-md-4 no-padding-l">
													<p><strong>NEXT OF KIN RELATIONSHIP:</strong></p>
												</div>
												<div class="col-md-8 no-padding-r">
													<p>Wife</p>
												</div>
											</div>
										</div>

										<div class="col-md-12">
											<div class="row">
												<div class="col-md-4 no-padding-l">
													<p><strong>MEDICAL CONDITIONS:</strong></p>
												</div>
												<div class="col-md-8 no-padding-r">
													<p>None</p>
												</div>
											</div>
										</div>

										<div class="col-md-12">
											<div class="row">
												<div class="col-md-4 no-padding-l">
													<p><strong>ALERGIES:</strong></p>
												</div>
												<div class="col-md-8 no-padding-r">
													<p>Penuts</p>
												</div>
											</div>
										</div>
										<div class="clearfix"></div>

									</div>
								</div>

								<div class="col-md-4">
									<div class="col-md-12">
										<div class="row">
											<div class="upload-photo">
												<div class="fileinput fileinput-new" data-provides="fileinput">
                          <div class="fileinput-preview thumbnail" data-trigger="fileinput">
														<img class="img-responsive" src="{{ url('img/profile-picture.png') }}" />
													</div>
                          <div class="upload-btn">
                            <span class="btn btn-outline btn-file btn btn-primary">
                            	<span class="fileinput-new"><i class="fa fa-upload" aria-hidden="true"></i> CHANGE IMAGE</span>
                            	<span class="fileinput-exists"> Change </span>
                            	<input type="hidden" value="" name="..."><input type="file" name="">
														</span>
                            <a href="javascript:;" class="btn btn-danger fileinput-exists " data-dismiss="fileinput"> Remove </a>
                          </div>
                        </div>
											</div>

											<div class="btn-action">
												<button type="button" class="btn btn-primary">ENROLL IN PROGRAM/SITE ENROLMENT</button>
												<!--button type="button" class="btn btn-primary"></button-->
												<a href="javascript:void(0)" data-dialog="documentsDialog" class="btn btn-primary btn-add-documents trigger">ADD/EDIT QUALIFICATION OR DOCS</a>
												<button type="button" class="btn btn-primary">EDIT PROFILE</button>
												<button type="button" class="btn btn-primary">LOGIN DETAILS</button>
												<button type="button" class="btn btn-primary">SEND MESSAGE</button>
											</div>
										</div>
									</div>
								</div>

								<div class="clearfix"></div>

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

	<!--	dialog box-->
	<div id="documentsDialog" class="dialog">
		<div class="dialog__overlay"></div>
		<div class="dialog__content">
			<div class="morph-shape">
				<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 560 280" preserveAspectRatio="none">
					<rect x="3" y="3" fill="none" width="556" height="276"/>
				</svg>
			</div>
			<div class="dialog-inner">
				<button class="action close-diaglog" data-dialog-close><i class="fa fa-times" aria-hidden="true"></i></button>

				<div class="header">
					<h2>ADD EVIDENCE OF DOCUMENT OR QUALIFICATION</h2>
				</div>
				<div class="body">
					<p>Evidence of Documentation</p>

					<div class="document-con">

						<div class="col-md-12">
							<div class="col-md-6 no-padding-l">
								<p>DRIVERS LICENSE</p>
							</div>
							<div class="col-md-6 no-padding-r ta-r">
								<span class="btn btnFileUpload">Upload Image/PDF</span>
								<input type="file" name="public_liability">
							</div>
						</div>

						<div class="col-md-12">
							<div class="col-md-6 no-padding-l">
								<p>WHITE CARD</p>
							</div>
							<div class="col-md-6 no-padding-r ta-r">
								<span class="icon"><img class="img-responsive" src="{{ url('img/check-icon.png') }}"></span>
								<span class="btn btnFileUpload">Upload Ticket</span>
								<input type="file" name="workcover">
							</div>
						</div>

						<div class="col-md-12">
							<div class="col-md-6 no-padding-l">
								<p>HIGH RISK WORK LICENSE</p>
							</div>
							<div class="col-md-6 no-padding-r ta-r">
								<span class="btn btnFileUpload">Upload Image/PDF</span>
								<input type="file" name="superaanuation">
							</div>
						</div>

						<div class="col-md-12">
							<div class="col-md-6 no-padding-l">
								<p>OTHER TICKIETS</p>
							</div>
							<div class="col-md-6 no-padding-r ta-r">
								<span class="btn btnFileUpload">Upload Image/PDF</span>
								<input type="file" name="redundancy">
							</div>
						</div>

						<div class="col-md-12">
							<div class="col-md-6 no-padding-l">
								<p>UNION TICKET</p>
							</div>
							<div class="col-md-6 no-padding-r ta-r">
								<span class="btn btnFileUpload">Upload Image/PDF</span>
								<input type="file" name="long_services">
							</div>
						</div>

						<div class="col-md-12">
							<div class="col-md-6 no-padding-l">
								<p>SUPERANNUATION</p>
							</div>
							<div class="col-md-6 no-padding-r ta-r">
								<span class="btn btnFileUpload">Upload Image/PDF</span>
								<input type="file" name="comliance_statements">
							</div>
						</div>

						<div class="col-md-12">
							<div class="col-md-6 no-padding-l">
								<p>LONG SERVICE LEAVE</p>
							</div>
							<div class="col-md-6 no-padding-r ta-r">
								<span class="btn btnFileUpload">Upload Image/PDF</span>
								<input type="file" name="other_documents">
							</div>
						</div>

						<div class="col-md-12">
							<div class="col-md-6 no-padding-l">
								<p>MEDICAL DECLARATION</p>
							</div>
							<div class="col-md-6 no-padding-r ta-r">
								<span class="btn btnFileUpload">Upload Image/PDF</span>
								<input type="file" name="other_documents">
							</div>
						</div>

						<div class="col-md-12">
							<div class="col-md-6 no-padding-l">
								<p>OTHER DOCUMENTS</p>
							</div>
							<div class="col-md-6 no-padding-r ta-r">
								<span class="btn btnFileUpload">Upload Image/PDF</span>
								<input type="file" name="other_documents">
							</div>
						</div>

						<div class="clearfix"></div>
					</div>

					<button class="btn btnUpdateDocuments" role="button"><span><img class="img-responsive" src="{{ url('img/arrow-refresh.png') }}"></span> Update Documents</button>

				</div>
			</div>
		</div>
	</div>

	<script type="text/javascript">
		$( function() {

			var dlgtrigger = document.querySelector( '[data-dialog]' ),
	        somedialog = document.getElementById( dlgtrigger.getAttribute( 'data-dialog' ) ),
	        dlg = new DialogFx( somedialog );

	    dlgtrigger.addEventListener( 'click', dlg.toggle.bind(dlg) );

			$('.date-picker').datepicker();
			$(".chosen-select").chosen();

			$("#input-id").fileinput();
	  } );
   </script>
@endsection
