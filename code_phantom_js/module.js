var system=require('system');
var url=system.args[1];
var page = require('webpage').create();
var timer = require("./timer");

page.open(url,function(status){
  timer.stop();
  console.log("Duration: " + (timer.duration/1000)+ " secs");
  phantom.exit(0);
});
