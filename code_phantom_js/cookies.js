/*  
  Run this file by opening the command prompt and then point to phantomjs.exe followed by this 
  file location.

  Pass website url as the first argument when running to see the cookies created.

  Cookies data is shown in a JSON format.

  Example:
      C:\phantomjs\phantomjs.exe C:\phantomjs\code_phantom_js\cookies.js https://www.google.com
*/


var system=require('system');
var url=system.args[1];
var page = require('webpage').create();
page.open(url,function(status){
  if ( status === "success" ){
    console.log(JSON.stringify(phantom.cookies, null, 4));
    phantom.exit(0);
  }
});