/* 
  Run this file by opening the command prompt and then point to phantomjs.exe followed by this 
  file location.

  Pass username as the first argument and password as the second argument to log into a website.

  Example:
      C:\phantomjs\phantomjs.exe C:\phantomjs\code_phantom_js\git.js username password

  Script will enable logging into websites using your username and password. URL is hardcoded, 
  if you want make it dynamic.

*/


var system=require('system');
var uid=system.args[1];
var pwd=system.args[2];
var page=require("webpage").create();
page.open("https://github.com/login",function(status){
  if(status === 'success'){
    page.evaluate(function(uid,pwd){
      var username=document.getElementById('login_field');
      username.value=uid;
      var password=document.getElementById('password');
      password.value=password;
      var form=document.getElementsByTagName('form')[1];
      form.submit();
    },uid,pwd);
  }
  setTimeout( function(){
    phantom.exit(0); //Time out function to avoid exiting, before logging ins
  }, 3000);
});