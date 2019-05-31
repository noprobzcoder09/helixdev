@extends('layout.client')

@section('title', 'Safety Videos')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">
				<span class="back"><img class="img-responsive" src="{{ url('img/client/arrow-back.png') }}"> <label>Back</label></span>

				<div class="sub-head">
					<div class="col-md-12">
						<p>Document Library</p>
					</div>
				</div>

				<div class="inductions-container col-md-12">

					<div class="accordion-container">

						<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

								<div class="panel panel-default">
					            <div class="panel-heading" role="tab" id="headingOne">
					                <h4 class="panel-title">
					                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					                        Company Policies
					                        <span class="indicator indicator-d"></span>
					                        <span class="indicator indicator-m"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
					                    </a>
					                </h4>
					            </div>
					            <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
					                <div class="panel-body">
				                		<a href="javascript:void(0)" data-toggle="modal" data-target="#CompanyPolicies" data-backdrop="false">HR Policy</a>
				                		<a href="javascript:void(0)" data-toggle="modal" data-target="#CompanyPolicies" data-backdrop="false">OHS Policy</a>
				                		<a href="javascript:void(0)" data-toggle="modal" data-target="#CompanyPolicies" data-backdrop="false">Fitness for Work Policy</a>
				                		<a href="javascript:void(0)" data-toggle="modal" data-target="#CompanyPolicies" data-backdrop="false">LECH Policy</a>
					                </div>
					            </div>
					        </div>

								<div class="panel panel-default">
					            <div class="panel-heading" role="tab" id="headingOne">
					                <h4 class="panel-title">
					                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
					                        Useful Links
					                        <span class="indicator indicator-d"></span>
					                        <span class="indicator indicator-m"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
					                    </a>
					                </h4>
					            </div>
					            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
					                <div class="panel-body">
				                		<a href="javascript:void(0)">Company Website</a>
				                		<a href="javascript:void(0)">Link #1</a>
				                		<a href="javascript:void(0)">Link #2</a>
				                		<a href="javascript:void(0)">Link #3</a>
					                </div>
					            </div>
								</div>

								<div class="panel panel-default">
					            <div class="panel-heading" role="tab" id="headingOne">
					                <h4 class="panel-title">
					                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
					                        Forms
					                        <span class="indicator indicator-d"></span>
					                        <span class="indicator indicator-m"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
					                    </a>
					                </h4>
					            </div>
					            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
					                <div class="panel-body">
				                		<a href="javascript:void(0)" data-toggle="modal" data-target="#Forms" data-backdrop="false">Form #1</a>
				                		<a href="javascript:void(0)" data-toggle="modal" data-target="#Forms" data-backdrop="false">Form #2</a>
				                		<a href="javascript:void(0)" data-toggle="modal" data-target="#Forms" data-backdrop="false">Form #3</a>
				                		<a href="javascript:void(0)" data-toggle="modal" data-target="#Forms" data-backdrop="false">Form #4</a>
					                </div>
					            </div>
								</div>

								<div class="panel panel-default">
					            <div class="panel-heading" role="tab" id="headingOne">
					                <h4 class="panel-title">
					                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
					                        Plans &amp; Specifications
					                        <span class="indicator indicator-d"></span>
					                        <span class="indicator indicator-m"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
					                    </a>
					                </h4>
					            </div>
					            <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
					                <div class="panel-body">
				                		<a href="javascript:void(0)" data-toggle="modal" data-target="#Plans" data-backdrop="false">Plans #1</a>
				                		<a href="javascript:void(0)" data-toggle="modal" data-target="#Plans" data-backdrop="false">Plans #2</a>
				                		<a href="javascript:void(0)" data-toggle="modal" data-target="#Plans" data-backdrop="false">Plans #3</a>
				                		<a href="javascript:void(0)" data-toggle="modal" data-target="#Plans" data-backdrop="false">Plans #4</a>
					                </div>
					            </div>
								</div>

						</div>

					</div>

				<div class="clearfix"></div>
				</div>

			</div>

		</div>
	</div>
	<div class="clearfix"></div>

	<div class="modal fade resources-modal" id="CompanyPolicies" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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
					<div class="col-md-3 col-sm-2 col-xs-2 no-padding-l">
						<p class="m-top-10">TITLE</p>
					</div>
					<div class="col-md-9 col-sm-10 col-xs-10 no-padding-r">
						<p>HR POLICY</p>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="form-group margin-b">
					<div class="col-md-3 col-sm-2 col-xs-2 no-padding-l">
						<p class="m-top-10">Body</p>
					</div>
					<div class="col-md-9 col-sm-10 col-xs-10 no-padding-r">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
					</div>
					<div class="clearfix"></div>
				</div>
				</div>
	    </div>
		</div>
	</div>

	<div class="modal fade resources-modal" id="Forms" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>FORM</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<i class="fa fa-times" aria-hidden="true"></i>
					</button>
				</div>
	      <div class="modal-body">
					<div class="form-group margin-b">
						<div class="col-md-3 col-sm-2 col-xs-2 no-padding-l">
							<p class="m-top-10">TITLE</p>
						</div>
						<div class="col-md-9 col-sm-10 col-xs-10 no-padding-r">
							<p>Lorem Ipsum is simply dummy text</p>
						</div>
						<div class="clearfix"></div>
					</div>
					<div class="form-group margin-b">
						<div class="col-md-3 col-sm-2 col-xs-2 no-padding-l">
							<p class="m-top-10">Body</p>
						</div>
						<div class="col-md-9 col-sm-10 col-xs-10 no-padding-r">
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
						</div>
						<div class="clearfix"></div>
					</div>
					<div class="form-group margin-b">
						<div class="form-group margin-b">
							<div class="col-md-3 col-sm-2 col-xs-2 no-padding-l">
								<p class="m-top-10"></p>
							</div>
							<div class="col-md-9 col-sm-10 col-xs-10 no-padding">
								<div class="col-md-6 col-sm-6 col-xs-6 no-padding">
									<div class="attachment-con">
										<img class="img-responsive" src="{{ url('img/client/doc-sample.png') }}" width="100%">
									</div>
									<a class="btn btn-primary btn-full btn-open" href="{{ url('docs/pdf.pdf') }}" target="_blank">OPEN</a>
									<div class="clearfix"></div>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
	    </div>
		</div>
	</div>

	<div class="modal fade resources-modal" id="Plans" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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
						<div class="col-md-3 col-sm-2 col-xs-2 no-padding-l">
							<p class="m-top-10">TITLE</p>
						</div>
						<div class="col-md-9 col-sm-10 col-xs-10 no-padding-r">
							<p>Lorem Ipsum is simply dummy text</p>
						</div>
						<div class="clearfix"></div>
					</div>
					<div class="form-group margin-b">
						<div class="col-md-3 col-sm-2 col-xs-2 no-padding-l">
							<p class="m-top-10">Body</p>
						</div>
						<div class="col-md-9 col-sm-10 col-xs-10 no-padding-r">
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
						</div>
						<div class="clearfix"></div>
					</div>
					<div class="form-group margin-b">
						<div class="form-group margin-b">
							<div class="col-md-3 col-sm-2 col-xs-2 no-padding-l">
								<p class="m-top-10"></p>
							</div>
							<div class="col-md-9 col-sm-10 col-xs-10 no-padding">
								<div class="col-md-6 col-sm-6 col-xs-6 no-padding">
									<div class="attachment-con">
										<img class="img-responsive" src="{{ url('img/client/doc-sample.png') }}" width="100%">
									</div>
									<a class="btn btn-primary btn-full btn-open" href="{{ url('docs/pdf.pdf') }}" target="_blank">OPEN</a>
									<div class="clearfix"></div>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
	    </div>
		</div>
	</div>
	
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