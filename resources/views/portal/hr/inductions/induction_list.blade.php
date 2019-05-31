@extends('layout.portal')

@section('title', 'Client')

@section('content')
	
	<div class="induction">
		<div class="col-md-9 no-padding">
			<div class="left-container">
				<div class="top-content">
					<div class="col-md-7 col-sm-6 col-xs-6">
						<div class="row">
							<h4>HR > Induction List</h4>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>

				<div class="col-md-12 body-content">
					<div class="row">

						<div class="col-md-12 induction-con">
							<div class="row">
								<div class="heading">
									<h4>Company Induction <button clas="btn btn-primary btn-edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></h4>
								</div>
								<div class="content">
									<table class="table">
										@for ($i = 1; $i < 5; $i++)
										<tr>
											<td width="83%">Company Induction {{ $i }}</td>
											<td><button class="btn btn-primary" role="button" type="button">EDIT</button></td>
										</tr>
										@endfor
									</table>
								</div>
							</div>
						</div>

						<div class="col-md-12 induction-con">
							<div class="row">
								<div class="heading">
									<h4>HR Induction <button clas="btn btn-primary btn-edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></h4>
								</div>
								<div class="content">
									<table class="table">
										@for ($i = 1; $i < 5; $i++)
										<tr>
											<td width="83%">HR Induction {{ $i }}</td>
											<td><button class="btn btn-primary" role="button" type="button">EDIT</button></td>
										</tr>
										@endfor
									</table>
								</div>
							</div>
						</div>

						<div class="col-md-12 induction-con">
							<div class="row">
								<div class="heading">
									<h4>Site A Induction <button clas="btn btn-primary btn-edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></h4>
								</div>
								<div class="content">
									<table class="table">
										@for ($i = 1; $i < 5; $i++)
										<tr>
											<td width="83%">Site A Induction {{ $i }}</td>
											<td><button class="btn btn-primary" role="button" type="button">EDIT</button></td>
										</tr>
										@endfor
									</table>
								</div>
							</div>
						</div>

						<div class="col-md-12 induction-con">
							<div class="row">
								<div class="heading">
									<h4>OHS Induction <button clas="btn btn-primary btn-edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></h4>
								</div>
								<div class="content">
									<table class="table">
										@for ($i = 1; $i < 5; $i++)
										<tr>
											<td width="83%">OHS Induction {{ $i }}</td>
											<td><button class="btn btn-primary" role="button" type="button">EDIT</button></td>
										</tr>
										@endfor
									</table>
								</div>
							</div>
						</div>

						<div class="col-md-12 induction-con">
							<div class="row">
								<div class="heading">
									<h4>Site B Induction <button clas="btn btn-primary btn-edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></h4>
								</div>
								<div class="content">
									<table class="table">
										@for ($i = 1; $i < 5; $i++)
										<tr>
											<td width="83%">Site B Induction {{ $i }}</td>
											<td><button class="btn btn-primary" role="button" type="button">EDIT</button></td>
										</tr>
										@endfor
									</table>
								</div>
							</div>
						</div>

					</div>
					<div class="clearfix"></div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>

		<div class="col-md-3">
			<div class="row">
				<div class="right-container">
					<div class="sidebar-usage">
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