Rating
======

Simple plugin for rating articles with multiple theme and language

[Rating Plugin](https://github.com/shafeeqq/rating) - A plugin to rate the articles
================================

This is a simple plugin used to rate the articles or new of your project with simple steps. You can customize as you need, with the configurable options.

The rating plugin provides the ability to lock the rating and call back function will execute to save the user rating to database.

## Getting Started

Include rating plugin in your page and include div with data attribute

## Add the script on head

     $('.ratingbox').stars({
	lang		: "en",
		callbackfn	: function(ratedid,ratedvalue) {
		// call back function
		}
	});
	});
	
	
## Inclde your div  

    <div class="ratingbox" data-id="1" data-lock=false data-rated=2.5 data-totalstar=3 data-theme=1></div>


## Configuration option


    "data-lock" :"false"   // To lock the rating on load pass true
    "data-lang" : "en", //  language to set the direction of rating . (en or ar)
    "data-id" : "1", //  id or your article or news
    "data-rated" : 3.2,  // the average of existing user rated value 
    "data-totalstar" : "5",  // Total number of stars needed for rating
    "data-theme"     : "1"     // theme according to your page  [1 to 4]

#Developed By

SHAFEEQ.K.SIDHIK
DOHA - QATAR