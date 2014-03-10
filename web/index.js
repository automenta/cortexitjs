$(document).ready(function(){

	newCortexitHTML($('body'));

	if (window.location.hash == '#chrome') {
		chrome = true;
		$('#Top').hide();
		$('.speakJS').hide();
		$('#Menu').toggle();
	}

	initCortexit();

	function reload() {
		var path1 = window.location.hash;
		var path = window.location.pathname.substring(1);

		if (path1.length > 0) {
			path1 = path1.substring(1);
			loadURL(path1);
		}
		else if ((path.indexOf('http://')==0) || (path.indexOf('www.')==0)) {
			loadURL(path);
		}
		else {
			loadHTML(defaultPage);
		}
	}

	if (chrome) {
		var ii = setInterval(function() {
			var x = $('#SelectedText').text();
			if (x.length > 0) {
				loadText(x);
				clearInterval(ii);
			}			
		}, 100);
	}
	else {
		window.onhashchange = function() {	reload();	};
		reload();
	}

});

