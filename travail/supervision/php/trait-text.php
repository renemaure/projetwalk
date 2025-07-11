<?php 

$nm_fich_txt = trim($_POST['retour']);

$lien = trim($_POST['lien']);

$trait_menu = trim($_POST['menu']);

 $envoi = "Location: ../tab-bord.php?util=".$lien."&cod=2&donn=".$nm_fich_txt."&men=".$trait_menu;	
 
if (isset($_POST['text'])) // Si la variable existe
{	
	$contenu = $_POST['text']; 
	
/*	$contenu = htmlentities($_POST['text'], ENT_QUOTES);*/
	
	$fichier ="../donnees/".$nm_fich_txt.".txt";
	
	$fd = fopen($fichier, "w");
			fputs($fd,$contenu);
			fclose( $fd );
} 

header($envoi);	
?>