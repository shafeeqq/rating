<!DOCTYPE html>
<?
/**
 * @author SHAFEEQ.K.SIDHIK
 * @copyright 2014
 * @plugin name : Rating plugin
 * 
 */
?>
<html>
<head>
	<title>Rating -plugin -</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<style type="text/css">
		.row
		{
			display: block;
			padding: 10px;
			margin-top: 20px;
		}

	</style>
	<script type="text/javascript" src="javascripts/jquery.min.js"></script>
	<script type="text/javascript" src="javascripts/plugin.rating.js"></script>
	<script>
		var stars;
	$(document).ready(function(){

			$('.ratingbox').stars({
				lang		: "en",
				callbackfn	: function(ratedid,ratedvalue) {
					
					console.log(ratedid+'>'+ratedvalue)
				}
				



			});


	});
	</script>

</head>
<body>
	<div class="row">
	<div class="ratingbox" data-id="1" data-lock=false data-rated=2.5 data-totalstar=3 data-theme=1></div>
	</div>

	<div class="row">
	<div class="ratingbox" data-id="2" data-lock=false data-rated=2.5 data-totalstar=3 data-theme=2></div>
	</div>


	<div class="row">
	<div class="ratingbox" data-id="2" data-lock=false data-rated=3.5 data-totalstar=4 data-theme=3></div>
	</div>


	<div class="row">
	<div class="ratingbox" data-id="2" data-lock=false data-rated=2.5 data-totalstar=3 data-theme=4></div>
	</div>


</body>
</html>