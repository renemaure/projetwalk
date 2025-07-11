<?php

 /* Date de création: 12/10/2013 */ 
 
$lat1 = 48.8878368;

$lon1 = 2.3490607;

$lat2 =  48.8878683;

$lon2 =  2.34918;
 
require("get_distance.php");

$toto = round(get_distance_m($lat1, $lon1, $lat2 , $lon2) , 2);

echo($toto."\n\r")
?>
