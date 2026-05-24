<?php
	/* 
    fichier de lancement pour les sites du collectif, utilisé avec le moteur V5-6
	pour le jeu Walk en version beta
    actuellement à la version 2.0.0 au 10/12/2025

    Cette version est adaptée de la version V5 du moteur du collectif 
	et permetra de passée à la version V6 dans un avenir peroche

	modification version 2.0.10 au 10/12/2025
	modification du dossier pour la version 6 pour le fichier lié à google dans un dossier module dans le dossier systeme supression du sous dossier 
	modification de l'emplacement du titre html remis dans le fichier donnees_site.json
	déplacer toutes les données meta dans le fichier donnees_site.json
	création d'un fichier meta.php dans le dossier module dans systeme
	déplacer les extentions dans un fichier dans le dossier modules de systeme
   */

	// include ("systeme/php/donnes_walk.php"); /* permet de recupere des données sur les avatars mais c'est mal ecrit a revoir entierement */

	$filename1 = "donnees_site.json";
	$lp = ".php";
	$demar = json_decode(file_get_contents($filename1), true);
	include($demar["chem"]."/".$demar["dirmodul"]."/".$demar["extentions"].$lp);
	echo"\t<!DOCTYPE html>\r\n<html lang=\"fr\">\r\t<head>\r";
	if ($demar["code_google"]) include($demar["chem"]."/".$demar["dirmodul"]."/".$demar["fich_google"].$lp);
	echo"\t\t<meta http-equiv=\"Content-Type\" content=\"text/html charset=utf-8\">\r";
    echo"\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r";
	echo"\t\t<title>$demar[trt_head]</title>\r";
	if ($demar["module_meta"]) include($demar["chem"]."/".$demar["dirmodul"]."/".$demar["fich_meta"].$lp);
	if ($demar["icon_site"])  echo"\t\t<link rel=\"icon\"href=\"$demar[chem]/$demar[dirimg]/$demar[head_icon].ico\">\r";
	echo"\t\t<link rel=\"StyleSheet\" type=\"text/css\" href=\"$demar[chem]/$demar[dircss]/$demar[nom_css_site]$css\">\r";
	if ($demar["css_collectif"]) echo"\t\t<link rel=\"StyleSheet\" type=\"text/css\" href=\"$demar[chem]/$demar[dircss]/$demar[nom_css_collectif]$css\">\r";
?>	
	<script type="text/javascript" src="systeme/js/jquery-4.0.0.min.js"></script>
	</head>
	<body>
		<main>
			<header id="header"> </header>
			<section id="monde"> </section>
			<div id="dialog_retour"><p></p></div>	
			<section id="control"></section>
			<section id="interface">
				<article id="infos_monde">
					<h3 class="titre_from"></h3>
					<div class="zonne_txt"></div>
				</article>
				<article class="separ_monde"></article>	
				<article id="infos_base">
					<h3 class="titre_from"></h3>
					<div class="zonne_txt"></div>
				</article> 
			</section>
			<div id="info_cookie"> <!-- bulle info --></div>	
			<div id="affiche_regles"><!--popup regles et infos--></div>	
			<div id="action_avatar"><!--popup  action de l'avatar actif--></div>	
			<div id="zonne_area"></div>
			<footer id="footer"> </footer>
		</main>
		<script src="systeme/js/variables.js"></script>
		<script src="systeme/js/md5.js"></script>
		<SCRIPT type="module" SRC="systeme/js/walk.js"></SCRIPT>
	</body>
</hml>