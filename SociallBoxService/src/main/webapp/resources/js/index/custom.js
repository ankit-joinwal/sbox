

jQuery(function($){

	var winWidth =$(window).width();
	var winHeight =$(window).height();
	var lastId,
    topMenu = $("#mainMenuNav");
    topMenuHeight = topMenu.outerHeight()+10,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 900);
      e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
     // Get container scroll position
     var fromTop = $(this).scrollTop()+topMenuHeight;
     
     // Get id of current scroll item
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     // Get the id of the current element
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";
     
     if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems.parent().removeClass("active").end().filter("[href=#"+id+"]").parent().addClass("active");
     }           
    })


	 /* ----------------------------------------------------------- */
    /*  1.HEADER SLIDER
    /* ----------------------------------------------------------- */
	
	
	if (winWidth > 758 ){
		
	var discoverAnimateStart =$('#features').offset().top - 250;
	var discoverSectionHeight =$('#discoverSection').height();
	var discoverAnimateTotal = discoverAnimateStart + (discoverSectionHeight + 250);
	
	var planneranimationStart = discoverAnimateTotal - 160;
	var plannerSectionHeight =$('#plannerSection').height();
	var planneranimationTotal = planneranimationStart + (plannerSectionHeight + 250);
	
	var ultimateanimationStart = planneranimationTotal - 190;
	var ultimateSectionHeight =$('#meetupSection').height();
	var ultimateanimationTotal = ultimateanimationStart + (ultimateSectionHeight + 210);
	
	var dealeanimationStart = ultimateanimationTotal-70;
	var dealSectionHeight =$('#dealSection').height();
	var dealanimationTotal = dealeanimationStart + (dealSectionHeight + 210);
	var contactStart;
	if (winWidth >1025)
	 contactStart = 4100;
	else
	 contactStart = 3600;
		
	
	$(window).scroll(function(){
	if($(window).scrollTop() > discoverAnimateStart && $(window).scrollTop() < discoverAnimateTotal){
		$(".discoverPhoneImg img").removeClass("animated bounceOutRight").addClass("animated bounceInLeft");
	   }
	   else if($(window).scrollTop() > discoverAnimateTotal || $(window).scrollTop() < discoverAnimateStart)
	   {
	   $(".discoverPhoneImg img").removeClass("animated bounceInLeft").addClass("animated bounceOutRight");
	   }
	   
	   if($(window).scrollTop() > planneranimationStart && $(window).scrollTop() < planneranimationTotal){
		$(".plannerPhoneImg img").removeClass("animated zoomOutDown").addClass("animated zoomInDown");
	   }
	   else if($(window).scrollTop() > planneranimationTotal || $(window).scrollTop() < planneranimationStart)
	   {
	   $(".plannerPhoneImg img").removeClass("animated zoomInDown").addClass("animated zoomOutDown");
	   }
	   
	   if($(window).scrollTop() > ultimateanimationStart && $(window).scrollTop() < ultimateanimationTotal){
		$(".meetupPhoneImgImg img").removeClass("animated bounceOutLeft").addClass("animated bounceInRight");
	   }
	   else if($(window).scrollTop() > ultimateanimationTotal || $(window).scrollTop() < ultimateanimationStart)
	   {
	   $(".meetupPhoneImgImg img").removeClass("animated bounceInRight").addClass("animated bounceOutLeft");
	   }
	   
	   if($(window).scrollTop() > dealeanimationStart && $(window).scrollTop() < dealanimationTotal){
		$(".dealPhoneImg img").removeClass("animated rollOut").addClass("animated rollIn");
	   }
	   else if($(window).scrollTop() > dealanimationTotal || $(window).scrollTop() < dealeanimationStart)
	   {
	   $(".dealPhoneImg img").removeClass("animated rollIn").addClass("animated rollOut");
	   }
	   
	   if($(window).scrollTop() >contactStart){
		$(".facebookLogo a img").removeClass("animated bounceOutRight").addClass("animated bounceInLeft");
		$(".twitterLogo a img").removeClass("animated bounceOutRight").addClass("animated bounceInLeft");
		$(".pinterestLogo a img").removeClass("animated bounceOutRight").addClass("animated bounceInLeft");
	   }
	   else if($(window).scrollTop() < contactStart - 170)
	   {
	   $(".facebookLogo a img").removeClass("animated bounceInLeft").addClass("animated bounceOutRight");
	   $(".twitterLogo a img").removeClass("animated bounceInLeft").addClass("animated bounceOutRight");
	   $(".pinterestLogo a img").removeClass("animated bounceInLeft").addClass("animated bounceOutRight");
	   }
	   
	
	});
	
	}
      
       $(window).scroll(function(){
	   if (winWidth > 700){
        if($(window).scrollTop() >160){
          $(".header-top").addClass('fixedHeader'); 
          $(".logo-area img").css('display','inline-block');   
        }
		else{
			$(".header-top").removeClass('fixedHeader');
			$(".logo-area img").css('display','none');
		}
		}
      else{
	  if($(window).scrollTop() >80){
		$(".header-top").addClass('fixedHeader'); 
	  }
        else{
		$(".header-top").removeClass('fixedHeader');
      }
	  }
    })
	
$(window).load(function()
{
     $("html,body").animate({scrollTop: 0}, 1000);
});
	/* ----------------------------------------------------------- */
	/*  1. MENU SLIDE
	/* ----------------------------------------------------------- */ 

	var menuRight = document.getElementById( 'main-menu' ),
		showRight = document.getElementById( 'menu-btn' ),
		close = document.getElementById( 'close' ),								
		body = document.body;

	window.onload = function() {
		showRight.onclick = function(e) {
			e.preventDefault();
			classie.toggle( this, 'active' );
			classie.toggle( menuRight, 'menu-open' );			
		};

		close.onclick = function() {
			menuRight.hide();						
		};

		menuRight.onclick = function() {
			classie.toggle( this, 'active' );
			classie.toggle( menuRight, 'menu-open' );				
		};
	};
			
	/* ----------------------------------------------------------- */
	/*  2. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */ 

	//MENU SCROLLING WITH ACTIVE ITEM SELECTED

	jQuery(".main-nav a").click(function(event){
		event.preventDefault();
		//calculate destination place
		$(".main-nav li").removeClass("active");
		$(this).parent("li").addClass("active");
		var dest=0;
		if($(this.hash).offset().top > $(document).height()-$(window).height()){
		  dest=$(document).height()-$(window).height();
		}else{
		  dest=$(this.hash).offset().top;
		}
		dest=dest-70;
		//go to destination
		$('html,body').animate({scrollTop:dest}, 1000,'swing');
    });

	

	/* ----------------------------------------------------------- */
	/*  3. SCREEN SLIDER (SLICK SLIDER)
	/* ----------------------------------------------------------- */

	jQuery('.screenshots-slide').slick({
	  dots: false,
	  infinite: true,
	  arrows:true, 
 	  centerMode: true,
  	  centerPadding: '60px',  
	  slidesToShow: 3,
	  
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
		  dots: false,
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        centerPadding: '60px', 
	        mobileFirst:true,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
		  dots: false,
	        slidesToShow: 2,
	        slidesToScroll: 1,
			centerPadding: '40px',
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
		  mobileFirst:true,
	        slidesToShow: 1,
	        slidesToScroll: 1,
			 centerPadding: '60px',
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	/* ----------------------------------------------------------- */
	/*  4. FANCYBOX 
	/* ----------------------------------------------------------- */

	jQuery(document).ready(function() {
		$(".fancybox").fancybox();
	});	 

	   
	/* ----------------------------------------------------------- */
	/*  7. WOW ANIMATION
	/* ----------------------------------------------------------- */ 

	 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    ); 
    wow.init();
	
});