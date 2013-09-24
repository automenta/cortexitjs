console.log('start');

var request = require('request');
var expressm = require('express');
var express = expressm();
var http = require('http');
var cheerio = require('cheerio');

var defaultTimeOutMS = 10000;

function getSentencized(urlOrText, f) {
   
   var rootNode;
   
   var p = function(err, doc) {
       if (err==null) {
           var $ = cheerio.load(doc);
		   $('script').remove();
		   $('head').remove();
		   $('style').remove();
           
           var str = $.html();
           str=str.replace(/\n/g, " ");
           //str=str.replace(/\r/g, " ");
           //str=str.replace(/\t/g, " ");
           str=str.replace(/&nbsp;/gi, " ");
           str=str.replace(/\. /gi, ".\n");
           str=str.replace(/\? /gi, "?\n");
           str=str.replace(/\! /gi, "!\n");
           str=str.replace(/<br.*>/gi, "\n");
           str=str.replace(/<p.*>/gi, "\n");
           //str=str.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 [$1] ");
           str=str.replace(/<img.*src="(.*?)".*>(.*?)<\/img>/gi, " {{img src='$1'}}$2{{/img}}");
           str=str.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " {{a href='$1'}}$2{{/a}}");
           str=str.replace(/<(.*?)>/g, "");

           var linesPreFilter = str.split("\n");
           var slines = [];
           var i;
           for (i = 0; i < linesPreFilter.length; i++) {
               var t = linesPreFilter[i].trim();               
               if (t.length > 0) {
                   slines.push(t);
               }                  
           }    
           
           var lines = [];
           for (i = 0; i < slines.length; i++) {
                lines.push(slines[i]);               
           }
           
           f(lines);
       }
       else {
           console.log('getSentencized ERROR');
           console.log('ERROR: ' + err);
           f(err);
       }
   }
   



   if (urlOrText.indexOf('http://')==0) {
        rootNode = urlOrText;
        rootNode = rootNode.replace(/http:\/\//g, "");
        rootNode = rootNode.replace(/\//g, "_");

        request({
            url: urlOrText,
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
                console.log(urlOrText + ': '  + error);
            }
        });        
   }
   else {
       var summaryLength = 16;
       if (urlOrText.length < summaryLength)
           summaryLenth = urlOrText.length;
       rootNode = urlOrText.substring(0, summaryLength);
       rootNode = encodeURIComponent(rootNode);
       //apricot.parse(urlOrText, p, false);       
  	   p(null, urlOrText);
   }
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

express.use("/static", expressm.static('./web'));

express.post('/sentences', function(req, res) {
	var url = req.body.url;
	var sentences = getSentencized(url, function(sentences) {
		sendJSON(res, sentences, false );
	});
});

express.get('/*', function(req, res) {
	res.sendfile('index.html');
});

console.log('Cortexit web server on port ' + webPort);
