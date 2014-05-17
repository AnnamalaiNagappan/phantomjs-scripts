/*  
  Run this file by opening the command prompt and then point to phantomjs.exe followed by this 
  file location.

  Pass website url as the first argument when running to see the number of requests made, their URL's,
  thier ID's, method's used in them.

  Also to note you can measure the loading time of a page using this script.

  Example:
      C:\phantomjs\phantomjs.exe C:\phantomjs\code_phantom_js\arg.js https://www.google.com
*/



var system=require('system');
var url=system.args[1];  // Getting URL
var page = require('webpage').create();

page.onLoadStarted = function(){
  console.log("Page loading started");
  starttime=new Date().getTime();
}
page.onLoadFinished = function(){
  console.log("Page loading finished");
  endtime=new Date().getTime();
  timeinseconds=(endtime-starttime)/1000;
  console.log(timeinseconds); // loading time of a page
  phantom.exit(0);
}

page.onResourceRequested = function(request){
  console.log("Resource requested");
  console.log("------------------");
  console.log("ID :" +request.id);
  console.log("URL :" +request.url);
  console.log("METHOD :" +request.method);
  console.log("------------------");
  console.log("HEADERS");
  console.log("------------------");
  request.headers.forEach(function(header){
    console.log(header.name + '=' + header.value);
  });
   console.log("------------------");
};

page.open(url,function(status){
  if ( status === "success" ){
    console.log(page.title);
  }else{
    console.log("Page failed to load.");
  }
  phantom.exit(0);
})