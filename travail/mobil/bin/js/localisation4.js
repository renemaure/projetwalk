


 
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var altitude = position.coords.altitude;	
		var precition = position.coords.accuracy;
        
 });
}  
 
  map = new google.maps.Map(document.getElementById("map_canvas"), {
        zoom: 19,
        center: new google.maps.LatLng(longitude, latitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });  