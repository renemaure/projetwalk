function local()
{
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var altitude = position.coords.altitude;	
		var precition = position.coords.accuracy;
        document.getElementById('geolocation').innerHTML = 'latitude : ' + latitude + '<br /> longitude : ' + longitude + '<br /> altitude : ' + altitude + '<br /> pr�sition en metre :'+precition;
 });
} 
else
{
 document.getElementById('geolocation').innerHTML = 'votre g�olocalisation ne fonctionne pas!<br />';
}

}