 @extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="col-md-12 no-padding">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-9 col-sm-6 col-xs-6">
					<div class="row">
						<h4>SUB-CONTRACTORS > NEW SUB-CONTRACTORS</h4>
					</div>
				</div>
				<div class="col-md-3 pull-right">
					<div class="row btn-action">
						<button type="button" role="btn" class="btn btn-primary btn-save pull-left"><i class="fa fa-floppy-o" aria-hidden="true"></i> SAVE SUB-CONTRACTOR</button>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>

			<div class="col-md-12">
				<div class="row">
					<div class="bottom-content">
						<div class="form">
							<div class="header">
								<h5>NEW SUB-CONTRACTOR</h5>
							</div>
							<div class="body">
								<form>
									<div class="col-md-8">
										<div class="row">
											<div class="col-md-12">
												<div class="row">
													<div class="col-md-3 no-padding-l">
														<p>Company Name</p>
													</div>
													<div class="col-md-9">
														<input class="form-control" type="text" name="company_name">
													</div>
												</div>
											</div>

											<div class="col-md-12">
												<div class="row">
													<div class="col-md-3 no-padding-l">
														<p>Contact</p>
													</div>
													<div class="col-md-9">
														<input class="form-control" type="text" name="contact">
													</div>
												</div>
											</div>

											<div class="col-md-12">
												<div class="row">
													<div class="col-md-3 no-padding-l">
														<p>Contact Number</p>
													</div>
													<div class="col-md-9">
														<input class="form-control" type="text" name="contact_number">
													</div>
												</div>
											</div>

											<div class="col-md-12">
												<div class="row">
													<div class="col-md-3 no-padding-l">
														<p>Email</p>
													</div>
													<div class="col-md-9">
														<input class="form-control" type="text" name="email">
													</div>
												</div>
											</div>

											<div class="col-md-12">
												<div class="row">
													<div class="col-md-3 no-padding-l">
														<p>&nbsp;</p>
													</div>
													<div class="col-md-9">
														<div class="radio">
															<label>
																<input class="form-check" type="radio" name="work_force" value="Sole Trader">
																<span></span>
																Sole Trader
															</label>
															<label>
																<input class="form-check" type="radio" name="work_force" value="Company">
																<span></span>
																Company
															</label>
														</div>
													</div>
												</div>
											</div>

											<div class="col-md-12">
												<div class="row">
													<div class="col-md-3 no-padding-l">
														<p>Address</p>
													</div>
													<div class="col-md-9">
														<input class="form-control" type="text" name="address">
													</div>
												</div>
											</div>

											<div class="col-md-12">
												<div class="row">
													<div class="col-md-3 no-padding-l">
														<p>State</p>
													</div>
													<div class="col-md-9">
														<div class="col-md-5 no-padding-l">
															<select class="chosen-select" data-placeholder=" ">
																<option value=""></option>
																@for ($i = 1; $i < 5; $i++)
																	<option value="">Option {{ $i }}</option>
																@endfor
															</select>
														</div>
														<div class="col-md-7 no-padding">
															<div class="col-md-4 no-padding-r">
																<p>Postcode</p>
															</div>
															<div class="col-md-8 no-padding-r">
																<input class="form-control" type="text" name="postcode">
															</div>
														</div>
													</div>
												</div>
											</div>

											<div class="col-md-12">
												<div class="row">
													<div class="col-md-3 no-padding-l">
														<p>ABN</p>
													</div>
													<div class="col-md-9">
														<input class="form-control" type="text" name="abn">
													</div>
												</div>
											</div>

											<div class="col-md-12">
												<div class="row">
													<div class="col-md-3 no-padding-l">
														<p>Approved</p>
													</div>
													<div class="col-md-9">
														<div class="col-md-3">
															<div class="row">
																<select class="chosen-select" data-placeholder=" ">
																	<option value=""></option>
																	<option value="yes">YES</option>
																	<option value="no">NO</option>
																</select>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div class="col-md-4 no-padding-r">

										<div class="col-md-12">
											<div class="row">
												<div class="file-con">
													<input class="form-control inputfile" name="file" id="file" type="file">
													<label class="lbl-file" for="file"><span class="img-cont"><img src="{{ url('img/upload-icon.png') }}"></span><span class="img-text">ADD LOGO</span></label>
													<div class="img-con"><img src="{{ url('img/Helix-Solutions-bw.png') }}"></div>
												</div>
											</div>
										</div>

										<div class="col-md-12">
											<div class="row btn-action">
												<button class="btn btn-primary btn-send-email" role="btn">SEND WELCOME EMAIL</button>
												<a href="javascript:void(0)" data-dialog="documentsDialog" class="btn btn-primary btn-add-documents trigger">Add Documents</a>
											</div>
										</div>

									</div>

									<div class="clearfix"></div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
	<div class="clearfix"></div>

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
					<h2><strong>ACME Electrical Documentation</strong></h2>
				</div>
				<div class="body">
					<p>Evidence of Documentation</p>

					<div class="document-con">

						<div class="col-md-12">
							<div class="col-md-6 no-padding-l">
								<p>Public Liability:</p>
							</div>
							<div class="col-md-6 no-padding-r ta-r">
								<span class="btn btnFileUpload">Upload Image/PDF</span>
								<input type="file" name="public_liability">
							</div>
						</div>

						<div class="col-md-12">
							<div class="col-md-6 no-padding-l">
								<p>Workcover:</p>
							</div>
							<div class="col-md-6 no-padding-r ta-r">
								<span class="icon"><img class="img-responsive" src="{{ url('img/check-icon.png') }}"></span>
								<span class="btn btnFileUpload">Upload Ticket</span>
								<input type="file" name="workcover">
							</div>
						</div>

						<div class="col-md-12">
							<div class="col-md-6 no-padding-l">
								<p>Superannuation:</p>
							</div>
							<div class="col-md-6 no-padding-r ta-r">
								<span class="btn btnFileUpload">Upload Image/PDF</span>
								<input type="file" name="superaanuation">
							</div>
						</div>

						<div class="col-md-12">
							<div class="col-md-6 no-padding-l">
								<p>Redundancy:</p>
							</div>
							<div class="col-md-6 no-padding-r ta-r">
								<span class="btn btnFileUpload">Upload Image/PDF</span>
								<input type="file" name="redundancy">
							</div>
						</div>

						<div class="col-md-12">
							<div class="col-md-6 no-padding-l">
								<p>Long Services:</p>
							</div>
							<div class="col-md-6 no-padding-r ta-r">
								<span class="btn btnFileUpload">Upload Image/PDF</span>
								<input type="file" name="long_services">
							</div>
						</div>

						<div class="col-md-12">
							<div class="col-md-6 no-padding-l">
								<p>Compliance Statements:</p>
							</div>
							<div class="col-md-6 no-padding-r ta-r">
								<span class="btn btnFileUpload">Upload Image/PDF</span>
								<input type="file" name="comliance_statements">
							</div>
						</div>

						<div class="col-md-12">
							<div class="col-md-6 no-padding-l">
								<p>Other Documents:</p>
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
	

@endsection