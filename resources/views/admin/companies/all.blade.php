@extends('layout.admin')

@section('title', 'Client')

@section('content')

	<div class="col-md-9">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h3>Client List</h3>
					</div>
				</div>
				<div class="col-md-5 col-sm-6 col-xs-6">
					<div class="row">
						<div class="search">
							<input class="form-control" name="search" placeholder="Search">
							<span><i class="fa fa-search" aria-hidden="true"></i></span>
						</div>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12">
				<div class="row">
					<table class="table">
						<thead>
						<tr>
							<th>ID</th>
							<th>CREATION DATE</th>
							<th>COMPANY</th>
							<th>MODULES</th>
							<th>EDIT</th>
						</tr>
						</thead>
						<tbody>
							@for ($i = 0; $i < 10; $i++)
								<tr>
									<td># 1029</td>
									<td>23 - 01 - 2015</td>
									<td class="company">Prime Projects Constructions</td>
									<td>6</td>
									<td>
										<button class="open">EDIT</button>
									</td>
								</tr>
							@endfor
						</tbody>
					</table>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>

	<div class="col-md-3">
		<div class="right-container">
			<div class="action-button">
				<button class="add"><i class="fa fa-plus" aria-hidden="true"></i> ADD NEW CLIENT</button>
			</div>
			<div class="sidebar-usage">
				<h3>Usage Statistics</h3>
				<div class="usage">
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="row">
							<div class="usage-con">
								<p><img src="{{ url('img/client.png') }}"></p>
								<p>Client<span>1,029</span></p>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="row">
							<div class="usage-con">
								<p><img src="{{ url('img/users.png') }}"></p>
								<p>Users<span>203,206</span></p>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="row">
							<div class="usage-con">
								<p><img src="{{ url('img/module.png') }}"></p>
								<p>Module<span>6</span></p>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="row">
							<div class="usage-con">
								<p><img src="{{ url('img/avg-module.png') }}"></p>
								<p>Avg Module<span>4</span></p>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="row">
							<div class="usage-con">
								<p><img src="{{ url('img/daily-hits.png') }}"></p>
								<p>Daily Hits<span>1028</span></p>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6">
						<div class="row">
							<div class="usage-con">
								<p><img src="{{ url('img/weekly-hits.png') }}"></p>
								<p>Weekly Hits<span>7029</span></p>
							</div>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</td>
	</div>

	<div class="clearfix"></div>
	

@endsection