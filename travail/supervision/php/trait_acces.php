<?php 

  $envoi = "Location: index.php";	
 
if (isset($_POST['acces'])) // Si la variable existe
{	
	$recupcode = $_POST['acces']; 
	
	if ($recupcode == trim($tabdiver[0])) // info connection fabrzio
	{
	
	 $envoi = "Location: supervision.php";	
	}
	
	if ($recupcode == trim($tabdiver[1])) // info connection pascal
	{
	
	 $envoi = "Location: supervision.php";	
	}
	header($envoi);		
} 													

?>