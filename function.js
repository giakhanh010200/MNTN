// Code By Webdevtrick ( https://webdevtrick.com )
var $header_top = $('.header-top');
var $nav = $('nav');



$('#fullpage').fullpage({
  sectionSelector: '.vertical-scrolling',
  //navigation: true,
  //slidesNavigation: true,
  //controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
  menu: '#menu',
  
  
  afterLoad: function(anchorLink, index) {
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },


});






