$(document).ready(function (){

	$(window).load(function()
	{
     $("html,body").animate({scrollTop: 0}, 1000);
	});

	$(".bt-menu").click(function(){
	if ($("#menu-mobile").hasClass("closeMenu")){
	$( ".bt-menu img").removeClass("imgRotateRight").addClass("imgRotateLeft");
	$("#menu-mobile").removeClass("closeMenu").addClass("openMenu");
	}
	else{
	$( ".bt-menu img").removeClass("imgRotateLeft").addClass("imgRotateRight");
	$("#menu-mobile").removeClass("openMenu").addClass("closeMenu");
		}
	});

		$(".wrapper-nav ul li a").click(function(event){
		event.preventDefault();
		$(".wrapper-nav ul li").removeClass("active");
		$(this).parent("li").addClass("active");
		
		});
	
	
	var lastId,
    topMenu = $("#navMenuScroll");
    topMenuHeight = topMenu.outerHeight()-10,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

      menuItems.click(function(e){
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 900);
      e.preventDefault();
    });

    $(window).scroll(function(){
     var fromTop = $(this).scrollTop()+topMenuHeight;
	 
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";
     
     if (lastId !== id) {
      lastId = id;
      menuItems.parent().removeClass("active").end().filter("[href=#"+id+"]").parent().addClass("active");
     }           
    });
	
	var winWidth =$(window).width();
	if(winWidth > 750){
	$( ".hwImg img,.featureMargin img" ).mouseenter(function() {
	   $(this).addClass("imgScale");
	});
	
	$( ".hwImg img,.featureMargin img" ).mouseleave(function() {
	  $(this).removeClass("imgScale");
		});
	}
	
	var Id,
    topMenu = $("#homeOptionScroll");
    topMenuHeight = topMenu.outerHeight()-10,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

      menuItems.click(function(e){
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 900);
      e.preventDefault();
    });

    $(window).scroll(function(){
     var fromTop = $(this).scrollTop()+topMenuHeight;
	 
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";
     
     if (Id !== id) {
      Id = id;
      menuItems.parent().removeClass("active").end().filter("[href=#"+id+"]").parent().addClass("active");
     }           
    })
	
});