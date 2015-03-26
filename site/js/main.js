//http://sorgalla.com/jcarousel/docs/

(function($) {
	$(function() {
		$('.jcarousel')
			.jcarousel({
				wrap: 'circular'
			})
			.jcarouselAutoscroll({
				interval: 3000
			});

		$('.jcarousel-control-prev')
			.on('jcarouselcontrol:active', function() {
				$(this).removeClass('jcarousel-inactive');
			})
			.on('jcarouselcontrol:inactive', function() {
				$(this).addClass('jcarousel-inactive');
			})
			.jcarouselControl({
				target: '-=1'
			});

		$('.jcarousel-control-next')
			.on('jcarouselcontrol:active', function() {
				$(this).removeClass('jcarousel-inactive');
			})
			.on('jcarouselcontrol:inactive', function() {
				$(this).addClass('jcarousel-inactive');
			})
			.jcarouselControl({
				target: '+=1'
			});
	});

	$('a.popup-thumbnail').fullScreenPopup({
	    bgColor: '#c8aa6e',
	    //inlineStyles: true,
	    //mainWrapperClass: 'twbackground',
	    //contentWrapperClass: 'twbackground',
	    closePopupClass: 'fix-bootstrap-link sp-jcarousel-popup-close',
	    animationSpeed: 300, //ms
	    updatePopup: function(popup, link) {
	    	var imgUrl = $(link).attr('data-img');

	    	var popupImg = $('img', popup).first();
	    	popupImg.attr('src', imgUrl);
	    }
	});
})(jQuery);
