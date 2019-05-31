@extends('layout.portal')

@section('title', 'Client')

@section('content') 

	<div class="col-md-12 no-padding chemicals">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-8 col-sm-6 col-xs-6">
					<div class="row">
						<h4 class="breadcrumbs">OHS &gt; CHEMICAL MANAGEMENT</h4>
					</div>
				</div>
				<div class="col-md-4 pull-right">
					<div class="row btn-action">
                    <button type="button" role="btn" class="btn btn-primary pull-right top-page-btn"><span><img src="{{ url('img/export2-icon.png') }}" style="width: 15px;"></span> EXPORT</button>
                    <a type="button" role="btn" class="btn btn-primary pull-right top-page-btn with-margin-side">+ ADD NEW</a>
                </div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content">
				<div class="row">
					<h5 class="fc-white">CHEMICAL MANAGEMENT</h5>
	
					<table class="table">
						<thead>
							<tr>
								<th>SUBSTANCE</th>
								<th>TYPE</th>
								<th>DATE</th>
								<th>COMPANY</th>
								<th>HAZ CHEM</th>
								<th class="t-align-center">MSDS</th>
								<th>OPEN</th>
							</tr>
						</thead>
						<tbody>
							@for ($i = 1; $i <= 10; $i++)
								<tr class="border-bottom">
									<td>WD 4.0</td>
									<td>Solvent</td>
									@if( $i == 3 )
										<td class="fc-blue">23 - 01 - 2017 <span><img src="{{ url('img/info-icon.png') }}"></span></td>
									@else
										<td class="fc-blue">23 - 01 - 2017</td>
									@endif
									<td class="fc-blue">WD - 40 Company Australia</td>
									<td class="fc-blue">2YE</td>
									<td class="fc-blue t-align-center"><span class="fs-20 lh-10">+</span><br/><span class="fs-20 lh-10">-</span></td>
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
