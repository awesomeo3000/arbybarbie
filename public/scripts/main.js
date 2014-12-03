/*global $:false */

$(document).ready(function () {
	$('.nav-toggle').click(function () {
		if ($('.nav-mobile ul').hasClass('expanded')) {
			$('.nav-mobile ul').removeClass('expanded').slideUp(250);
			$(this).removeClass('open');
		} else {
			$('.nav-mobile ul').addClass('expanded').slideDown(250);
			$(this).addClass('open');
		}
	});
});