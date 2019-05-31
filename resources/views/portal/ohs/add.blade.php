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
						<button type="button" role="btn" class="btn btn-primary btn-save pull-left"><i class="fa fa-floppy-o" aria-hidden="true"></i> SAVE VIDEO</button>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content">
				<div class="row">					

					<div class="frm">
						<div class="header">
							<h5>NEW VIDEO</h5>
						</div>

						<form class="frmInput frmAddVideo">

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3">
										<div class="row">
											<label>VIDEO TITLE</label>
										</div>
									</div>
									<div class="col-md-9 no-padding-r">
										<input class="form-control" type="text" name="video_title">
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3">
										<div class="row">
											<label>VIDEO LINK</label>
										</div>
									</div>
									<div class="col-md-9 no-padding-r">
										<input class="form-control" type="text" name="video_link">
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
										<textarea class="form-control" rows="7"></textarea>
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3">
										<div class="row">
											<label>&nbsp;</label>
										</div>
									</div>
									<div class="col-md-9 no-padding-r check">
										<input type="checkbox" name="add_questions" class="form-control">
										<label></label>
									</div>
								</div>
							</div>

							<div class="col-md-12">
								<div class="row">
									<div class="col-md-3">
										<div class="row"></div>
									</div>

									<div class="col-md-9 no-padding-r questions">
										<div class="question">
											<button type="button" class="btn btn-primary pull-right">REMOVE QUESTION</button>
											<div class="col-md-12 no-padding">
												<label>Question 1</label>
												<input class="form-control" name="question" type="text">
												<div class="option">
													<div class="col-md-5ths padding-half-r  ">
														<label>Option 1</label>
														<input class="form-control" name="option[1]" type="text">
													</div>
													<div class="col-md-5ths  padding-half ">
														<label>Option 2</label>
														<input class="form-control" name="option[2]" type="text">
													</div>
													<div class="col-md-5ths  padding-half ">
														<label>Option 3</label>
														<input class="form-control" name="option[3]" type="text">
													</div>
													<div class="col-md-5ths  padding-half ">
														<label>Option 4</label>
														<input class="form-control" name="option[4]" type="text">
													</div>
													<div class="col-md-5ths   padding-half-l">
														<label>Option 5</label>
														<input class="form-control" name="option[5]" type="text">
													</div>
												</div>
												<div class="answer">
													<div class="col-md-3 no-padding">
														<label>Answer</label>
														<select class="chosen-select" data-placeholder="&nbsp;">
															<option value=""></option>
															@for ($i = 1; $i < 5; $i++)
																<option value="">Option {{ $i }}</option>
															@endfor
														</select>
													</div>
												</div>
											</div>
											<div class="clearfix"></div>
										</div>
										<div class="btn-action">
											<button type="button" class="btn btn-primary"><i class="fa fa-plus" aria-hidden="true"></i> ADD QUESTION</button>
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
	</div>

	<div class="clearfix"></div>
	

@endsection