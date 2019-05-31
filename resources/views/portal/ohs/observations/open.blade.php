@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="col-md-12 no-padding ohs">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h4 class="breadcrumbs">OHS &gt; OBSERVATION REGISTER</h4>
					</div>
				</div>
				<div class="col-md-3 pull-right">
					<div class="row btn-action">
						<button type="button" role="btn" class="btn btn-primary pull-right top-page-btn" href="javascript:void(0)" data-dialog="createDialog"><span class="add-sign"><img src="{{ url('img/edit-icon.png') }}" style="width: 15px;margin-top: -3px;"></span> EDIT</button>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content registers">
				<div class="row">
					<h5 class="fc-white">OBSERVATION REGISTER</h5>

					<div class="top-content">
						<div class="status">
							<div class="col-md-12">
								<div class="row">
									<div class="radio-group">
										<input class="form-control" name="status" value="Open" type="radio">
										<label class="btn btn-primary">OPEN</label>
									</div>

									<div class="radio-group">
										<input class="form-control" name="status" value="Close Out" type="radio">
										<label class="btn btn-primary">CLOSE OUT</label>
									</div>

									<div class="radio-group">
										<input class="form-control" name="status" value="Overdue" type="radio">
										<label class="btn btn-primary">OVERDUE</label>
									</div>

									<div class="radio-group last">
										<input class="form-control" name="status" value="In Progress" type="radio">
										<label class="btn btn-primary">IN PROGRESS</label>
									</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="action">
							<div class="col-md-2">
								<div class="row">
									<p class="fc-blue">ASSIGN ACTION</p>
								</div>
							</div>
							<div class="col-md-10 no-padding-r">
								<input type="text" class="form-control" name="action">
							</div>
							<div class="clearfix"></div>
						</div>
					</div>

					<div class="bottom-content">
						<h4>SAFETY HAZARD OBSERVATION SUMMARY</h4>

						<div class="content">
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-4 no-padding-l">
										<p>What did you do about this photo?<br/>Initial Photo</p>
									</div>
									<div class="col-md-4">
										<p>Trip Hazard</p>
									</div>
									<div class="col-md-4 no-padding-r">
										<img class="img-responsive" src="{{ url('img/ohs/observations/loader.png') }}">
									</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="content">
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-4 no-padding-l">
										<p>What did you do about this photo?<br/>Initial Photo</p>
									</div>
									<div class="col-md-4">
										<p>Trip Hazard</p>
									</div>
									<div class="col-md-4 no-padding-r">
										<img class="img-responsive" src="{{ url('img/ohs/observations/loader.png') }}">
									</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="content">
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-4 no-padding-l">
										<p><strong>Category:</strong><br/>What did you do: </br>Further action are required:</br>Post Action Photo:</p>
									</div>
									<div class="col-md-4">
										<p><strong>Plant &amp; Equipment</strong></br>Move the trip hazard</br>Signage is required</p>
									</div>
									<div class="col-md-4 no-padding-r">
										<img class="img-responsive" src="{{ url('img/ohs/observations/machines.png') }}">
									</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="content">
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-4 no-padding-l">
										<p>Location:</br>GPS Details:</p>
									</div>
									<div class="col-md-4">
										<p>Station Street Yard</p>
									</div>
									<div class="col-md-4 no-padding-r">
										<img class="img-responsive" src="{{ url('img/ohs/observations/map.png') }}">
										</br>
										<p>( -38.144416, 145.258772)</br>3 Sandstone Drive, Botanic Ridge</p>
									</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>

					<div class="clearix"></div>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
	<div class="clearfix"></div>


@endsection
