if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(rene, maurice , {enableHighAccuracy : true, timeout:100000, maximumAge:600000});
else
  alert("Votre navigateur ne prend pas en compte la g�olocalisation HTML5");
   
function rene(position){
  alert("Latitude : " + position.coords.latitude + ", longitude : " + position.coords.longitude);
}; 
 
function maurice(error){
  switch(error.code){
    case error.PERMISSION_DENIED:
      alert("L'utilisateur n'a pas autoris� l'acc�s � sa position");
      break;     
    case error.POSITION_UNAVAILABLE:
      alert("L'emplacement de l'utilisateur n'a pas pu �tre d�termin�");
      break;
    case error.TIMEOUT:
      alert("Le service n'a pas r�pondu � temps");
      break;
    }
};