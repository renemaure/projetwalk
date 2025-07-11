<?php
include("php/base_donnees.php");*/

if (isset($_GET['ind'])) // Si la variable existe on lance le traitement du formulaire if (isset($_GET['util']))
{
	$nbr_post = count($_GET);
	
	$nomrequet = array ("nom","corps","tete","bouche","yeux","cheveux");
	
	$requete = "INSERT INTO img_avatar (";
	
	/* mail, passe, date) VALUES (";*/
	
	
	for ($av = 1; $av<=$nbr_post; $av++)
	{
		$requete = $requete." , ".$nomrequet[$av];
	}

	echo($requete). "nnr cout ". $nbr_post;
	
}




?>