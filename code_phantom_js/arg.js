/*	
	Run this file by opening the command prompt and then point to phantomjs.exe followed by this 
	file location.

	Pass website url as the first argument when running to get the title of the website and
	the number of nodes in a page.

	Example:
			C:\phantomjs\phantomjs.exe C:\phantomjs\code_phantom_js\arg.js https://www.google.com

	Following phantomjs script will get some info about a URL.
*/


var system=require('system');
var url=system.args[1];
var page=require('webpage').create();
page.open(url,function(status){
  if(status === "success"){
    var data=page.evaluate(function(){
      return {
        title:document.title,
        numberofNodes:document.getElementsByTagName('*').length,
        documentUrl:document.URL
      };
    });
    console.log('Page Stats');
    console.log('____________________');
    console.log('Title  :' + data.title);
    console.log('URL    :' + data.documentUrl);
    console.log('Number of Nodes :' + data.numberofNodes);

  }
  phantom.exit(0);
});