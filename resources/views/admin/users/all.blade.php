@extends('layout.admin')

@section('title', 'Client')

@section('content')

	<div class="col-md-12">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h3>Admins</h3>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12">
				<div class="row">
					<table class="table users">
						<tbody>
							@for ($i = 1; $i <= 10; $i++)
								<tr>
									<td width="8%" valign="center">
										<img class="img-responsive" src="{{ url('img/user-default.png') }}" alt="Admin {{ $i }}" title="Admin {{ $i }}" width="40"/>
									</td>
									<td width="72%" >Admin {{ $i }}</td>
									<td >
										<button class="btn-action btn-view">VIEW</button>
										<button class="btn-action btn-delete">DELETE</button>
									</td>
								</tr>
							@endfor
						</tbody>
					</table>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
	

@endsection