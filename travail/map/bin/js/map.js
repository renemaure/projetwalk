/*var latitude = 0; 48.20065;*/

/*var longitude = 0; 3.28268;*/

function local()
{
	if(navigator.geolocation){
   		 navigator.geolocation.getCurrentPosition(function(position){
			 enableHighAccuracy: true;
      	    var latitude = position.coords.latitude;
	        var longitude = position.coords.longitude;
        	var altitude = position.coords.altitude;	
			var precition = position.coords.accuracy;
     	
		  map(latitude,longitude);
		 });
	} 
	else
	{
	 document.getElementById('geolocation').innerHTML = 'votre géolocalisation ne fonctionne pas!<br />';
	}

}


function map(latitude,longitude) {

var latlng = new google.maps.LatLng(latitude, longitude);
var myOptions = {
zoom: 20,
center: latlng,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(
document.getElementById("map_canvas"), myOptions);

var marqueur = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map
    });
}