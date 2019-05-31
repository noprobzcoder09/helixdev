@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="col-md-12 no-padding ohs">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h4 class="breadcrumbs">OHS &gt; OHS/SAFETY &gt; ALERT GROUP RECIPIENTS</h4>
					</div>
				</div>
				<div class="col-md-3 pull-right">
					<div class="row btn-action">
						<button type="button" role="btn" class="btn btn-primary pull-right top-page-btn" data-toggle="modal" data-target="#addContact"><span class="add-sign">+</span> ADD CONTACT</button>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content registers">
				<div class="row">
					<h5 class="fc-white">ALERT GROUP RECIPIENTS</h5>

					<table class="table content-white">
						<thead>
							<tr>
								<th colspan="5">SUPERVISORS</th>
							</tr>
						</thead>
						<tbody>
							@for ($i = 1; $i <= 5; $i++)
								<tr class="border-bottom">
									<td width="50">#{{$i}}</td>
									<td>Supervisor {{$i}}</td>
									<td width="140"><button class="btn btn-primary btn-full btn-remove" data-toggle="modal" data-target="#removeContact">REMOVE</button></td>
								</tr>
							@endfor
						</tbody>
					</table>

					<table class="table content-white">
						<thead>
							<tr>
								<th colspan="5">LEADING HANDS</th>
							</tr>
						</thead>
						<tbody>
							@for ($i = 1; $i <= 5; $i++)
								<tr class="border-bottom">
									<td width="50">#{{$i}}</td>
									<td>Leading Hands {{$i}}</td>
									<td width="140"><button class="btn btn-primary btn-full btn-remove" data-toggle="modal" data-target="#removeContact">REMOVE</button></td>
								</tr>
							@endfor
						</tbody>
					</table>

					<table class="table content-white">
						<thead>
							<tr>
								<th colspan="5">MANAGEMENT TEAM</th>
							</tr>
						</thead>
						<tbody>
							@for ($i = 1; $i <= 5; $i++)
								<tr class="border-bottom">
									<td width="50">#{{$i}}</td>
									<td>Management Team {{$i}}</td>
									<td width="140"><button class="btn btn-primary btn-full btn-remove" data-toggle="modal" data-target="#removeContact">REMOVE</button></td>
								</tr>
							@endfor
						</tbody>
					</table>

					<div class="clearix"></div>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
	<div class="clearfix"></div>

	<!-- Modal -->
	<div class="modal fade" id="addContact" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>ADD CONTACT</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<i class="fa fa-times" aria-hidden="true"></i>
					</button>
				</div>
	      <div class="modal-body">
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">NAME</p>
					</div>
					<div class="col-md-9">
						<input class="form-control" name="contact_name">
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">GROUP</p>
					</div>
					<div class="col-md-9">
						<select name="project" class="form-control" placeholder="PLEASE SELECT">
							<option value="SUPERVISOR">SUPERVISOR</option>
							<option value="LEADING HAND">LEADING HAND</option>
							<option value="MANAGEMENT">MANAGEMENT</option>
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

	<div class="modal fade" id="removeContact" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content" style="width: 50%;">
				<div class="modal-header">
					<h4>REMOVE CONTACT</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<i class="fa fa-times" aria-hidden="true"></i>
					</button>
				</div>
	      <div class="modal-body">
				<div class="form-group margin-b">
					<div class="col-md-12">
						<div class="row">
							<p>Are you sure you want to remove this contact?</p>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
        <div class="modal-footer text-center no-padding-b">
        	<div class="row">
						<button class="btn btn-primary btn-49 pull-left" data-dismiss="modal">YES</button>
						<button class="btn btn-primary btn-49 pull-right" data-dismiss="modal">NO</button>
					</div>
        </div>
				</div>
	    </div>
		</div>
	</div>


@endsection
