<?php
// Script php "fonction_compteur.php" www.yakafaire.eu au 30/06/2024 par le collectif 11880

$bdd_comptage = "compteur_walk";
// Fonction pour obtenir l'adresse ip du visiteur
function getIp(){
  if(!empty($_SERVER['HTTP_CLIENT_IP'])){
    $ip = $_SERVER['HTTP_CLIENT_IP'];
  }elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
  }else{
    $ip = $_SERVER['REMOTE_ADDR'];
  }
  return $ip;
}
$compteur_page = 1; // Nombre de visite du visiteur sur la page
// $date_vue =  date('d/m/Y à h:i:s'); 
$ip_visite = getIp(); // Ip du visiteur
$trouve = 0; 
$ajout = 0;
// Pour savoir si le visiteur à déja vue la page
$req = "SELECT * FROM $bdd_comptage";
$res = $laison->query($req);
while ($data = $res->fetch(PDO::FETCH_ASSOC)){
        $recherche_ip = $data['ip_visite']; // Compare Ip visiteur 
        $recherche_page = $data['page_vue']; //Compare nom de la page echo $page_vu;
        // Si le visiteur à déja vue la page
        if ($recherche_ip == $ip_visite and $recherche_page == $page_vue) {
                $recup_id = $data['Id']; // récupere Id du visiteur
                $ajout = $data['compteur_page'] +1; // Ajoute 1 à son compteur page
                $trouve = 1; // le visiteur à déja vue la page
        }
}
// Si trouve = "1" modification compteur_page du visiteur
if ($trouve == 1)  $req = " UPDATE `$bdd_comptage` SET compteur_page = $ajout WHERE `Id`= $recup_id";
// Si trouve = "0" Exécute une requête sur la base de données
if ($trouve == 0) $req = "INSERT INTO $bdd_comptage (page_vue, compteur_page, date_vue, ip_visite) VALUES ('$page_vue', '$compteur_page', '$date_vue', '$ip_visite')";
$laison->query($req);
// récupere le nombre de visite de la page
$req = "SELECT * FROM $bdd_comptage";
$res = $laison->query($req);
$nombre_visite = 0; // sans tenir compte de combien de fois le visiteur à vue la page
$nombre_total_visite = 0; // en tenant compte de combien de fois le visiteur à vue la page
while ($data = $res->fetch(PDO::FETCH_ASSOC) ){
        $recherche_page = $data['page_vue'];
        if ($recherche_page == $page_vue) {
                $nombre_visite = $nombre_visite +1;
                $nombre_total_visite = $nombre_total_visite + $data['compteur_page'];
        }
}
// affiche le résultat sur la page
// echo $nombre_total_visite.' visites'; 
//echo "<br>";
//echo $nombre_visite. ' visites'; 

?>