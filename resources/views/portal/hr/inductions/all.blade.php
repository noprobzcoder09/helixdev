@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="induction">
		<div class="col-md-9 no-padding">
			<div class="left-container">
				<div class="top-content">
					<div class="col-md-7 col-sm-6 col-xs-6">
						<div class="row">
							<h4>HR > Induction</h4>
						</div>
					</div>

					<div class="col-md-12">
						<div class="row">
							<div class="statistics">
								<div class="top-stats">
									<h3>STATISTICS</h3>
									<div class="stats">
										<img class="img-responsive" src="{{ url('img/induction.png') }}" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="clearfix"></div>
				</div>

				<div class="col-md-12 middle-content">
					<div class="row">
						<div class="content-title">
							<h4>Induction Register</h4>
						</div>
						<div class="search-con">
							<div class="col-md-8 no-padding-l">
								<div class="search">
									<span><i class="fa fa-search" aria-hidden="true"></i></span>
									<input type="text" placeholder="Search">
									<!-- <button type="button" role="btn" class="btn btn-primary">SEARCH</button> -->
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
					<div class="clearfix"></div>
				</div>

				<div class="col-md-12 bottom-content">
					<div class="row">
						<table class="table">
							<thead>
							<tr>
								<th width="100">ID</th>
								<th width="">DATE ADDED</th>
								<th width="">NAME</th>
								<th width="140">INDUCTIONS</th>
								<th width="180">LAST COMPLETION</th>
								<th width="110"></th>
							</tr>
							</thead>
							<tbody>
								@for ($i = 1; $i <= 25; $i++)
									<tr>
										<td>#100{{ $i }}</td>
										<td>23-01-2017</td>
										<td class="color-blue">Garry Keith</td>
										<td class="color-blue">6</td>
										<td class="color-blue">23-01-2017</td>
										<td>
											<button class="btn btn-primary" role="button" type="button">OPEN</button>
										</td>
									</tr>
								@endfor
							</tbody>
						</table>

						<div class="pagination">
							<ul>
								<li><a href="javascript:void(0)">&#60;</a></li>
								<li><a href="javascript:void(0)" class="current">1</a></li>
								<li><a href="javascript:void(0)" >2</a></li>
								<li><a href="javascript:void(0)" >3</a></li>
								<li><a href="javascript:void(0)" >4</a></li>
								<li><a href="javascript:void(0)" >5</a></li>
								<li><a href="javascript:void(0)" >6</a></li>
								<li><a href="javascript:void(0)" >7</a></li>
								<li><a href="javascript:void(0)" >8</a></li>
								<li><a href="javascript:void(0)" >9</a></li>
								<li><a href="javascript:void(0)" >10</a></li>
								<li><a href="javascript:void(0)" >&#62;</a></li>
							</ul>
						</div>

						<div class="clearfix"></div>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>

		<div class="col-md-3">
			<div class="row">
				<div class="right-container">
					<div class="sidebar-usage">
						<div class="usage">

							<div class="col-md-6 col-sm-6 col-xs-6">
								<div class="row">
									<div class="usage-con">
										<p><img src="{{ url('img/statistics.png') }}"></p>
										<p>Inductions Completed<span>1375</span></p>
									</div>
								</div>
							</div>

							<div class="col-md-6 col-sm-6 col-xs-6">
								<div class="row">
									<div class="usage-con">
										<p><img src="{{ url('img/statistics.png') }}"></p>
										<p>This Week<span>125</span></p>
									</div>
								</div>
							</div>

							<div class="col-md-6 col-sm-6 col-xs-6">
								<div class="row">
									<div class="usage-con">
										<p><img src="{{ url('img/statistics.png') }}"></p>
										<p>This Month<span>459</span></p>
									</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="btn-action">
							<button type="button" class="btn btn-primary">INDUCTION MANAGEMENT</button>
							<button type="button" class="btn btn-primary">EXPORT INDUCTION REGISTER</button>
							<button type="button" class="btn btn-primary">EDIT CURRENT INDUCTIONS</button>
							<button type="button" class="btn btn-primary">ADD NEW INDUCTIONS</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="clearfix"></div>
	</div>

@endsection