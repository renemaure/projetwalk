function local()
{
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var altitude = position.coords.altitude;	
		var precition = position.coords.accuracy;
        document.getElementById('geo').innerHTML = 'map( : ' + latitude + ' , ' + longitude + ' );'
 });
} 
else
{
 document.getElementById('geolocation').innerHTML = 'votre géolocalisation ne fonctionne pas!<br />';
}

}