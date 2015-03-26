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

	$('a.popup-thumbnail').click(function(e) {
		var imgUrl = $(this).attr('data-img');
		bootbox.dialog({
		  //title: "That html",
		  message: '<img src="'+imgUrl+'" width="1280" />'
		});
		e.preventDefault();
	});
})(jQuery);
