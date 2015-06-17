jQuery.noConflict();
jQuery(document).ready(function($){

	"use strict";

	Pace.on("done", function(){
		$("#loader-wrapper").fadeOut(500);
		$(".pace").remove();
	});

	//Sticky Header...
	$("#header-wrapper").sticky({ topSpacing: 0 });

	//One Pag Nav...
	if($('.dt-onepage-menu #main-menu').length) {
		$('.dt-onepage-menu #main-menu').onePageNav({
			currentClass : 'current_page_item',
			filter		 : ':not(.external)',
			scrollSpeed  : 750,
			scrollOffset : 89
		});
		$('.dt-onepage-menu #main-menu').meanmenu({
			meanMenuContainer :  $('#menu-container'),
			meanRevealPosition:  'right',
			meanScreenWidth   :  767
		});
	}

	//NICE SCROLL...
	$("html").niceScroll({ zindex: 999999, cursorborder: "1px solid #424242" });
	
	var isMobile = (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i)) ? true : false;
	var $px, currentWidth;
	
	//Tooltip
	 if($(".dt-sc-tooltip-bottom").length){
		 $(".dt-sc-tooltip-bottom").each(function(){ $(this).tipTip({maxWidth: "auto"}); });
	 }

	 if($(".dt-sc-tooltip-top").length){
		 $(".dt-sc-tooltip-top").each(function(){ $(this).tipTip({maxWidth: "auto",defaultPosition: "top"}); });
	 }

	 if($(".dt-sc-tooltip-left").length){
		 $(".dt-sc-tooltip-left").each(function(){ $(this).tipTip({maxWidth: "auto",defaultPosition: "left"}); });
	 }
	 
	 if($(".dt-sc-tooltip-right").length){
		 $(".dt-sc-tooltip-right").each(function(){ $(this).tipTip({maxWidth: "auto",defaultPosition: "right"}); });
	 }//Tooltip End

	//Menu Start
	megaMenu();
	function megaMenu() {
		var screenWidth = $(document).width(),
		containerWidth = $("#header .container").width(),
		containerMinuScreen = (screenWidth - containerWidth)/2;
		if( containerWidth == screenWidth ){

			$px = mytheme_urls.scroll == "disable" ? 45 : 25;
			
			$("li.menu-item-megamenu-parent .megamenu-child-container").each(function(){

				var ParentLeftPosition = $(this).parent("li.menu-item-megamenu-parent").offset().left,
				MegaMenuChildContainerWidth = $(this).width();

				if( (ParentLeftPosition + MegaMenuChildContainerWidth) > screenWidth ){
					var SwMinuOffset = screenWidth - ParentLeftPosition;
					var marginFromLeft = MegaMenuChildContainerWidth - SwMinuOffset;
					var marginFromLeftActual = (marginFromLeft) + $px;
					var marginLeftFromScreen = "-"+marginFromLeftActual+"px";
					$(this).css('left',marginLeftFromScreen);
				}

			});
		} else {
		
			$px = mytheme_urls.scroll == "disable" ? 40 : 20;

			$("li.menu-item-megamenu-parent .megamenu-child-container").each(function(){
				var ParentLeftPosition = $(this).parent("li.menu-item-megamenu-parent").offset().left,
				MegaMenuChildContainerWidth = $(this).width();

				if( (ParentLeftPosition + MegaMenuChildContainerWidth) > containerWidth ){
					var marginFromLeft = ( ParentLeftPosition + MegaMenuChildContainerWidth ) - screenWidth;
					var marginLeftFromContainer = containerMinuScreen + marginFromLeft + $px;

					if( MegaMenuChildContainerWidth > containerWidth ){
						var MegaMinuContainer	= ( (MegaMenuChildContainerWidth - containerWidth)/2 ) + 10;
						var marginLeftFromContainerVal = marginLeftFromContainer - MegaMinuContainer;
						marginLeftFromContainerVal = "-"+marginLeftFromContainerVal+"px";
						$(this).css('left',marginLeftFromContainerVal);
					} else {
						marginLeftFromContainer = "-"+marginLeftFromContainer+"px";
						$(this).css('left',marginLeftFromContainer);
					}
				}

			});
		}
	}
	
	//Menu Hover Start
	function menuHover() {
		$("li.menu-item-depth-0,li.menu-item-simple-parent ul li" ).hover(
			function(){
				if( $(this).find(".megamenu-child-container").length  ){
					$(this).find(".megamenu-child-container").stop().fadeIn('fast');
				} else {
					$(this).find("> ul.sub-menu").stop().fadeIn('fast');
				}
			},
			function(){
				if( $(this).find(".megamenu-child-container").length ){
					$(this).find(".megamenu-child-container").stop(true, true).hide();
				} else {
					$(this).find('> ul.sub-menu').stop(true, true).hide(); 
				}
			}
		);
	}//Menu Hover End

	 if($(".dt-sc-tooltip-top-carousel").length){
		 $(".dt-sc-tooltip-top-carousel").each(function(){ $(this).tipTip({maxWidth: "250px",defaultPosition: "top"}); });
	 }

	//Tooltip
	 if($(".dt-sc-tooltip-bottom").length){
		 $(".dt-sc-tooltip-bottom").each(function(){ $(this).tipTip({maxWidth: "auto"}); });
	 }

	 if($(".dt-sc-tooltip-top").length){
		 $(".dt-sc-tooltip-top").each(function(){ $(this).tipTip({maxWidth: "auto",defaultPosition: "top"}); });
	 }

	 if($(".dt-sc-tooltip-left").length){
		 $(".dt-sc-tooltip-left").each(function(){ $(this).tipTip({maxWidth: "auto",defaultPosition: "left"}); });
	 }
	 
	 if($(".dt-sc-tooltip-right").length){
		 $(".dt-sc-tooltip-right").each(function(){ $(this).tipTip({maxWidth: "auto",defaultPosition: "right"}); });
	 }//Tooltip End
	
	//Sticky Navigation
	if( navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) || 
		navigator.userAgent.match(/Android/i)||
		navigator.userAgent.match(/webOS/i) || 
		navigator.userAgent.match(/iPhone/i) || 
		navigator.userAgent.match(/iPod/i)) {
			if( mytheme_urls.stickynav === "enable") {
				$("#header").sticky({ topSpacing: 0 });
			}
	} else {
		if( mytheme_urls.stickynav === "enable") {
			$("#header").sticky({ topSpacing: 0 });
		}
	}//Sticky Navigation End
	
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 90) {
			$("#header-sticky-wrapper").addClass("ha-header-color");
		} else {
			$("#header-sticky-wrapper").removeClass("ha-header-color");
		}
	});
	
	//Mobile Menu
	$("#dt-menu-toggle").click(function( event ){
		event.preventDefault();
		var $menu = $("nav#main-menu").find("ul.menu:first");
		$menu.slideToggle(function(){
			$menu.css('overflow' , 'visible');
			$menu.toggleClass('menu-toggle-open');
		});
	});

	$(".dt-menu-expand").click(function(){
		if( $(this).hasClass("dt-mean-clicked") ){
			$(this).text("+");
			if( $(this).prev('ul').length ) {
				$(this).prev('ul').slideUp(300);
			} else {
				$(this).prev('.megamenu-child-container').find('ul:first').slideUp(300);
			}
		} else {
			$(this).text("-");
			if( $(this).prev('ul').length ) {
				$(this).prev('ul').slideDown(300);
			} else{
				$(this).prev('.megamenu-child-container').find('ul:first').slideDown(300);
			}
		}
		
		$(this).toggleClass("dt-mean-clicked");
		return false;
	});
	
	if( !isMobile ){
		currentWidth = window.innerWidth || document.documentElement.clientWidth;
		if( currentWidth > 767 ){
			menuHover();
		}
	}	
	//Mobile Menu End
//Menu End

	//Parallax Sections...
	$('.dt-sc-paralax').bind('inview', function (event, visible) {
		if(visible === true) {
			$(this).parallax("50%", 0.5);
		} else {
			$(this).css('background-position', '');
		}
	});

	//Selection Box...
	$("select").each(function(){
		if($(this).css('display') != 'none') {
			$(this).wrap( '<div class="selection-box"></div>' );
		}
	});
	
	/* To Top */
	$().UItoTop({ easingType: 'linear' });
	
	//Accordion & Toggle
	$('.dt-sc-toggle').toggle(function(){ $(this).addClass('active'); },function(){ $(this).removeClass('active'); });
	$('.dt-sc-toggle').click(function(){ $(this).next('.dt-sc-toggle-content').slideToggle(); });
	
	$('.dt-sc-toggle-frame-set').each(function(){
		var $this = $(this),
		    $toggle = $this.find('.dt-sc-toggle-accordion');
			
			$toggle.click(function(){
				if( $(this).next().is(':hidden') ) {
					$this.find('.dt-sc-toggle-accordion').removeClass('active').next().slideUp();
					$(this).toggleClass('active').next().slideDown();
				}
				return false;
			});
			
			//Activate First Item always
			$this.find('.dt-sc-toggle-accordion:first').addClass("active");
			$this.find('.dt-sc-toggle-accordion:first').next().slideDown();
  	});//Accordion & Toggle
	
	/* Portfolio Lightbox */
    var $pphoto = $('a[data-gal^="prettyPhoto[gallery]"]');
    if ($pphoto.length) {
        //PRETTYPHOTO...
        $("a[data-gal^='prettyPhoto[gallery]']").prettyPhoto({
			animation_speed:'normal',
			theme:'light_square',
			slideshow:3000,
			autoplay_slideshow: false,
			social_tools: false,
			deeplinking:false
		});
    }
	
	// Portfolio Slider Single in Portfolio
	if( $(".portfolio-single-slider").find("li").length > 1 ) {
		$(".portfolio-single-slider").bxSlider({ auto:false, video:true, useCSS:false, pagerCustom: '#bx-pager', autoHover:true, adaptiveHeight:true, controls:true });
	}//Portfolio Slider Single in Portfolio
	
	// Portfolio Slider Single in Portfolio
	if( $(".blog-slider").find("li").length > 1 ) {
		$(".blog-slider").bxSlider({ auto:false, video:true, useCSS:false, pagerCustom: '#bx-pager', autoHover:true, adaptiveHeight:true, controls:true });
	}//Portfolio Slider Single in Portfolio
	
	// Tabs Shortcodes
	if($('ul.dt-sc-tabs').length > 0) {
	  $('ul.dt-sc-tabs').tabs('> .dt-sc-tabs-content', {
		  effect: 'fade'
	  });
	}
	
	if($('ul.dt-sc-tabs-frame').length > 0){
	  $('ul.dt-sc-tabs-frame').tabs('> .dt-sc-tabs-frame-content', {
		  effect: 'fade'
	  });
	}
	
	if($('.dt-sc-tabs-vertical-frame').length > 0){
	  
	  $('.dt-sc-tabs-vertical-frame').tabs('> .dt-sc-tabs-vertical-frame-content', {
		  effect: 'fade'
	  });
	  
	  $('.dt-sc-tabs-vertical-frame').each(function(){
		$(this).find("li:first").addClass('first').addClass('current');
		$(this).find("li:last").addClass('last');
	  });
	  
	  $('.dt-sc-tabs-vertical-frame li').click(function(){
		$(this).parent().children().removeClass('current');
		$(this).addClass('current');
	  });
	  
	}/*Tabs Shortcode Ends*/
	  
	//Contact Map...
	var $map = $('#contact_map');
	if( $map.length ) {
		$map.gMapResp({
			address: 'Iamdesigning, 1/52,3/53, Lal Bahadhur Colony,Shringar Nagar Road, Near Gopal Naidu School, Peelamedu, Coimbatore, TN 641004',
			zoom: 16,
			markers: [
				{ 'address' : 'Iamdesigning, 1/52,3/53, Lal Bahadhur Colony,Shringar Nagar Road, Near Gopal Naidu School, Peelamedu, Coimbatore, TN 641004' }
			],
			scrollwheel: false,
			styles: [ { "stylers": [ { "featureType": "all" }, { "saturation": -100 }, { "gamma": 0.50 }, {"lightness": 30 } ] } ]
		});
	}
	
	$(window).load(function() {

		//Portfolio isotope
		var $container = $('.dt-sc-portfolio-container');
		var $gw, $width;

		if( $container.length) {

			$width = $('.dt-sc-portfolio-container .portfolio').hasClass('no-space') ? 0 : 30;
			if($('.page-with-sidebar').length) { $width = 20; }

			$(window).smartresize(function(){
				$container.css({overflow:'hidden'}).isotope({itemSelector : '.column',masonry: { gutterWidth: $width } });
			});

			$container.isotope({
			  filter: '*',
			  masonry: { gutterWidth: $width },
			  animationOptions: { duration: 750, easing: 'linear', queue: false  }
			});
		}
		
		if($("div.dt-sc-sorting-container").length){
			$("div.dt-sc-sorting-container a").click(function(){
				$width = $('.dt-sc-portfolio-container .portfolio').hasClass('no-space') ? 0 : 20;
				$("div.dt-sc-sorting-container a").removeClass("active-sort");
				var selector = $(this).attr('data-filter');
				$(this).addClass("active-sort");
				$container.isotope({
					filter: selector,
					masonry: { gutterWidth: $width },
					animationOptions: { duration:750, easing: 'linear',  queue: false }
				});
			return false;	
			});
		}
		//Portfolio isotope End
		
		//Blog
		if( $(".apply-isotope").length ){
			$(".apply-isotope").isotope({itemSelector : '.column',transformsEnabled:false,masonry: { gutterWidth: 20} });
		}//Blog
		
		//Gallery Blog Slider...
		if( ($("ul.entry-gallery-post-slider").length) && ( $("ul.entry-gallery-post-slider li").length > 1 ) ){
		 $("ul.entry-gallery-post-slider").bxSlider({ auto:false, video:true, useCSS:false, autoHover:true, adaptiveHeight:true, pagerCustom: '#entry-gallery-pager' });
		}
	});
	
	animateSkillBars();
	$(window).scroll(function(){ 
	 	animateSkillBars();
	});
	 
	function animateSkillBars(){
		 var applyViewPort = ( $("html").hasClass('csstransforms') ) ? ":in-viewport" : "";
		 
		 $('.dt-sc-progress'+applyViewPort).each(function(){
			 var progressBar = $(this),
			 	 progressValue = progressBar.find('.dt-sc-bar').attr('data-value');
				 
				 if (!progressBar.hasClass('animated')) {
					 progressBar.addClass('animated');
					 progressBar.find('.dt-sc-bar').animate({width: progressValue + "%"},600,function(){ progressBar.find('.dt-sc-bar-text').fadeIn(400); });
				 }
    	 });
  	}
	
	if($(".dt-sc-testimonial-carousel").length) {
		$('.dt-sc-testimonial-carousel').carouFredSel({
		  responsive: true,
		  auto: false,
		  width: '100%',
		  height: 'variable',
		  prev: '.testimonial-prev',
		  next: '.testimonial-next',
		  pagination: '.testimonial-pagination',
		  scroll: 1,				
		  items: {
			width:1170,
			height: 'variable',
			visible: {
			  min: 1,
			  max: 3
			}
		  }				
		});			
	}
	
	if($(".dt-sc-testimonial-type2").length) {
		$('.dt-sc-testimonial-type2').carouFredSel({
		  responsive: true,
		  auto: false,
		  width: '100%',
		  height: 'variable',
		  pagination: {
	        container: '.testimonial-pagination2',
	        anchorBuilder: false
		  },
		  scroll: 1,				
		  items: {
			width:1170,
			height: 'variable',
			visible: {
			  min: 1,
			  max: 3
			}
		  }				
		});			
	}
		  
	if($(".dt_carousel").length) {
		$('.dt_carousel').carouFredSel({
		  responsive: true,
		  auto: false,
		  width: '100%',
		  height: 'variable',
		  prev: '.prev-arrow',
		  next: '.next-arrow',
		  scroll: 1,				
		  items: {
			width: $(this).find('.column').width(),
			height: 'variable',
			visible: {
			  min: 1,
			  max: 3
			}
		  }				
		});
	}
	$(window).load(function() {
		if($(".dt-custom-carousel-wrapper").length) {
			$('.dt-custom-carousel-wrapper').carouFredSel({
				responsive: true,
				auto: false,
				width: '100%',
				height: 'variable',
				pagination: {
					container: "#dt-custom-carousel-pager",
					anchorBuilder: false
				},
				scroll: {
					items: 1,
					fx : "crossfade",
					duration : 750
				},
				items:{ 
				  width: 400,
				  height: 'variable',
				  visible: { min: 1,max: 1 }
				}
			});
		}
		
		if($('#tweets_container').length) {
			$('#tweets_container .tweet_list').carouFredSel({
				width: 'auto',
				height: 'auto',
				scroll: {
					duration: 1000
				},
				direction: 'up',
				items: {
					height: 'auto',
					visible: {
						min: 1,
						max: 1
					}
				}
			});
		}
	});

	$('form[name="frmsubscribe"]').each(function(){
		$(this).submit(function () {
			var This = $(this);
			if($(This).valid()) {
				var action = $(This).attr('action');
	
				var data_value = unescape($(This).serialize());
				$.ajax({
					 type: "POST",
					 url:action,
					 data: data_value,
					 error: function (xhr, status, error) {
						 confirm('The page save failed.');
					   },
					  success: function (response) {
						This.next('.ajax_subscribe_msg').html(response);
						This.next('.ajax_subscribe_msg').slideDown('slow');
						if (response.match('success') != null) $(This).slideUp('slow');
					 }
				});
			}
			return false;
		});
	});
	 
	/* Tweets */
	if( $('.tweets').length ){
		$(".tweets").tweet({
			modpath: 'js/twitter/',
			username: "envato",
			count: 3,
			loading_text: "loading tweets...",
			template: "{text} {time}"
		});
	}
	 
	if($('.tweet_list').length > 0) {	
		$(".tweet_list").tweet({
			modpath: 'js/twitter/',
			username: "asin",
			count: 2,
			loading_text: "loading tweets...",
			template: "{text}{join}{time}"
		});
	}
	
	if($('#tweets_container').length) {
		$("#tweets_container").tweet({
			modpath: 'js/twitter/',
			username: "envato",
			count: 3,
			loading_text: "loading tweets...",
			join_text: '<i class="fa fa-twitter"></i>',
			template: "{join}{text} - {time}"
		});
	}
	
	//Animate Number...
	$('.dt-sc-num-count').each(function(){
	  $(this).one('inview', function (event, visible) {
		  if(visible === true) {
			  var val = $(this).find('p').attr('data-value');
			  $(this).find('p').animateNumber({ number: val	}, 2000);
		  }
	  });
	});
	
	// Clients Carousel
	if( $('.dt-sc-partner-carousel').length) {
		$('.dt-sc-partner-carousel').each(function(){
			  var pagger = $(this).parents(".dt-sc-partner-carousel-wrapper").find("div.carousel-arrows");
			$(this).carouFredSel({
				  responsive:true,
				  auto:true,
				  width:'100%',
				  height: 'variable',
				  scroll:1,
				  items:{ 
				  	width:250,
				  	height: 'variable',
				  	visible: {min: 1,max: 4} 
				  },
				  swipe: {
					  onTouch: true,
					  onMouse: true
				  }
			});

		});
	}// Clients Carousel End

	//DONUT CHART...
	$('.dt-sc-donutchart').each(function(){
		$(this).one('inview', function (event, visible) {
			if(visible === true) {
				var bgcolor, fgcolor = "";

				if($(this).attr('data-bgcolor') !== "") bgcolor = $(this).attr('data-bgcolor'); else bgcolor = '#f5f5f5';
				if($(this).attr('data-fgcolor') !== "") fgcolor = $(this).attr('data-fgcolor'); else fgcolor = '#959595';
				
				$(this).donutchart({'size': 200, 'donutwidth': 8, 'fgColor': fgcolor, 'bgColor': bgcolor, 'textsize': 30 });
				$(this).donutchart('animate');
			}
		});
	});

	//BMI Form Validation...
	$('form[name="frmbmi"]').validate({
		rules: { 
			txtfeet: { required: true },
			txtinches: { required: true },
			txtlbs: { required: true }
		},
		errorPlacement: function(error, element) { }
	});

	//BMI Calculation...
	$('form[name="frmbmi"]').submit(function(){
		var This = $(this);
		if($(This).valid()) {
			var fet = $('input[name="txtfeet"]').val();
			var inc = $('input[name="txtinches"]').val();
			var tinc = ( parseInt(fet) * 12 ) + parseInt(inc);
			
			var lbs = $('input[name="txtlbs"]').val();
			
			var bmi = ( parseFloat(lbs) / (tinc * tinc) ) * 703;
			
			$('input[name="txtbmi"]').val(parseFloat(bmi).toFixed(1));
		}
		return false;
	});
	
	//BMI View...
	if($("a.fancyInline").length) {
		$("a.fancyInline").fancybox({
			scrolling: 'no',
			width: 'auto',
			height: 'auto'
		});
	}

	//NEWSLETTER AJAX SUBMIT...
	$('form[name="frmsubscribe"]').submit(function () {
		
		var This = $(this);
		
		if($(This).valid()) {
			var action = $(This).attr('action');

			var data_value = unescape($(This).serialize());
			$.ajax({
				 type: "POST",
				 url:action,
				 data: data_value,
				 error: function (xhr, status, error) {
					 confirm('The page save failed.');
				   },
				  success: function (response) {
					$('#ajax_subscribe_msg').html(response);
					$('#ajax_subscribe_msg').slideDown('slow');
					if (response.match('success') != null) $(This).slideUp('slow');
				 }
			});
		}
		return false;
    });

});

// animate css + jquery inview configuration
(function ($) {
	"use strict";
	
	$(".animate").each(function () {
		$(this).bind('inview', function (event, visible) {
			var $delay = "";
			var $this = $(this),
				$animation = ($this.data("animation") !== undefined) ? $this.data("animation") : "slideUp";
			$delay = ($this.data("delay") !== undefined) ? $this.data("delay") : 300;

			if (visible === true) {
				   setTimeout(function () { $this.addClass($animation); }, $delay);
		   } else {
				   setTimeout(function() { $this.removeClass('animate'); } );
		   }
		});
	});
})(jQuery);

jQuery(window).load(function() {
	'use strict';
	var $ = jQuery;
	chart();
	graph();
	
	//Chart
	function chart() {
	  var $ = jQuery;
	  
	  $('.chart').each(function () {
		var $this             = $(this),
			line              = [],
			type              = 'line',
			width             = '100%',
			height            = '225',
			lineColor         = '#e1e1e1',
			fillColor         = 'rgba(0, 0, 0, .05)',
			spotColor         = '#a9a8a8',
			minSpotColor      = '#c6c6c6',
			maxSpotColor      = '#727070',
			verticalLineColor = '#e1e1e1',
			spotColorHovered  = '#1e1e1e',
			lineWidth         = 2,
			barSpacing        = 8,
			barWidth          = 18,
			barColor          = 'rgba(0, 0, 0, .2)',
			offset            = 0,
			sliceColors       = [],
			colorMap          = [],
			rangeColors       = ['#d3dafe', '#a8b6ff', '#7f94ff'],
			posBarColor	      = '#c6c6c6',
			negBarColor	      = '#727070',
			zeroBarColor      = '#a9a8a8',
			performanceColor  = '#575656',
			targetWidth       = 5,
			targetColor       = '#1e1e1e';
		  
		if ($this.attr('data-line') !== undefined && $this.attr('data-line') !== false) {
		  line = $this.attr('data-line').split(/,/);
		}
		if ($this.attr('data-height') !== undefined && $this.attr('data-height') !== false) {
		  height = $this.attr('data-height');
		}
		if ($this.attr('data-line-width') !== undefined && $this.attr('data-line-width') !== false) {
		  lineWidth = $this.attr('data-line-width');
		}
		if ($this.attr('data-line-color') !== undefined && $this.attr('data-line-color') !== false) {
		  lineColor = $this.attr('data-line-color');
		}
		if ($this.attr('data-vertical-line-color') !== undefined && $this.attr('data-vertical-line-color') !== false) {
		  verticalLineColor = $this.attr('data-vertical-line-color');
		}
		if ($this.attr('data-spot-color-hovered') !== undefined && $this.attr('data-spot-color-hovered') !== false) {
		  spotColorHovered = $this.attr('data-spot-color-hovered');
		}
		if ($this.attr('data-spot-color') !== undefined && $this.attr('data-spot-color') !== false) {
		  spotColor = $this.attr('data-spot-color');
		}
		if ($this.attr('data-min-spot-color') !== undefined && $this.attr('data-min-spot-color') !== false) {
		  minSpotColor = $this.attr('data-min-spot-color');
		}
		if ($this.attr('data-max-spot-color') !== undefined && $this.attr('data-max-spot-color') !== false) {
		  maxSpotColor = $this.attr('data-max-spot-color');
		}
		if ($this.attr('data-bar-spacing') !== undefined && $this.attr('data-bar-spacing') !== false) {
		  barSpacing = $this.attr('data-bar-spacing');
		}
		if ($this.attr('data-bar-width') !== undefined && $this.attr('data-bar-width') !== false) {
		  barWidth = $this.attr('data-bar-width');
		}
		if ($this.attr('data-bar-color') !== undefined && $this.attr('data-bar-color') !== false) {
		  barColor = $this.attr('data-bar-color');
		}
		if ($this.attr('data-color-map') !== undefined && $this.attr('data-color-map') !== false) {
		  colorMap = $this.attr('data-color-map').split(/, /);
		}
		if ($this.attr('data-offset') !== undefined && $this.attr('data-offset') !== false) {
		  offset = $this.attr('data-offset');
		}
		if ($this.attr('data-slice-colors') !== undefined && $this.attr('data-slice-colors') !== false) {
		  sliceColors = $this.attr('data-slice-colors').split(/, /);
		}
		if ($this.attr('data-range-colors') !== undefined && $this.attr('data-range-colors') !== false) {
		  rangeColors = $this.attr('data-range-colors').split(/, /);
		}
		if ($this.attr('data-target-width') !== undefined && $this.attr('data-target-width') !== false) {
		  targetWidth = $this.attr('data-target-width');
		}
		if ($this.attr('data-pos-bar-color') !== undefined && $this.attr('data-pos-bar-color') !== false) {
		  posBarColor = $this.attr('data-pos-bar-color');
		}
		if ($this.attr('data-neg-bar-color') !== undefined && $this.attr('data-neg-bar-color') !== false) {
		  negBarColor = $this.attr('data-neg-bar-color');
		}
		if ($this.attr('data-performance-color') !== undefined && $this.attr('data-performance-color') !== false) {
		  performanceColor = $this.attr('data-performance-color');
		}
		if ($this.attr('data-fill-color') !== undefined && $this.attr('data-fill-color') !== false) {
		  fillColor = $this.attr('data-fill-color');
		}
		if ($this.attr('data-type') == 'bar') {
		  type = 'bar';
		}
		if ($this.attr('data-type') == 'pie') {
		  type = 'pie';
		  width = 'auto';
		}
		if ($this.attr('data-type') == 'discrete') {
		  type = 'discrete';
		}
		if ($this.attr('data-type') == 'tristate') {
		  type = 'tristate';
		}
		if ($this.attr('data-type') == 'bullet') {
		  type = 'bullet';
		}
		if ($this.attr('data-type') == 'box') {
		  type = 'box';
		}
		
		$this.sparkline(line, {
		  type               : type,
		  width              : width,
		  height             : height,
		  lineColor          : lineColor,
		  fillColor          : fillColor,
		  lineWidth          : lineWidth,
		  spotColor          : spotColor,
		  minSpotColor       : minSpotColor,
		  maxSpotColor       : maxSpotColor,
		  highlightSpotColor : spotColorHovered,
		  highlightLineColor : verticalLineColor,
		  spotRadius         : 6,
		  chartRangeMin      : 0,
		  barSpacing         : barSpacing,
		  barWidth           : barWidth,
		  barColor           : barColor,
		  offset             : offset,
		  sliceColors        : sliceColors,
		  colorMap           : colorMap,
		  posBarColor	     : posBarColor,
		  negBarColor	     : negBarColor,
		  zeroBarColor       : zeroBarColor,
		  rangeColors        : rangeColors,
		  performanceColor   : performanceColor,
		  targetWidth        : targetWidth,
		  targetColor        : targetColor
		});
	  });
	}
	
	function graph($re) {
	  var $ = jQuery,
		  tax_data;
	  
	  if ($re) {
		$('.graph').html('');
	  }
	  
	  tax_data = [
		{
		  period: "2011 Q3",
		  licensed: 3407,
		  sorned: 660
		}, {
		  period: "2011 Q2",
		  licensed: 3351,
		  sorned: 629
		}, {
		  period: "2011 Q1",
		  licensed: 3269,
		  sorned: 618
		}, {
		  period: "2010 Q4",
		  licensed: 3246,
		  sorned: 661
		}, {
		  period: "2009 Q4",
		  licensed: 3171,
		  sorned: 676
		}, {
		  period: "2008 Q4",
		  licensed: 3155,
		  sorned: 681
		}, {
		  period: "2007 Q4",
		  licensed: 3226,
		  sorned: 620
		}, {
		  period: "2006 Q4",
		  licensed: 3245,
		  sorned: null
		}, {
		  period: "2005 Q4",
		  licensed: 3289,
		  sorned: null
		}
	  ];
	  
	  
	  if ($('#hero-donut').length) {
		Morris.Donut({
		  element   : "hero-donut",
		  data      : [
			{
			  label: "PHP ",
			  value: 80
			}, {
			  label: "Wordpress",
			  value: 70
			}, {
			  label: "HTML5 & CSS3",
			  value: 90
			}, {
			  label: "Photoshop ",
			  value: 60
			}
		  ],
		  colors    : ["#ff9d00"],
		  height    : 100,
		  formatter : function(y) {
			return y + "%";
		  }
		});
	  } 
	}
});

//MeanMenu Custom Scroll...
function funtoScroll(x, e) {
	"use strict";
	var str = new String(e.target);
	var pos = str.indexOf('#');
	var t = str.substr(pos);
	
	var eleclass = jQuery(e.target).prop("class");
	
	if(eleclass == "external") {
		window.location.href = e.target;	
	} else {
		jQuery.scrollTo(t, 750, { offset: { top: -53 }});
	}
	
	jQuery(x).parent('.mean-bar').next('.mean-push').remove();		
	jQuery(x).parent('.mean-bar').remove();

	jQuery('.dt-onepage-menu #main-menu').meanmenu({
		meanMenuContainer :  jQuery('#menu-container'),
		meanRevealPosition:  'right',
		meanScreenWidth   :  767	
	});
	
	e.preventDefault();
}(jQuery);