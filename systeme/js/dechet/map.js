var latitude = 0; /*48.20065;*/

var longitude = 0; /*3.28268;*/

function map(latitude,longitude) {

var latlng = new google.maps.LatLng(latitude, longitude);
var myOptions = {
zoom: 11,
center: latlng,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(
document.getElementById("map_canvas"), myOptions);
}