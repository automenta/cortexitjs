/*
https://developer.chrome.com/apps/first_app
http://developer.chrome.com/apps/app_external
https://developer.chrome.com/apps/tags/webview
https://developer.chrome.com/apps/manifest

http://gallery.extensionfactory.com/labs/conversion/
https://bitbucket.org/matoeil/gce/wiki/Home
*/

/*
chrome.app.runtime.onLaunched.addListener(function() {

	//chrome.app.window.create('web/index.html#chrome', {
	//}, function(win) {
	//    win.maximize();
	//});

	chrome.app.runtime.onLaunched.addListener(runApp);
	chrome.app.runtime.onRestarted.addListener(runApp);

	function runApp() {
	  window.open('web/index.html#chrome');
	};

});
*/

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        // text selection is stored in request.selection
        //$('#text').val( request.selection );
		var s = request.selection;
		if (s == "") s= "No text selected.";

		var scale = 0.8;
		var w = parseInt(screen.width * scale);
		var h = parseInt(screen.height * scale);
		var ox = parseInt( (screen.width * (1.0 - scale))/2.0 );
		var oy = parseInt( (screen.height * (1.0 - scale))/2.0 );

		var p = "height="+h+",width=" + w + ",top=" + oy + ",left=" + ox;

		chrome.storage.sync.get(null, function(opt) { 
			var win = window.open("web/index.html#chrome", "_blank", p);

			if (!opt) opt = {};

			win.addEventListener('load', function() {
				win.document.getElementById('SelectedText').innerHTML = s;
				win.document.getElementById('ChromeOptions').innerHTML = JSON.stringify( opt );
			}, false);
			win.addEventListener('unload', function() {
				var x = win.document.getElementById('ChromeOptions').innerHTML;
				if (x.length > 0) {
					var p = JSON.parse(x);
					chrome.storage.sync.set(p);
				}
			}, false);

		});

});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {
		file: 'cortexit.chrome.inject.js'
  });
});

//http://stackoverflow.com/questions/2626859/chrome-extension-how-to-capture-selected-text-and-send-to-a-web-service

//$(document).ready(function() {
    // set up an event listener that triggers when chrome.extension.sendRequest is fired.


    // inject javascript into DOM of selected window and tab.
    // injected code send a message (with selected text) back to the plugin using chrome.extension.sendRequest
//    chrome.tabs.executeScript(null, {code: "chrome.extension.sendRequest({selection: window.getSelection().toString() });"});
//});
