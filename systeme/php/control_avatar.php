<?php
     include_once 'base_donnees.php';
     
     if (!empty($_POST['nom_avat_actif'])){
        $pos_avat = $_POST['pos_avat_actif'];
        $nom_avat = $_POST['nom_avat_actif'];
        $retour_age = $_POST['age_mond_rtr'];
        $notoriete = $_POST['notoriete'];
        $age = $_POST['modifage'];

      /* ajout de compteur pour la notorité au 21/09/2025 */
        $query1 = "UPDATE avatar SET pos_dep = '$pos_avat', notoriete = '$notoriete', age = '$age' WHERE nom = '$nom_avat'";
        $result_bdd = $laison->query($query1);
        $ans =  $retour_age["ans"];
        $mois =  $retour_age["mois"];
        $jours = $retour_age["jours"];
        $heures = $retour_age["heurs"];
        $minutes = $retour_age["minutes"];
        $secondes = $retour_age["secondes"];
           // echo "Modification de la fiche entrée matériel reussi";  nom , pos_dep
        $query2 = "UPDATE donnees_monde SET ans = '$ans',  mois = '$mois', jours = '$jours', heurs = '$heures', minutes = '$minutes', secondes = '$secondes' WHERE id = 1";
        $result_bdd = $laison->query($query2);
        $retour =  $retour_age["ans"];
        echo $query1;
     }

?>