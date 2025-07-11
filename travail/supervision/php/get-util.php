<?php 
/* Date de création: 18/02/2012 

version 1.1.5 

sous fichier  de recupcode permet de generer les extensions

rajout d'une nouvelle valeur de '$code' '3' pour l'extention '.txt'

modif du 26/02/2012 deusieme varaible '$central' même fonctionnement que $lancer


*/ 	
$chm_lanceur = file("bin/lanceur.txt");

$lancer = trim($chm_lanceur[0]);  /*modif mis dans un fichier sous forme de fichier */

$typemenu = trim($chm_lanceur[1]);

$code = 0; 

$book= 0;  

$valid = 0;	

$lang="fr";

if (isset($_GET['util']))
	{ 
		$lancer1 = $_GET['util']; 

		$code = $_GET['cod']; 	
		
		if (isset($_GET['donn'])) $donne = $_GET['donn'];   
		
		if (isset($_GET['pos'])) $pos = $_GET['pos'];	
		
		if (isset($_GET['men'])) $typemenu = $_GET['men']; 
		
		if (isset($_GET['valid'])) $valid = $_GET['valid']; 
		
		if (isset($_GET['bord'])) $bord = $_GET['bord']; 
		
		if (isset($_GET['gal'])) $galerie = $_GET['gal']; 
		
		if (isset($_GET['lang'])) $lang = $_GET['lang']; 
		
		
		 
		
		if (isset($_GET['prev']))
			{
				$vuprev =  $_GET['prev'];	
		
				$retour = $_GET['retrn']; /*nouveelle variable */
			}	  
		
		
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

