(function($) {
	// scrollBottom
	function scrollBottom() { 
		return $(this).scrollTop() + $(this).height();
	};

	// hide/show float_btn
	function hideFloatBtn() {
		var sb = scrollBottom(),
			btn = $('.float_btn'),
			pos = $('#form').offset().top;

		if(sb >= pos) {
			btn.fadeOut();
		} else {
			btn.fadeIn();
		}
	}

	// window load
	$(window).load(function() {
		hideFloatBtn();
	});

	// window resize
	$(window).resize(function() {
		hideFloatBtn();
	});

	// window scroll
	$(window).scroll(function() {
		hideFloatBtn();
	});
})(jQuery);