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
					<h5 class="fc-white">OBSERVATIONS REGISTER</h5>

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
						<h5 class="fc-white">OUTSTANDING OBSERVATION TASKS</h5>

						<h4>SITE OBSERVATION</h4>

						<div class="content">
							<div class="col-md-12 no-padding-l">
								<p>Does the site require traffic management?</p>

								<div class="type">
									<div class="radio-group">
										<input class="form-control" name="traffic_management" value="Compliant" type="radio">
										<label class="btn btn-primary">COMPLIANT</label>
									</div>

									<div class="radio-group">
										<input class="form-control" name="traffic_management" value="Non-Compliant" type="radio">
										<label class="btn btn-primary">Non-Compliant</label>
									</div>

									<div class="radio-group not-applicable">
										<input class="form-control" name="traffic_management" value="N/A" type="radio">
										<label class="btn btn-primary">N/A</label>
									</div>
								</div>

								<div class="body">
									<div class="col-md-6">
										<div class="row">
											<p><textarea class="form-control" name="describe" style="resize:none;" rows="4">Describe what you saw...</textarea></p>
											<p><textarea class="form-control" name="action_required" style="resize:none;" rows="4">Action required...</textarea></p>

											<div class="col-md-12">
												<div class="row">
													<div class="col-md-3 no-padding-l">
														<p class="margin-tb">Assign Action</p>
													</div>
													<div class="col-md-9 no-padding-r">
														<input type="text" class="form-control" name="assign_action">
													</div>
												</div>
											</div>

											<div class="col-md-12">
												<div class="row">
													<div class="col-md-3 no-padding-l">
														<p class="margin-tb">Assign Due</p>
													</div>
													<div class="col-md-9 input-dt no-padding-r">
														<input type="text" class="form-control action_due" name="action_due">
														<span class="calendar-icon"><img src="http://localhost/img/client/calendar-icon.png"></span>
													</div>
												</div>
											</div>

											<div class="clearfix"></div>
										</div>
									</div>
									<div class="col-md-6 no-padding-r">
										<div class="upload-photo file-con img-file-con">
											<div class="fileinput fileinput-new" data-provides="fileinput">
												<div class="fileinput-preview fileinput-exists thumbnail img-con" data-trigger="fileinput"></div>
												<div class="upload-btn">
												<span class="btn btn-outline btn-file btn btn-primary">
												<span class="fileinput-new"><img src="http://localhost/img/client/upload-img.png"></span>
												<span class="fileinput-exists btn btn-primary btn-change"> Change </span>
												<input value="" name="..." autocomplete="off" type="hidden"><input name="image" id="image" accept="image/*" type="file">
												</span>
												<a href="javascript:;" class="btn btn-danger fileinput-exists btn-remove" data-dismiss="fileinput"> Remove </a>
												</div>
                                 </div>
                                 <!--
											<input class="form-control" name="file" type="file">
											<label class="lbl-file" for="file"><img src="http://localhost/img/client/upload-img.png"></label>
											-->
										</div>
									</div>
									<div class="clearfix"></div>
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


<script type="text/javascript">
(function( $ ) {
	$(document).ready(function() {
    	// $('.lbl-file').on('click', function(){
    	// 	$('.file-con input').click();
    	// });
    	$( ".action_due" ).datepicker();
	});
})( jQuery );
</script>
@endsection
