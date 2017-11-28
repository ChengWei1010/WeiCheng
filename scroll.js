$(document).ready(function() {
    
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 260) {
      $('nav').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 261) {
      $('nav').removeClass('navbar-fixed');
    }
  });
});

function openProject(name){
   $('.project-content').fadeIn(200);
   $('#' + name).show();
   $('#overlay').show();
}

function closeProject(){
   $('.project-content').fadeOut(200);
   $('.detail').hide();
   $('#overlay').hide();
   $('#vid')[0].pause();
}

$(document).ready(function(){
	$('.nav-icon').click(function(){
		$(this).toggleClass('open');
		$('.drawer').fadeToggle();
	});
});
