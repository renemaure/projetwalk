<?php

$resultat_img = mysql_query ("SELECT * FROM img_avatar"); 
	
	while($dataimg = mysql_fetch_assoc($resultat_img))
		{
        	if ($dataimg["nom"] == $_COOKIE['nom'])
			{
				$lireinfo[9] =  $dataimg["nom"];
				$lireinfo[10] = "avatar/corps/".$dataimg["corps"].".png";
				$lireinfo[11] = "avatar/tetes/".$dataimg["tete"].".png";
				$lireinfo[12] = "avatar/bouches/".$dataimg["bouche"].".png";
				$lireinfo[13] = "avatar/yeux/".$dataimg["yeux"].".png";
				$lireinfo[14] = "avatar/cheveux/".$dataimg["cheveux"].".png";
				$lireinfo[15] = "avatar/pantalon/".$dataimg["pantalon"].".png";
				break;
			}
		}	
		
?>