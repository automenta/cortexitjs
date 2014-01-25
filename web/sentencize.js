function sentencize(str) {
   //str=str.replace(/\n/g, " ");
   //str=str.replace(/\r/g, " ");
   //str=str.replace(/\t/g, " ");
   str=str.replace(/\n/g, " ");
   str=str.replace(/&nbsp;/g, " ");
   str=str.replace(/\. /g, ".\n");
   str=str.replace(/\? /g, "?\n");
   str=str.replace(/\! /g, "!\n");
   str=str.replace(/<br.*>/gi, "\n");
   str=str.replace(/<p.*>/gi, "\n");
   str=str.replace(/<li.*>/gi, "\n");
   str=str.replace(/<h1.*>/gi, "\n");
   str=str.replace(/<h2.*>/gi, "\n");
   str=str.replace(/<h3.*>/gi, "\n");
   //str=str.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 [$1] ");

	//TODO what about: <a href='...'></a>
   str=str.replace(/<img.*src="(.*?)".*>(.*?)<\/img>/gi, " {{img src='$1'}}$2{{/img}}");
   str=str.replace(/<a.*href="(.*?)"(.*?)>(.*?)<\/a>/gi, " {{a href='$1' $2}}$3{{/a}}");
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
   return slines;      
}

self.addEventListener('message', function(e) {
  self.postMessage(sentencize(e.data));
}, false);
