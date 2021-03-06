$(document).ready(function() {
  if (Modernizr.mq('only screen and (min-width: 1024px)')) {
    $('.meganav-dropdown-primary-list, .meganav-dropdown-team-member-wrap').matchHeight({ byRow: false });
  }

  $('.has-children').doubleTapToGo();
  $('.meganav-dropdown-content .meganav-dropdown-content-inner:first-of-type').removeClass('hide')
});

$(document).on('click', '.mobile-menu-toggle', function() {
  $('.primary-navigation-wrap').css('top', $(window).scrollTop() + 58);
});
