<?php  
include("base_donnees.php");

$pwalk = 0;

$physiq = $_POST['phy'];

$intellec = $_POST['int'];

$charism = $_POST['cha'];

$pwalk = $charism  + $intellec + $physiq;

$requete = "UPDATE avatar SET physique = ".$physiq." , intellect =".$intellec." , charisme = ".$charism." , final = 2 , pwalk = ".$pwalk." WHERE ID=".$_POST['id_ins'];

mysql_query ($requete); 
						
mysql_close($laison); // Ne pas oublier de refermer la connexion  !
 
$locat =   $_POST['locat_ins'];

$envoi = "Location: ../".trim($locat);   

/*echo($requete);*/

header($envoi);

?>