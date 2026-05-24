<?php
    include("base_donnees.php");
    $nom_BDD = "avatar";
    $avatar =array();
    if (isset($_POST['nomBout'])) {
        $nom_avatar = $_POST['nomavat'];
        $nom_boutique = $_POST['nomBout'];
        $query1 = "UPDATE $nom_BDD SET prescence = '$nom_boutique' WHERE nom = '$nom_avatar'";
    	$result_bdd = $laison->query($query1);
        $query = $laison->query("SELECT * FROM boutiques where nom_boutique = '$nom_boutique'");
        $data = $query->fetch(PDO::FETCH_ASSOC);
        echo json_encode($data);
    }
    if (isset($_POST['refobjet'])) {
        $ref_objet = $_POST['refobjet'];
        $query = $laison->query("SELECT * FROM objets where ref_objet = '$ref_objet'");
         $data = $query->fetch(PDO::FETCH_ASSOC);
        echo json_encode($data);
    }
    if (isset($_POST['nomboutique'])) {
        $nomboutique = $_POST['nomboutique'];
        $nomobjet = $_POST['nomobjet'];
        $query = $laison->query("SELECT * FROM objets where nom_boutique = '$nomboutique' AND rangee ='$nomobjet'");
        // $query = $laison->query("SELECT * FROM objets where nom_boutique = '$nomboutique'");
        while ($data = $query->fetch(PDO::FETCH_ASSOC))
	    {
    		$avatar[$data["ref_objet"]] = $data; // modif du 14/07/2025 objet avec les nom des avatars en indice
	    }
        echo json_encode($avatar);
        $laison=NULL;
    }
   

?>