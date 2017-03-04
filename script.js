$(document).ready(function() {

  $(window).scroll(function(event) {

    var y = $(this).scrollTop();

    if (y >= 800) {
      $('#key_info').addClass('animated bounceInLeft').removeClass('hideout')
      $('#key_form').addClass('animated bounceInRight').removeClass('hideout')
    }

    if (y >= 2725) {
      $('#browserify').addClass('typewriter').removeClass('hideout')
    }

    if (y >= 6250) {
      $('#bower_files').addClass('typewriter').removeClass('hideout')
    }

    if (y >= 8050) {
      $('#browser_sync').addClass('typewriter').removeClass('hideout')
    }

    if (y >= 9800) {
      $('#homebrew').addClass('typewriter').removeClass('hideout')
    }

    if (y >= 9900) {
      $('#ruby').addClass('typewriter').removeClass('hideout')
    }

    if (y >= 10000) {
      console.log("Hello");
      $('#sass').addClass('typewriter').removeClass('hideout')
    }
  })
});
