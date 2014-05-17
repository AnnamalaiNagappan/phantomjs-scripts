/* 
  Run this file by opening the command prompt and then point to phantomjs.exe followed by this 
  file location.

  Pass username as the first argument and password as the second argument to log into a website.

  Example:
      C:\phantomjs\phantomjs.exe C:\phantomjs\code_phantom_js\pin.js userid

  This code will help you to get the no of pins, likes, boards, followers, following and the name of 
  a person who is in the pinterest using their id.
*/


var system=require('system');
var userid=system.args[1];
var page=require('webpage').create();
var profileUrl="http://www.pinterest.com/"+userid;
page.open(profileUrl,function(status){
  if(status === 'success'){
    var pinterest=page.evaluate(function(uid){
     var numberPins = document.querySelector('[href="/' + uid + '/pins/"]').innerText.trim();
     var numberFollowers = document.querySelector('[href="/' + uid + '/followers/"]').innerText.trim();
     var numberFollowing = document.querySelector('[href="/' + uid + '/following/"]').innerText.trim();
     var numberLikes = document.querySelector('[href="/' + uid + '/likes/"]').innerText.trim();
     var numberBoards = document.querySelector('[href="/' + uid + '/boards/"]').innerText.trim();
     var userName=document.getElementsByClassName("userProfileHeaderName").item(0).innerText.trim();
     return {
      name: userName,
      pins: numberPins,
      followers:numberFollowers,
      following:numberFollowing,
      likes:numberLikes,
      boards:numberBoards
     };
    },userid);
    console.log(pinterest.name+ " has ");
    console.log("_______________________");
    console.log("---- PINS ----");
    console.log(pinterest.pins);
    console.log("_______________________");
    console.log("---- FOLLOWERS ----");
    console.log(pinterest.followers);
    console.log("_______________________");
    console.log("---- FOLLOWING ----");
    console.log(pinterest.following);
    console.log("_______________________");
    console.log("---- LIKES ----");
    console.log(pinterest.likes);
    console.log("_______________________");
    console.log("---- BOARDS ----");
    console.log(pinterest.boards);
  }
  phantom.exit(0);
});