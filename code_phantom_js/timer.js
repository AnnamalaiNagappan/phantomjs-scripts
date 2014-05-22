/*  
  Makes use of module.js to create a simple timer function.

  Example:
      C:\phantomjs\phantomjs.exe C:\phantomjs\code_phantom_js\timer.js
*/


exports.timeStart = null;
exports.timeStop = null;
exports.duration = 0;
exports.start = function(){
  this.timeStart = new Date();
}
exports.stop = function(){
  this.timeStop = new Date();
  this.duration = this.timeStop - this.timeStart;
}