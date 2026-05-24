<?php
     include_once 'base_donnees.php';
   /*
      enregistrement des données de l'avatar actif en fin de tour de jeu
      ajout au 21/09/2025  d'un enregistrement pour la notorité 
      modif au 15/03/2026 decode le json $retour_age en tableau associatif car envoyer en fetch
      modif au 26/03/2026 supression de la variable $memoire et modification de la requette
      sql en suprimant l'enregistrement memoire car traitée dans un autre code
   */
     if (!empty($_POST['nom_avat_actif'])){
        $pos_avat = $_POST['pos_avat_actif'];
        $nom_avat = $_POST['nom_avat_actif'];
        $prescence = $_POST['prescence'];
        $retour_age = (json_decode($_POST['age_mond_rtr'], true)); 
        $notoriete = $_POST['notoriete'];
        $age = $_POST['modifage'];
        $reponse  = $_POST['reponse'];
        $memoireLieux = $_POST['memlieux'];
        $positionReel = $_POST['positionReel'];
         $query1 = "UPDATE avatar SET pos_dep = '$pos_avat', notoriete = '$notoriete', age = '$age', num_reponse ='$reponse', memoire_lieux ='$memoireLieux', pos_reel='$positionReel', prescence='$prescence' WHERE nom = '$nom_avat'";
        $result_bdd = $laison->query($query1);
        $ans =  $retour_age["ans"];
        $mois =  $retour_age["mois"];
        $jours = $retour_age["jours"];
        $heures = $retour_age["heurs"];
        $minutes = $retour_age["minutes"];
        $secondes = $retour_age["secondes"];
        $tempsorigin = $retour_age["temp_origin"];
           // echo "Modification de la fiche entrée matériel reussi";  nom , pos_dep
        $query2 = "UPDATE donnees_monde SET ans = '$ans',  mois = '$mois', jours = '$jours', heurs = '$heures', minutes = '$minutes', secondes = '$secondes', temp_origin ='$tempsorigin' WHERE id = 1";
        $result_bdd = $laison->query($query2);
        $retour =  $retour_age["ans"];
        echo $query1;
     }
     /* 
      nouveau code le 26/03/2026 permet d'enregistrer les interactions en avatras pour le moment
      la mémoire
     */
     if (!empty($_POST['nom_avat_nj'])) {
         $nom_avat = $_POST['nom_avat_act'];
         $memoire_actif = $_POST['memoire'];

         $nom_avat_nj = $_POST['nom_avat_nj'];
         $memoire_nj = $_POST['mem_avt_nj'];

         $query1 = "UPDATE avatar SET memoire_jour ='$memoire_actif' WHERE nom = '$nom_avat'";
         $result_bdd = $laison->query($query1);

         $query2 = "UPDATE avatar SET memoire_jour ='$memoire_nj' WHERE nom = '$nom_avat_nj'";
         $result_bdd1 = $laison->query($query2);
         echo $query1;
     }

?>