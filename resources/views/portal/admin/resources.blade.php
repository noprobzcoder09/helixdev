@extends('layout.portal')

@section('title', 'Admin - Resources')

@section('content')

	<div class="col-md-12 no-padding admin">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h4 class="breadcrumbs">ADMIN &gt; RESOURCES </h4>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content message">
				<div class="row">
					<table class="table">
						<thead>
							<tr>
								<th width="80%">COMPANY POLICIES</th>
								<th><button class="btn btn-primary btn-full btn-addResources" data-toggle="modal" data-target="#addCompanyPolicies">ADD</button></th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-bottom">
								<td>HR Policy</td>
								<td><button class="btn btn-primary btn-full" data-toggle="modal" data-target="#editCompanyPolicies">EDIT</button></td>
							</tr>
							<tr class="border-bottom">
								<td>OHS Policy</td>
								<td><button class="btn btn-primary btn-full" data-toggle="modal" data-target="#editCompanyPolicies">EDIT</button></td>
							</tr>
							<tr class="border-bottom">
								<td>Fitness for Work Policy</td>
								<td><button class="btn btn-primary btn-full" data-toggle="modal" data-target="#editCompanyPolicies">EDIT</button></td>
							</tr>
							<tr class="border-bottom">
								<td>LECH Policy</td>
								<td><button class="btn btn-primary btn-full" data-toggle="modal" data-target="#editCompanyPolicies">EDIT</button></td>
							</tr>
						</tbody>
					</table>

					<table class="table">
						<thead>
							<tr>
								<th width="80%">USEFUL LINKS</th>
								<th><button class="btn btn-primary btn-full btn-addResources" data-toggle="modal" data-target="#addUsefulLinks">ADD</button></th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-bottom">
								<td>Company Website</td>
								<td><button class="btn btn-primary btn-full" data-toggle="modal" data-target="#editUsefulLinks">EDIT</button></td>
							</tr>
							<tr class="border-bottom">
								<td>Link #1</td>
								<td><button class="btn btn-primary btn-full" data-toggle="modal" data-target="#editUsefulLinks">EDIT</button></td>
							</tr>
							<tr class="border-bottom">
								<td>Link #2</td>
								<td><button class="btn btn-primary btn-full" data-toggle="modal" data-target="#editUsefulLinks">EDIT</button></td>
							</tr>
							<tr class="border-bottom">
								<td>Link #3</td>
								<td><button class="btn btn-primary btn-full" data-toggle="modal" data-target="#editUsefulLinks">EDIT</button></td>
							</tr>
						</tbody>
					</table>

					<table class="table">
						<thead>
							<tr>
								<th width="80%">FORMS</th>
								<th><button class="btn btn-primary btn-full btn-addResources" data-toggle="modal" data-target="#addForms">ADD</button></th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-bottom">
								<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
								<td><button class="btn btn-primary btn-full" data-toggle="modal" data-target="#editForms">EDIT</button></td>
							</tr>
							<tr class="border-bottom">
								<td>Aenean tincidunt orci sit amet purus mollis</td>
								<td><button class="btn btn-primary btn-full" data-toggle="modal" data-target="#editForms">EDIT</button></td>
							</tr>
							<tr class="border-bottom">
								<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
								<td><button class="btn btn-primary btn-full" data-toggle="modal" data-target="#editForms">EDIT</button></td>
							</tr>
							<tr class="border-bottom">
								<td>Lorem ipsum dolor sit amet.</td>
								<td><button class="btn btn-primary btn-full" data-toggle="modal" data-target="#editForms">EDIT</button></td>
							</tr>
						</tbody>
					</table>

					<table class="table">
						<thead>
							<tr>
								<th width="80%">PLANS &amp; SPECIFICATIONS</th>
								<th><button class="btn btn-primary btn-full btn-addResources" data-toggle="modal" data-target="#addPlans">ADD</button></th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-bottom">
								<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
								<td><button class="btn btn-primary btn-full" data-toggle="modal" data-target="#editPlans">EDIT</button></td>
							</tr>
							<tr class="border-bottom">
								<td>Aenean tincidunt orci sit amet purus mollis</td>
								<td><button class="btn btn-primary btn-full" data-toggle="modal" data-target="#editPlans">EDIT</button></td>
							</tr>
							<tr class="border-bottom">
								<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
								<td><button class="btn btn-primary btn-full" data-toggle="modal" data-target="#editPlans">EDIT</button></td>
							</tr>
							<tr class="border-bottom">
								<td>Lorem ipsum dolor sit amet.</td>
								<td><button class="btn btn-primary btn-full" data-toggle="modal" data-target="#editPlans">EDIT</button></td>
							</tr>
						</tbody>
					</table>

					<div class="clearix"></div>
				</div>
			</div> 
			<div class="clearfix"></div>
		</div>
	</div>
	<div class="clearfix"></div>

	<div class="modal fade admin" id="addCompanyPolicies" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>ADD COMPANY POLICIES</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<i class="fa fa-times" aria-hidden="true"></i>
					</button>
				</div>
	      <div class="modal-body">
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">TITLE</p>
					</div>
					<div class="col-md-9">
						<input class="form-control" name="TITLE">
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">Body</p>
					</div>
					<div class="col-md-9">
						<textarea class="form-control" name="body" rows="8"></textarea>
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

	<div class="modal fade admin" id="editCompanyPolicies" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>COMPANY POLICIES</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<i class="fa fa-times" aria-hidden="true"></i>
					</button>
				</div>
	      <div class="modal-body">
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">TITLE</p>
					</div>
					<div class="col-md-9">
						<input class="form-control" name="TITLE" value="HR POLICY">
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">Body</p>
					</div>
					<div class="col-md-9">
						<textarea class="form-control" name="body" rows="8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</textarea>
					</div>
					<div class="clearfix"></div>
				</div>
        <div class="modal-footer text-center no-padding-b">
          <button class="btn btn-primary btn-half" data-dismiss="modal">DONE</button>
        </div>
				</div>
	    </div>
		</div>
	</div>

	<div class="modal fade admin" id="addUsefulLinks" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>ADD USEFUL LINKS</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<i class="fa fa-times" aria-hidden="true"></i>
					</button>
				</div>
	      <div class="modal-body">
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">TITLE</p>
					</div>
					<div class="col-md-9">
						<input class="form-control" name="TITLE">
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">Body</p>
					</div>
					<div class="col-md-9">
						<textarea class="form-control" name="body" rows="5"></textarea>
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

	<div class="modal fade admin" id="editUsefulLinks" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>USEFUL LINKS</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<i class="fa fa-times" aria-hidden="true"></i>
					</button>
				</div>
	      <div class="modal-body">
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">TITLE</p>
					</div>
					<div class="col-md-9">
						<input class="form-control" name="title" value="Company Website">
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">LINK</p>
					</div>
					<div class="col-md-9">
						<input class="form-control" name="link" value="Link #1">
					</div>
					<div class="clearfix"></div>
				</div>
        <div class="modal-footer text-center no-padding-b">
          <button class="btn btn-primary btn-half" data-dismiss="modal">DONE</button>
        </div>
				</div>
	    </div>
		</div>
	</div>

	<div class="modal fade admin" id="addForms" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>ADD FORMS</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<i class="fa fa-times" aria-hidden="true"></i>
					</button>
				</div>
	      <div class="modal-body">
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">TITLE</p>
					</div>
					<div class="col-md-9">
						<input class="form-control" name="TITLE">
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">Body</p>
					</div>
					<div class="col-md-9">
						<textarea class="form-control" name="body" rows="5"></textarea>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10"></p>
					</div>
					<div class="col-md-9">
						<div class="fileinput fileinput-new" data-provides="fileinput">
							<span class="fileinput-txt">ATTACH</span>
							<span class="btn btnFileUpload" ng-if="!subcon.checkDoc(doc)">
								<span class="fileinput-new">BROWSE</span>
								<!--span class="fileinput-exists">Change</span-->
								<input id="required_doc_public_liability" accept="image/jpeg,image/gif,image/png,application/pdf" type="file">
								<span class="fileinput-filename"></span>
							</span>
						</div>
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

	<div class="modal fade admin" id="editForms" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>FORMS</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<i class="fa fa-times" aria-hidden="true"></i>
					</button>
				</div>
	      <div class="modal-body">
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">TITLE</p>
					</div>
					<div class="col-md-9">
						<input class="form-control" name="TITLE" value="Lorem Ipsum is simply dummy text">
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">Body</p>
					</div>
					<div class="col-md-9">
						<textarea class="form-control" name="body" rows="5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</textarea>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10"></p>
					</div>
					<div class="col-md-9">
						<div class="fileinput fileinput-new" data-provides="fileinput">
							<span class="fileinput-txt">ATTACH</span>
							<span class="btn btnFileUpload" ng-if="!subcon.checkDoc(doc)">
								<span class="fileinput-new">BROWSE</span>
								<!--span class="fileinput-exists">Change</span-->
								<input id="required_doc_public_liability" accept="image/jpeg,image/gif,image/png,application/pdf" type="file">
								<span class="fileinput-filename"></span>
							</span>
						</div>
					</div>
					<div class="form-group margin-b">
						<div class="col-md-3">
							<p class="m-top-10"></p>
						</div>
						<div class="col-md-9">
							<div class="col-md-4 padding-half-r">
								<div class="attachment-con">
									<a class="remove" href="javascript:void(0);"><i class="fa fa-trash" aria-hidden="true"></i></a>
									<img class="img-responsive" src="{{ url('img/doc-sample.png') }}" width="100%">
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
        <div class="modal-footer text-center no-padding-b">
          <button class="btn btn-primary btn-half" data-dismiss="modal">DONE</button>
        </div>
				</div>
	    </div>
		</div> 
	</div>

	<div class="modal fade admin" id="addPlans" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>ADD PLANS &amp; SPECIFICATIONS</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<i class="fa fa-times" aria-hidden="true"></i>
					</button>
				</div>
	      <div class="modal-body">
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">TITLE</p>
					</div>
					<div class="col-md-9">
						<input class="form-control" name="TITLE">
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">Body</p>
					</div>
					<div class="col-md-9">
						<textarea class="form-control" name="body" rows="5"></textarea>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10"></p>
					</div>
					<div class="col-md-9">
						<div class="fileinput fileinput-new" data-provides="fileinput">
							<span class="fileinput-txt">ATTACH</span>
							<span class="btn btnFileUpload" ng-if="!subcon.checkDoc(doc)">
								<span class="fileinput-new">BROWSE</span>
								<!--span class="fileinput-exists">Change</span-->
								<input id="required_doc_public_liability" accept="image/jpeg,image/gif,image/png,application/pdf" type="file">
								<span class="fileinput-filename"></span>
							</span>
						</div>
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

	<div class="modal fade admin" id="editPlans" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>PLANS &amp; SPECIFICATIONS</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<i class="fa fa-times" aria-hidden="true"></i>
					</button>
				</div>
	      <div class="modal-body">
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">TITLE</p>
					</div>
					<div class="col-md-9">
						<input class="form-control" name="TITLE" value="Lorem Ipsum is simply dummy text">
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10">Body</p>
					</div>
					<div class="col-md-9">
						<textarea class="form-control" name="body" rows="5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</textarea>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10"></p>
					</div>
					<div class="col-md-9">
						<div class="fileinput fileinput-new" data-provides="fileinput">
							<span class="fileinput-txt">ATTACH</span>
							<span class="btn btnFileUpload" ng-if="!subcon.checkDoc(doc)">
								<span class="fileinput-new">BROWSE</span>
								<!--span class="fileinput-exists">Change</span-->
								<input id="required_doc_public_liability" accept="image/jpeg,image/gif,image/png,application/pdf" type="file">
								<span class="fileinput-filename"></span>
							</span>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="form-group margin-b">
					<div class="col-md-3">
						<p class="m-top-10"></p>
					</div>
					<div class="col-md-9">
						<div class="col-md-4 padding-half-r">
							<div class="attachment-con">
								<a class="remove" href="javascript:void(0);"><i class="fa fa-trash" aria-hidden="true"></i></a>
								<img class="img-responsive" src="{{ url('img/doc-sample.png') }}" width="100%">
							</div>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
        <div class="modal-footer text-center no-padding-b">
          <button class="btn btn-primary btn-half" data-dismiss="modal">DONE</button>
        </div>
				</div>
	    </div>
		</div>
	</div>

@endsection