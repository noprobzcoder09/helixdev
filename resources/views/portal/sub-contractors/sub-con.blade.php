@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="col-md-12 no-padding">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-8 col-sm-6 col-xs-6">
					<div class="row">
						<h4>SUB-CONTRACTORS</h4>
					</div>
				</div>
				<div class="col-md-4 pull-right">
					<div class="row btn-action">
						<button type="button" role="btn" class="btn btn-primary pull-left"><i class="fa fa-plus" aria-hidden="true"></i> ADD NEW</button>
						<button type="button" role="btn" class="btn btn-primary pull-right"><i class="fa fa-file-pdf-o" aria-hidden="true"></i> EXPORT</button>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="middle-content">
				<div class="search-con">
					<div class="col-md-8 no-padding-l">
						<div class="search">
							<span><i class="fa fa-search" aria-hidden="true"></i></span>
							<input type="text" placeholder="Search">
							<button type="button" role="btn" class="btn btn-primary">SEARCH</button>
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class="filter">
								<select class="chosen-select" data-placeholder="FILTER PROJECT">
									<option value=""></option>
									@for ($i = 1; $i < 5; $i++)
										<option value="">Option {{ $i }}</option>
									@endfor
								</select>
							</div>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
			<div class="col-md-12">
				<div class="row">
					<div class="bottom-content">
						<table class="table">
							<thead>
							<tr>
								<th>COMPANY</th>
								<th width="110">CONTACT</th>
								<th width="150">PUBLIC LIABILITY</th>
								<th width="140">WORK COVER</th>
								<th width="145">STATUS</th>
								<th width="100">APPROVE</th>
								<th width="90">OPEN</th>
							</tr>
							</thead>
							<tbody>
								@for ($i = 1; $i < 10; $i++)
									<tr>
										<td>ACME LANDSCAPING</td>
										<td>1300 123 456</td>
										<td class="color-blue">YES</td>
										<td class="color-blue">YES</td>
										@if( $i == 3 )
											<td class="color-red">DOCS EXPIRED</td>
										@else
											<td class="color-blue">DOCS PROVIDED</td>
										@endif
										<td class="color-blue">YES</td>
										<td>
											<button class="btn btn-primary" role="button" type="button">OPEN</button>
										</td>
									</tr>
								@endfor
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
	<div class="clearfix"></div>
	

@endsection