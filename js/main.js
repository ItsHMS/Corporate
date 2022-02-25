$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
   
        navigation : true, // Show next and prev buttons
   
        // slideSpeed : 2500,
        // paginationSpeed : 2500,
        loop:true,
        items : 1, 
        autoplay:true,
        nav:false,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
        

        
   
    });

   
  });

$(window).scroll(function(){
  var top=$(window).scrollTop();
  if(top>=112){
    $("header").addClass('secondary-dark-blue-bg');
  }
  else{
    if($("header").hasClass('secondary-dark-blue-bg')){
      $("header").removeClass('secondary-dark-blue-bg');
    }
    

  }
});

  /*
  
  var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
  
  */

