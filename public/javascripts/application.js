// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var map;
setTimeout('init()', 1);

function init(){

   if (GBrowserIsCompatible()){
       var centerLatitude = 38.5;
       var centerLongitude = -121.8;
       var startZoom = 15;
       
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
  myHM.Init(400, 900); // Must be same as map size, or same ratio

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

window.onload = init;
window.onunload = GUnload;
