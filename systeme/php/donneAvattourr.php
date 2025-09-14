<?php
/* recuperation des positions des vaatars pour terminer un tour */
    $avatar =array();
	$indice =0;
	include("base_donnees.php");

    $query = $laison->query("SELECT pos_dep, nom FROM avatar where etape = '3'"  );
	while ($data = $query->fetch(PDO::FETCH_ASSOC))
	{
		$indice++;
		$avatar["inc".$indice] = $data;
		// $avatar[$data["nom"]] = $data; // modif du 14/07/2025 objet avec les nom des avatar en indice
	}
	$avatar["inc"]=$indice;
	echo json_encode($avatar);
	$laison=NULL;
?>