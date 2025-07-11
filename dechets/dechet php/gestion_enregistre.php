<?php 
/*
création le 3/08/2011 

enregistrement des données personel dans le monde
version 2.0.0 du 19/05/2024 
mofif au 19/05/2024
	réecriture complet du code (fichier était à l'abandon depuis de nombreuses années)


/*enregistrement sur la BDD*/
$nom_BDD = "avatar";
// $locat =   trim($_POST['locat_ins']);
include("base_donnees.php");
$verifnom = "ok";

/*inscriptio sur la BDD*/
if (isset($_POST['nom_ins'])) 
{
	$nom =  trim($_POST['nom_ins']);
	 /*requette sur les noms pour eviter les doublons*/
	$result_compt = $laison->query("SELECT nom , passe , etape FROM avatar");
		while ($data = $result_compt->fetch(PDO::FETCH_ASSOC))
    	{
        	if ($nom == $data['nom'] )
			{
				$verifnom = "mauvais";
				break;
			}
		}
	if ($verifnom == "ok")
	{	
		$email =  trim($_POST['mail_ins']);
		$erg_date = date("d m Y");
		$pass = md5($_POST['pass_ins']); // a remettre dans le javascript
		if(preg_match('#^(([a-z0-9!\#$%&\\\'*+/=?^_`{|}~-]+\.?)*[a-z0-9!\#$%&\\\'*+/=?^_`{|}~-]+)@(([a-z0-9-_]+\.?)*[a-z0-9-_]+)\.[a-z]{2,}$#i',str_replace('&amp;','&',$email)))
		{
			$requete = "INSERT INTO $nom_BDD (nom, mail, passe, erg_date) VALUES ('$nom', '$email', '$pass', '$erg_date')";
			$result_bdd = $laison->query($requete); 
			include ("enregistre_cookie.php");
		}
		else  $locat .= "mail invalide";
	}
	else $locat .= "ce nom est déjà prit";
}	
elseif (isset($_POST['nouv_ins'])) $locat .= "remplisez les champs et validez" ;

// Ne pas oublier de refermer la connexion  !

?>