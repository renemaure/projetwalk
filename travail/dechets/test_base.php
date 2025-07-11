<?php
/*$laison = mysql_connect("sql2","collectif11880","renemaure");*/

$laison = mysql_connect("localhost","root","");

mysql_select_db("collectif_swart");

$requete = "SELECT * FROM avatar";

$resultat = mysql_query ($requete); 

 if ($resultat === FALSE)   echo "La requête SELECT a échoué."; 
	
	else
	{
	

	while($data = mysql_fetch_assoc($resultat))
    {
    // on affiche les informations de l'enregistrement en cours
    echo ($data['nom']."<br>");
    
    } 
	
/*	$incrit = mysql_fetch_assoc($resultat);
	
foreach($incrit as $cle=>$valeur)
    {
    echo $cle.' :'.$valeur.'<br>';
    }*/ 
		
	
	}
 mysql_close($laison); // Ne pas oublier de refermer la connexion !

?>