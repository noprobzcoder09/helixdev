@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="col-md-12 no-padding ohs">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h4>OHS > SAFETY VIDEOS > ADD VIDEO</h4>
					</div>
				</div>
				<div class="col-md-3 pull-right">
					<div class="row btn-action">
						<button type="button" role="btn" class="btn btn-primary btn-save pull-left">Edit</button>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content">
				<div class="row">					

					<div class="frm">
						<div class="header">
							<h5>Franna - Prestart Checkes</h5>
						</div>

						<div class="col-md-12 video-details">

							<div class="col-md-8 no-padding-r">

								<div class="col-md-12">
									<div class="row">
										<div class="col-md-3">
											<div class="row">
												<label>VIDEO LINK</label>
											</div>
										</div>
										<div class="col-md-9 no-padding-r">
											<input class="form-control" type="text" name="video_link" value="http://vimeo.com/8798798678">
										</div>
									</div>
								</div>

								<div class="col-md-12">
									<div class="row">
										<div class="col-md-3">
											<div class="row">
												<label>DESCRIPTION</label>
											</div>
										</div>
										<div class="col-md-9 no-padding-r">
											<textarea class="form-control" rows="7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget diam mollis, ultricies lectus nec, scelerisque nunc. Curabitur non est turpis. Proin viverra vel dolor a tincidunt. Mauris tempus, risus vel consequat tempor, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget diam mollis, ultricies lectus nec, scelerisque nunc. Curabitur non est turpis. Proin viverra vel dolor a tincidunt. Mauris tempus, risus vel consequat tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget diam mollis, ultricies lectus nec, scelerisque nunc. Curabitur non est turpis. Proin viverra vel dolor a tincidunt. Mauris tempus, risus vel consequat tempor, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget diam mollis, ultricies lectus nec, scelerisque nunc. Curabitur non est turpis. Proin viverra vel dolor a tincidunt.</textarea>
										</div>
									</div>
								</div>

								<div class="clearfix"></div>
							</div>

							<div class="col-md-4 video-preview">
								<div class="col-md-12">
									<div class="row">
										<iframe width="100%" height="235.8" src="https://www.youtube.com/embed/v4oN4DuR7YU" frameborder="0" allowfullscreen style="margin: 6px 0;"></iframe>
										<div class="clearfix"></div>
									</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>

						<div class="col-md-12 video-questions">
							<div class="row">
								<div class="questions">
									<div class="title">
										<h5>Questions</h5>
									</div>

									<div class="question-con">

										<div class="question">
											<p>1. Has he Franna got an operators manual?</p>
											<div class="option">
												<div class="radio">
													<ul class="inline-list">
														<li>
															<label>
																<input class="form-check" name="work_force" value="Yes" type="radio">
																<span></span>
																Yes
															</label>
														</li>
														<li>
															<label>
																<input class="form-check" name="work_force" value="No" type="radio">
																<span></span>
																No
															</label>
														</li>
													</ul>
												</div>
											</div>
										</div>

										<div class="question">
											<p>2. Before turning the Franna on, you must always?</p>
											<div class="option">
												<div class="radio">
													<ul>
														<li>
															<label>
																<input class="form-check" name="work_force" value="Have a coffee" type="radio">
																<span></span>
																Have a coffee
															</label>
														</li>
														<li>
															<label>
																<input class="form-check" name="work_force" value="Conduct a prestart inspection" type="radio">
																<span></span>
																Conduct a prestart inspection
															</label>
														</li>
														<li>
															<label>
																<input class="form-check" name="work_force" value="Ensure that you are fit for work" type="radio">
																<span></span>
																Ensure that you are fit for work
															</label>
														</li>
														<li>
															<label>
																<input class="form-check" name="work_force" value="Both B &amp; C" type="radio">
																<span></span>
																Both B &amp; C
															</label>
														</li>
													</ul>
												</div>
											</div>
										</div>

									</div>

								</div>
								<div class="clearfix"></div>
							</div>
						</div>
					</div>

				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>

	<div class="clearfix"></div>
	

@endsection