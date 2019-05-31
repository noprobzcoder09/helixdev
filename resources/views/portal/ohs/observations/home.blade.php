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
						<button type="button" role="btn" class="btn btn-primary pull-right top-page-btn" href="javascript:void(0)" data-dialog="createDialog"><span class="add-sign"><img src="{{ url('img/export-icon.png') }}" style="width: 15px;margin-top: -6px;"></span> EXPORT</button>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content registers">
				<div class="row">
					<h5 class="fc-white">OBSERVATION REGISTER</h5>

					<div class="chart">
						<div class="col-md-8">
							<div class="row">
								<h4>OBSERVATIONS COMPLETED</h4>
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
								<img class="img-responsive" src="{{ url('img/ohs/observations/register.png') }}">
							</div>
							<div class="col-md-4 padding-half-l results">
								<img class="img-responsive" src="{{ url('img/ohs/observations/results.png') }}">
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
								<th>TYPE</th>
								<th>CATEGORY</th>
								<th>SUB-CATEGORY</th>
								<th>SEEN</th>
								<th>STATUS</th>
								<th>ACTIONS</th>
								<th>DUE</th>
								<th>OPEN</th>
							</tr>
						</thead>
						<tbody>
							@for ($i = 1; $i <= 10; $i++)
								<tr class="border-bottom">
									<td width="50">#102{{$i}}</td>
									<td>23-01-2017</td>
									<td class="fc-blue">Gary Keith</td>
									@if( $i == 3 || $i == 7 )
										<td><span class="fc-green">SAFE</span></td>
									@else
										<td><span class="fc-red">NEGATIVE</span></td>
									@endif									
									<td class="fc-blue">SAFETY</td>
									<td class="fc-blue" style="width: 129px;">PLANT</td>
									<td class="fc-blue">Trip Hazard over Main Enterance Walk to site</td>
									@if( $i == 2 )
										<td><span class="fc-green">CLOSED OUT</span></td>
									@elseif( $i == 3 )
										<td><span class="fc-red">OVERDUE</span></td>
									@elseif( $i == 7 )
										<td><span class="fc-orange">OPEN</span></td>
									@else
										<td><span class="fc-green">OPEN</span></td>
									@endif	
									<td class="fc-blue">YES</td>
									@if( $i == 2 || $i == 7 )
										<td class="fc-blue">N/A</td>
									@else
										<td class="fc-blue">29-01-2017</td>
									@endif	
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
