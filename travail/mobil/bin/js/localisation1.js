function local()
{
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var altitude = position.coords.altitude;	
		var precition = position.coords.accuracy;
        lire(latitude,longitude,altitude,precition);
 });
} 
else
{
 document.getElementById('geolocation').innerHTML = 'votre géolocalisation ne fonctionne pas!<br />';
}

}

function lire(latitude,longitude,altitude,precition)

{
 document.getElementById('geolocation').innerHTML = 'latitude : ' + latitude + '<br /> longitude : ' + longitude + '<br /> altitude : ' + altitude + '<br /> présition en metre :'+precition;

}