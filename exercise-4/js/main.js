 // dom ready
$(function(){

// track user scroll to show or hide header accordingly
$(window).scroll(function() {
var scroll, scrollNew = $(this).scrollTop(),
    $menu = $('.fancymenu'),
    height = $menu.outerHeight(true);

  // determine whether to show or hide fancymenu based on scroll direction
  // let css handle the animations...
  if ( scroll > scrollNew || scrollNew <= 50 ) {
    $menu.removeClass('hidden');
  } else {
    $menu.addClass('hidden');
  }

  scroll = scrollNew;

  })

})