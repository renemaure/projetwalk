<?php
	/* 
	Date de création: 08/11/2013 
	modif au 19/05/2024:
		ajout de l'appel au fichier 'enregistre_cookie.php' en phase test
		code pour l'enregistrement nouveau avatar réecrit entièrement a parti de l'ancien fichier civilité.php

	*/
	include("base_donnees.php");
	$repjs="../donnees/texterreur.json";
	$json = file_get_contents($repjs);
	$liens = json_decode($json, true);
	$erreur = array("erreur"=>"","valid"=>"","message"=>"");
	$timestamp_expire = time() + (3600*24*365); 
	// $verifnom = "ok";
	// $nom_BDD = "avatar";
	// $etape = "1";
	// $valide = "mauvais";
	$date_vue =  date('d/m/Y à H:i:s'); // Date de la visite
	/* code pour se logger */

	if (isset($_POST['nom_log']))
	{
		$result_compt = $laison->query("SELECT nom , passe , etape FROM avatar");
		while ($data = $result_compt->fetch(PDO::FETCH_ASSOC))
		{ 
			$pass_log = htmlspecialchars($_POST['pass_log']);
			$nom_log = htmlspecialchars($_POST['nom_log']);
        	
			if ($pass_log == $data['passe'] and  $nom_log == $data['nom'])
        	{
				setcookie('nom',$nom_log, $timestamp_expire, '/'); 
				setcookie('etap',$data['etape'], $timestamp_expire, '/'); 
				$erreur["valid"]='ok';
				$table_avat = $nom_log."_visite";
				include("precscence_avat.php");
				break;
			}
		}
		if($erreur["valid"]!='ok')
		{
			$erreur["erreur"] = $liens['logger_err'];
		} 
	}

	if (isset($_POST['nom_ins'])) 
	{
		$nom_ins =  htmlspecialchars($_POST['nom_ins']);
		$erreur["message"] ="nombre de lettre dans le nom : ". strlen($nom_ins);

		/* modif du 14/07/2025 ajout comptage des lettres du nom doit etre compris entre 5 et 15 */
		if (strlen($nom_ins) <5 || strlen($nom_ins)>15){
			$verifnom = "mauvais";
			$locat = "nom trop petit ou trop long";
			$erreur["message"] = $locat ."et nombre de lettre dans le nom : ". strlen($nom_ins);
		}
		
		if ($verifnom == "ok") {
			$result_compt = $laison->query("SELECT nom , passe , etape FROM avatar");
			while ($data = $result_compt->fetch(PDO::FETCH_ASSOC))
			{
				if ($nom_ins == $data['nom'] )
				{
					$verifnom = "mauvais";
					$locat = "nom déjà utilisé";
					$erreur["message"] = $locat;
					break;
				}
			}
		}
		
		if ($verifnom == "ok")
		{	
			$erg_date = date("d/m/Y");
			$email = htmlspecialchars($_POST['mail_ins']);
			$pass = htmlspecialchars($_POST['pass_ins']);
			if(preg_match('#^(([a-z0-9!\#$%&\\\'*+/=?^_`{|}~-]+\.?)*[a-z0-9!\#$%&\\\'*+/=?^_`{|}~-]+)@(([a-z0-9-_]+\.?)*[a-z0-9-_]+)\.[a-z]{2,}$#i',str_replace('&amp;','&',$email)))
			{
				// $locat = "ok";
				$requete = "INSERT INTO $nom_BDD (nom, mail, passe, identifiant, erg_date, etape) VALUES ('$nom_ins', '$email', '$pass', '', '$erg_date','1')";
				$result_bdd = $laison->query($requete); 
				// include ("enregistre_cookie.php");
				setcookie('nom',$nom_ins, $timestamp_expire, '/'); 
				setcookie('etap',$etape, $timestamp_expire, '/'); 
				$erreur["valid"] = "ok";
			}
			else  $locat = "mail invalide";
			
		}
		$erreur["erreur"] = $locat;
		$erreur["valid"] = "mauvais";
	}

	/* enregistremet du tirage */
	if (isset($_POST['charisme'])) {
		// $point_restant = htmlspecialchars($_POST["point_restant"]);
		$charisme = $_POST["charisme"];
		$intellligence = $_POST["intellligence"];
		$physique = $_POST["physique"];
		$nom_avatar = $_POST["nom_avatar"];
		$points_walk = $_POST["pointk"];
		$beaute = $_POST["beaute"];
		$vitalite = $_POST["vitalite"];
		$confiance = $_POST["confiance"];
		$notoriete = $_POST["notoriete"];
		$age = $_POST["age"];
		$etape = 2;
		/* CHAMP DE LA bdd /  */
		$query = "UPDATE $nom_BDD SET physq = '$physique', intel = '$intellligence', charis = '$charisme', pwalk = '$points_walk', etape = '$etape' , age = '$age', beaute = '$beaute', vitalite = '$vitalite', confiance = '$confiance', notoriete = '$notoriete', WHERE nom = '$nom_avatar'";
    	$result_bdd = $laison->query($query);
		setcookie('etap',$etape, $timestamp_expire, '/'); 
		$erreur["etap"] = $query;
	}


	if (isset($_POST['sortir_monde'])) {
		// Commence par supprimer la valeur du cookie
		unset($_COOKIE['nom']);
		unset($_COOKIE['etap']);
		// Puis désactive le cookie en lui fixant 
		// une date d'expiration dans le passé
		setcookie('nom', '', time() - 4200, '/');
		setcookie('etap', '', time() - 4200, '/');
	}
	echo json_encode($erreur);
	$laison=NULL;	
?>