@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="col-md-12 no-padding ohs">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h4 class="breadcrumbs">OHS &gt; OHS/SAFETY &gt; ALERT MESSAGING</h4>
					</div>
				</div>
				<div class="col-md-3 pull-right">
					<div class="row btn-action">
						<button type="button" role="btn" class="btn btn-primary pull-right top-page-btn" href="javascript:void(0)"><span class="add-sign"><img src="{{ url('img/message-icon.png') }}" style="width: 18px;"></span> SEE ALERT MESSAGING HISTORY</button>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content alert">
				<div class="row">
					<h5 class="fc-white">ALERT</h5>

					<h4>SEND TO</h4>
					<div class="message-body">
						<div class="checkbox-group">
							<div class="check">
								<input type="checkbox" name="send_supervisor" value="Send to Supervisor" class="form-control">
								<label></label>
								<p>SEND TO SUPERVISOR</p>
							</div>
							<div class="check">
								<input type="checkbox" name="send_leading_hands" value="Send to Leading Hands" class="form-control">
								<label></label>
								<p>SEND TO LEADING HANDS</p>
							</div>
							<div class="check">
								<input type="checkbox" name="send_management_team" value="Send to Management Team" class="form-control">
								<label></label>
								<p>SEND TO MANAGEMENT TEAM</p>
							</div>
						</div>

						<div class="col-md-12 m-top-10">
							<div class="row">
								<div class="col-md-9 padding-half-r ui-widget">
									<input type="text" class="form-control input-recipient" name="individual_recipient">
								</div>
								<div class="col-md-3 padding-half-l">
									<button class="btn btn-primary btn-full"><span class="icon"><i class="fa fa-plus" aria-hidden="true"></i></span> ADD INDIVIDUAL RECIPIENT</button>
								</div>
							</div>
						</div>

						<div class="clearfix"></div>
					</div>

					<h4 class="no-border-radius">DELIVERY METHOD</h4>
					<div class="message-body">
						<div class="checkbox-group">
							<div class="check">
								<input type="checkbox" name="send_sms" value="Send via SMS" class="form-control">
								<label></label>
								<p>SEND via SMS</p>
							</div>
							<div class="check">
								<input type="checkbox" name="send_email" value="Send via Email" class="form-control">
								<label></label>
								<p>SEND via Email</p>
							</div>
							<div class="check">
								<input type="checkbox" name="send_portal" value="Send via Portal" class="form-control">
								<label></label>
								<p>SEND via Portal</p>
							</div>
						</div>

						<div class="col-md-12 m-top-10">
							<div class="row">
								<div class="col-md-1 padding-half-r">
									<p>SUBJECT</p>
								</div>
								<div class="col-md-11 padding-half-l">
									<input type="text" class="form-control" name="subject">
								</div>
							</div>
						</div>

						<div class="col-md-12 m-top-10">
							<div class="row">
								<div class="col-md-1 padding-half-r">
									<p>SHORT TEXT</p>
								</div>
								<div class="col-md-11 padding-half-l">
									<input type="text" class="form-control" name="short_text">
								</div>
							</div>
						</div>

						<div class="col-md-12">
							<div class="row">
								<div class="col-md-1 padding-half-r">
									<p>BODY</p>
								</div>
								<div class="col-md-11 padding-half-l">
									<textarea rows="7" name="body" class="form-control" style="resize: none;"></textarea>
								</div>
							</div>
						</div>
						<div class="col-md-12">
							<div class="row">
								<div class="col-md-1 padding-half-r"></div>
								<div class="col-md-11 padding-half-l">
									<div class="col-md-6">
										<div class="row">

											<div class="fileinput fileinput-new" data-provides="fileinput">
												<span class="btn btnFileUpload ng-scope" ng-if="!subcon.checkDoc(doc)">
													<span class="fileinput-new">BROWSE</span>
													<span class="fileinput-exists">Change</span>
													<input id="required_doc_public_liability" accept="image/jpeg,image/gif,image/png,application/pdf" type="file">
													<span class="fileinput-filename"></span>
												</span>
												<span class="fileinput-txt">FILE TO UPLOAD</span>
												<!--p><span class="fileinput-txt">No File Selected</span></p-->
											</div>

										</div>
									</div>
									<div class="col-md-6">
										<div class="row">
											<button class="btn btn-primary pull-right">Preview Message</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="clearfix"></div>
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
		var availableTags = [
	      "ActionScript",
	      "AppleScript",
	      "Asp",
	      "BASIC",
	      "C",
	      "C++",
	      "Clojure",
	      "COBOL",
	      "ColdFusion",
	      "Erlang",
	      "Fortran",
	      "Groovy",
	      "Haskell",
	      "Java",
	      "JavaScript",
	      "Lisp",
	      "Perl",
	      "PHP",
	      "Python",
	      "Ruby",
	      "Scala",
	      "Scheme"
	   ];
    	$('.input-recipient').autocomplete({
			source: availableTags
    	});
	});
})( jQuery );
</script>
@endsection
