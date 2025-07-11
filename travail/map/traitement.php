<?php

 if (isset($_GET['lat_perso']))
 {
 
  $enregistre[1] = date("H:i j m Y") ; 
  
  $enregistre[2] = "lat: ".$_GET['lat_perso'] ; 

  $enregistre[3] =  "long: ".$_GET['lon_perso'];
  
  $enregistre[4] = "presis: ". $_GET['pre_perso'];
  
  $enregistre[5] = "comment: ".$_GET['comment'] ;   
  
 	$retour ="\r\n";
  
	$contact = fopen("bin/comantaire.txt","a") ;	

	for($c = 1; $c<=5; $c++)	
	{
		fputs ($contact,trim($enregistre[$c]).$retour);	 
		
	}

	fclose($contact);
}
 ?>