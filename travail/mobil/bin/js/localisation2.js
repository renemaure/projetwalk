if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var altitude = position.coords.altitude;	
		var precition = position.coords.accuracy;
        
 });
}  

function local() {
  map = new google.maps.Map(document.getElementById("map_canvas"), {
        zoom: 11,
        center: new google.maps.LatLng(48.858565, 2.347198),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });  
}
 
if (navigator.geolocation)
  var watchId = navigator.geolocation.watchPosition(successCallback,null,{enableHighAccuracy:true});
else
  alert("Votre navigateur ne prend pas en compte la g�olocalisation HTML5");   
 
function successCallback(position){
  map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
    map: map
  });
}