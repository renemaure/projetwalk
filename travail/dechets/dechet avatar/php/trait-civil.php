<?php 
/*création du 3 aout 2011
version 1.2.0 du 8 aout 2011 */

if (isset($_POST['nom_ins'])) // Si la variable existe on lance le traitement du formulaire
{
	include("base_donnees.php");
	
	$requete = "INSERT INTO avatar (nom, mail, passe, date) VALUES (";
	
	$email = $_POST['mail_ins'];
	
	if(preg_match('#^(([a-z0-9!\#$%&\\\'*+/=?^_`{|}~-]+\.?)*[a-z0-9!\#$%&\\\'*+/=?^_`{|}~-]+)@(([a-z0-9-_]+\.?)*[a-z0-9-_]+)\.[a-z]{2,}$#i',str_replace('&amp;','&',$email)))
		{
			$requete = $requete ." '". trim($_POST['nom_ins'])."' , '". trim($email)."' , '". md5($_POST['pass_ins'])."' , '". date("d m Y")."')"; 
			
			$locat =   $_POST['locat_ins'];

			mysql_query ($requete); 
						
			 mysql_close($laison); // Ne pas oublier de refermer la connexion !

			/* on ecrit un cookie nomé nom avec comme valeur le nom enregistre  */  
	
			$timestamp_expire = time() + (3600*24*10); // Le cookie expirera dans une heure
			setcookie('nom', trim($_POST['nom_ins']), $timestamp_expire, '/'); // On écrit un cookie en rajout '/ ' lisible par tout le site 
		}
		else $erreur="mail invalide";
		

}	

$envoi = "Location: ../".trim($locat);   

header($envoi);	

/*echo($requete);*/
		   

?>

