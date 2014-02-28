/*
https://developer.chrome.com/apps/first_app
http://developer.chrome.com/apps/app_external
https://developer.chrome.com/apps/tags/webview
https://developer.chrome.com/apps/manifest

http://gallery.extensionfactory.com/labs/conversion/
https://bitbucket.org/matoeil/gce/wiki/Home
*/

chrome.app.runtime.onLaunched.addListener(function() {

/*	chrome.app.window.create('web/index.html#chrome', {

	}, function(win) {
	    win.maximize();
	});*/

	chrome.app.runtime.onLaunched.addListener(runApp);
	chrome.app.runtime.onRestarted.addListener(runApp);

	function runApp() {
	  window.open('web/index.html#chrome');
	};

});

