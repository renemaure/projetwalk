<?php
	include("base_donnees.php");
    $source="";
    $retour="";
    $timestamp_expire = time() + (3600*24*365); 
    $etape = "3";
    $nom_BDD = "img_avatar";
    $nomavat = $_COOKIE['nom'];
   
    if (!empty($_POST['avatar_png']) ) // Si la variable existe on lance le traitement du formulaire if (isset($_GET['util']))
    {       
        $avatar_png = $_POST["avatar_png"];
        $retour =  $avatar_png; // pour test

                /* procédure enregistrement base de donnée */
        /*         $requete = "INSERT INTO $nom_BDD (nom, mail, passe, identifiant, erg_date, etape) VALUES ('$nom_ins', '$email', '$pass', '', '$erg_date','1')";
                        $result_bdd = $laison->query($requete);      */


           /* procedure d'enregistrement de l'image de l'avataer */     
        $image = imagecreatefrompng("../../images/creation_avatar/".$avatar_png["1"]); 
        imagealphablending($image,true);
        imagesavealpha($image,TRUE);
        for ($av = 2; $av<=14; $av ++)
        {
            if ($avatar_png[$av]!="vide.png") {
                $source = imagecreatefrompng("../../images/creation_avatar/".$avatar_png[$av]); 
                ImageCopyResampled($image, $source, 0, 0, 0, 0, 110, 110, 110, 110);
            }
            $source="";
        }
        ImagePng($image, "../../images/avatar/".$_COOKIE['nom'].".png");
        setcookie('etap',$etape, $timestamp_expire, '/'); 
        
        $query = "UPDATE $nom_BDD SET  etape = '$etape' WHERE nom = '$nomavat'";
        $result_bdd = $laison->query($query);

    }
    echo json_encode($query);
?>