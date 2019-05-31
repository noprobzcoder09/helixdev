@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="col-md-12 no-padding ohs">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h4>OHS > INSPECTIONS</h4>
					</div>
				</div>
				<div class="col-md-3 pull-right">
					<div class="row btn-action">
						<button type="button" role="btn" class="btn btn-primary btn-create pull-left btn-full" href="javascript:void(0)" data-dialog="createDialog" class="trigger"><i class="fa fa-plus" aria-hidden="true"></i> CREATE NEW INSPECTION</button>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content">
				<div class="row">

					<h4>Inspections/Checklists</h4>
					<table>
						<tbody>
							<tr class="border-bottom">
								<td colspan="3">CUSTOM INSPECTIONS</td>
							</tr>
							@for ($i = 1; $i <= 6; $i++)
								<tr>
									<td width="70%">PPE COMPLIANCE {{$i}}</td>
									<td width="15%"><button type="button" role="btn" class="btn btn-primary btn-view pull-left btn-full">VIEW</button></td>
									<td width="15%"><button type="button" role="btn" class="btn btn-primary btn-edit pull-left btn-full">EDIT</button></td>
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

	<div id="createDialog" class="dialog">
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
						<h4 class="t-align-left fc-white">CREATE NEW INSPECTION</h4>
					</div>
					<div class="body">
						<div class="col-md-12">
							<div class="row">
								<div class="col-md-3 col-sm-3 no-padding-l">
									<p class="m-tb-7">TITLE</p>
								</div>
								<div class="col-md-9 col-sm-9 no-padding-r">
									<input type="text" class="form-control" name="title">
								</div>
							</div>
						</div>

						<div class="col-md-12">
							<div class="row">
								<div class="col-md-3 col-sm-3 no-padding-l">
									<p class="m-tb-7">CATEGORY</p>
								</div>
								<div class="col-md-9 col-sm-9 no-padding-r">
									<select class="disable-search" data-placeholder="CATEGORY">
										<option value=""></option>
										@for ($i = 1; $i < 5; $i++)
											<option value="">Category {{ $i }}</option>
										@endfor
									</select>
								</div>
							</div>
						</div>

						<div class="clearfix"></div>
						<hr/>

						<div class="col-md-12">
							<div class="row">
								<div class="col-md-3 col-sm-3 no-padding-l">
									<p class="m-tb-7">NEW INSPECTION</p>
								</div>
								<div class="col-md-9 col-sm-9 no-padding-r">
									<input type="text" class="form-control" name="new_inspection">
								</div>
							</div>
						</div>

						<div class="col-md-12">
							<div class="row">
								<div class="col-md-12 col-sm-12 no-padding">
									<p class="m-tb-7">OPTIONS</p>
								</div>
								<div class="col-md-12 col-sm-12 no-padding">
									<div class="radio">
										<label>
											<input class="form-check" type="radio" name="inspection_option" value="YES/NO">
											<span></span>
											YES/NO
										</label>
										<label>
											<input class="form-check" type="radio" name="inspection_option" value="COMPLAINT/NON-COMPLAINT">
											<span></span>
											COMPLAINT/NON-COMPLAINT
										</label>
										<label>
											<input class="form-check" type="radio" name="inspection_option" value="SAFE/HAZARD">
											<span></span>
											SAFE/HAZARD
										</label>
										<label>
											<input class="form-check" type="radio" name="inspection_option" value="N/A OPTION">
											<span></span>
											N/A OPTION
										</label>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-12">
							<div class="row">
								<div class="col-md-3 col-sm-3 no-padding-l">
									<p class="m-tb-7">CATEGORY</p>
								</div>
								<div class="col-md-9 col-sm-9 no-padding-r">
									<select class="disable-search" data-placeholder="CATEGORY">
										<option value=""></option>
										@for ($i = 1; $i < 5; $i++)
											<option value="">Category {{ $i }}</option>
										@endfor
									</select>
								</div>
							</div>
						</div>

						<div class="col-md-12">
							<div class="row btn-action">
								<button class="btn btn-primary btn-new-inspection m-top-10" role="btn">BUILD NEW INSPECTION</button>
							</div>
						</div>

						<div class="clearfix"></div>
					</div>
				</div>
        </div>
   </div>


@endsection
