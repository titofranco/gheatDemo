// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var map;

function addMarker(latitude, longitude, description) {
    var marker = new GMarker(new GLatLng(latitude, longitude));
    var latlng_current = new GLatLng(latitude,longitude);
    console.log("description " + description);
    GEvent.addListener(marker, 'click',
        function() {
           //map.panTo(latlng_current);
           marker.openInfoWindowHtml(description);
        }
    );

    map.addOverlay(marker);
}



function init(){

   if (GBrowserIsCompatible()){
       var centerLatitude = 47.0511770000;
       var centerLongitude = -109.6348170000;
       var startZoom = 9;
       map = new GMap2(document.getElementById("map"));
       map.setCenter(new GLatLng(centerLatitude,centerLongitude),startZoom);
       map.setMapType(G_HYBRID_MAP);
       map.setUIToDefault();
       initHeatmap();        
   }else{
    alert("Your browser is not compatible")
   }
}   




function initHeatmap()
{
 // Heatmap Scripts
 try
 {
  var myHM = new GEOHeatmap();
  myHM.Init(900, 400); // Must be same as map size, or same ratio

  var data = new Array();

  // Generate random lat/lon and value points

  for(i=0;i<points.length;i++)
  {
   var lat = points[i].lat;
   var lng = points[i].lng;
   //var val = Math.floor((points[i].coupon_count/160));
   var val=Math.floor(Math.random()*10)
   //console.log(lat+ " " + lng +  " " + val );
   addMarker(lat,lng,String(val));
   
   data.push(lat);
   data.push(lng);
   data.push(val);
  }
  
  
  

  myHM.SetData(data);
  myHM.SetBoost(1); // Optional, see documentation
  myHM.SetDecay(0); // Optional, see documentation
  var preUrl = myHM.GetURL();

  // Now render in our Google Map
  var heatmapOverlay = new HMGoogleOverlay(preUrl);
  map.addOverlay(heatmapOverlay);
 }
 catch(e)
 {
  alert(e.Message);
 }
}


/*

setTimeout('init()',1);
function initHeatmap()
{
 // Heatmap Scripts
 try
 {
  var myHM = new GEOHeatmap();
  myHM.Init(900, 400); // Must be same as map size, or same ratio width,heigh

  var data = new Array();

  // Generate random lat/lon and value points

  for(p=0;p<50;p++)
  {
   var rLatD=Math.floor(Math.random()*1000);
   var rLonD=Math.floor(Math.random()*1000);
   var rValD=Math.floor(Math.random()*10);
   data.push(38.47+(rLatD/15000));
   data.push(-121.84+(rLonD/15000));
   data.push(rValD);
   addMarker(38.47+(rLatD/15000),-121.84+(rLonD/15000),String(rValD));
  }
  

  myHM.SetData(data);
  myHM.SetBoost(1); // Optional, see documentation
  myHM.SetDecay(0); // Optional, see documentation
  var preUrl = myHM.GetURL();

  // Now render in our Google Map
  var heatmapOverlay = new HMGoogleOverlay(preUrl);
  map.addOverlay(heatmapOverlay);
 }
 catch(e)
 {
  alert("-_-" + e.Message);
 }
}*/

window.onload = init;
//window.onunload = GUnload;
