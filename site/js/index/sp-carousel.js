(function($) {
	'use strict';

	var spCarousel = $('#sp-jcarousel');

	// Sangu Package Carousel
	// Docs: http://sorgalla.com/jcarousel/docs/
	function startCarousel() {
		spCarousel
			.jcarousel({
				wrap: 'circular'
			})
			.jcarouselAutoscroll({
				interval: 3000
			});
	}

	function stopCarousel() {
		spCarousel.jcarouselAutoscroll('stop');
		spCarousel.jcarousel('reload', {
			wrap: null
		});
	}

	function restartCarousel() {
		spCarousel.jcarouselAutoscroll('start');
		spCarousel.jcarousel('reload', {
			wrap: 'circular'
		});
	}

	function addNavigationButtonBehavior(buttonSelector, slideDirection) {
		$(buttonSelector)
			.on('click', stopCarousel)
			.on('jcarouselcontrol:active', function() {
				$(this).removeClass('jcarousel-inactive');
			})
			.on('jcarouselcontrol:inactive', function() {
				$(this).addClass('jcarousel-inactive');
			})
			.jcarouselControl({
				target: slideDirection
			});
	}

	startCarousel();
	addNavigationButtonBehavior('.jcarousel-control-prev', '-=1');
	addNavigationButtonBehavior('.jcarousel-control-next', '+=1');

	// Sangu Package Carousel popup
	$('a.popup-thumbnail').fullScreenPopup({
		bgColor: '#CAB894',
		//inlineStyles: true,
		//mainWrapperClass: 'twbackground',
		//contentWrapperClass: 'twbackground',
		closePopupClass: 'fix-bootstrap-link sp-jcarousel-popup-close',
		animationSpeed: 300, //ms
		updatePopup: function(popup, link) {
			// Set correct image in popup
			var imgUrl = $(link).attr('data-img');
			var popupImg = $('img', popup).first();
			popupImg.attr('src', imgUrl);

			stopCarousel();
		},
		close: function() {
			restartCarousel();
		}
	});
})(jQuery);