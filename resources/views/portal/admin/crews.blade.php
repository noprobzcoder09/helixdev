@extends('layout.portal')

@section('title', 'Admin - Crews')

@section('content')

	<div class="col-md-12 no-padding admin">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h4 class="breadcrumbs">ADMIN &gt; CREWS </h4>
					</div>
				</div>
				<div class="col-md-3 pull-right">
					<div class="row btn-action">
						<button type="button" class="btn btn-primary pull-right top-page-btn" data-toggle="modal" data-target="#addProject">
							<span class="add-sign">+</span> ADD NEW CREW
						</button>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content message">
				<div class="row">
					<table class="table">
						<thead>
							<tr>
								<th>CREW NAME</th>
								<th>PROJECT</th>
								<th>MEMBERS</th>
								<th>DATE CREATED</th>
								<th>DATE MODIFIED</th>
								<th>OPEN</th>
							</tr>
						</thead>
						<tbody>
							@for ($i = 1; $i <= 10; $i++)
								<tr class="border-bottom">
									<td>CREW NAME {{$i}}</td>
									<td class="fc-blue">PROJECT NAME {{$i}}</td>
									<td class="fc-blue">1{{$i}}</td>
									<td class="fc-blue">23-01-2017</td>
									<td class="fc-blue">23-01-2017</td>
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

	<div class="modal fade" id="addProject" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>ADD NEW CREW</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<i class="fa fa-times" aria-hidden="true"></i>
					</button>
				</div>
	      <div class="modal-body">
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">CREW NAME</p>
					</div>
					<div class="col-md-9">
						<input class="form-control" name="project_name">
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">PROJECT</p>
					</div>
					<div class="col-md-9">
						<select name="project" class="form-control" placeholder="PLEASE SELECT">
							<option value="PROJECT A">PROJECT A</option>
							<option value="PROJECT B">PROJECT B</option>
							<option value="PROJECT C">PROJECT C</option>
							<option value="PROJECT D">PROJECT D</option>
						</select>
					</div>
					<div class="clearfix"></div>
				</div>
        <div class="modal-footer text-center no-padding-b">
          <button class="btn btn-primary btn-half" data-dismiss="modal">ADD</button>
        </div>
				</div>
	    </div>
		</div>
	</div>

@endsection