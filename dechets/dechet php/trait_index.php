<?php /* Date de création: 07/03/2012 
rjout au 16 /03/2013 de variable defauts 
sur mon et mot de passe
*/

$locat =   $_POST['locat_ins'];

if (isset($_POST['nom_ins'])) // Si la variable existe on lance le traitement du formulaire
{
	include("base_donnees.php");

	$resultat = mysql_query ("SELECT nom , passe FROM avatar"); 
	
	$nom = $_POST['nom_ins'] ;

	$pass = md5($_POST['passe_ins']) ;  
	
		while($data = mysql_fetch_assoc($resultat))
    	{
        	if ($pass == $data['passe'] and  $nom == $data['nom'] )
			{
				include ("enregistre_cookie.php");
				
				break;
			}
		}
		 mysql_close($laison); // Ne pas oublier de refermer la connexion !
}
	
$envoi = "Location: ../".trim($locat);  

header($envoi);
 ?>

