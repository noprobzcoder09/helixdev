@extends('layout.admin')

@section('title', 'Client')

@section('content')

	<div class="col-md-9">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h3>New Client</h3>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12">
				<div class="row">

					<form class="formNewClient">

						<div class="general">
	                        <div class="d-header">
	                            <h4>PRIME PROJECTS CONSTRUCTIONS</h4>
	                        </div>
	                    	<div class="d-body">

	                    		<div class="col-md-4">
	                    			<div class="row m-right">
	                    				<div class="file-con">
		                    				<input class="form-control inputfile" type="file" name="file" id="file">
		                    				<label class="lbl-file" for="file"><span><img src="{{ url('img/upload-icon.png') }}"></span>UPLOAD LOGO</label>
		                    				<div class="img-con"><img src="{{ url('img/Helix-Solutions-bw.png') }}" /></div>
		                    			</div>
	                    			</div>
	                    		</div>

	                    		<div class="col-md-8">
	                    			<div class="row">
	                        			<div class="col-md-12">
	                        				<div class="row">
			                                	<input class="form-control" type="text" name="link">
			                                	<label><span>Link</span></label>
			                            	</div>
			                            </div>

			                            <div class="col-md-6">
			                            	<div class="row m-right">
			                                	<input class="form-control" type="text" name="contact_name">
			                                	<label class="input-ph"><span>Contact name</span></label>
			                            	</div>
			                            </div>

			                            <div class="col-md-6">
			                            	<div class="row m-left">
			                                	<input class="form-control" type="email" name="email">
			                                	<label class="input-ph"><span>Email</span></label>
			                            	</div>
			                            </div>

			                            <div class="col-md-6">
			                            	<div class="row m-right">
			                                	<input class="form-control" type="text" name="mobile">
			                                	<label class="input-ph"><span>Mobile</span></label>
			                            	</div>
			                            </div>

			                            <div class="col-md-6">
			                            	<div class="row m-left">
			                                	<input class="form-control" type="email" name="website">
			                                	<label class="input-ph"><span>Company Website</span></label>
			                            	</div>
			                            </div>

			                            <div class="col-md-6">
			                            	<div class="row m-right">
			                                	<input class="form-control" type="text" name="account_contact">
			                                	<label class="input-ph"><span>Account Contact</span></label>
			                            	</div>
			                            </div>

			                            <div class="col-md-6">
			                            	<div class="row m-left">
			                                	<input class="form-control" type="email" name="account_email">
			                                	<label class="input-ph"><span>Account Email</span></label>
			                            	</div>
			                            </div>

			                            <div class="col-md-6">
			                            	<div class="row m-right">
			                                	<input class="form-control" type="text" name="account_contact">
			                                	<label class="input-ph"><span>Head Office State</span></label>
			                            	</div>
			                            </div>

			                            <div class="col-md-6">
			                            	<div class="row m-left">
			                                	<input class="form-control" type="email" name="account_email">
			                                	<label class="input-ph"><span>ABN</span></label>
			                            	</div>
			                            </div>
			                        </div>
	                    		</div>

	                    		<div class="clearfix"></div>
	                        </div>
                    	</div>

                    	<div class="modules">
                    		<div class="d-header">
	                            <h4>MODULES</h4>
	                        </div>
	                        <div class="d-body">

	                        	<div class="col-md-3">
	                        		<div class="row">
		                        		<div class="checkbox checkbox-slider--b-flat">
			                        		<label>
			                        			<input type="checkbox" name="Observations" class="modules-cb">
			                        			<span>Observations</span>
		                        			</label>
			                        	</div>
		                        	</div>
	                        	</div>

	                        	<div class="col-md-3">
	                        		<div class="row">
	                        			<div class="checkbox checkbox-slider--b-flat">
			                        		<label>
			                        			<input type="checkbox" name="Safety Vids" class="modules-cb">
			                        			<span>Safety Vids</span>
			                        		</label>
			                        	</div>
	                        		</div>
	                        	</div>

	                        	<div class="col-md-3">
	                        		<div class="row">
	                        			<div class="checkbox checkbox-slider--b-flat">
			                        		<label>
			                        			<input type="checkbox" name="Inspection" class="modules-cb">
			                        			<span>Inspection</span>
			                        		</label>
			                        	</div>
	                        		</div>
	                        	</div>

	                        	<div class="col-md-3">
	                        		<div class="row">
	                        			<div class="checkbox checkbox-slider--b-flat">
			                        		<label>
			                        			<input type="checkbox" name="Inductions" class="modules-cb">
			                        			<span>Inductions</span>
			                        		</label>
			                        	</div>
	                        		</div>
	                        	</div>

	                        	<div class="col-md-3">
	                        		<div class="row">
	                        			<div class="checkbox checkbox-slider--b-flat">
			                        		<label>
			                        			<input type="checkbox" name="Chemical MGT" class="modules-cb">
			                        			<span>Chemical MGT</span>
			                        		</label>
			                        	</div>
	                        		</div>
	                        	</div>

	                        	<div class="col-md-3">
	                        		<div class="row">
	                        			<div class="checkbox checkbox-slider--b-flat">
			                        		<label>
			                        			<input type="checkbox" name="Resources" class="modules-cb">
			                        			<span>Resources</span>
			                        		</label>
			                        	</div>
	                        		</div>
	                        	</div>

	                        	<div class="col-md-3">
	                        		<div class="row">
	                        			<div class="checkbox checkbox-slider--b-flat">
			                        		<label>
			                        			<input type="checkbox" name="Alerts" class="modules-cb">
			                        			<span>Alerts</span>
			                        		</label>
			                        	</div>
	                        		</div>
	                        	</div>

	                        	<div class="col-md-3">
	                        		<div class="row">
	                        			<div class="checkbox checkbox-slider--b-flat">
			                        		<label>
			                        			<input type="checkbox" name="Emergency Info" class="modules-cb">
			                        			<span>Emergency Info</span>
			                        		</label>
			                        	</div>
	                        		</div>
	                        	</div>
	                        	<div class="clearfix"></div>
	                        </div>
                    	</div>

                    	<div class="history">
                    		<div class="d-header">
	                            <h4>HISTORY LOG / LOG</h4>
	                        </div>
	                        <div class="d-body">
	                        	<div class="col-md-12">
	                        		<div class="row">
		                        		<table class="table">
		                        			@for ($i = 0; $i < 5; $i++)
												<tr>
													<td width="75%">Prime Projects Constructions</td>
													<td>12:57PM 27-11-2016</td>
												</tr>
											@endfor
		                        		</table>
		                        	</div>
	                        	</div>
	                        </div>
                    	</div>

                    </form>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>

	<div class="col-md-3">
		<div class="right-container">
			<div class="action-button">
				<button class="btn-update"><i class="fa fa-floppy-o" aria-hidden="true"></i> SAVE</button>
			</div>
			<div class="sidebar-usage">
                <h3>Usage Statistics</h3>
                <div class="usage">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                    	<div class="row">
                        	<div class="usage-con">
	                            <p><img src="/img/users.png"></p>
	                            <p>Users<span>203,206</span></p>
	                        </div>
	                    </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-6">
                    	<div class="row">
                        	<div class="usage-con">
	                            <p><img src="/img/daily-hits.png"></p>
	                            <p>Daily Hits<span>1028</span></p>
	                        </div>
	                    </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-6">
                    	<div class="row">
                        	<div class="usage-con">
	                            <p><img src="/img/weekly-hits.png"></p>
	                            <p>Weekly Hits<span>7029</span></p>
	                        </div>
	                    </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
		</td>
	</div>

	<div class="clearfix"></div>
	
	<script type="text/javascript">
		jQuery('.formNewClient input').focus(function(){
			jQuery(this).next().addClass('input-filled');
		}).blur(function(){
			if( jQuery(this).val() !== '' ){
				jQuery(this).next().addClass('input-filled');
			} else {
				jQuery(this).next().removeClass('input-filled');
			}
		});

		jQuery('.btn-update').on('click', function(){
			toastr['info']('Update client button triggered!');
		});

	</script>

@endsection