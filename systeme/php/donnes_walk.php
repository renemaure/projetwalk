<?php
	include("base_donnees.php");
	$av_nom = "pas de nom";
	$page_vue = "";
	$etape_vue = "0";
	$table_avat = "pastable";
	$erreur["valid"]="non";
	if (isset($_COOKIE['nom'])){
		$av_nom = $_COOKIE['nom'];
		$table_avat = $av_nom."_visite";
	} 
	if (isset($_COOKIE['etap']))  $etape_vue = $_COOKIE['etap'];
	$page_vue = "$av_nom  & $etape_vue";
	$date_vue =  date('d/m/Y à H:i:s'); // Date de la visite
	include("systeme/php/compteur.php");
	include("systeme/php/precscence_avat.php");
	$laison=NULL;
?>