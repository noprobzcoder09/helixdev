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
		                    				<div class="img-con"><img src="{{ url('img/upload-user-default.png') }}" /></div>
		                    			</div>
	                    			</div>
	                    		</div>

	                    		<div class="col-md-8">
	                    			<div class="row">

			                            <div class="col-md-6">
			                            	<div class="row m-right">
			                                	<input class="form-control" type="text" name="first_name" value="Leslie">
			                                	<label class="input-ph input-filled"><span>First name</span></label>
			                            	</div>
			                            </div>

			                            <div class="col-md-6">
			                            	<div class="row m-left">
			                                	<input class="form-control" type="text" name="last_name" value="Benneth">
			                                	<label class="input-ph input-filled"><span>Last name</span></label>
			                            	</div>
			                            </div>

			                            <div class="col-md-6">
			                            	<div class="row m-right">
			                                	<input class="form-control" type="email" name="email" value="i.benneth@gmail.com">
			                                	<label class="input-ph input-filled"><span>Email</span></label>
			                            	</div>
			                            </div>

			                            <div class="col-md-6">
			                            	<div class="row m-left">
			                                	<input class="form-control" type="text" name="mobile" value="0476 977 098">
			                                	<label class="input-ph input-filled"><span>Mobile</span></label>
			                            	</div>
			                            </div>

			                            <div class="col-md-6">
			                            	<div class="row m-right">
			                                	<input class="form-control" type="password" name="password" value="***************">
			                                	<label class="input-ph input-filled"><span>Password</span></label>
			                            	</div>
			                            </div>

			                            <div class="col-md-6">
			                            	<div class="row m-left">
			                                	<input class="form-control" type="password" name="confirm_password" value="***************">
			                                	<label class="input-ph input-filled"><span>Confirm password</span></label>
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
				<button class="btn-delete"> DELETE </button>
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

		jQuery('btn-delete').on('click', function(){
			toastr['info']('Delete user button triggered!');
		});

	</script>

@endsection