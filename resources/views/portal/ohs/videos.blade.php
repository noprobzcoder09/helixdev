@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="col-md-12 no-padding ohs">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h4>OHS > Safety Videos</h4>
					</div>
				</div>
				<div class="col-md-3 pull-right">
					<div class="row btn-action">
						<button type="button" role="btn" class="btn btn-primary btn-save pull-left"><i class="fa fa-plus" aria-hidden="true"></i> ADD NEW VIDEO</button>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content">
				<div class="row">					

					<table class="table table-videos">
						<thead>
						<tr>
							<th width="60%">TITLE</th>
							<th width="20%">QUESTIONS</th>
							<th width="20%"></th>
						</tr>
						</thead>
						<tbody>
							@for ($i = 1; $i < 10; $i++)
								<tr>
									<td>Title {{ $i }}</td>
									<td>
										@if($i == 4 || $i ==5)
											<span class="times"><i class="fa fa-times" aria-hidden="true"></i></span>
										@else
											<span class="check"><i class="fa fa-check" aria-hidden="true"></i></span>
										@endif
									</td>
									<td>
										<button class="btn btn-primary" role="button" type="button">OPEN</button>
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

	<div class="clearfix"></div>
	

@endsection