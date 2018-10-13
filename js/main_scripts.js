window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("Buttontop").style.display = "block";
    } else {
        document.getElementById("Buttontop").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function isInScreen(elementName) {
	var elementTop = $(elementName).offset().top;
	var elementBottom = elementTop + $(elementName).outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	return elementBottom > viewportTop && elementTop < viewportBottom;
};