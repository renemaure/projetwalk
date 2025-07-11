<?php
/* fichier générique collectif 11880 gérant la connextion a la base de donnée
version3.0.0  au 11 aout 2015
passage en PDO orienté objet et ajout  traitement erreur!

on garde la même variable $laison création de deux comptes: local et internet*/

/* tableau en local */
$config = array(
	'host'      => 'localhost',
	'username'  => 'root',
	'passeword' => '',
	'database'  => 'the_walk'
);

/* tableau sur intenet */
/* 	$config = array(
	
); */
try{
	$laison = new PDO('mysql:dbname='.$config['database'].';host='.$config['host'].";charset=utf8",$config['username'],$config['passeword']);	
} 
catch(PDOException $exception){
	 echo($exception->getMessage());  //pas diffusion sur internet qu'en mode local!'
exit('erreur de conexion a la PDO');
}
?>