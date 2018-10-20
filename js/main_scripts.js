window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("button-top").style.display = "block";
  } else {
      document.getElementById("button-top").style.display = "none";
  }
}

function scrollToFunction(sectionToScroll, close) {
  if($(window).width() < 780 && close==1){
      $('.navbar-toggler').click();
  }
  pos = $(sectionToScroll).position().top;
  window.scroll({
    top: pos, 
    left: 0, 
    behavior: 'smooth' 
  });
}

function isInScreen(elementName) {
	var elementTop = $(elementName).offset().top;
	var elementBottom = elementTop + $(elementName).outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	return elementBottom > viewportTop && elementTop < viewportBottom;
};