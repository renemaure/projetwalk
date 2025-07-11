<?php
include("php/base_donnees.php");

$resultat = mysql_query ("SELECT * FROM avatar"); 
	
	while($data = mysql_fetch_assoc($resultat))
		{
        	if ($data["nom"] == $_COOKIE['nom'])
			{
				$lireinfo[1] = $data["nom"];
				$lireinfo[0] = $data["id"];
				$lireinfo[2] = $data["final"];
				$lireinfo[3] = $data["image"];
				$lireinfo[4] = $data["physique"];
				$lireinfo[5] = $data["intellect"];
				$lireinfo[6] = $data["charisme"];
				$lireinfo[7] = $data["pwalk"];
				$lireinfo[8] = $data["fincaract"];
				break;
			}
		}
mysql_close($laison); 

?>