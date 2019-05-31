@extends('layout.client')

@section('title', 'Chemical Management')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">
				<span class="back"><img class="img-responsive" src="{{ url('img/client/arrow-back.png') }}"> <label>Back</label></span>
				<span class="continue">CONDUCT</span>

				<div class="body-container chemical col-md-12">

					<h4>CHEMICAL MANAGEMENT</h4>
						<div class="body">
                		<div class="padding-14">
	                     <div class="col-md-12">
	                        <div class="row">
	                        	<div class="col-md-4 col-sm-4 no-padding-l">
	                        		<p>Select Location/Crew</p>
	                        	</div>
	                        	<div class="col-md-8 col-sm-8 no-padding-r">
	                        		<select class="form-control chosen-select" chosen name="crew_group" placeholder="Crew/Group" >
												<option value="">TEST</option>
											</select>
	                        	</div>                            
										<div class="col-md-12 col-sm-12 col-xm-12">
											<div class="row">
												<button class="btn btn-primary pull-right">VIEW SDS LIBRARY</button>
											</div>
										</div>
	                        </div>
	                     </div>
	                     <div class="clearfix"></div>
	                   </div>

                    <div class="results">
                    	<ul>
                    		@for ($i = 1; $i <= 6; $i++)
                    		<li>
                    			<span class="col-md-10 col-sm-10 col-xs-7 no-padding-l">
                    				Line Marking Spray
                    			</span>
                    			<span class="col-md-2 col-sm-2 col-xs-5 no-padding-r">
                    				<button class="btn btn-primary btn-full">OPEN</button>
                    			</span>
                    			<div class="clearfix"></div>
                    		</li>
                    		@endfor
                    	</ul>
						</div>

						<div class="clearfix"></div>
               </div>

				<div class="clearfix"></div>
				</div>

			</div>

		</div>
	</div>

	<div class="clearfix"></div>
@endsection