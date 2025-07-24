<?php
	/* $repjs="systeme/donnees/walk.json";
	$json = file_get_contents($repjs);
	$walk = json_decode($json, true); */
	include ("systeme/php/donnes_walk.php"); /* permet de recupere des données sur les avatars mais c'est mal ecrit a revoir entierement */
?>
<!doctype html>
<html lang="fr">
	<head>
		<meta http-equiv="Content-Type" content="text/html charset=utf-8">
		<title>The Walk - un monde presque permanent</title>
		<META NAME="TITLE" CONTENT="The Walk">
		<META NAME="AUTHOR" CONTENT="Pojet X">
		<META NAME="OWNER" CONTENT="">
		<META NAME="SUBJECT" CONTENT="">
		<META NAME="RATING" CONTENT="art comptenporain">
		<META NAME="LANGUAGE" CONTENT="FR">
		<META NAME="COPYRIGHT" CONTENT="Projet X">
		<link rel="StyleSheet" type="text/css" href="systeme/css/walk.css"> 
		<script type="text/javascript" src="systeme/js/jquery-3.7.1.min.js"></script>
		
		<script type="text/javascript" charset="utf-8"src="systeme/js/jquery.md5.min.js"></script>
		</head>
	<body>
		<main>
			<header id="header">
				
			</header>
			<section id="monde" >
				<div id="zone_souris" onclick="avance_souris()"></div>	
			</section>
			<section id="control">
				<p id="info-erg">
				
				</p>
				<!-- <div id="info_cookie">
				
				</div> -->
			</section>
			<section id="interface">
				<article id="infos_monde">
			
				</article>

				<article class="separ_monde"> </article>	
				<article id="infos_base">
				
				</article> 
			</section>
			<div id="info_cookie"> <!-- bulle info --></div>	
			<div id="affiche_regles"><!--popup regles et infos--></div>	
			<div id="action_avatar"><!--popup  action de 'azvatar actif--></div>	
			<div id="zonne_area"></div>
			<footer>
				Création projetX 2013 /2025 – Version <span id="foot_version"></span> au <span id ="foot_date"></span> en phase <span id="foot_phase"></span> <a href="mailto:thewalk@projetx.art">thewalk@projetx.art</a>
				
			</footer>
		</main>
		<script src="systeme/js/md5.js"></script>
		<SCRIPT SRC="systeme/js/walk.js"></SCRIPT>
		<SCRIPT SRC="systeme/js/gestion_monde.js"></SCRIPT>
		<script src="systeme/js/fonctions_internes.js"></script>
		<script src="systeme/js/tests.js"></script>
		
	</body>
</hml>