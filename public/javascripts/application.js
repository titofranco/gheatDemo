// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function windowHeight() {
    //Standard browsers (Mozilla,Safari,etc.)
    if (self.innerHeight) return self.innerHeight;
    // IE 6
    if (document.documentElement && document.documentElement.clientHeight) return y = document.documentElement.clientHeight;
    //IE 5
    if (document.body) return document.body.clientHeight;
    //Just in case
    return 0;
}

/* The offsetHeight and offsetWidth properties are provided by the browser,
   and return—in pixels—the dimensions of their element, including any padding.*/
/* Redimensiona el tamño del mapa y de la barra lateral*/

function handleResize() {
    var height = windowHeight() - document.getElementById('toolbar').offsetHeight - 45;
    document.getElementById('map').style.height = height + 'px';
    document.getElementById('sidebar').style.height = (height - 18) + 'px';
}



function init(){

   if (GBrowserIsCompatible()){
       var map;
       var centerLatitude = 6.27488;
       var centerLongitude = -75.56817;
       var startZoom = 15;
       
       map = new GMap2(document.getElementById("map"));
       map.setCenter(new GLatLng(centerLatitude,centerLatitude),startZoom);
       map.setMapType(G_HYBRID_MAP);
       map.setUIToDefault();
        
   }

}
//window.onresize = handleResize;
window.onload = init;
window.onunload = GUnload;

