var page=require('webpage').create();
page.open('http://freegeoip.net/json/',function(status){
  if(status == 'success'){
    var data=JSON.parse(page.plainText);
    console.log("______________________________________");
    console.log("IP ADDRESS : " +data.ip);
    console.log("______________________________________");
    console.log("COUNTRY CODE : " +data.country_code);
    console.log("______________________________________");
    console.log("COUNTRY NAME : " +data.country_name);
    console.log("______________________________________");
    console.log("REGION CODE : " +data.region_code);
    console.log("______________________________________");
    console.log("REGION NAME : " +data.region_name);
    console.log("______________________________________");
    console.log("CITY : " +data.city);
    console.log("______________________________________");
    console.log("ZIPCODE : " +data.zipcode);
    console.log("______________________________________");
    console.log("LATITUDE : " +data.latitude);
    console.log("______________________________________");
    console.log("LONGITUDE : " +data.longitude);
    console.log("______________________________________");
    console.log("METRO CODE : " +data.metro_code);
    console.log("______________________________________");
    console.log("AREA CODE : " +data.area_code);
    console.log("______________________________________");
  }
  phantom.exit();
});