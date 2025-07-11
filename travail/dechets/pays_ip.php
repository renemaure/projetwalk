<?php
$laison = mysql_connect("sql2","collectif11880","renemaure");

mysql_select_db("collectif11880_swart");

$requete = "SELECT * FROM avatar";

$resultat = mysql_query ($requete); 

 if ($resultat === FALSE)   echo "La requête SELECT a échoué."; 
	
	else echo("$resultat");
        
   

mysql_close($laison); // Ne pas oublier de refermer la connexion !

?>