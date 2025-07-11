<?php
$laison = mysql_connect("localhost","root","");

mysql_select_db("collectif_swart");

$requete = "INSERT INTO avatar (nom, mail, passe, date) VALUES ('rene', 'ducon@fr', 'nimporte quoi', '25 03 2013')";

mysql_query ($requete); 

 mysql_close($laison); // Ne pas oublier de refermer la connexion !

?>