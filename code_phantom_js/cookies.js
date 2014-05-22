var system=require('system');
var url=system.args[1];
var page = require('webpage').create();
page.open(url,function(status){
  if ( status === "success" ){
    console.log(JSON.stringify(phantom.cookies, null, 4));
    phantom.exit(0);
  }
});