<?php
	/* 
		création le 3/08/2011 
		on ecrit un cookie nom avec comme valeur le nom enregistré
		modif au 19/05/2024 : 
			Réecriture complete du code enfin!! 

	*/  
		
	setcookie('nom',$_POST['nom_log'], $timestamp_expire, '/'); 
	setcookie('etap',$data['etape'], $timestamp_expire, '/'); 
?>