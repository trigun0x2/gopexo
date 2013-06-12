// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .
$('document').ready(function() {

  // display validation errors for the "request invitation" form
  if ($('.alert-error').length > 0) {
    $("#request-invite").modal('toggle');
  }

  function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  // use AJAX to submit the "request invitation" form
  $('#invitation_button').on('click', function() {
    var email = $('form #user_email').val();
    var referrer = $('form #user_referrer_token').val();
    var token = $('form #user_authentication_token').val();
    var dataString = 'user[email]='+ email + '&user[referrer_token]=' + referrer + '&user[authentication_token]=' + token;
    if (IsEmail(email)){
      $.ajax({
      type: "POST",
      url: "/users",
      data: dataString,
      error: function(data){
        alert('Unable to save email');
      },
      success: function(data) {
        $('.simple_form').fadeOut(function(){
          $('.thankyoutext').fadeIn();
        });
        // loadSocial();
      }
      });
    }else{
      $('.emailerror').slideDown().delay(2500).slideUp();
    }
    return false;
  });
});

$(document).ready(function() {
    var scrollorama = $.scrollorama({
      blocks:'.scrollblock',
      enablePin:false
    });

    scrollorama.animate('#fade-in1',{
      duration:200, property:'opacity', start:0
    });
    scrollorama.animate('#fade-in2',{
      delay:300, duration:300, property:'opacity', start:0
    });
    scrollorama.animate('#fade-in-final',{ duration:1000, property:'opacity', start:0
    });
  });

// load social sharing scripts if the page includes a Twitter "share" button
// function loadSocial() {

//     //Twitter
//     if (typeof (twttr) != 'undefined') {
//       twttr.widgets.load();
//     } else {
//       $.getScript('http://platform.twitter.com/widgets.js');
//     }

//     //Facebook
//     if (typeof (FB) != 'undefined') {
//       FB.init({ status: true, cookie: true, xfbml: true });
//     } else {
//       $.getScript("http://connect.facebook.net/en_US/all.js#xfbml=1", function () {
//         FB.init({ status: true, cookie: true, xfbml: true });
//       });
//     }

//     //Google+
//     if (typeof (gapi) != 'undefined') {
//       $(".g-plusone").each(function () {
//         gapi.plusone.render($(this).get(0));
//       });
//     } else {
//       $.getScript('https://apis.google.com/js/plusone.js');
//     }
// }
