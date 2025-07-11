<?php
/*---------------------------------------------------------------*/
/*
    Titre : Vérifie l'existence d'une table                                                                              
                                                                                                                          
    URL   : https://phpsources.net/code_s.php?id=1115
    Date édition     : 23 Sept 2019                                                                                       
    Date mise à jour : 23 Sept 2019                                                                                      
    Rapport de la maj:                                                                                                    
    - fonctionnement du code vérifié                                                                                    
*/
/*---------------------------------------------------------------*/

    function table_ok($db, $table, $conn){
        $query = "SHOW TABLES FROM $db";
        // echo $query;
        $runQuery = $conn->query($query);
        
        $tables = array();
        $index_tb = 0;
        while($row = $runQuery->fetch(PDO::FETCH_BOTH)){
            $tables[] = $row[0];
           /*  echo $tables[$index_tb]." / ";
            $index_tb ++; */
        }
        echo $tables[3];
        if(!in_array($table, $tables)){
            return false;
          
            
        }
    }
?>