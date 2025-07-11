<?php 
/* Date de création: 18/02/2012 

version 1.1.5 

sous fichier  de recupcode permet de generer les extensions

rajout d'une nouvelle valeur de '$code' '3' pour l'extention '.txt'

modif du 26/02/2012 deusieme varaible '$central' même fonctionnement que $lancer


*/ 	

$lancer = trim($chm_lanceur[5]);  

$defaut = " ";

$lien = "dessin/corps_tete/";

$code = 0; 

$book= 0;  

$valid = 0;	

$lang="fr";

if (isset($_GET['def'])) $defaut = trim($_GET['def']);  

if (isset($_GET['lien'])) $lien = trim($_GET['lien']); 

if (isset($_GET['util']))
	{ 
		$lancer1 = $_GET['util']; 

		$code = $_GET['cod']; 	
				
		if($code)
		  {
			if ($code == 1)	$lancer = $lancer1 . ".html";
	 		
			if ($code == 2) $lancer = $lancer1 . ".php";
			
			if ($code == 3) $lancer = $lancer1 . ".txt";
		  }
		else
		  {
			$lancer = $lancer1;
		  }
		
		
	} 

?>

