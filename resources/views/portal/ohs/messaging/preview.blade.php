@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="col-md-12 no-padding ohs">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-12 col-sm-12 col-xs-12">
					<div class="row">
						<h4 class="breadcrumbs">OHS &gt; OHS/SAFETY &gt; MESSAGING</h4>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content">
				<div class="row">
					<h5 class="fc-white">MESSAGE PREVIEW</h5>

					<div class="message-body preview">
						<div class="recipient-con clearfix">
							<div class="col-md-4">
								<div class="row">
									<h4 class="br-top-left">GROUP RECIPIENTS</h4>
									<div class="recipient">
										<div class="cell">
											<p>SUPERVISOR</p>
											<p>LEADING HANDS</p>
											<p>MANAGEMENT TEAM</p>
										</div>
									</div>
								</div>
							</div>

							<div class="col-md-4">
								<div class="row">
									<h4 class="no-border-radius">OTHER RECIPIENTS</h4>
									<div class="recipient">
										<div class="cell">
											<p>JOHN SMITH</p>
											<p>MIKE TONES</p>
											<p>GARY KEITH</p>
											<p>GEORGE CAMPBELL</p>
										</div>
									</div>
								</div>
							</div>

							<div class="col-md-4">
								<div class="row">
									<h4 class="br-top-right">DELIVERY METHOD</h4>
									<div class="recipient">
										<div class="cell">
											<p>SMS, Email, Portal</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<h4 class="no-border-radius">MESSAGE</h4>
					<div class="message-body">
						<table class="table">
							<tr>
								<td>SUBJECT</td>
								<td>Fire Extinguisher Training</td>
							</tr>
							<tr>
								<td>BODY</td>
								<td>Fire Extinguisher Training will be help at the Smith Rd Yard at 7am on Friday 27th Jan. Please notufy your supervisor if you cannot attend</td>
							</tr>
						</table>
					</div>

					<div class="col-md-12">
						<div class="row">
							<div class="message-body btn-action">
								<button class="btn btn-primary pull-right">SEND MESSAGE</button>
								<div class="clearfix"></div>
							</div>
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
