@extends('layout.portal')

@section('title', 'Client')

@section('content')
	
	<div class="induction">
		<div class="col-md-9 no-padding">
			<div class="left-container">
				<div class="top-content">
					<div class="col-md-7 col-sm-6 col-xs-6">
						<div class="row">
							<h4>HR > New Induction</h4>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>

				<div class="col-md-12 body-content">
					<div class="row">
						<div class="frmInduction">
							<div class="header">
								<h4>NEW INDUCTION</h4>
							</div>
							<div class="body">
								<form class="frmNewInduction">
									<div class="col-md-12">
										<div class="row">
											<div class="col-md-3 no-padding-l">
												<p>TITLE</p>
											</div>
											<div class="col-md-9 no-padding-r">
												<input class="form-control" type="text" name="title">
											</div>
										</div>
									</div>

									<div class="col-md-12">
										<div class="row">
											<div class="col-md-3 no-padding-l">
												<p>VIDEO LINK</p>
											</div>
											<div class="col-md-9 no-padding-r">
												<input class="form-control" type="text" name="video_link">
											</div>
										</div>
									</div>

									<div class="col-md-12">
										<div class="row">
											<div class="col-md-3 no-padding-l">
												<p>DESCRIPTION</p>
											</div>
											<div class="col-md-9 no-padding-r">
												<select class="chosen-select" data-placeholder="&nbsp;">
													<option value=""></option>
													@for ($i = 1; $i < 5; $i++)
														<option value="">Description {{ $i }}</option>
													@endfor
												</select>
											</div>
										</div>
									</div>

									<div class="col-md-12">
										<div class="row">
											<div class="questions">

												<div class="question">
													<button type="button" class="btn btn-primary pull-right">REMOVE QUESTION</button>

													<div class="col-md-12 no-padding">
														<label>Question 1</label>
														<input class="form-control" type="text" name="question">

														<div class="option">
															@for ($i = 1; $i <= 5; $i++)
															<div class="col-md-5ths {{ ( $i == 1 ? 'padding-half-r' : '' ) }} {{ ( $i == 2 || $i == 3 || $i == 4  ? 'padding-half' : '' ) }} {{ ( $i == 5 ? 'padding-half-l' : '' ) }}">
																<label>Option {{$i}}</label>
																<input class="form-control" type="text" name="option[{{$i}}]">
															</div>
															@endfor
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
				<div class="clearfix"></div>
			</div>
		</div>

		<div class="col-md-3">
			<div class="row">
				<div class="right-container btn-action">
					<div class="btn-con">
						<button type="button" role="btn" class="btn btn-primary btn-save pull-right"><i class="fa fa-floppy-o" aria-hidden="true"></i> SAVE</button>
						<div class="clearfix"></div>
					</div>
					<div class="sidebar-usage">
						<div class="btn-action">
							<button type="button" class="btn btn-primary">INDUCTION MANAGEMENT</button>
							<button type="button" class="btn btn-primary">EXPORT INDUCTION REGISTER</button>
							<button type="button" class="btn btn-primary">EDIT CURRENT INDUCTIONS</button>
							<button type="button" class="btn btn-primary">ADD NEW INDUCTIONS</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="clearfix"></div>
	</div>

@endsection