<?php
	if ((!empty($_POST['rep_png']) || !isset($_POST['rep_png']))) {
		$rep_png = $_POST['rep_png'];
		$Depoints= "../../";
		$lien ="images/creation_avatar/$rep_png/";
		$repet = opendir($Depoints.$lien); // dossier objets	 
		$tabo = 1;
		$taimg[] = array();
		while ($fichier = readdir($repet))
		{	
			if ($fichier !="." and $fichier !="..")
			{
				$taimg[$tabo] = substr(trim($fichier),0,-4); 
				$tabo ++;
			}
		} 
		$taimg[0] = count($taimg); // nombre de photos presente dans la galerie
		echo json_encode($taimg);
	}
?>