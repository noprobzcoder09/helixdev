@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="col-md-12 no-padding">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-8 col-sm-6 col-xs-6">
					<div class="row">
						<h4 class="breadcrumbs">HR > WORKFORCE MANAGEMENT</h4>
					</div>
				</div>
				<div class="col-md-4 pull-right">
					<div class="row btn-action">
						<button type="button" role="btn" class="btn btn-primary pull-right"><i class="fa fa-plus" aria-hidden="true"></i> ADD NEW</button>
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
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class="filter">
								<select class="chosen-select" data-placeholder="FILTER PROJECT">
									<option value="">Filter Project</option>
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
								<th>NAME</th>
								<th>SUB-CONTRACTOR</th>
								<th>CONTACT NUMBER</th>
								<th>EMAIL</th>
								<th width="145">OPEN</th>
							</tr>
							</thead>
							<tbody>
								@for ($i = 1; $i < 10; $i++)
									<tr>
										<td>GARY BENNETT</td>
										<td>NONE</td>
										<td class="color-blue">0476 123 456</td>
										<td class="color-blue">g.bennett@gmail.com</td>
										<td class="color-blue"><button class="btn btn-primary">OPEN</button></td>
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
