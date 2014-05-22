var system = require('system');
var url=system.args[1];
var format=system.args[2]; // Read the image format
var page=require('webpage').create();
page.open(url,function(status){
  if(status == 'success'){
    console.log('saving screenshot as '+format);
    //page.clipRect={top:0, left:0, width:800, height:200};
    page.papersize={
                    format:  'A4',           // Paper format :Legal, Letter, A3, A4, A5, Tabloid
                    orientation: 'portrait',  // orientation : landscape, portrait
                    border:'1cm'             // units: mm, cm, in, px
                   };
    page.render('screenshot.'+format); // Three types of image formats are supported jpeg, gif, png
    phantom.exit(0);
  }
  else{
    phantom.exit(1);
  }
});