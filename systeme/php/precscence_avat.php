<?php
/* enregistrement de la presence de l'avatar dans sa table perso nouv au 30/06/2024*/

    $query = "SHOW TABLES FROM $config[database]";
    $runQuery = $laison->query($query);
    $tables = array();
    $index_tb = 0;
    while($row = $runQuery->fetch(PDO::FETCH_BOTH)){
        $tables[] = $row[0];
    }
if ((isset($_COOKIE['nom']) and ($_COOKIE['etap']==3)) or($erreur["valid"]=='ok')){
    
    if(!in_array($table_avat, $tables)){
        $query = "CREATE TABLE $table_avat (id int(11) NOT NULL AUTO_INCREMENT, date_visite varchar(50) NOT NULL, PRIMARY KEY (`Id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;
        ";
        $crattbl = $laison->query($query);       
    }
    $query = "INSERT INTO $table_avat (date_visite) VALUES ('$date_vue')";
    $date_vist_avat = $laison->query($query); 
}
?>