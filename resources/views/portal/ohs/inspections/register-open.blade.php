@extends('layout.portal')

@section('title', 'Client')

@section('content')

	<div class="col-md-12 no-padding ohs">
		<div class="left-container">
			<div class="top-content">
				<div class="col-md-7 col-sm-6 col-xs-6">
					<div class="row">
						<h4 class="breadcrumbs">OHS &gt; INSPECTIONS REGISTER</h4>
					</div>
				</div>
				<div class="col-md-3 pull-right">
					<div class="row btn-action">
						<button type="button" role="btn" class="btn btn-primary pull-right top-page-btn" href="javascript:void(0)" data-dialog="createDialog"><span class="add-sign"><img src="{{ url('img/export-icon.png') }}" style="width: 15px;margin-top: -6px;"></span> EXPORT</button>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-md-12 body-content registers inspections">
				<div class="row">
					<h5 class="fc-white">SITE INSPECTION SUMMARY</h5>

					<h4>SITE INSPECTION SUMMARY</h4>

					<table class="table">
						@for ($i = 1; $i <= 10; $i++)
							<tr class="border-bottom">
								<td>{{$i}}.  Does the site require traffic mangement?</td>
								<td>Traffic Management required for Concrete deliveries</td>
								@if($i == 2 || $i == 6 || $i == 7)
									<td><span class="fc-red"><i class="fa fa-times" aria-hidden="true"></i></span></td>
								@elseif($i == 3)
									<td><span class="fc-yellow"><i class="fa fa-minus" aria-hidden="true"></i></span></td>
								@else
									<td><span class="fc-green"><i class="fa fa-check" aria-hidden="true"></i></span></td>
								@endif
							</tr>
						@endfor					
					</table>
					<div class="clearix"></div>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
	<div class="clearfix"></div>


@endsection
