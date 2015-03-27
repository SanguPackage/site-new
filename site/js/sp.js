(function() {
	var userLanguage = window.navigator.userLanguage || window.navigator.language;
	if (userLanguage.indexOf('nl') === -1) {
		$('#sp-dutch-only').show();
	}
})();