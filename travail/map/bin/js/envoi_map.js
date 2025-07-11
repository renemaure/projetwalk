var latitude = 0;

var longitude = 0;

var precition = 0;

function geo()
{			
	if(navigator.geolocation)
	{
   		 navigator.geolocation.getCurrentPosition(function(position){
		  enableHighAccuracy: true;
      	  latitude = position.coords.latitude;
	      longitude = position.coords.longitude;
        /*var altitude = position.coords.altitude;	*/
		precition = position.coords.accuracy;
     	 });
	} 
 document.getElementById('reponse').innerHTML = "latitude de "+ latitude +" et longitude de "+ longitude +" précition de "+ precition;
 
 }
 
 
function recup()
{
var txt = map.texte.value;
/* document.getElementById('reponse').innerHTML = txt;*/
	
	var urla = "traitement.php?comment=" + txt + "&lat_perso=" + latitude + "&lon_perso=" + longitude+"&pre_perso=" + precition; 
		
	ajaxSynchrone(urla);
	
	/*document.getElementById('reponse').innerHTML = urla;*/
}
 
 function getXhr()
{
	var xhr = null;
	if(window.XMLHttpRequest)// Firefox et autres
		{ 
			xhr = new XMLHttpRequest(); 
			xhr.overrideMimeType('text/xml'); 
		}
	else if(window.ActiveXObject) // Internet Explorer 
		{
			try 
			{
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} 
				catch (e)
			{
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		}
	else
		{ 
			alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest..."); 
			xhr = false; 
		} 
	return xhr;
}


function ajaxSynchrone(line)
{
	var xhr = getXhr();
	
	xhr.onreadystatechange = function()
	{
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			/*reponse = xhr.responseText;	
		
			document.getElementById(elemid).innerHTML = reponse;   */
		}
	}
	
	xhr.open("GET", line, true);
	
	xhr.send(null);
}
