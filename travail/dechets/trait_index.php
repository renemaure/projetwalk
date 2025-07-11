<?php /* Date de création: 07/03/2012 
rjout au 16 /03/2013 de variable defauts 
sur mon et mot de passe
*/

/*$laison = mysql_connect("localhost","root","");*/ /*en local*/

$laison = mysql_connect("sql2","collectif11880","renemaure");  /*sur le web*/

mysql_select_db("collectif11880_swart");

$requete = "SELECT * FROM avatar";

$resultat = mysql_query ($requete); 

$locat =   $_POST['locat_ins'];

if (isset($_POST['nom_ins'])) // Si la variable existe on lance le traitement du formulaire
{
	$nom = $_POST['nom_ins'] ;

	$pass = md5($_POST['passe_ins']) ;  
	
if ($resultat === FALSE)   echo "La requête SELECT a échoué."; 
	
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
	}
}

 mysql_close($laison); // Ne pas oublier de refermer la connexion !
	
$envoi = "Location: ../".trim($locat);  

header($envoi);
 ?>

