<?php
/* recuperation des positions des vaatars pour terminer un tour */
    $avatar =array();
	$indice =0;
	include("base_donnees.php");
	/* nouveau extraction de l'age du monde 22/06/2025 modif au 20/03/2026 nouveau intitulé pour l'age du monde*/
	$query1 = $laison->query("SELECT * FROM donnees_monde");
	$data1 = $query1->fetch(PDO::FETCH_ASSOC);
	$avatar["monde"] = $data1;
    $query = $laison->query("SELECT pos_dep, nom FROM avatar where etape = '3'"  );
	while ($data = $query->fetch(PDO::FETCH_ASSOC))
	{
		$indice++;
		if ($data != $_COOKIE["nom"]) {
			$avatar["inc".$indice] = $data;
			
		}
		
		// $avatar[$data["nom"]] = $data; // modif du 14/07/2025 objet avec les nom des avatar en indice
	}
	$avatar["inc"]=$indice;
	echo json_encode($avatar);
	$laison=NULL;
?>