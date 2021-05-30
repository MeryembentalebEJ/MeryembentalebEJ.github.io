// fonction pour afficher la search-box
// au clic sur l'icon search cela active la search-box et le search icon change
$(document).ready(function () {
  $('#search-icon').click(function () {
    $(this).toggleClass('fa-times'); //saerch icon change avec l'icon X
    $('#search-box').toggleClass('active');
  });
  // au click sur la div id=menu (l'icon diament ici) le menu deroulant (classe navebar) s'affiche ou se masquer
  $('#menu').click(function () {
    $('.navbar').toggleClass('nav-toggle');
  });
  // la navbar, le search icon et la saerch-box disparaisse au scroll sur la page
  $(window).on('scroll load', function () {
    $('#search-icon').removeClass('fa-times');
    $('#search-box').removeClass('active');
    $('.navbar').removeClass('nav-toggle');
    // si le scroll est superieur à 0 (donc non active) le header reste sticky
    if ($(window).scrollTop() > 0) {
      $('header').addClass('sticky');
      // sinon on retire la fonction sticky du header
    } else {
      $('header').removeClass('sticky');
    }
  });
});



$(document).on('click', '#user,.Already-acount', function () {
  $('.form').addClass('login-active').removeClass('sign-up-active');
});

$(document).on('click', '.sign-up-btn', function () {
  $('.form').addClass('sign-up-active').removeClass('login-active');
});
$(document).on('click', '.form-cancel', function () {
  $('.form').removeClass('login-active').removeClass('sign-up-active');
});

//=============== Login-sign-up-form ================================

// Pour valider Contact form

$(document).ready(function(){
  $('#submit').click(function(){
  var ValidFirstName = /^[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð][a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž]+([-][A-Z][a-z]+)?$/;
  var Mail = /^[a-z0-9.-]+@[a-z0-9-]{2,}[.][a-z]{2,4}$/;
  var Telephone = /^(06|07)[0-9]{8}$/;
  
  if(ValidFirstName.test($('#name').val()) == false) {
      $('#name').css('border', '2px solid red');
  } else {
      $('#name').css('border', '2px solid green');
  }
  if(ValidFirstName.test($('#firstName').val()) == false) {
      $('#firstName').css('border', '2px solid red');
  } else {
      $('#firstName').css('border', '2px solid green');
  }
  if(Mail.test($('#email').val()) == false) {
      $('#email').css('border', '2px solid red');
  } else {
      $('#email').css('border', '2px solid green');
  }
  if(Telephone.test($('#phone').val()) == false) {
      $('#phone').css('border', '2px solid red');
  } else {
      $('#phone').css('border', '2px solid green');
  }

});
});
// ========================= fin contact form =============================


// tableau pour l'affichage des suggestions en autoglompletion de la search-bar
var suggestions =
  ['Beauty', 'Tote bags', 'Plage', 'Sunglasses', 'Lunettes', 'Sac', 'Produits', 'Nature', 'Fashion', 'Swimsuits', 'Maillo de bain', 'Summer', 'Argan', 'oil'];
$('#search').autocomplete({
  source: suggestions
});
// reste un definir des conditions d'affichage pour la premiére lettre de recherche uniquement

//================== Gallary search filter ==================
$(document).ready(function(){
  $("#search").on("keyup",function(){
  var value = $(this).val().toLowerCase();
  $("#card div").filter(function(){
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);

  });
});
  });

// ===========================================================================

$('.small-image img').click(function () {
  var img = $(this).attr('src');
  $('.big-img img').attr('src', img);
});
$('#zoom').imagezoomsl({
  zoomrange: [4, 4]
});

$('.small img').click(function () {
  var img = $(this).attr('src');
  $('.hair img').attr('src', img);
});

$('#zoom1').imagezoomsl({
  zoomrange: [4, 4]
});

$('.sm-img img').click(function () {
  var img = $(this).attr('src');
  $('.hydratation img').attr('src', img);
});
$('#zoom2').imagezoomsl({
  zoomrange: [4, 4]
});

$('.pic img').click(function () {
  var img = $(this).attr('src');
  $('.big img').attr('src', img);
});
$('#zoom3').imagezoomsl({
  zoomrange: [4, 4]
});

$('.pics img').click(function () {
  var img = $(this).attr('src');
  $('.picture img').attr('src', img);
});
$('#zoom4').imagezoomsl({
  zoomrange: [4, 4]
});








