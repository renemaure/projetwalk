<?php
/* enregistrement de la presence de l'avatar dans sa table perso nouv au 30/06/2024*/

    $date_vue =  date('Y-m-d'); // Date de la visite
	$heure_vue = date('H:i:s');  // heure visite
    $query = "SHOW TABLES FROM $config[database]";
    $runQuery = $laison->query($query);
    $tables = array();
    $index_tb = 0;
    if (isset($_POST['sortir_monde'])){

        $valid_date_entrer = $_COOKIE["date_entrer"];
        $valid_heure_entrer = $_COOKIE["heure_entrer"];
        $dateorigin = $valid_date_entrer . " " . $valid_heure_entrer;
        $dateactuel = $date_vue . " ". $heure_vue;
        $originalTime = new DateTimeImmutable($dateorigin);
        $targetTime = new DateTimeImmutable($dateactuel);
        $interval = $originalTime->diff($targetTime);
        $nbrminutes = $interval->format("%H:%I:%S");

        $query = "INSERT INTO $table_avat (date_entrer, heure_entrer,date_sortir,heure_sortir,temps_minute) VALUES (' $valid_date_entrer','$valid_heure_entrer','$date_vue','$heure_vue','$nbrminutes')";
        $date_vist_avat = $laison->query($query); 
    }else {
        while($row = $runQuery->fetch(PDO::FETCH_BOTH)){
            $tables[] = $row[0];
        }
        if(!in_array($table_avat, $tables)){            
                $query = "CREATE TABLE $table_avat (id int(11) NOT NULL AUTO_INCREMENT, date_entrer varchar(50) NOT NULL, heure_entrer varchar(50) NOT NULL, date_sortir varchar(50) NOT NULL, heure_sortir varchar(50) NOT NULL,temps_minute varchar(50) NOT NULL, PRIMARY KEY (`Id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8";
                $crattbl = $laison->query($query);       
        }
            //$query = "INSERT INTO $table_avat (date_entrer, heure_entrer,date_sortir,heure_sortir) VALUES ('$date_vue', '$heure_vue','','')";
            //$date_vist_avat = $laison->query($query); 
        setcookie('heure_entrer',$heure_vue, $timestamp_expire, '/'); 
		setcookie('date_entrer',$date_vue, $timestamp_expire, '/'); 
        
    }


/* calcul en jour de difference sur 2 date en version test*/
/*$origin = new DateTimeImmutable('2009-10-11');
$target = new DateTimeImmutable('2009-10-13');
$interval = $origin->diff($target);
echo $interval->format('%R%a days');

/* calcul heure */
/*$originalTime = new DateTimeImmutable("2021-10-30 09:00:00");
$targetTime = new DateTimeImmutable("2021-10-31 08:30:00");
$interval = $originalTime->diff($targetTime);
echo $interval->format("%H:%I:%S (Full days: %a)"), "\n";*/
?>