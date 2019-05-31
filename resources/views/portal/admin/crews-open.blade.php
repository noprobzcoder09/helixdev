@extends('layout.portal')

@section('title', 'Admin - Crews')

@section('content')

	<div class="col-md-12 no-padding admin">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-10 col-sm-10 col-xs-10">
					<div class="row">
						<h4 class="breadcrumbs">ADMIN &gt; CREWS &gt; CREW NAME 1</h4>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content message">
				<div class="row">
					<h5 class="fc-white"><strong>CREW NAME 1</strong></h5>
					<h5 class="fc-white">PROJECT: PROJECT NAME</h5>

					<table class="table">
						<thead>
							<tr>
								<th width="500">NAME</th>
								<th width="500">ADDED ON</th>
								<th>OPEN</th>
							</tr>
						</thead>
						<tbody>
							@for ($i = 1; $i <= 10; $i++)
								<tr class="border-bottom">
									<td class="fc-blue">NAME {{$i}}</td>
									<td class="fc-blue">2{{$i}}-01-2017</td>
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