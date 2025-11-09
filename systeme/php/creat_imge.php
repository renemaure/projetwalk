<?php
	include("base_donnees.php");
    $source="";
    $retour="";
    $timestamp_expire = time() + (3600*24*365); 
    $etape = "3";
    $nom_BDD = "img_avatar";
    $nomavat = $_COOKIE['nom'];
    $repjs="../donnees/walk.json";
	$json = file_get_contents($repjs);
	$des_avat = json_decode($json, true);
   
    if (!empty($_POST['avatar_png']) ) // Si la variable existe on lance le traitement du formulaire if (isset($_GET['util']))
    {       
        $avatar_png = $_POST["avatar_png"];
        $retour =  $avatar_png; // pour test

                /* procédure enregistrement base de donnée */
            $requete = "INSERT INTO $nom_BDD (nom, corps, tete, bouche, yeux, cheveux, lunette, pantalon, chemise, robe, chaussure) VALUES ( '$avatar_png[0]', '$avatar_png[1]', '$avatar_png[2]','$avatar_png[3]','$avatar_png[4]','$avatar_png[5]','$avatar_png[6]','$avatar_png[7]','$avatar_png[8]','$avatar_png[9]','$avatar_png[10]')";
				// $erreur["message"] = $requete;
				$result_bdd = $laison->query($requete); 


           /* procedure d'enregistrement de l'image de l'avataer */     
        $image = imagecreatefrompng("../../images/creation_avatar/".$des_avat["rept"]["ind1"]."/".$avatar_png["1"].".png"); 
        imagealphablending($image,true);
        imagesavealpha($image,TRUE);
        for ($av = 2; $av<=10; $av ++)
        {
            if ($avatar_png[$av]!="vide") {
                $source = imagecreatefrompng("../../images/creation_avatar/".$des_avat["rept"]["ind".$av]."/".$avatar_png[$av].".png"); 
                ImageCopyResampled($image, $source, 0, 0, 0, 0, 110, 110, 110, 110);
            }
            $source="";
        }
        ImagePng($image, "../../images/avatar/".$_COOKIE['nom'].".png");
        setcookie('etap',$etape, $timestamp_expire, '/'); 

        $nom_BDD = "avatar";
        
        $query = "UPDATE $nom_BDD SET  etape = '$etape' WHERE nom = '$nomavat'";
        $result_bdd = $laison->query($query);

    }
    echo json_encode($requete);
?>