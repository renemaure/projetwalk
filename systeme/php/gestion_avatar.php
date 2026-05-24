<?php
	$avatar =array();
	$indice =0;
	include("base_donnees.php");
	//$query = $laison->query("SELECT * FROM avatar where etape = '3'"  );
	$query = $laison->query("SELECT nom,erg_date,physq,intel,charis,vitalite,confiance,beaute,age,notoriete,pwalk,pos_dep,pos_reel,num_reponse,reponse_perso,memoire_jour, memoire_lieux,reste_pwalk,prescence,stock_objet FROM avatar where etape = '3'"  );
	while ($data = $query->fetch(PDO::FETCH_ASSOC))
	{
		$indice++;
		$avatar["inc".$indice] = $data;
		$avatar[$data["nom"]] = $data; // modif du 14/07/2025 objet avec les nom des avatars en indice
	}
	$avatar["inc"]=$indice;
	echo json_encode($avatar);
	$laison=NULL;
?>