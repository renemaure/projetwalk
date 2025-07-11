<?php /* Date de création: 07/03/2012 
rjout au 16 /03/2013 de variable defauts 
sur mon et mot de passe
*/



$mauvai = "";

$locat =   $_POST['locat_ins'];

if (isset($_POST['nom_ins'])) // Si la variable existe on lance le traitement du formulaire
{
	$nom = $_POST['nom_ins'] ;

	$pass = md5($_POST['passe_ins']) ;  /* md5($_POST['passe_ins']);*/
	
	
	
	$filename = "../donnes/".$nom.".ins";  
	
	if (file_exists($filename)) //test si le fichier existe
	{
		$myfiche = file($filename);
	
		if ($pass == trim($myfiche[9]) )
		{
			/* on ecrit un cookie nomé nom avec comme valeur le nom enregistre  */  
			$timestamp_expire = time() + (3600*24*10); // Le cookie expirera dans 10 jours
			setcookie('nom', $nom, $timestamp_expire, '/'); // On écrit un cookie en rajout '/ ' lisible par tout le site 
		}
		
		else $mauvai = "?def=le Votre mot de passe est invalide";
	}
	
	else $mauvai = "?def=le nom de votre avatar est invalide ou inconnu";
}


$envoi = "Location: ../".trim($locat).$mauvai;  

header($envoi);	
 ?>

