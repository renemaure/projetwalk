<?php 
/* Date de création: 18/02/2012 version 1.1.5 
fichier de recupcode permet de generer les extensions
rajout d'une nouvelle valeur de '$code' '3' pour l'extention '.txt'
modif du 26/02/2012 deusieme varaible '$central' même fonctionnement que $lancer*/ 	
$chm_lanceur = file("bin/lanceur.txt");
$code = 0; 
$valid = 0;	
$erreur="";
$lancer = trim($chm_lanceur[0]);  /*modif mis dans un fichier sous forme de fichier */
$typemenu = trim($chm_lanceur[1]);
if (isset($_GET['util']) and isset($_GET['cod']))
	{ 
		$lancer1 = $_GET['util']; 
		$code = $_GET['cod']; 	
		if (isset($_GET['erreur'])) $erreur = $_GET['erreur']; 
		if (isset($_GET['valid'])) $valid = $_GET['valid']; 
		if($_GET['cod'])
		  {
			if ($code == 1)	$lancer = $lancer1 . ".html";
			if ($code == 2) $lancer = $lancer1 . ".php";
			if ($code == 3) $lancer = $lancer1 . ".txt";
		  }
	} 
?>