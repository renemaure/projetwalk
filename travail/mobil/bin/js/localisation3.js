function local()
{
if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(function(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var altitude = position.coords.altitude;	
		var precition = position.coords.accuracy;
        carte(latitude,longitude);
 });

}

function carte(latitude, longitude) {

  map = new google.maps.Map(document.getElementById("map_canvas"), {
        zoom: 19,
        center: new google.maps.LatLng(latitude, longitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP
		var marker = new google.maps.Marker({
    position: new google.maps.LatLng(latitude, longitude),
    map: map
      });  
}
