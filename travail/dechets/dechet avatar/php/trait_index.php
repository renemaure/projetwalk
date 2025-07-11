<?php /* Date de création: 07/03/2012 
rjout au 16 /03/2013 de variable defauts 
sur mon et mot de passe
*/

include("base_donnees.php");

/*$requete = "SELECT * FROM avatar";*/

$resultat = mysql_query ("SELECT * FROM avatar"); 

$locat =   $_POST['locat_ins'];

if (isset($_POST['nom_ins'])) // Si la variable existe on lance le traitement du formulaire
{
	$nom = $_POST['nom_ins'] ;

	$pass = md5($_POST['passe_ins']) ;  
	
if ($resultat === FALSE)   $defaut = "La conextion a échoué."; 
	
	else
	{
		while($data = mysql_fetch_assoc($resultat))
    	{
        	if ($pass == $data['passe'] and  $nom == $data['nom'] )
			{
				$timestamp_expire = time() + (3600*24*10); 
				setcookie('nom', $nom, $timestamp_expire, '/'); 
				break;
			}
		}
		 mysql_close($laison); // Ne pas oublier de refermer la connexion !
	}
}
else $defaut = "le nom est incorect";
	
$envoi = "Location: ../".trim($locat);  

header($envoi);
 ?>

