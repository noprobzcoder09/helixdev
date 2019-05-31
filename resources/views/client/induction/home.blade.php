@extends('layout.client')

@section('title', 'Safety Videos')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">
				<span class="back"><img class="img-responsive" src="{{ url('img/client/arrow-back.png') }}"> <label>Back</label></span>

				<div class="sub-head">
					<div class="col-md-12">
						<p>Available Inductions</p>
					</div>
				</div>

				<div class="inductions-container col-md-12">

					<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

						<div class="panel panel-default">
				            <div class="panel-heading" role="tab" id="headingOne">
				                <h4 class="panel-title">
				                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
				                        Company inductions
				                        <span class="indicator"></span>
				                        <span class="indicator-m"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
				                    </a>
				                </h4>
				            </div>
				            <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
				                <div class="panel-body">
			                		<a href="javascript:void(0)">General Company Induction</a>
			                		<a href="javascript:void(0)">Safety Induction</a>
			                		<a href="javascript:void(0)">Environmental Induction</a>
			                		<a href="javascript:void(0)">High Risk Work Induction</a>
				                </div>
				            </div>
				        </div>

				        <div class="panel panel-default">
				            <div class="panel-heading" role="tab" id="headingOne">
				                <h4 class="panel-title">
				                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
				                        Site Induction A
				                        <span class="indicator"></span>
				                        <span class="indicator-m"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
				                    </a>
				                </h4>
				            </div>
				            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
				                <div class="panel-body">
			                		<a href="javascript:void(0)">General Company Induction</a>
			                		<a href="javascript:void(0)">Safety Induction</a>
			                		<a href="javascript:void(0)">Environmental Induction</a>
			                		<a href="javascript:void(0)">High Risk Work Induction</a>
				                </div>
				            </div>
				        </div>

				        <div class="panel panel-default">
				            <div class="panel-heading" role="tab" id="headingOne">
				                <h4 class="panel-title">
				                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
				                        Site Induction B
				                        <span class="indicator"></span>
				                        <span class="indicator-m"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
				                    </a>
				                </h4>
				            </div>
				            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
				                <div class="panel-body">
			                		<a href="javascript:void(0)">General Company Induction</a>
			                		<a href="javascript:void(0)">Safety Induction</a>
			                		<a href="javascript:void(0)">Environmental Induction</a>
			                		<a href="javascript:void(0)">High Risk Work Induction</a>
				                </div>
				            </div>
				        </div>

					</div>

					<div class="completed-inductions">
						<h4>Completed Inductions</h4>
						<div class="table-responsive">
							<table class="table">
								<tr>
									<td width="75%">Site Inductions A</td>
									<td>Completed:<br/>12-07-2016</td>
								</tr>
								<tr>
									<td width="75%">Site Inductions B</td>
									<td>Completed:<br/>12-07-2016</td>
								</tr>
								<tr>
									<td width="75%">Site Inductions C</td>
									<td>Completed:<br/>12-07-2016</td>
								</tr>
								<tr>
									<td width="75%">Site Inductions D</td>
									<td>Completed:<br/>12-07-2016</td>
								</tr>
							</table>
						</div>
					</div>

				<div class="clearfix"></div>
				</div>

			</div>

		</div>
	</div>

	<div class="clearfix"></div>
	
<script type="text/javascript">
(function( $ ) {
    $(document).ready(function() {
    	function toggleIcon(e) {
		    $(e.target)
		        .prev('.panel-heading')
		        .toggleClass('panel-open');
		}
		$('.panel-group').on('hidden.bs.collapse', toggleIcon);
		$('.panel-group').on('shown.bs.collapse', toggleIcon);
	});
})( jQuery );
</script>
@endsection