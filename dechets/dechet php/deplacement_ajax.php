<?php
$zone_monde = $_GET['zma']; 

$id_avatar = $_GET['ida']; 


$zone_monde = $zone_monde/ 80;


include("php/base_donnees.php");

$requete = "UPDATE univers_avatar SET c".$zone_monde." = ".$id_avatar." WHERE structure_zonne = 'placement'"; 
			
			mysql_query ($requete); 


mysql_close($laison); // Ne pas oublier de refermer la connexion !


?>