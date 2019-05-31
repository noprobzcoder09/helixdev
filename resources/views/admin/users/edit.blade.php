@extends('layout.admin')

@section('title', 'Client')

@section('content')

	<div class="col-md-9">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h3>Helix Admin</h3>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12">
				<div class="row">

					<form class="formUpdateUser">

						<div class="general">

	                    	<div class="d-body">

	                    		<div class="col-md-4">
	                    			<div class="row m-right">
	                    				<div class="file-con">
		                    				<input class="form-control inputfile" type="file" name="file" id="file">
		                    				<label class="lbl-file" for="file"><span><img src="{{ url('img/upload-icon.png') }}"></span>UPLOAD LOGO</label>
		                    				<div class="img-con"><img src="{{ url('img/upload-user-default.png') }}" /></div>
		                    			</div>
	                    			</div>
	                    		</div>

	                    		<div class="col-md-8">
	                    			<div class="row">

			                            <div class="col-md-6">
			                            	<div class="row m-right">
			                                	<input class="form-control" type="text" name="first_name">
			                                	<label class="input-ph"><span>First name</span></label>
			                            	</div>
			                            </div>

			                            <div class="col-md-6">
			                            	<div class="row m-left">
			                                	<input class="form-control" type="text" name="last_name">
			                                	<label class="input-ph"><span>Last name</span></label>
			                            	</div>
			                            </div>

			                            <div class="col-md-6">
			                            	<div class="row m-right">
			                                	<input class="form-control" type="email" name="email">
			                                	<label class="input-ph"><span>Email</span></label>
			                            	</div>
			                            </div>

			                            <div class="col-md-6">
			                            	<div class="row m-left">
			                                	<input class="form-control" type="text" name="mobile">
			                                	<label class="input-ph"><span>Mobile</span></label>
			                            	</div>
			                            </div>

			                            <div class="col-md-6">
			                            	<div class="row m-right">
			                                	<input class="form-control" type="password" name="password">
			                                	<label class="input-ph"><span>Password</span></label>
			                            	</div>
			                            </div>

			                            <div class="col-md-6">
			                            	<div class="row m-left">
			                                	<input class="form-control" type="password" name="confirm_password">
			                                	<label class="input-ph"><span>Confirm password</span></label>
			                            	</div>
			                            </div>

			                        </div>
	                    		</div>

	                    		<div class="clearfix"></div>
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
				<button class="btn-update"><i class="fa fa-floppy-o" aria-hidden="true"></i> SAVE PROFILE</button>
			</div>
		</td>
	</div>

	<div class="clearfix"></div>
	
	<script type="text/javascript">
		jQuery('.formUpdateUser input').focus(function(){
			jQuery(this).next().addClass('input-filled');
		}).blur(function(){
			if( jQuery(this).val() !== '' ){
				jQuery(this).next().addClass('input-filled');
			} else {
				jQuery(this).next().removeClass('input-filled');
			}
		});

		jQuery('.btn-update').on('click', function(){
			toastr['info']('Update user button triggered!');
		});

	</script>

@endsection