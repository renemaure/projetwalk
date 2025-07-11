<?php 

$tabdiver = file("../bin/serveur.txt");   

 $envoi = "Location: ../tab-bord.php?util=".trim($tabdiver[2])."&cod=2";	
 
if (isset($_POST['acces'])) // Si la variable existe
{	
	$recupcode = $_POST['acces']; 
	
	if ($recupcode == trim($tabdiver[0]))  $envoi = "Location: ../tab-bord.php?util=fichiers/donnees&cod=2&donn=accueil";		
} 													 /*tab-bord.php?util=fichiers/donnees&cod=2&donn=general*/

header($envoi);	
?>