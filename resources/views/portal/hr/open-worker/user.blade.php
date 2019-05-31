@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="onboarding open-worker">
		<div class="col-md-12 no-padding">
			<div class="left-container">
				<div class="top-content">
					<div class="col-md-9 col-sm-6 col-xs-6">
						<div class="row">
							<h4 class="breadcrumbs">HR > OPEN WORKER
							</h4>
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
									<p class="fc-blue">LIST OF INDUCTIONS COMPLETED</p>

									<div class="row">
										<table class="bordered">
											<thead>
												<tr>
													<td class="fc-blue">Title</td>
													<td class="fc-blue">Date Completed</td>
												</tr>
											</thead>
											<tbody>
												@for($i = 1; $i < 9; $i++)
													<tr>
														<td width="70%">Induction Title Here</td>
														<td width="30%">27/11/16</td>
													</tr>
												@endfor
											</tbody>
										</table>
									</div>
									<div class="clearfix"></div>
								</div>

								<div class="col-md-4">
									<div class="col-md-12">
										<div class="row">

											<div class="img-con">
												<img class="img-responsive" src="{{ url('img/default-profile.png') }}">
											</div>

											<div class="btn-action">
												<button type="button" class="btn btn-primary">VIEW USER</button>
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
	<script>
		$( function() {
			$('.date-picker').datepicker();
			$(".chosen-select").chosen();
			$("#input-id").fileinput();
	  } );
   </script>
@endsection
