<?php
    /* fichier permetant de recuperer les données général du site de la BDD et de les renvouyer sous forme de données json crée le 01/03/2026 */
    $don_bdd = array();
    include("base_donnees.php");

    /*extraction de l'age du monde 22/06/2025  et des données du site de la BDD*/
	$query1 = $laison->query("SELECT * FROM donnees_monde");
	$don_bdd = $query1->fetch(PDO::FETCH_ASSOC);
	
    echo json_encode($don_bdd);
	$laison=NULL;
?>