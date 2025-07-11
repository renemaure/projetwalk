<?php
/* 
	on ecrit un cookie nomé nom avec comme valeur le nom enregistre 
	modif au 11 avril 2013 : rajout d'un cookie passe pour enregistrer le mot de passe
	codé en MD5 

*/  
	
			$timestamp_expire = time() + (3600*24); // Le cookie expirera dans 24 heures
			setcookie('nom',$nom, $timestamp_expire, '/'); // On écrit un cookie en rajout '/ ' lisible par tout le site 
			setcookie('passe',$pass, $timestamp_expire, '/'); // On écrit un cookie en rajout '/ ' lisible par tout le site 
?>