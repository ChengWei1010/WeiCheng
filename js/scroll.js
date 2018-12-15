AOS.init({
    duration: 1200,
})
$(window).on('mousewheel', function() {
  $('html, body').stop();
});
    
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

// function openProject(name){
//    $('.project-content').fadeIn(200);
//    $('#' + name).show();
//    $('#overlay').show();
// }

// function closeProject(){
//    $('.project-content').fadeOut(200);
//    $('.detail').hide();
//    $('#overlay').hide();
//    $('#vid')[0].pause();
// }

$(document).ready(function(){
	$('.nav-icon').click(function(){
		$(this).toggleClass('open');
		$('.drawer').fadeToggle();
    $('.wrapper').fadeToggle();
	});
});

//ArtWorks
$(function() {
    var selectedClass = "";
    $(".fil-cat").click(function(){ 
    $(".fil-cat").removeClass('selectedClass');
    selectedClass = $(this).attr("data-rel"); 
    console.log(selectedClass);
    if($(this).attr("data-rel")==selectedClass){
      $(this).addClass('selectedClass');
    }
    $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');

    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300);   
  });
});

//ArtWorks
$(function() {
    var p1 = "<img src='design_diary/p1.jpg' class='img-tab-content'>";
    var p2 = "<img src='design_diary/p2.jpg' class='img-tab-content'>";
    var p3 = "<img src='design_diary/p3.jpg' class='img-tab-content'>";
    var process1 = "Mostly, I observed designs of websites, mobile applications, and things that I often use by myself in daily life. I also asked other people’s opinions and challenges of using things in their experience and observation. Sometimes I just pick a environment and observed the using behavior of other people.";
    var process2 = "After I observed and detected the problem that I want to discuss about, I will define the analytical framing of the discussion. I read and research design principles and ux articles to find a theoretical support of the problem and introduce the concept/theory in the design diary as well.";
    var process3 = "The outcome of one design diary can be a re-design or design suggestions, I draw wireframes sketches on paper, and use Sketch to design the new version based on the old version of the design. In some cases, I not only change the design but also modify the user flow.";
    $(".dd-process-1").hover(function(){ 
      $(".tab-content").css("background-color", "#FFAAAA");
      $(".tab-content").html(p1+process1);
    });

    $(".dd-process-2").hover(function(){ 
      $(".tab-content").css("background-color", "#FFC276");
      $(".tab-content").html(p2+process2);
    });

    $(".dd-process-3").hover(function(){ 
      $(".tab-content").css("background-color", "#FFD326");
      $(".tab-content").html(p3+process3);
    });
});
