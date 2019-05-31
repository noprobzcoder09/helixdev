@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="col-md-12 no-padding ohs">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h4>OHS > INSPECTIONS > SITE INSPECTION</h4>
					</div>
				</div>
				<div class="col-md-4 pull-right">
					<div class="row btn-action">
						<button type="button" role="btn" class="btn btn-primary btn-new-inspection pull-left" href="javascript:void(0)" data-dialog="addDialog" class="trigger">ADD NEW INSPECTION</button>
						<button type="button" role="btn" class="btn btn-primary btn-finalise-inspection pull-right">FINALISE INSPECTION</button>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>

			<h4 class="fc-white">BUILD NEW INSPECTION</h4>

			<div class="col-md-12 body-content">
				<div class="row">					

					<table>
						<thead>
							<tr>
								<td colspan="2">ADD NEW "SITE INSPECTION" INSPECTION ITEMS</td>
								<td>CATEGORY</td>
								<td>OPTION</td>
							</tr>
						</thead>
						<tbody>
							<tr class="border-bottom">
								<td>#1</td>
								<td>Have all workers on site been Inducted?</td>
								<td>Competency</td>
								<td>YES/NO</td>
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

	<div id="addDialog" class="dialog">
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
						<h4 class="t-align-left fc-white">ADD NEW INSPECTION</h4>
					</div>
					<div class="body">

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
									<select class="disable-search category-inspection" data-placeholder="CATEGORY">
										<option value="First Aid">FIRST AID</option>
										<option value="Chemical">CHEMICAL</option>
										<option value="Plant">PLANT</option>
										<option value="Risk Assessment">RISK ASSESSMENT</option>
										<option value="Other/Add New">OTHER/ADD NEW</option>
									</select>
								</div>
							</div>
						</div>

						<div class="col-md-12 hidden-div" style="display:none;">
							<div class="row">
								<div class="col-md-3 col-sm-3 no-padding-l">
									<p class="m-tb-7">OTHER/ADD NEW</p>
								</div>
								<div class="col-md-9 col-sm-9 no-padding-r">
									<input type="text" class="form-control" name="other_add">
								</div>
							</div>
						</div>

						<div class="col-md-12">
							<div class="row btn-action">
								<button class="btn btn-primary btn-done m-top-10" role="btn">DONE</button>
							</div>
						</div>

						<div class="clearfix"></div>
					</div>
				</div>
        </div>
    </div>
	
	<script type="text/javascript">
		(function( $ ) {
			$(document).ready(function() {
				$('.category-inspection').on('change', function(){
					if ( $(this).val() == 'Other/Add New'){
						$(".hidden-div").show();
					} else {
						$(".hidden-div").hide();
					}
				});
			});
		})( jQuery );
	</script>

@endsection