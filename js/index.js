$(document).ready(function(){
  // jQuery goes here
  $(".statement").fadeOut(0).fadeIn(500);
  $(".education").fadeOut(0).fadeIn(1200);
  $(".education2").fadeOut(0).fadeIn(1200);
  $(".exhibits").fadeOut(0).fadeIn(1900);
  $(".exhibits2").fadeOut(0).fadeIn(1900);
  $(".collections").fadeOut(0).fadeIn(2600);
  $(".collections2").fadeOut(0).fadeIn(2600);
  $(".awards").fadeOut(0).fadeIn(3300);
  $(".accomplishments").fadeOut(0).fadeIn(3300);
  $(".close, .hamburger").click(function(e){
    $(".nav ul").toggleClass('open-nav');
      e.preventDefault();

  });
  // $(".stories").css("display", "none");
  $(".stories").fadeOut(0).fadeIn(2000);
  $(".stories2").fadeOut(0);

  setTimeout(function(){
      $(".stories2").fadeIn(2000);
  }, 500);// after two seconds

});
