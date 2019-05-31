	@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="col-md-12 no-padding ohs online-training">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h4 class="breadcrumbs">OHS &gt; SKILLS</h4>
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
					<h5 class="fc-white">ONLINE TRAINING REGISTER</h5>

					<div class="chart">
						<div class="col-md-12">
							<div class="row">
								<h4>TRAINING COMPLETED</h4>
							</div>
						</div>
						<div class="clearfix"></div>
						<hr>

						<div class="chart-content">
							<div class="col-md-12 padding-half-r">
								<canvas id="barChart"></canvas>
							</div>
							<div class="clearfix"></div>
						</div>

					</div>

					<div class="col-md-12 middle-content">
						<div class="row">
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

					<table class="table content-white">
						<thead>
							<tr>
								<th>ID</th>
								<th>DATE</th>
								<th>EMPLOYEE</th>
								<th>TITLE</th>
								<th width="60">CERTIFICATE</th>
						</thead>
						<tbody>
							@for ($i = 1; $i <= 10; $i++)
								<tr class="border-bottom">
									<td>#102{{$i}}</td>
									<td class="fc-blue">23-01-2017</td>
									<td class="fc-blue">Gary Keith</td>								
									@if( $i % 2 == 0 )
										<td class="fc-blue">EWP</td>
									@else
										<td class="fc-blue">Manual Handling</td>
									@endif
									<td><button class="btn btn-primary">DOWNLOAD</button></td>
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

<script type="text/javascript">
	(function( $ ) {
		var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		var bgColor = ['#023C6F', '#023C6F', '#023C6F', '#023C6F', '#023C6F', '#023C6F', '#023C6F', '#023C6F', '#023C6F', '#023C6F', '#023C6F', '#023C6F']
		var ctx = document.getElementById("barChart");
		var myBarChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	    	labels: months,
	    	datasets: [{
	    		data: [58, 18, 24, 37, 28, 35, 25, 31, 37, 21, 21, 27],
	    		backgroundColor: bgColor,
	    	}],
	    },
	    options: {
	    	legend: false,
        scales: {
        	xAxes: [{
            gridLines: {
              display: false
            } 
          }],
          yAxes: [{
          	scaleShowLabels : false,
            ticks: {
              beginAtZero:true
            },
            display: true,
            gridLines: {
                display: true,
                offsetGridLines: false
            },
          }]
        }
    	}
		});
	})( jQuery );
</script>
@endsection