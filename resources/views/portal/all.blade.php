@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="col-md-9 no-padding">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h4>HOME</h4>
					</div>
				</div>
				<div class="col-md-5 col-sm-6 col-xs-6">
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
			<div class="col-md-12">
				<div class="row">

					<div class="col-md-12">
						<div class="row statistics">
							<div class="top-stats">
								<h3>STATISTICS</h3>
								<div class="stats">
									<img class="img-responsive" src="../../img/top-stats.png" />
								</div>
							</div>
						</div>
					</div>

					<div class="col-md-4 no-padding-l bottom-stats">
						<div class="statistics">
							<div class="stats-con">
								<h4>STATISTICS</h4>
								<div class="stats">
									<img class="img-responsive" src="../../img/stat1.png" />
								</div>
							</div>
						</div>
						<button tyle="button" role="button" class="btn">SUB-CONTRACTORS</button>
					</div>

					<div class="col-md-4 padding-half bottom-stats">
						<div class="statistics">
							<div class="stats-con">
								<h4>STATISTICS</h4>
								<div class="stats">
									<img class="img-responsive" src="../../img/stat2.png" />
								</div>
							</div>
						</div>
						<button tyle="button" role="button" class="btn">HR</button>
					</div>

					<div class="col-md-4 no-padding-r bottom-stats">
						<div class="statistics">
							<div class="stats-con">
								<h4>STATISTICS</h4>
								<div class="stats">
									<img class="img-responsive" src="../../img/stat3.png" />
								</div>
							</div>
						</div>
						<button tyle="button" role="button" class="btn">OHS</button>
					</div>

				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>

	<div class="col-md-3">
		<div class="row">
			<div class="right-container">
				<div class="sidebar-usage">
					<h3>Usage Statistics</h3>
					<div class="usage">

						@for ($i = 1; $i <= 5; $i++)
						<div class="col-md-6 col-sm-6 col-xs-6">
							<div class="row">
								<div class="usage-con">
									<p><img src="{{ url('img/statistics.png') }}"></p>
									<p>Statistic # {{ $i }}<span>{{ $i + 50 }}</span></p>
								</div>
							</div>
						</div>
						@endfor
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="clearfix"></div>
	

@endsection