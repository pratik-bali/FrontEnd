window.onload = function() 
	{ document.getElementById("hideAll").style.display = "none"; }

$(function(){
	var content = $('.main-content');
	function slideout() {
		$('.slide').removeClass('slide-in').addClass('slide-out');
	}

	function slidein() {
		$('.slide').removeClass('slide-out').addClass('slide-in');
	}

	$('#navtoggle').click(function(e) {
		e.stopPropagation();
		e.preventDefault();
		if (content.hasClass('slide-in')) {
			$('.sticky-signup').css('opacity', '1');
			slideout();
		} else {
			$('.sticky-signup').css('opacity', '0');
			slidein();
		}
	});

	$(content).click(function() {
		if ((content).hasClass('slide-in')) {
			$('.sticky-signup').css('opacity', '1');
			slideout();
		}
	});
});

$(function() {
	if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent))
	$('#mainpane svg').css({"height": "", "position": "bottom"});
	if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent))
	$('#footeranim svg').css('height','');
});

$.fn.isOnScreen = function(){

	var win = $(window);

	var viewport = {
		top : win.scrollTop(),
		left : win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();

	var bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();

	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};
