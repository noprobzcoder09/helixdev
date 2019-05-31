@extends('layout.client')

@section('title', 'Safety Videos')

@section('content')

	<div class="col-md-12">
		<div class="row">
			<div class="content-container">
				<span class="back"><img class="img-responsive" src="{{ url('img/client/arrow-back.png') }}"> <label>Back</label></span>
				<span class="continue">Complete</span>

				<div class="question-container col-md-12">
					<h3 class="heading">Safety Video Questions</h3>
					<div class="question-con">
						<p class="question">1. What colour was the blue car at the beginning of the induction video?</p>
						<div class="choices">
							<label>
								<input type="radio" name="question[1]">
								<span></span>
								A) Purple
							</label>
							<label>
								<input type="radio" name="question[1]">
								<span></span>
								B) Green
							</label>
							<label>
								<input type="radio" name="question[1]">
								<span></span>
								C) Orange
							</label>
							<label>
								<input type="radio" name="question[1]">
								<span></span>
								D) Black
							</label>
						</div>
					</div>
					<div class="question-con">
						<p class="question">2. What colour was the blue car at the beginning of the induction video?</p>
						<div class="choices">
							<label>
								<input type="radio" name="question[2]">
								<span></span>
								A) Purple
							</label>
							<label>
								<input type="radio" name="question[2]">
								<span></span>
								B) Green
							</label>
							<label>
								<input type="radio" name="question[2]">
								<span></span>
								C) Orange
							</label>
							<label>
								<input type="radio" name="question[2]">
								<span></span>
								D) Black
							</label>
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
})( jQuery );
</script>
@endsection