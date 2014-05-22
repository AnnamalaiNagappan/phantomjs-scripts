var fs=require('fs');
console.log('WORKING DIRECTORY : ' +fs.workingDirectory);
var ins=fs.open(fs.workingDirectory+'\\code_phantom_js\\arg.js','r');
console.log(ins.read());
ins.close();
phantom.exit(0);