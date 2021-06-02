$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });
  // Parcours =============

  $(document).ready(function(){
    $(".step").click( function() {
      $(this).addClass("active").prevAll().addClass("active");
      $(this).nextAll().removeClass("active");
  });
  
  $(".step01").click( function() {
    $("#line-process").css("width", "3%");
    $(".diplôme").addClass("active").siblings().removeClass("active");
      
  
  $(".step02").click( function() {
    $("#line-process").css("width", "25%");
    $(".management").addClass("active").siblings().removeClass("active");
      
  });
  
  $(".step03").click( function() {
    $("#line-process").css("width", "50%");
    $(".strategyOne").addClass("active").siblings().removeClass("active");
  });
  
  $(".step04").click( function() {
    $("#line-process").css("width", "75%");
    $(".strategy").addClass("active").siblings().removeClass("active");
      
  });
  
  $(".step05").click( function() {
    $("#line-process").css("width", "100%");
    $(".discovery").addClass("active").siblings().removeClass("active");
  });
      
  });
  });

  // Read more ----- read less ============= Meryem's article's code===============
 $('.readmore-btn').on('click', function(){
    $(this).parent().toggleClass('showContent');
    // ======== another wat to do the if-else "conditions"
    var replaceText = $(this).parent().hasClass('showContent') ? 'En savoir moins': ' Lettre de recommandation';
      $(this).text(replaceText);
 });
//  Offer pics animation ============================
$(document).ready(function(){
    defOptioned = {
      'ext' : '',
      'count' : 10,
      'speed' : 10,
    };
    
});