

function newCortexitHTML(c, onClose) {
	if (!c)
		c = $('<div id="CortexitPopup"/>');

	c.append('<link id="themeCSS" rel="stylesheet" type="text/css"  />');
	c.append(
		'<div id="_Panel">' + 
		    '<div id="_Content" contentEditable="false">' +
		        '<div id="Loading"><center>Loading...</center></div>' +
		    '</div>' +
		    '<div id="Browser" style="display:none"></div>' +
		'</div>');

	var d="";
	d += "    <div id=\"_Bottom\" style=\"\">";
	d += "		<div>&nbsp;<\/div>";
	d += "        <div id=\"_Prev\">";
	d += "			&nbsp;";
	d += "        <\/div>";
	d += "        <div id=\"Status\">";
	d += "			&nbsp;";
	d += "        <\/div>";
	d += "        <div id=\"_Next\">";
	d += "			&nbsp;";
	d += "        <\/div>";
	d += "        <div>";
	d += "            <button id=\"ToggleMenuButton\" title=\"Toggle Menu\">_o_<\/button>";
	d += "        <\/div>";
	d += "        <div id=\"FontSmallerButton\">";
	d += "            <a id=\"fontSmaller\"><img src=\"" + window.CORTEXIT_PATH + "icons\/minus.png\" height=\"32px\" width=\"32px\" title=\"Smaller Font\"\/><\/a>";
	d += "        <\/div>";
	d += "        <div id=\"_Font\" >";
	d += "            <span>&nbsp; Abc<\/span>";
	d += "			<input type=\"checkbox\" title=\"Auto-Size\"\/>";
	d += "   		    &nbsp;";
	d += "        <\/div>";
	d += "        <div id=\"FontLargerButton\">";
	d += "            <a id=\"fontLarger\"><img src=\"" + window.CORTEXIT_PATH + "icons\/plus.png\" height=\"32px\" width=\"32px\" title=\"Larger Font\"\/><\/a>";
	d += "        <\/div>";
	d += "		<div>&nbsp;<\/div>";
	d += "";
	d += "";
	d += "		<div id=\"Menu\">";
	d += "";
	d += "			<div>		        ";
	d += "			    <a class=\"tooltip goto\" html=\"" + window.CORTEXIT_PATH + "about.html\"><img width=\"48px\" height=\"48px\" src=\"" + window.CORTEXIT_PATH + "icons\/link.png\" alt=\"Go...\"\/><span>Go...<\/span><\/a>";
	d += "			<\/div>";
	d += "";
	d += "		    <!--";
	d += "		    <li><a href=\"\/support\" class=\"tooltip\"><img width=\"48px\" height=\"48px\" src=\"" + window.CORTEXIT_PATH + "icons\/play.png\" alt=\"Play\"\/><span>Auto-play<\/span><\/a><\/li>";
	d += "		    -->";
	d += "		    <!--";
	d += "		    <li><a href=\"\/support\" class=\"tooltip\"><img width=\"48px\" height=\"48px\" src=\"" + window.CORTEXIT_PATH + "icons\/mode.png\" alt=\"Mode\"\/><span>Mode<\/span><\/a>";
	d += "		        <ul>";
	d += "		            <li><a href=\"javascript:setMode()\">One Sentence<\/a><\/li>";
	d += "		            <li><a href=\"javascript:setMode()\">Two Sentences<\/a><\/li>";
	d += "		            <li><a href=\"javascript:setMode()\">One Word<\/a><\/li>";
	d += "		            <li><a href=\"javascript:setMode()\">Two Words<\/a><\/li>";
	d += "		            <li><a href=\"javascript:setMode()\">Three Words<\/a><\/li>";
	d += "		        <\/ul>";
	d += "		    <\/li>";
	d += "		    -->";
	d += "			<div>";
	d += "			    <a id='toggleSpeakerMenu' href=\"#\" class=\"tooltip\"><img id=\"speaker_icon\" width=\"48px\" height=\"48px\" src=\"" + window.CORTEXIT_PATH + "icons\/speak.png\" alt=\"Speak\"\/><span>Speech<\/span><\/a>";
	d += "				<br\/><span id=\"speechMenu\" style='display:none'>";
	d += "	            <button class=\"speakJS\" id=\"speakSpeech\">Speak.js Speech (once)<\/button>";
	d += "	            <button class=\"speakJS\" id=\"startSpeakAutoSpeech\">Start Speak.js Autoplay<\/button>";
	d += "	            <button class=\"speakJS\" id=\"stopSpeakAutoSpeech\">Stop<\/button>";
	d += "	            <button id=\"toggleVozmeSpeech\">Toggle VozMe Speech<\/button></span>";
	d += "			<\/div>";
	d += "		    ";
	d += "		    <div>";
	d += "				<a id=\"addImagesForSelection\" href=\"#\" class=\"tooltip\"><img width=\"48px\" height=\"48px\" src=\"" + window.CORTEXIT_PATH + "icons\/picture.png\" alt=\"Images\"\/><span>Images<\/span><\/a>";
	d += "			<\/div>";
	d += "";
	d += "		    <div>";
	d += "				<a id='toggleThemeMenu' href=\"#\" class=\"tooltip\"><img width=\"48px\" height=\"48px\" src=\"" + window.CORTEXIT_PATH + "icons\/colors.png\" title=\"Theme\"\/><span>Theme<\/span><\/a>";
	d += "				<br\/><span id=\"themeMenu\" style='display:none'>";
	d += "	            <button class=\"setTheme\" theme='default-black'>White on Black<\/button>";
	d += "	            <button class=\"setTheme\" theme='default-white'>Black on White<\/button>";
	d += "	            <button class=\"setTheme\" theme='terminal-green'>Terminal Green<\/button>";
	d += "	            <button class=\"setTheme\" theme='earthspace'>Earth Space<\/button>";
	d += "	            <button class=\"setTheme\" theme='concrete'>Concrete<\/button>";
	d += "	            <button class=\"setTheme\" theme='chalkboard'>Chalkboard<\/button>";
	d += "	            <button class=\"setTheme\" theme='anonymous'>Anonymous<\/button></span>";
	d += "		    <\/div>";
	d += "		    <!--";
	d += "		    <li><a href=\"\/support\" class=\"tooltip\"><img width=\"48px\" height=\"48px\" src=\"" + window.CORTEXIT_PATH + "icons\/earth.png\" alt=\"Translate\"\/><span>Translate<\/span><\/a>";
	d += "		    -->";
	d += "		    <div><a id=\"toggleEdit\" class=\"tooltip\"><img width=\"48px\" height=\"48px\" src=\"" + window.CORTEXIT_PATH + "icons\/edit.png\" alt=\"Edit\"\/><span>Edit<\/span><\/a><\/div>";
	d += "		    <div><a id=\"shareIt\" class=\"tooltip\"><img width=\"48px\" height=\"48px\" src=\"" + window.CORTEXIT_PATH + "icons\/share.png\" alt=\"Share\"\/><span>Share<\/span><\/a><\/div>";
	d += "		    <div>";
	d += "				<a href=\"#\"  class=\"tooltip goto\" html=\"" + window.CORTEXIT_PATH + "help.html\"><img width=\"48px\" height=\"48px\" src=\"" + window.CORTEXIT_PATH + "icons\/question.png\" alt=\"Help\"\/><span>Help<\/span><\/a>";
	//d += "	            <!-- <a id=\"gotoBookmarklet\" href='#'>Cortexit Bookmarklet<\/a> -->";
	d += "		    <\/div>";
	d += "";
	d += "			<!--      ";
	d += "			<div id=\"Return\">";
	d += "			    <a href=\"javascript:visitOriginal();\">X<\/a>";
	d += "			<\/div>";
	d += "			-->      ";
	d += "		    ";
	d += "		<\/div>";
	d += "";
	d += "    <\/div>";
	d += "    ";
	d += "    <span id=\"_Speech\"><\/span>";
	d += "    <div id=\"audio\" style=\"display:none\"><\/div>";
	d += "    <div id=\"SelectedText\" style=\"display:none\"><\/div>";
	d += "    <div id=\"ChromeOptions\" style=\"display:none\"><\/div>";
	d += "	<!-- ";
	d += "    <div id=\"share-modal\" title=\"Share...\">";
	d += "        <div id=\"attbtext\"><\/div>";
	d += "        <span id=\"attb\"><\/span>        ";
	d += "        <a id=\"atlink\"><\/a>";
	d += "    <\/div>";
	d += "	-->";

	c.append(d);

	if (onClose) {
		var closeButton = $('<a id="PanelClose" href="#">X</a>');
		closeButton.click(onClose);
		c.append(closeButton);
	}

	return c;

}


//TODO rename to hideCortexitPopup
function hideCortexit() {
	$('#CortexitPopup').remove();
}

//TODO rename to showCortexitPopup
function showCortexit(htmlContent) {
	if ($('#CortexitPopup').length > 0)
		hideCortexit();

	var onClose = function() {
		hideCortexit();
	};

	$('body').append(newCortexitHTML(null, onClose));
	
	$('#Menu').toggle();

	initCortexit();
	loadText(htmlContent);

}

function cortexify() {
	var scriptURL = $("script[src$='cortexit.js']").attr('src');
	window.CORTEXIT_PATH = scriptURL.substring(0, scriptURL.length - "cortexit.js".length);

	function newCortexitButton(getHTML) {
		var b = $('<img title="Cortexify" class="CortexitMiniButton" src="' + window.CORTEXIT_PATH + 'icons/cortexit.png"/>');
		b.click(function() {
			if (typeof getHTML == "function")
				showCortexit(getHTML());
			else
				showCortexit(getHTML.html());
		});
		return b;
	}

	$('.cortexit_button_before').each(function() {
		$(this).prepend('<br/>').prepend(newCortexitButton($(this)));
	});
	$('.cortexit_button_after').each(function() {
		$(this).append('<br/>').append(newCortexitButton($(this)));
	});

	var cortexifySelectionButton = $('<img class="CortexitMegaButton" src="' + window.CORTEXIT_PATH + 'icons/cortexit.png"/>');
	cortexifySelectionButton.click(function() {
		showCortexit(getSelectionHtml());
	});
	cortexifySelectionButton.hide();
	$('body').append(cortexifySelectionButton);
	$('body').append('<link rel="stylesheet" type="text/css" href="' + window.CORTEXIT_PATH + 'cortexit.css" />');

	var updateSelectionButton = function() {
		setTimeout(function() {
			var s = window.getSelection().toString();
			if (s.length > 0) {
				cortexifySelectionButton.fadeIn();
			}
			else {
				cortexifySelectionButton.fadeOut();
			}
		},0);
	};
	$(document).mouseup(updateSelectionButton);
	$(document).mousedown(updateSelectionButton);
}


if (!window.CORTEXIT_PATH) window.CORTEXIT_PATH = '';

var sentencizer;

var defaultTheme = 'default-black';

var defaultPage = 'about.html';

var minFrameLength = 8;
var combineWhileLessThanChars = 70;

var pageurl = 'http://cortexit.org';

var fontSize = 60;
var text;
var cframes = [];
var currentFrame;
var speechEnabled = false;
var currentPage = '';

var stopAutospeech = false;

var editing = false;
var autosizing;

var chrome = false; //whether running in a chrome extension or not
var chromeStorage = { };

function settings(key, value) {
	if (value == undefined) {
		//get
		if (chrome) {
			//return chrome.storage.sync.get(key);
			//TODO message passing
			chromeStorage = JSON.parse( $('#ChromeOptions').html() || "{}");
			return chromeStorage[key];
		}
		else {
			return localStorage[key];
		}
	}
	else {
		//set
		if (chrome) {
			chromeStorage[key] = value;
			$('#ChromeOptions').html( JSON.stringify( chromeStorage ));
		}
		else {
			localStorage[key] = value;
		}
	}
}

function enableVozmeSpeech(line) {
    speechEnabled = true;

    var speech = document.getElementById("_Speech");
    speech.style.display = 'inline';
    var speechLine = line.replace("&nbsp;", " ").replace(/<\/?[a-z][a-z0-9]*[^<>]*>/ig, "");

    //SEE: http://www.vikitech.com/980/top-10-web-based-services-for-text-to-speech-conversion

    var speechLineEncoded = escape(speechLine);
    //var speechURL = 'http://translate.google.com/translate_tts?q=' + speechLineEncoded;
    
    var speechURL = 'http://vozme.com/text2voice.php?bookmarklet=1&gn=fm&interface=full&default_language=en&text=' + speechLineEncoded;
    
    $('#_Speech').fadeIn('slow');

    speech.innerHTML = '<iframe src="' + speechURL + '" width="350px" height="120px"></iframe>';
}

function disableVozmeSpeech() {
    speechEnabled = false;
    var speech = document.getElementById("_Speech");
    $('#_Speech').fadeOut('slow', function() {
        speech.innerHTML = '';            
    });
}

function toggleVozmeSpeech() {
    if (speechEnabled == true) {
        disableVozmeSpeech();
    }
    else {
        enableVozmeSpeech($('#_Content').text());
    }
}

function speakSpeech(f) {
    $.getScript("speak/speakClient.js", function(data, textStatus, jqxhr) {
        var content = $('#_Content').text();            
        speak.play(content, {amplitude: 100, wordgap: 5, pitch: 25, speed: 175}, f );
    });
}

function startSpeakAutoSpeech() {
    stopAutospeech = false;
    $('#speaker_icon').attr('src', 'icons/sound_playing.png');
    
    if (currentFrame<cframes.length-1)
        speakSpeech( function() { if (!stopAutospeech) goNext( function() { if (!stopAutospeech) startSpeakAutoSpeech(); });  } );
    else
        speakSpeech( function() { stopSpeakAutoSpeech();  } );
}
function stopSpeakAutoSpeech() {
    stopAutospeech = true;
    $('#speaker_icon').attr('src', 'icons/speak.png');
    $('#audio').html('');
}

function goNextExplicit() {
    stopSpeakAutoSpeech();
    goNext();
}
function goPreviousExplicit() {
    stopSpeakAutoSpeech();
    goPrevious();
}

function autosize() {
	var pw = $('#_Panel').width();
	var ph = $('#_Panel').height();
	var heightTolerancePX = parseInt(0.12 * ph);
	var maxIterations = 20;
	var fontChange = 10;
	var lastDirection = 0;
	var finished = false;

	function trynext() {
			var bc = $('#_Content')[0].getBoundingClientRect(); 
			var cw = bc.width;
			var ch = bc.height;
			var th = $('#Top').height() || 0;
			var bh = $('#_Bottom').height();


			var pY = ph - th - bh - heightTolerancePX;

			//console.log(cw, ch, bh, pw, ph, pY);

			if ((fontChange == 0) || (finished)) {
				clearInterval(autosizing);
				finished = true;
				return;
			}

			if (ch > pY) /*|| (cw > pw))*/ {
				fontSize -= fontChange;
				updateFonts();

				if (lastDirection == 1)
					fontChange--;

				lastDirection = -1;
			}			
			else if (ch < pY) {
				fontSize += fontChange;
				updateFonts();

				if (lastDirection == -1)
					fontChange--;

				lastDirection = 1;
			}
			else {
				clearInterval(autosizing);
				finished = true;
			}

			if (maxIterations-- == 0)
				clearInterval(autosizing);
	}

	clearInterval(autosizing);
	autosizing = setInterval(trynext, 25); //fast mode
	//autosizing = setInterval(trynext, 100);
	trynext();
}

var prevFade = null;
function showFrame(f) {
	clearInterval(autosizing);

    disableVozmeSpeech();

	$('#_Content').hide();

    var content = document.getElementById("_Content");    

    var line = cframes[f];
	line = line.replace(/{{/g, "<");
	line = line.replace(/}}/g, ">");
    content.innerHTML = line;

    var status = document.getElementById("Status");
    status.innerHTML = (f+1) + '/' + cframes.length;

    var prev = document.getElementById("_Prev");
    if (f == 0) {
        prev.innerHTML = '&nbsp;';
    }
    else {
        prev.innerHTML = '<a href="#"><img src="' + window.CORTEXIT_PATH + 'icons/left.png" height="32px" width="32px"/></a>';
    }

    var next = document.getElementById("_Next");
    if (f == cframes.length-1) {
        next.innerHTML = '&nbsp;';
    }
    else {
        //next.innerHTML = '<button onClick="goNext();">----&gt;</button>';
        next.innerHTML = '<a href="#"><img src="' + window.CORTEXIT_PATH + 'icons/right.png" height="32px" width="32px"/></a>';
    }
    updateFonts();

	$('#_Content').find('a').each(function() {
		var a = $(this);
		var target = a.attr('href');
		if (!target) return;

		if (a.text() == '')
			a.text(target);

		if (target.indexOf('http://') == 0) {
			//absolute
			a.attr('href', '#' + target);
		}
		else if (target.indexOf('/') == 0) {
			//absolute on the server
			var server = currentPage;
			if (server.indexOf('http://') == 0) //remove http://
				server = server.substring(7);
			if (server.indexOf('/')!=-1)
				server = server.substring(0, server.indexOf('/'));
			a.attr('href', '#' + server + target);
		}
		else {
			//relative
			a.attr('href', '#' + currentPage + '/' + target);
		}
	});

	/*if (prevFade) {
		prevFade.resolve();
		prevFade = null;
	}
	   
	$('#_Content').hide().fadeIn({
		duration:"slow",
		start: function(p) {
			prevFade = p;			
		},
		done: function(p) {
			prevFade = null;
		} 
	});*/
	$('#_Content').show();

	if ($('#_Font input').is(':checked')) {
		autosize();
	}

}

function goPrevious() {
    if (cframes.length < 1) {
        return;
    }

    currentFrame--;
    if (currentFrame < 0) currentFrame = 0;
    else
        showFrame(currentFrame);
}

function goNext(f) {
    if (cframes.length < 1)
        return;

    currentFrame++;
    if (currentFrame > cframes.length-1)
        currentFrame = cframes.length-1;
    else
        showFrame(currentFrame);
    
    if (f)
		if (typeof f == "function")
	        f();
}

function updateFont(c) {
    if (c == null)
        return;
    
    c.style.fontSize = fontSize + "px"; 
    var e = c.getElementsByTagName("a");
    for (var i = 0; i < e.length; i++) {
        e[i].style.fontSize = c.style.fontSize;
    }        
    
}

function updateFonts() {
    updateFont( document.getElementById("_Content") );
}

function fontLarger() {
    fontSize+=5;
    
    updateFonts();
}

function fontSmaller() {
    fontSize-=5;
    if (fontSize < 1) fontSize = 1;

    updateFonts();
}

function _f(content) {
    cframes.push(content);
}

function onFrameSpin(e) {
	if (cframes.length == 1) return;

    var nDelta = 0;
    if (!e) { // For IE, access the global (window) event object
        e = window.event;
    }
    // cross-bowser handling of eventdata to boil-down delta (+1 or -1)
    if ( e.wheelDelta ) { // IE and Opera
        nDelta= e.wheelDelta;
        if ( window.opera ) {  // Opera has the values reversed
            nDelta= -nDelta;
        }
    }
    else if (e.detail) { // Mozilla FireFox
        nDelta= -e.detail;
    }

    if (nDelta < 0) {
        //HandleMouseSpin( 1, e.clientX, e.clientY );
        goPrevious();
    }
    if (nDelta > 0) {
        //HandleMouseSpin( -1, e.clientX, e.clientY );
        goNext();
    }

    if ( e.preventDefault ) {  // Mozilla FireFox
        e.preventDefault();
    }
    e.returnValue = false;  // cancel default action
}


//TODO find a way to combine with previous function
function onFontSpin(e) {
    var nDelta = 0;
    if (!e) { // For IE, access the global (window) event object
        e = window.event;
    }
    // cross-bowser handling of eventdata to boil-down delta (+1 or -1)
    if ( e.wheelDelta ) { // IE and Opera
        nDelta= e.wheelDelta;
        if ( window.opera ) {  // Opera has the values reversed
            nDelta= -nDelta;
        }
    }
    else if (e.detail) { // Mozilla FireFox
        nDelta= -e.detail;
    }
    if (nDelta > 0) {
        //HandleMouseSpin( 1, e.clientX, e.clientY );
        fontLarger();
    }
    if (nDelta < 0) {
        //HandleMouseSpin( -1, e.clientX, e.clientY );
        fontSmaller();
    }
    if ( e.preventDefault ) {  // Mozilla FireFox
        e.preventDefault();
    }
    e.returnValue = false;  // cancel default action
}

function loadHTML(url, whenFinished) {
	currentPage = url;
	window.location.hash = '';

	$.get(url, function(hh) {
		cframes =  [hh];
		showFrame(0);

		if ((!chrome) && (url == 'about.html')) {
			var inputs = $('<div></div>');

			var inputter = $('<span/>');

			var goselect = $('<select style="font-size:100%">');
			goselect.append('<option>URL</option>');
			goselect.append('<option>Text</option>');

			var goinput = $('<input type="text" placeholder="Website Address" style="font-size: 100%" />');

			var gotextinput = $('<textarea style="font-size:50%; width: 100%; height: 10em"/>');

			//var gobutton = $('<input type="submit" value="Go" style="font-size:100%"/>')
			var loadbutton = $('<input type="submit" value="Load" style="font-size:100%"/>')
	
			function updateInputs() {
				inputter.empty();
				if (goselect.val() == 'URL') {
					//gobutton.show();
					//loadbutton.css('float','');
					inputter.append(goinput);					
				}
				else if (goselect.val() == 'Text') {
					//gobutton.hide();
					//loadbutton.css('float','right');
					inputter.append('<br/>');
					inputter.append(gotextinput);
					inputter.append('<br/>');
				}
			}

			goselect.change(function() {					
				updateInputs();
			});

			goinput.keypress(function(e) {
				if(e.which == 13) {
					loadbutton.click();
				}
			});

			/*gobutton.click(function() {
				goURL(goinput.val());
			});*/

			loadbutton.click(function() {
				if (goselect.val() == 'URL') {
					loadURL(goinput.val());
				}
				else {
					loadText(gotextinput.val());
				}
			});

			updateInputs();

			inputs.append(goselect, inputter, loadbutton);

			$('#_Content').prepend(inputs);

		}

		if (whenFinished)
			whenFinished();
	});
}

function loadText(s) {
	$('#Browser').hide();
    $('#_Content').html('<div id="Loading"><center>Processing...</center></div>');

	if (!sentencizer)
		sentencizer = new Worker(window.CORTEXIT_PATH + 'sentencize.js');

	sentencizer.addEventListener('message', function(e) {

		   var linesPreFilter = e.data;
		   function textize(t) {
				t = t.replace(/{{/g, '<').replace(/}}/g, '>');
				return $('<p>' + t + '</p>').text().trim();
		   }

		   var linesPreRendered = linesPreFilter.map(textize);

		   var slines = [];
		   var i;
		  
		   for (i = 0; i < linesPreFilter.length; i++) {
			   	var t = linesPreFilter[i].trim();               
				if (t.length == 0) continue;

				if (slines.length > 0) {
					var currentFrameLength = linesPreRendered[i].length;
					if (currentFrameLength == 0)
						continue;

					var prevFrameLength = textize(slines[slines.length-1]).length;

					if (prevFrameLength + currentFrameLength < combineWhileLessThanChars) {
						slines[slines.length-1] += ' ' +  t;
						continue;
					}
				}

				slines.push(t);
		   }

			cframes = slines;
			currentFrame = -1;
			goNext();
	}, false);

	sentencizer.postMessage(s);
}

function loadURL(u) {
	$('#Browser').hide();

	currentPage = u;
	window.location.hash = u;

    $('#_Content').html('<div id="Loading"><center>Loading...</center></div>');

	if (u.indexOf('http://')!=0)
		u = 'http://' + u;

	$.post('proxy.php', { url: u }).done(function(s) {
		loadText(s);
	});
}


function getSelectionHtml() {
    var html = "";
    var sel = window.getSelection();
    if (sel.rangeCount) {
        var container = document.createElement("div");
        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
            container.appendChild(sel.getRangeAt(i).cloneContents());
        }
        html = container.innerHTML;
    }
    return html;
}


function bookmarklet() {
	var currentPage = window.location;
	window.location.hash = '';

	var server = window.location.host;

	var b = 'Drag this link to your bookmarks bar:<br/>';

	var ba = $('<a><b>CORTEXIT</b></a>');
	ba.attr('href', "javascript:(function(){ document.body.appendChild(document.createElement('script')).src='http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';  document.body.appendChild(document.createElement('script')).src='" + server + "/bookmarklet.js'; })();");

    $('#_Content').html(b).append(ba);
}


function enlargeImage(element, imagesrc) {
    element.innerHTML = '<img src=\"' + imagesrc + '\"/>';
}


function addImagesForSelection() {
    //TODO filter 'q' for useless prepositions like 'the', 'and', etc
    var selection = window.getSelection().toString();
    if (selection == '') {
        alert('Select some text to find images.');
        return;
    }

    //images.search.yahoo.com/search/images?p=test

    var iurl = 'http://images.search.yahoo.com/search/images?p=' + escape(selection);
    
//        var images = document.getElementById("_Images");
//        images.innerHTML += '<div class="imageSectionTitle" style="clear: both;">Image results for: ' + selection + '</div><br/>';
//        images.innerHTML += '<div class="imageSection"><iframe src=\"' + iurl + '\" width="100%" height="400px"></iframe></div>';

    ////cframes[currentFrame] += '<div id="x' + qI + '" class="ui-widget-content">';
    //cframes[currentFrame] += '<br/><br/><div style="clear: both;">Image results for: ' + selection + '</div><br/>';
    //cframes[currentFrame] += '<div class="imageSection"><iframe src=\"' + iurl + '\" width="100%" height="400px"></iframe></div>';
    ////cframes[currentFrame] += '<script>var newFrame = $(\'#x\' +' + qI + '); newFrame.resizable(); newFrame.draggable();';
    ////cframes[currentFrame] += '</div>';

	var scale = 0.6;
	var w = parseInt(screen.width * scale);
	var h = parseInt(screen.height * scale);
	var ox = parseInt( (screen.width * (1.0 - scale))/2.0 );
	var oy = parseInt( (screen.height * (1.0 - scale))/2.0 );

	var p = "height="+h+",width=" + w + ",top=" + oy + ",left=" + ox;

	var win = window.open(iurl, "_blank", p);

    //showFrame(currentFrame);

}

function setTheme(theme) {       
    currentTheme = theme;

    var c = document.getElementById("themeCSS");
    c.href = window.CORTEXIT_PATH + 'themes/' + theme + '.css';
    settings('theme', theme);
}


//Setup escape-key events
document.onkeydown = function(e){
    var keycode;
    if (e == null) { // ie
        keycode = event.keyCode;
    } else { // mozilla
        keycode = e.which;
    }
    
    if (!editing) {
        if (keycode == 37) { //left                
            goPrevious(); 
        }
        else if (keycode == 38) { //up                
            fontLarger();
        }
        else if (keycode == 39) { //right                
            goNext();
        }
        else if (keycode == 40) { //down                
            fontSmaller();
        }
    }
};

/*
function onContentMouseOut(e) {
    e.className='';
}
*/

function setOriginal(o) {
    pageurl = o;
}

function visitOriginal() {
    document.location = pageurl;
}
    
//    function showHelp() {
//        $( "#dialog-message" ).dialog({
//                width: '75%',
//                modal: true,
//                buttons: {
//                        Ok: function() {
//                                $( this ).dialog( "close" );
//                        }
//                }
//        });        
//    }
//    <div id="dialog-message" title="About Cortexit" style="display:none">
//        <center><iframe src="about.html" width="100%" height="400px"></iframe></center>
//    </div>


function toggleEdit() {
    //id="_Content" contentEditable="false"        
    if (editing) {
        $('#_Content').attr('contentEditable', 'false');
        editing = false;
    }
    else {
        $('#_Content').attr('contentEditable', 'true');
        editing = true;
    }
}

function getIFrameSelection() {
	var iframe= chrome ? document.getElementById('BrowserWebview') : document.getElementById('BrowserIFrame');

	var frameWindow = iframe.contentWindow;
	var frameDocument = frameWindow.document;

	var s = '';
	if (frameDocument.getSelection) {
	    s = frameDocument.getSelection();
	}
	else if (frameDocument.selection) {
	    s = frameDocument.selection.createRange().text;
	}
	return s.toString();
}

function goURL(u) {
	$('#_Content').html('').hide();

	if ((u.indexOf('http://')!=0) && (u.indexOf('https://')!=0))
		u = 'http://' + u;

	if (!chrome) {
		var iframehtml = '<iframe id="BrowserIFrame" src="' + u + '"></iframe>';
		$('#Browser').html(iframehtml);
	}
	else {
		//TODO https://github.com/GoogleChrome/chrome-app-samples/blob/master/browser/browser.js
	}

	$('#Browser').show();
}

function shareIt() {
	alert('Share feature not available yet.');
	return;

    $('#atbutton').css('display', 'inline');
    //var c = cframes[currentFrame];
    var c = $('#_Content').text();
    
    
    var tbx = document.getElementById("attb");
    var svcs = {facebook: 'Facebook', twitter: 'Twitter', blogger: 'Blogger', reddit: 'Reddit', email: 'Email', print: 'Print', googletranslate: 'Translate', expanded: 'More'};

    tbx.innerHTML = '';
    for (var s in svcs) {
        tbx.innerHTML += '<a class="addthis_button_'+s+' addthis_32x32_style">'+svcs[s]+'</a>';
    }
    
    var addthis_share = 
    { 
        templates: {
                       twitter: '{{title}} {{url}}'
                   }
    };
            
    addthis.toolbox("#attb", addthis_share , {url: pageurl, title: c, description: c});
    addthis.button("#atlink", addthis_share , {url: pageurl, title: c, description: c});
    
    $('#attbtext').html( '<b>"' + c + '"</b><br/>' + pageurl + '<hr/>' );
    
    $( "#share-modal" ).dialog({
            width: screen.width * 0.75,
            height: screen.height * 0.75,
            modal: true
    });
    
}

function initCortexit() {

	//setup theme

    var panel = document.getElementById("_Panel");
    var control = document.getElementById("_Control");
    var content = document.getElementById("_Content");
    var frameSpin = document.getElementById("Status");
    var font = document.getElementById("_Font");

    if (frameSpin.addEventListener) {
        frameSpin.addEventListener('DOMMouseScroll', onFrameSpin, false);
        frameSpin.addEventListener('mousewheel', onFrameSpin, false); // Chrome
    }
    else {
        frameSpin.onmousewheel = onFrameSpin;
    }

    if (font.addEventListener) {
        font.addEventListener('DOMMouseScroll', onFontSpin, false);
        font.addEventListener('mousewheel', onFontSpin, false); // Chrome
    }
    else {
        font.onmousewheel= onFontSpin;
    }

    content.style.fontSize = fontSize + "px";

	$('#fontSmaller').click(function() { fontSmaller(); });
	$('#fontLarger').click(function() { fontLarger(); });
	$('#speakSpeech').click(function() { speakSpeech(function() {}); });
	$('#startSpeakAutoSpeech').click(function() { startSpeakAutoSpeech(); });
	$('#stopSpeakAutoSpeech').click(function() { stopSpeakAutoSpeech(); });
	$('#toggleVozmeSpeech').click(function() { toggleVozmeSpeech(); });
	$('#addImagesForSelection').click(function() { addImagesForSelection(); });
	$('#toggleEdit').click(function() { toggleEdit(); });
	$('#shareIt').click(function() { shareIt(); });
	$("#_Next").click(goNext);
	$("#_Prev").click(goPrevious);

	$('#toggleSpeakerMenu').click(function() {
		$('#speechMenu').toggle();
	});
	$('#toggleThemeMenu').click(function() {
		$('#themeMenu').toggle();
	});

	$('.setTheme').click(function() {
		setTheme($(this).attr('theme'));
	});

	$("#_Font span").click(function() {
		autosize();
	});

	function updateAutosizeIfChecked() {
		if ($('#_Font input').is(':checked')) {
			autosize();
			settings('autosize', 'true');
		}
		else {
			settings('autosize', 'false');
		}
	}

	$('#_Font input').change(function() {
		updateAutosizeIfChecked();
	});

	$('.goto').click(function() {
		var h = $(this).attr('html');
		loadHTML(h);
	});

	$('#gotoBookmarklet').click(bookmarklet);

	$('#ToggleMenuButton').click(function() {
		$('#Menu').toggle(); //("puff", 250);
		updateAutosizeIfChecked();
	});
	
	$(window).resize(function() {
		updateAutosizeIfChecked();
	});

	function hoverOpacity(x) {
		if (typeof x == "string")
			x = $(x);

		x.fadeTo(0, 0.5);
		x.hover(
			function() { x.fadeTo(250, 1.0); },
			function() { x.fadeTo(250, 0.5); }
		);
	}

	hoverOpacity('#ToggleMenuButton');
	hoverOpacity('#_Prev');
	hoverOpacity('#_Next');
	hoverOpacity('#FontSmallerButton');
	hoverOpacity('#FontLargerButton');

	$('#Menu img').each(function() {			
		hoverOpacity($(this));
	});

    $('#_Speech').fadeToggle();    

	function loadSettings() {

		var currentTheme = settings('theme');
		if (currentTheme == null) {
			currentTheme = defaultTheme;
		}
		setTheme(currentTheme);

		var initialAutoSize = false;
	
		initialAutoSize = settings('autosize');
		if (initialAutoSize == 'false')
			$('#_Font input').prop('checked', false);
		else
			$('#_Font input').prop('checked', true);
	}

	if (chrome) {
		//wait for ChromeOptions to be set by the extension code in cortexit.chrome.js
		var ssi = setInterval(function() {
			var x = $('#ChromeOptions').html();
			if (x.length > 0) {
				clearInterval(ssi);
				loadSettings();
			}
		}, 50);		
	}
	else {
		loadSettings();
	}

}

