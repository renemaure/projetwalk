<?php

if (isset($_GET['i0'])) // Si la variable existe on lance le traitement du formulaire if (isset($_GET['util']))
{
	include("base_donnees.php");
	
	$nomrequet = array ("corps","tete","bouche","yeux","cheveux","pantalon");
	
	$requete = "INSERT INTO img_avatar ( nom";
	
	$requete1 = "";
	
	for ($av = 0; $av<=(count($_GET)-2); $av ++)
	{
		$requete = $requete." , ".$nomrequet[$av];	
		
		$requete1 = $requete1." , ".$_GET['i'.$av];
	}
			
	$requete = $requete." ) VALUES  ( '".$_GET['nom']."'";
	
	mysql_query ($requete.$requete1.")"); 
	
	$requete = "UPDATE avatar SET final = 3 WHERE nom = '".$_GET['nom']."'"; 
	
	mysql_query ($requete); 
		
	$requete = "SELECT id FROM avatar WHERE nom = '".$_GET['nom']."'";
	
	$id = mysql_query ($requete); 
	
	$requete = "UPDATE univers_avatar SET c".$id." = ".$id." WHERE structure_zonne = 'placement'"; // placement dans le monde 
	
	mysql_query ($requete); 
	
	
	mysql_close($laison); // Ne pas oublier de refermer la connexion  !		

	/*cr�ation de l'image de l'avatar */

	$source="";
	
	$image = imagecreatefrompng("../avatar/corps/".$_GET['i0'].".png"); //io nom du personnage ../../images/avatar/

	imagealphablending($image,true);

	imagesavealpha($image,TRUE);

	for ($av = 1; $av<=5; $av ++)
		{
			$source = imagecreatefrompng("../avatar/".$nomrequet[$av]."/".$_GET['i'.$av].".png"); 

			ImageCopyResampled($image, $source, 0, 0, 0, 0, 110, 110, 110, 110);

			$source="";
		}

	ImagePng($image, "../images/avatar".$_GET['nom'].".png");
}

$envoi = "Location: ../index.php?util=fichiers/etape1&cod=2";  

header($envoi);
?>