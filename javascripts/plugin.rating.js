(function($){

	var defaults={

		lock	: false,
		totalstar	: 5,
		rated	: 	  0,
		theme		: 1,
		halfrate	: true,
		cookiename  : '',
		callbackfn	: function() {
			
					
		},
		lang		: "en"
	}

	function Rating (element,options) {
		
		this.config=$.extend({},defaults,options);
		this.element=element;
		$self=this;
		this.elementClass=$(this.element).attr("class");
		//this.setcss='rated';
					var lang=$(element).attr("data-lang");
					
				
				

		this.setupLanguage(lang);

		this.setupTheme(this.element);

		this.initialSetup();



	}

	Rating.prototype={

		initialSetup	: function(){

					var setcss;
					for(var i=1;i<=this.config.totalstar;i++)	
					{

							

							this.setactiveClass(i);


														
							

							$('<i/>',{
								"class": "fa fa-star"
							}).addClass(this.langclass+' '+this.setcss).appendTo(this.element).hover(
						    function(e) {
						    //mouse over
						    		$self.resetOptions(this);
									$self.setupTheme($(this).closest('.'+$self.elementClass));
						    		if($self.config.lock=="false")
									{
										
						    			var isfullstar=$self.getRatingposition(e);
						    			

						      		 	var currentindex=$(this).index();
						      		 		
										$(this).closest('.'+$self.elementClass).find('.fa-star').each(function(index){


												if(currentindex>=index)
												{
													if(currentindex==index)
													{
														if(isfullstar==true)
														$(this).removeClass($self.unratedstar+' '+$self.halfstar).addClass($self.ratedstar);
														else
														$(this).removeClass($self.unratedstar+' '+$self.ratedstar).addClass($self.halfstar);
													}
													else
													$(this).removeClass($self.unratedstar+' '+$self.halfstar).addClass($self.ratedstar);
												}
												else
												{
													$(this).removeClass($self.ratedstar+' '+$self.halfstar).addClass($self.unratedstar);
													
 												}
										});

									}	
									else
									{
										
											$('<i/>',{
												"class": "fa fa-star"
											}).addClass(this.langclass+' '+$self.ratedstar).appendTo(this.element).hover(
										    function() {

										      		$(this).attr({
										      			title: 'Already Rated'
										      			
										      		});
										    });
									}

						    }, function() {
						    	//mouseout



									$self.resetOptions(this);

									$self.setupTheme($(this).closest('.'+$self.elementClass));

									 if($self.config.lock=="false")
									 {
							        	var currentindex=$(this).index()+1;

						    			$(this).closest('.'+$self.elementClass).find('.fa-star').each(function(index){

						    			$self.setactiveClass(index+1);

						    				
						    			$(this).removeClass($self.unratedstar+' '+$self.ratedstar+' '+$self.halfstar).addClass(' '+$self.setcss);		
										

										});
						    		}		
										


						


						    }).on('click',function(event) {



						    	$self.resetOptions(this);
								$self.setupTheme($(this).closest('.'+$self.elementClass));	
						    		if($self.config.lock=="false")
									{

											var isfullstar=$self.getRatingposition(event),ratedvalue;
						    				if(isfullstar==true)
						    				ratedvalue=$(this).index()+1;
						    				else
						    				ratedvalue=(parseInt($(this).index())+1)-parseFloat(".5");					      	
													
						    		
						    		var ratedid=$(this).closest('.'+$self.elementClass).attr("data-id");

						    		$self.triggerRating(ratedid,ratedvalue);
						    	
						    		$(this).closest('.'+$self.elementClass).attr("data-lock","true");

						    			$self.resetOptions(this);
											
									 
							        	var currentindex=$(this).index();
						      		 		
										$(this).closest('.'+$self.elementClass).find('.fa-star').each(function(index){


										if(currentindex>=index)
										$(this).removeClass($self.unratedstar).addClass($self.ratedstar);
										else
										$(this).removeClass($self.ratedstar).addClass($self.unratedstar);
										});
									}
						    		event.preventDefault();

						    	

						    }).on('mousemove', function (e) {


						    		if($self.config.lock=="false")
									{
										
						    			var isfullstar=$self.getRatingposition(e);
						    									      	
											if(isfullstar==true)
											$(this).removeClass($self.unratedstar+' '+$self.halfstar).addClass($self.ratedstar);
											else
											$(this).removeClass($self.unratedstar+' '+$self.ratedstar).addClass($self.halfstar);
													

									}	

						    });
									

							
					}
				
				

		},
		setupTheme		:function   (element) {

					var theme=$(element).attr("data-theme"),lang=$(element).attr("data-lang");
					if($.type(lang)=='undefined' || lang=='')
					lang=this.config.lang;

					
					switch(theme)
					{
					

						

						default:
						this.ratedstar='rated'+theme;
						this.unratedstar='unrated'+theme;
						this.setcss=this.ratedstar;
						if(lang=='ar')
							this.halfstar='fa-star-half-o fa-star-half-o'+theme+' fa-flip-horizontal';
						else
						this.halfstar='fa-star-half-o fa-star-half-o'+theme;
						break;
						// this.ratedstar='rated';
						// this.unratedstar='unrated';
						// this.setcss=this.ratedstar;
						// if(lang=='ar')
						// 	this.halfstar='fa-star-half-o  fa-flip-horizontal';
						// else
						// this.halfstar='fa-star-half-o';
						// break;
					}
					

			
		},
		setupLanguage	: function(lang)
		{


				if(lang=='ar')
				{
				this.langclass='arlang';
				}
				else
				{
				this.langclass='enlang';
				}

				


		},
		getRatingposition	: function(e) {

			
			
			var $currentstar,offset,currentposition,w,fullstar,chalf
			if(this.config.halfrate=="true")
			{
				

			$currentstar = $(e.currentTarget);
 			offset = $currentstar.offset();

  			 if(this.config.lang=='ar')	
  			 currentposition = (($currentstar.offset().left + $currentstar.outerWidth())-e.pageX);	
  			 else
			 currentposition = e.pageX - offset.left;
			 
			 

			 w = $currentstar.width();
			 chalf= w/2;
			 
			
			 if(currentposition<=chalf)
			 fullstar=false;
			 else
			 fullstar=true;



			}
			else
			{
			fullstar=true;
			}
  
     		return fullstar;
		},
		triggerRating	:function(ratedid,ratedvalue) {
			

				this.config.callbackfn(ratedid,ratedvalue);

				
		},
		setactiveClass	: function(index)
		{



							if(this.config.rated<= this.config.totalstar && this.config.rated>0)
							{

								    

									if(index<=this.config.rated)
									this.setcss=$self.ratedstar;
									else
									this.setcss=$self.unratedstar;

									

									

							}	
							else
							{

									this.setcss=$self.unratedstar;
							}

											var n=parseFloat(this.config.rated);
 											if((n === +n && n !== (n|0))==true)
											{

													var	matchedvalue,minvalue,maxvalue;
													minvalue=parseFloat(index)-parseFloat("0.5");
												    maxvalue=parseFloat(index)+parseFloat("0.4");
												  		
												    
												if($self.config.rated>=minvalue && $self.config.rated<=maxvalue && parseFloat($self.config.rated)%1>=parseFloat(".5"))
												{
												
												this.setcss=$self.halfstar;
												}

													
											}
		},
		resetOptions	: function (element) {

										
										 this.config.lock=$(element).closest('.'+$self.elementClass).attr('data-lock');
										 this.config.rated=$(element).closest('.'+$self.elementClass).attr('data-rated');
										 this.config.totalstar=$(element).closest('.'+$self.elementClass).attr('data-totalstar');
										 this.config.halfrate=	$(element).closest('.'+$self.elementClass).attr('data-halfrate');
										 this.config.lang=	$(element).closest('.'+$self.elementClass).attr('data-lang');
										
										



		}
	}


	$.fn.stars=function(options){
		var dataoptions,optionslock,optionslang,optionsrated,optionstotalstar,optionsid,optionstheme,optionshalfrate,optioncookie;
			
		 this.each(function(index, val) {
		 	
		 		optionslock=(options.lock==''  || $.type(options.lock)=='undefined' ? false : options.lock);
		 		optionslang=(options.lang==''  || $.type(options.lang)=='undefined' ? 'en' : options.lang);
		 		optionsrated=(options.rated==''  || $.type(options.rated)=='undefined' ? 0 : options.rated);
		 		optionstotalstar=(options.totalstar==''  || $.type(options.totalstar)=='undefined' ? 5 : options.totalstar);
		 		optionsid=(options.id==''  || $.type(options.id)=='undefined' ? 0 : options.id);
		 		optionstheme=(options.theme==''  || $.type(options.theme)=='undefined' ? 1 : options.theme);
		 		optionshalfrate=(options.halfrate==''  || $.type(options.halfrate)=='undefined' ? true : options.halfrate);
		 		optioncookie=(options.cookiename==''  || $.type(options.cookiename)=='undefined' ? '' : options.cookiename);//defualt empty
		 			
		 		dataoptions={

				lock	: 	($(this).attr('data-lock')==''  || $.type($(this).attr('data-lock'))=='undefined' ? optionslock : $(this).attr('data-lock')),
				lang	: 	($(this).attr('data-lang')==''  || $.type($(this).attr('data-lang'))=='undefined' ? optionslang : $(this).attr('data-lang')),
				rated	:	($(this).attr('data-rated')==''  || $.type($(this).attr('data-rated'))=='undefined' ? optionsrated : $(this).attr('data-rated')),
				totalstar	: ($(this).attr('data-totalstar')==''  || $.type($(this).attr('data-totalstar'))=='undefined' ? optionstotalstar : $(this).attr('data-totalstar')),
				id	: ($(this).attr('data-id')==''  || $.type($(this).attr('data-id'))=='undefined' ? optionsid : $(this).attr('data-id')),
				theme		: ($(this).attr('data-theme')==''  || $.type($(this).attr('data-theme'))=='undefined' ? optionstheme : $(this).attr('data-theme')),
				halfrate	: ($(this).attr('data-halfrate')==''  || $.type($(this).attr('data-halfrate'))=='undefined' ? optionshalfrate : $(this).attr('data-halfrate')),
				cookiename	: ($(this).attr('data-cookiename')==''  || $.type($(this).attr('data-cookiename'))=='undefined' ? optioncookie : $(this).attr('data-cookiename'))
				};

				var optcokie=options.cookiename;
				if(optcokie!="undefined" && optcokie!='' && optcokie!=null)
                {//cokkiename  
                	
                      var cooki=Cookies.get(options.cookiename);
                      if(cooki!="undefined" && cooki!='' && cooki!=null)
                      {
	                     if(cooki==dataoptions.id)
                 	     dataoptions.lock=true; 
                      }

                }
				
				options=$.extend({},options,dataoptions); // default options from script to all element
			
				
				

				$(this).attr('data-lock', options.lock);
				$(this).attr('data-lang', options.lang);
				$(this).attr('data-rated', options.rated);
				$(this).attr('data-totalstar', options.totalstar);
				$(this).attr('data-id', options.id);
				$(this).attr('data-theme', options.theme);
				$(this).attr('data-halfrate', options.halfrate);
				$(this).attr('data-cookiename', options.cookiename);


				if(dataoptions.cookiename!="undefined"  && dataoptions.cookiename!='' && dataoptions.cookiename!=null)
				{
				 cooki2=Cookies.get(dataoptions.cookiename);				
                if(cooki2!="undefined" && cooki2!='' && cooki2!=null)
                {
	                if(cooki2==$(this).attr('data-id'))
					$(this).attr('data-lock',true); //if through data-  cookie name check and lock (multiple cookie name)
				}
				
				}
			
		 	 new Rating(this,options);
			 return this;
		 });
			 
		
		
	}


})(jQuery)