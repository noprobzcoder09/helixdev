@extends('layout.client')

@section('title', 'Safety Videos')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">
				<span class="back"><img class="img-responsive" src="{{ url('img/client/arrow-back.png') }}"> <label>Back</label></span>

				<div class="sub-head">
					<div class="col-md-12">
						<p>Inspections</p>
					</div>
				</div>

				<div class="inspections-content col-md-12">

					<div class="inspections col-md-6 col-sm-6 padding-half-r">
						<h4>Safety/OHS Inspections</h4>
						<a href="javscript:void(0)">Safety Walk</a>
						<a href="javscript:void(0)">Site Inspection</a>
						<a href="javscript:void(0)">SWMS Review</a>
					</div>

					<div class="completed col-md-6 col-sm-6 padding-half-l">
						<h4>Completed Inductions</h4>
						<div class="table-responsive">
							<table class="table">
								<tr>
									<td width="60%">Site Inspection</td>
									<td>Completed:<br/>12-07-2016</td>
								</tr>
								<tr>
									<td width="60%">Fatique Assessment</td>
									<td>Completed:<br/>12-07-2016</td>
								</tr>
								<tr>
									<td width="60%">Site Inspection</td>
									<td>Completed:<br/>12-07-2016</td>
								</tr>
							</table>
						</div>
					</div>

					<div class="clearfix"></div>
				</div>

				<div class="sub-head">
					<div class="col-md-12">
						<p class="inspections">Outstanding Inspection Tasks</p>
					</div>
				</div>

				<div class="inspections-content col-md-12">

					<div class="col-md-12">
						<div class="row">
							<div class="table-responsive">
								<table class="table">
									<thead>
										<tr>
											<th>Type</th>
											<th>Date</th>
											<th>Sighted</th>
											<th>Assigned</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td data-text="Type">Site Inspection</td>
											<td data-text="Date">02-01-2017</td>
											<td data-text="Sighted">SWMS not signed</td>
											<td data-text="Assigned">John smith</td>
											<td>
												<button class="btn-action btn">Action</button>
											</td>
										</tr>
										<tr>
											<td data-text="Type">Site Inspection</td>
											<td data-text="Date">02-01-2017</td>
											<td data-text="Sighted">SWMS not signed</td>
											<td data-text="Assigned">John smith</td>
											<td>
												<button class="btn-action btn">Action</button>
											</td>
										</tr>
										<tr>
											<td data-text="Type">Site Inspection</td>
											<td data-text="Date">02-01-2017</td>
											<td data-text="Sighted">SWMS not signed</td>
											<td data-text="Assigned">John smith</td>
											<td>
												<button class="btn-action btn">Action</button>
											</td>
										</tr>
										<tr>
											<td data-text="Type">Site Inspection</td>
											<td data-text="Date">02-01-2017</td>
											<td data-text="Sighted">SWMS not signed</td>
											<td data-text="Assigned">John smith</td>
											<td>
												<button class="btn-action btn">Action</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>

					<div class="clearfix"></div>
				</div>

			</div>

		</div>
	</div>

	<div class="clearfix"></div>
	
<script type="text/javascript">
(function( $ ) {
    $(document).ready(function() {
	});
})( jQuery );
</script>
@endsection