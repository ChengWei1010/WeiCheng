$(document).ready(function() {
    
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('.navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('.navbar').removeClass('navbar-fixed');
    }
  });
});

function openProject(){
   $('.project-content').fadeIn(200);
}

function closeProject(){
   $('.project-content').fadeOut(200);
}