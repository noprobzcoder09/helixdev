@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="col-md-12 no-padding ohs">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-10 col-sm-10 col-xs-10">
					<div class="row">
						<h4 class="breadcrumbs">OHS &gt; OHS/SAFETY &gt; ALERT MESSAGING HISTORY </h4>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content message">
				<div class="row">
					<table class="table">
						<thead>
							<tr>
								<th>DATE</th>
								<th>SUBJECT</th>
								<th>SENDER</th>
								<th>OPEN</th>
							</tr>
						</thead>
						<tbody>
							@for ($i = 1; $i <= 10; $i++)
								<tr class="border-bottom">
									<td>23-01-2017</td>
									<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
									<td class="fc-blue">Gary Keith, John Smith, George Campbell</td>
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
