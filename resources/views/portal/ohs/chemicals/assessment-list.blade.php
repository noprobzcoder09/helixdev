@extends('layout.portal')

@section('title', 'Client')

@section('content') 

	<div class="col-md-12 no-padding chemicals">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-8 col-sm-6 col-xs-6">
					<div class="row">
						<h4 class="breadcrumbs">OHS &gt; CHEMICAL MANAGEMENT &gt; CHEMICAL ASSESSMENT &gt; ASSESSMENT LIST</h4>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content">
				<div class="row">
					<h5 class="fc-white">MEK (METHYL ETHYL KEROSENE)</h5>
	
					<table class="table">
						<thead>
							<tr>
								<th width="140">ASSESSED BY</th>
								<th class="t-align-center">RISK (CURRENT/MAX)</th>
								<th>LIKELIHOOD (CURRENT/MAX)</th>
								<th class="t-align-center">MATRIX LEVEL (CURRENT/MAX)</th>
								<th class="t-align-center">ACTION</th>
								<th class="t-align-center">ASSESSMENT DATE</th>
								<th class="t-align-center">DETAIL</th>
							</tr>
						</thead>
						<tbody>
							@for ($i = 1; $i <= 10; $i++)
								<tr class="border-bottom">
									<td>John Doe</td>
									<td>First Aid Injury / Short Term Effect and Small Area (1/5)</td>
									<td>Sometimes - Once per year (3/5)</td>
									@if( $i == 3 )
										<td class="t-align-center fc-red">EXTREME</td>
									@else
										<td class="t-align-center">Moderate</td>
									@endif
									<td class="t-align-center">YES</td>
									<td class="fc-blue t-align-center">Dec 01, 2017</td>
									<td><button class="btn btn-primary btn-full">OPEN</button></td>
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
