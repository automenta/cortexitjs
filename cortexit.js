console.log('start');

var request = require('request');
var expressm = require('express');
var express = expressm();
var http = require('http');
var cheerio = require('cheerio');

var defaultTimeOutMS = 10000;



function loadURL(URL, f) {
   
   var rootNode;
   
   var p = function(err, doc) {
       if (err==null) {
           var $ = cheerio.load(doc);
		   $('script').remove();
		   $('head').remove();
		   $('style').remove();
                      
           f($.html());
       }
       else {
           console.log('getSentencized ERROR');
           console.log('ERROR: ' + err);
           f(err);
       }
   }
   

   if (!URL.indexOf('http://')==0) 
		URL = 'http://' + URL;

    rootNode = URL;
    rootNode = rootNode.replace(/http:\/\//g, "");
    rootNode = rootNode.replace(/\//g, "_");

    request({
        url: URL,
        followAllRedirects: true
        //timeout: defaultTimeOutMS
      }, 
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
      		//apricot.parse(body, p, false);            	
			p(null, body);
        }
        else {
            console.log('getSentencized ERROR');
            console.log(URL + ': '  + error);
        }
    });        
   /*else {
       var summaryLength = 16;
       if (URL.length < summaryLength)
           summaryLenth = URL.length;
       rootNode = URL.substring(0, summaryLength);
       rootNode = encodeURIComponent(rootNode);
       //apricot.parse(URL, p, false);       
  	   p(null, URL);
   }*/
}

function sendJSON(res, x, pretty) {
    res.writeHead(200, {'content-type': 'text/json'});
    var p;
    if (!pretty)
        p = JSON.stringify(x);
    else
        p = JSON.stringify(x, null, 4);
    res.end(p);
}

var webPort = 8787;

var httpServer = http.createServer(express);

httpServer.listen(webPort);

express.use(expressm.bodyParser());

express.use("/", expressm.static('./web'));

express.get('/*', function(req, res) {
	res.sendfile('./web/index.html');
});

//imitate PHP
express.post('/proxy.php', function(req, res) {
	var url = req.body.url;
	var sentences = loadURL(url, function(sentences) {
		sendJSON(res, sentences, false );
	});
});


console.log('Cortexit web server on port ' + webPort);
