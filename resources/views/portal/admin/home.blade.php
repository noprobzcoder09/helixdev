@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="col-md-12 no-padding admin ohs">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h4>ADMIN</h4>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content">
				<div class="row">					

					<div class="grid">

						<div class="grid-item">
							<a href="javascript:void(0);">
								<div class="img-con">
									<img class="img-responsive" src="{{ url('img/admin/crews.png') }}" alt="ERP Details" title="ERP Details">
								</div>
								<div class="title">
									<p>CREWS</p>
								</div>
							</a>
						</div>

						<div class="grid-item">
							<a href="javascript:void(0);">
								<div class="img-con">
									<img class="img-responsive" src="{{ url('img/admin/projects.png') }}" alt="Alerts" title="Alerts">
								</div>
								<div class="title">
									<p>PROJECTS</p>
								</div>
							</a>
						</div>

						<div class="grid-item">
							<a href="javascript:void(0);">
								<div class="img-con">
									<img class="img-responsive" src="{{ url('img/admin/resources.png') }}" alt="Alerts" title="Alerts">
								</div>
								<div class="title">
									<p>RESOURCES</p>
								</div>
							</a>
						</div>k

					</div>

				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>

	<div class="clearfix"></div>
	

@endsection