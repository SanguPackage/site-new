(function($) {
	'use strict';

	// copy pasted
	var userLanguage = window.navigator.userLanguage || window.navigator.language;
	if (userLanguage.indexOf('nl') === -1) {
		$('#sp-dutch-only').show();
	}



	// Sangu Package Installation
	var spInstallTip = new Opentip($('#sp-install'));
	spInstallTip.setContent('Installatie instructies voor jouw browser');

	$('#sp-install').click(function() {
		// Stop showing the tooltip after the installation instructions have been visible
		spInstallTip.deactivate();
		spInstallTip.hide();

		// Show/Hide the installation instructions
		var popup = $('#sp-installation-instructions');
		popup.slideToggle();
	});

})(jQuery);