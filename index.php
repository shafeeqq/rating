<!DOCTYPE html>
<?
/**
 * @author SHAFEEQ.K.SIDHIK
 * @copyright 2017
 * @plugin name : Rating plugin version 2 with font awesome
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
	<script type="text/javascript" src="javascripts/js-cookie.js"></script>
	<script type="text/javascript" src="javascripts/plugin.rating.js"></script>
	<script>
		
	$(document).ready(function(){

			$('.ratingbox').stars({
				lang		: "en",
				cookiename : "",
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
	<h2>Configuration Steps</h2>
	<div class="code">
		
			1. Download the project folder from <a target="_blank" href="https://github.com/shafeeqq/rating"><img style="margin-left: 20px;margin-right: 20px;" src="images/git-logosmall.png" alt="Git hub" border="0"></a> 
  or from <a class="link" href="https://github.com/shafeeqq/rating/archive/master.zip">here</a>

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
		
	</div>

	<div class="code">
	3. Add neccessary Style sheet 
	<br><br>
		<div class="row">
		&lt;link rel="stylesheet" type="text/css" href="css/style.css"&gt;
		
		</div>
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

	<div class="code">
	5. Configuration Options
	<br><br>
		<div class="row">
			
			"data-lock" :"false"   // To lock the rating on load pass true<br>
			"data-lang" : "en", //  language to set the direction of rating . (en or ar)<br>
			"data-id" : "1", //  id or your article or news<br>
			"data-rated" : 3.2,  // the average of existing user rated value <br>
			"data-totalstar" : "5",  // Total number of stars needed for rating<br>
			"data-theme"     : "1"     // theme according to your page  [1 to 5] (additional can be add to style)<br>
			"data-halfrate"     : "true"  // if true user have .5 rating feature else fullrate<br>
			"data-cookiename"     : ""  // cookie name to your rated article for lock dublicate entry<br>
			
			
		</div>
	</div>



	<div class="clear"></div>
<h2>Live Demo</h2>

	<div>1. Full Star with right to left (en)</div><div style="float: right;">
	<div class="ratingbox" data-id="1"   data-rated=2 data-totalstar=5 data-theme=1></div>
	</div>
	<br><br>
	<div>2. Full Star with left to right (ar)</div><div style="float: right;">
	<div class="ratingbox" data-id="2" data-lock="false" data-rated=3 data-totalstar=5 data-theme=2 data-lang='ar'></div>
	</div>

	<br><br>
	<div>3. Half Star with right to left (en)</div><div style="float: right;">
	<div class="ratingbox" data-id="2" data-lock="false" data-rated=3 data-totalstar=4 data-theme=3 data-halfrate=true></div>
	</div>

	<br><br>
	<div>4. Half Star with left to right (ar)</div><div style="float: right;">
	<div class="ratingbox" data-id="2" data-lock="false" data-rated=3 data-totalstar=4 data-theme=4 data-halfrate=true data-lang='ar'></div>
	</div>

	<br><br>
	<div>5. Additional theme with already 3.5 rated and locked</div><div style="float: right;">
	<div class="ratingbox" data-id="2" data-lock="true" data-rated=2.5 data-totalstar=5 data-theme=5 data-halfrate=true data-lang='en'></div>
	</div>
	<br><br><br><br>
	</div>

</div>

</body>
</html>