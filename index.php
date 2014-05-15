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
		body
		{
			background: #ccc;

		}
		.row
		{
			display: block;
			color: #3B3A3C;
			font-size: 14px;
			font-family: monospace;
		}



		.container
		{
				width: 80%;
				margin: auto;
				background: #FAFAFA;
				padding: 20px;
		}
		.clear
		{
			clear: both;
		}
	
		.code
		{
			background: #fff;
			padding: 10px;
			margin-top: 10px;
		}

		.link
		{
			color:#E4074B;
			font-weight: bold;
		}

	</style>
	<script type="text/javascript" src="javascripts/jquery.min.js"></script>
	<script type="text/javascript" src="javascripts/plugin.rating.js"></script>
	<script>
		
	$(document).ready(function(){

			$('.ratingbox').stars({
				lang		: "en",
				callbackfn	: function(ratedid,ratedvalue) {
					
					console.log("Rated Id is "+ratedid+'and rated value is '+ratedvalue);
				}
				



			});


	});
	</script>

</head>
<body>
<div class="container">

	<h1>Simple Plugin for Rating Articles</h1>
	<h3>Easily change the theme and language</h2>
	<hr>
	<h2>Configuration Steps</h2><div style="float: right;">
	<div class="ratingbox" data-id="1" data-lock=false data-rated=2.5 data-totalstar=3 data-theme=1></div>
	</div>
	<div class="code">
		
			1. Download the project folder from <a target="_blank" href="https://github.com/shafeeqq/rating"><img style="margin-left: 20px;margin-right: 20px;" src="images/git-logosmall.png" alt="Git hub" border="0"></a> 
  or from <a class="link" href="http://www.shafeeqq.com/plugins/plugin.rating.rar">here</a>

	</div><div style="float: right;margin-top:10px;margin-right:5px">
	<div class="ratingbox" data-id="2" data-lock=false data-rated=2.5 data-totalstar=3 data-theme=2></div>
	</div>

	<div class="code">
	2. Include jquery script and plugin scripts to your project.
	<br><br>
		<div class="row">
		&lt;script type="text/javascript" src="javascripts/jquery.min.js">&lt;/script&gt;
		</div>
		<div class="row">
		&lt;script type="text/javascript" src="javascripts/plugin.rating.js"&gt;&lt;/script&gt;
		</div>
		
	</div><div style="float: right;margin-top:10px;margin-right:5px">
	<div class="ratingbox" data-id="2" data-lock=false data-rated=3.5 data-totalstar=4 data-theme=3></div>
	</div>

	<div class="code">
	3. Add neccessary Style sheet 
	<br><br>
		<div class="row">
		&lt;link rel="stylesheet" type="text/css" href="css/style.css"&gt;
		
		</div>
	</div><div style="float: right;margin-top:10px;margin-right:5px">
		<div class="ratingbox" data-id="2" data-lock=false data-rated=2.5 data-totalstar=3 data-theme=4 data-lang='ar'></div>
	</div>

	<div class="code">
	4. Include the code on  &lt;head&gt; 
		<pre>
	&lt;script&gt;
	$(document).ready(function(){

	$('.ratingbox').stars({
	lang		: "en",
		callbackfn	: function(ratedid,ratedvalue) {
		// call back function
		}
	});
	});
			&lt;/script&gt;
		
		</pre>
	</div>

	<div class="code">
	4. Include the div on  &lt;body&gt; 
	<br><br>
		<div class="row">
	
    &lt;div class="ratingbox" data-id="1" data-lock=false data-rated=2.5 data-totalstar=3 data-theme=1&gt;&lt;/div&gt;
   
		
		</div>
	</div>



	<div class="clear"></div>
</div>

</body>
</html>