<?php 

$entvalid = "fichiers/enregistrement.php";

include("php/base_donnees.php");

$resultat = mysql_query ("SELECT nom , passe FROM avatar"); 

while($data = mysql_fetch_assoc($resultat))
	{
       	if (isset($_COOKIE['nom']) and isset($_COOKIE['passe']) and $data["nom"] == $_COOKIE['nom'] and $data["passe"] == $_COOKIE['passe'] )
			{
			 $entvalid = "fichiers/etape1.php";
				 
			break;
			}
	}
mysql_close($laison); // Ne pas oublier de refermer la connexion !

 include( $entvalid);
 ?>
