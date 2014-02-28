var sentencizer = new Worker('sentencize.js');

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

var qI = 0;
var editing = false;
var autosizing;

var chrome = false; //whether running in a chrome extension or not

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
	var heightTolerancePX = 0.1 * ph;
	var maxIterations = 20;
	var fontChange = 10;
	var lastDirection = 0;

	function trynext() {
		var cw = $('#_Content').width();
		var th = $('#Top').height();
		var ch = $('#_Content').height();
		var bh = $('#_Bottom').height();

		var pY = ph - th - bh - heightTolerancePX;

		if (fontChange == 0) {
			clearInterval(autosizing);
			return;
		}

		if ((ch > pY) || (cw > pw)) {
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
		}

		if (maxIterations-- == 0)
			clearInterval(autosizing);
	}

	clearInterval(autosizing);
	autosizing = setInterval(trynext, 100);
	trynext();
}

function showFrame(f) {
    
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
        prev.innerHTML = '<a href="javascript:goPrevious()"><img src="icons/left.png" height="32px" width="32px"/></a>';
    }

    var next = document.getElementById("_Next");
    if (f == cframes.length-1) {
        next.innerHTML = '&nbsp;';
    }
    else {
        //next.innerHTML = '<button onClick="goNext();">----&gt;</button>';
        next.innerHTML = '<a href="javascript:goNext()"><img src="icons/right.png" height="32px" width="32px"/></a>';
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
    
	if ($('#_Font input').is(':checked')) {
		autosize();
	}

	$('#_Content').fadeIn("slow");

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


		if (whenFinished)
			whenFinished();
	});
}

function loadText(s) {
	$('#Browser').hide();
    $('#_Content').html('<div id="Loading"><center>Processing...</center></div>');

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
    var selection = selectedText;
    if (selection == '') {
        alert('Select some text to find images.');
        return;
    }

    //images.search.yahoo.com/search/images?p=test

    var iurl = 'http://images.search.yahoo.com/search/images?p=' + escape(selection);
    
//        var images = document.getElementById("_Images");
//        images.innerHTML += '<div class="imageSectionTitle" style="clear: both;">Image results for: ' + selection + '</div><br/>';
//        images.innerHTML += '<div class="imageSection"><iframe src=\"' + iurl + '\" width="100%" height="400px"></iframe></div>';

    //cframes[currentFrame] += '<div id="x' + qI + '" class="ui-widget-content">';
    cframes[currentFrame] += '<br/><br/><div style="clear: both;">Image results for: ' + selection + '</div><br/>';
    cframes[currentFrame] += '<div class="imageSection"><iframe src=\"' + iurl + '\" width="100%" height="400px"></iframe></div>';
    //cframes[currentFrame] += '<script>var newFrame = $(\'#x\' +' + qI + '); newFrame.resizable(); newFrame.draggable();';
    //cframes[currentFrame] += '</div>';


    showFrame(currentFrame);
    
    qI++;

}

function setTheme(theme) {       
    currentTheme = theme;

    var c = document.getElementById("themeCSS");
    c.href = 'themes/' + theme + '.css';
	if (!chrome)
	    localStorage['theme'] = theme;
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


$(document).ready(function(){
	if (window.location.hash == '#chrome') {
		chrome = true;
		$('#Top').hide();
		$('#Menu').toggle();
	}

	//setup theme
	var currentTheme;
	if (!chrome)
		currentTheme = localStorage['theme'];

	if (currentTheme == null) {
		currentTheme = defaultTheme;
	}
	setTheme(currentTheme);

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

	$("#_Font span").click(function() {
		autosize();
	});

	function updateAutosizeIfChecked() {
		if ($('#_Font input').is(':checked')) {
			autosize();
			if (!chrome)
				localStorage['autosize'] = 'true';
		}
		else {
			if (!chrome)
				localStorage['autosize'] = 'false';
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


	var inputs = $('<div></div>');

	var inputter = $('<span/>');

	var goselect = $('<select style="font-size:100%">');
	goselect.append('<option>URL</option>');
	goselect.append('<option>Text</option>');

	var goinput = $('<input type="text" placeholder="Website Address" style="font-size: 100%" />');

	var gotextinput = $('<textarea style="font-size:50%; width: 100%; height: 10em"/>');

	var gobutton = $('<input type="submit" value="Go" style="font-size:100%"/>')
	var loadbutton = $('<input type="submit" value="Load" style="font-size:100%"/>')
	
	function updateInputs() {
		inputter.empty();
		if (goselect.val() == 'URL') {
			gobutton.show();
			//loadbutton.css('float','');
			inputter.append(goinput);					
		}
		else if (goselect.val() == 'Text') {
			gobutton.hide();
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
			gobutton.click();
		}
	});

	gobutton.click(function() {
		goURL(goinput.val());
	});

	loadbutton.click(function() {
		if (goselect.val() == 'URL') {
			loadURL(goinput.val());
		}
		else {
			loadText(gotextinput.val());
		}
	});

	updateInputs();

	inputs.append(goselect, inputter, gobutton, loadbutton);

	$('#Top').prepend(inputs);


	var initialAutoSize = false;
	if (!chrome)
		initialAutoSize = localStorage['autosize'];
	if (initialAutoSize == 'false')
		$('#_Font input').prop('checked', false);
	else
		$('#_Font input').prop('checked', true);

	window.onhashchange = function() {	reload();	};

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
		reload();
	}

});

