@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="col-md-12 no-padding ohs">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h4 class="breadcrumbs">OHS &gt; OHS/SAFETY &gt; CORRECTIVE ACTIONS REGISTER</h4>
					</div>
				</div>
				<div class="col-md-3 pull-right">
					<div class="row btn-action">
						<button type="button" role="btn" class="btn btn-primary pull-right top-page-btn" href="javascript:void(0)" data-dialog="createDialog"><span class="add-sign"><img src="{{ url('img/export-icon.png') }}" style="width: 15px;margin-top: -6px;"></span> EXPORT</button>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content registers">
				<div class="row">
					<h5 class="fc-white">CORRECTIVE ACTIONS REGISTER</h5>

					<div class="chart">
						<div class="col-md-8">
							<div class="row">
								<h4>Participation</h4>
							</div>
						</div>
						<div class="col-md-4">
							<div class="row">
								<h4>RESULTS</h4>
							</div>
						</div>

						<div class="clearfix"></div>
						<hr>

						<div class="chart-content">
							<div class="col-md-8 padding-half-r">
								<img class="img-responsive" src="{{ url('img/ohs/corrective-actions/chart.png') }}">
							</div>
							<div class="col-md-4 padding-half-l results">
								<img class="img-responsive" src="{{ url('img/ohs/corrective-actions/statistics.png') }}" style="padding: 39px 22px;">
							</div>
							<div class="clearfix"></div>
						</div>

					</div>

					<table class="table content-white">
						<thead>
							<tr>
								<th>ID</th>
								<th>DATE</th>
								<th>NAME</th>
								<th>RESULT</th>
								<th>TYPE</th>
								<th>SEEN</th>
								<th>STATUS</th>
								<th>DUE</th>
								<th>OPEN</th>
							</tr>
						</thead>
						<tbody>
							@for ($i = 1; $i <= 10; $i++)
								<tr class="border-bottom">
									<td width="50">#102{{$i}}</td>
									<td>23-01-2017</td>
									<td>Gary Keith</td>									
									<td class="fc-red">HAZARD</td>
									@if( $i % 2 == 0 )
										<td class="fc-blue">Observation</td>
									@else
										<td class="fc-blue">Inspection</td>
									@endif
									<td>Trip Hazard over Main Enterance Walk to site</td>
									@if( $i == 1 )
										<td><span class="fc-green">OPEN</span></td>
									@elseif( $i == 3 )
										<td><span class="fc-red">OVERDUE</span></td>
									@elseif( $i == 7 )
										<td><span class="fc-orange">IN PROGRESS</span></td>
									@else
										<td><span class="fc-green">OPEN</span></td>
									@endif	
									<td class="fc-green">29-01-2017</td>	
									<td><button class="btn btn-primary">OPEN</button></td>
								</tr>
							@endfor
						</tbody>
					</table>

					<div class="pagination">
						<ul>
							<li><a href="javascript:void(0);">&#60;</a></li>
							<li><a href="javascript:void(0);" class="active">1</a></li>
							<li><a href="javascript:void(0);">&#62;</a></li>
						</ul>
					</div>

					<div class="clearix"></div>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
	<div class="clearfix"></div>


@endsection
