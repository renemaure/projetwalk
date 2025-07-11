<?php

include("php/base_donnees.php");

$resultat = mysql_query ("SELECT nom , id FROM avatar where final=3"); 

while($data = mysql_fetch_assoc($resultat))
{
	$img_avatar_monde = "images/avatar".$data["nom"].".png";
	
	if (file_exists($img_avatar_monde))
		{
			$avatar_monde[$data["nom"]] = $data["id"];
			
			$requete = "UPDATE univers_avatar SET c".$data["id"]." = ".$data["id"]." WHERE structure_zonne = 'placement'"; 
			
			mysql_query ($requete); 
		}
}

mysql_close($laison); // Ne pas oublier de refermer la connexion !



?>