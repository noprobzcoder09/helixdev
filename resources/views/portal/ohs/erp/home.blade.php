@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="col-md-12 no-padding ohs">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h4 class="breadcrumbs">OHS &gt; ERP</h4>
					</div>
				</div>
				<div class="col-md-3 pull-right">
					<div class="row btn-action">
						<button type="button" role="btn" class="btn btn-primary pull-right top-page-btn" href="javascript:void(0)" data-dialog="addContactDialog"><span class="add-sign">+</span> ADD CONTACT</button>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content registers">
				<div class="row">
					<table class="table content-white">
						<thead>
							<tr>
								<th colspan="5">EMERGENCY RESPONSE COORDINATORS</th>
							</tr>
						</thead>
						<tbody>
							@for ($i = 1; $i <= 5; $i++)
								<tr class="border-bottom">
									<td width="50">#{{$i}}</td>
									<td>HSE Manager</td>
									<td>Gary Keith</td>									
									<td>0412 346 678</td>
									<td><button class="btn btn-primary btn-75">EDIT</button></td>
								</tr>
							@endfor
						</tbody>
					</table>

					<table class="table content-white">
						<thead>
							<tr>
								<th colspan="5">ENVIRONMENTAL RESPONSE COORDINATORS</th>
							</tr>
						</thead>
						<tbody>
							@for ($i = 1; $i <= 5; $i++)
								<tr class="border-bottom">
									<td width="50">#{{$i}}</td>
									<td>HSE Manager</td>
									<td>Gary Keith</td>									
									<td>0412 346 678</td>
									<td><button class="btn btn-primary btn-75">EDIT</button></td>
								</tr>
							@endfor
						</tbody>
					</table>

					<table class="table content-white">
						<thead>
							<tr>
								<th colspan="5">FIRST AIDERS</th>
							</tr>
						</thead>
						<tbody>
							@for ($i = 1; $i <= 5; $i++)
								<tr class="border-bottom">
									<td width="50">#{{$i}}</td>
									<td>HSE Manager</td>
									<td>Gary Keith</td>									
									<td>0412 346 678</td>
									<td><button class="btn btn-primary btn-75">EDIT</button></td>
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

	<!--	dialog box-->
	<div id="addContactDialog" class="dialog">
		<div class="dialog__overlay"></div>
		<div class="dialog__content">
			<div class="morph-shape">
				<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 560 280" preserveAspectRatio="none">
					<rect x="3" y="3" fill="none" width="556" height="276"/>
				</svg>
			</div>
			<div class="dialog-inner">
				<button class="action close-diaglog" data-dialog-close><i class="fa fa-times" aria-hidden="true"></i></button>

				<div class="header">
					<h2>ADD CONTACT</h2>
				</div>
				<div class="body">

					<div class="content-con">

						<div class="col-md-4 padding-half-r">
							<input type="text" class="form-control" name="role" placeholder="ROLE">
						</div>

						<div class="col-md-4 padding-half">
							<input type="text" class="form-control" name="name" placeholder="NAME">
						</div>

						<div class="col-md-4 padding-half-l">
							<input type="text" class="form-control" name="mobile" placeholder="MOBILE">
						</div>

						<div class="clearfix"></div>
					</div>

					<div class="m-top-10 t-align-center">
						<button class="btn btn-half fc-white margin-auto" role="button">ADD</button>
					</div>

				</div>
			</div>
		</div>
	</div>

<script>
	$( function() {

		var dlgtrigger = document.querySelector( '[data-dialog]' ),
			somedialog = document.getElementById( dlgtrigger.getAttribute( 'data-dialog' ) ),
			dlg = new DialogFx( somedialog );

		dlgtrigger.addEventListener( 'click', dlg.toggle.bind(dlg) );

	} );
</script>
@endsection
