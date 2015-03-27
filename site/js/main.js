(function($) {
	//new Opentip('#my-element', 'Shown after 2 seconds', { delay: 0.5 });
	//$('#my-element').opentip('Shown after 2 seconds', { delay: 2 });

	Opentip.styles.mystyle = {
	  // Make it look like the alert style. If you omit this, it will default to 'standard'
	  extends: 'dark',
	  // Tells the tooltip to be fixed and be attached to the trigger, which is the default target
	  target: true,
	  //stem: true,
	  //showOn: 'creation'
	  tipJoint: 'bottom'
	};

	Opentip.defaultStyle = 'mystyle';

	//(data-ot="Installatie instructies voor jouw browser")
	var spInstallTip = new Opentip($('#sp-install'));
	spInstallTip.setContent('Installatie instructies voor jouw browser');

	$('#sp-install').click(function() {
		// Stop showing the tooltip after the installation instructions have been visible
		spInstallTip.deactivate();
		spInstallTip.hide();

		// Show/Hide the installation instructions
		var popup = $('#sp-installation-instructions')
		popup.slideToggle();
	});

})(jQuery);