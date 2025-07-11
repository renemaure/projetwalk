<?php 

include("base_donnees.php");

$requete = "SELECT nom FROM avatar";

$resultat = mysql_query ($requete); 

while($data = mysql_fetch_assoc($resultat))
    	{
        	if ($nom == $_COOKIE['nom'];   )
			{
				
				break;
			}
		}
		
 mysql_close($laison); 



?>

