<?php
	if ((!empty($_POST['rep_png']) || !isset($_POST['rep_png']))) {
		$indice = $_POST['rep_png'];
		$repjs="../systeme/donnees/walk.json";
		$json = file_get_contents($repjs);
		$des_avat = json_decode($json, true);
	}
	$rep_png = $des_avat["rept"]["ind". $indice];
	$html = "<h3 id=\"titre_zon_enreg\" class=\"titre_from\">".$des_avat["rept"]["txt". $indice].$des_avat["titre4"]."</h3><div=\"zonne_table\"><table id=\"tab_accesoire\">\r\n<tr>";
		$Depoints= "../";
		$lien ="images/creation_avatar/$rep_png/";
		$repet = opendir($Depoints.$lien); // dossier objets	 
		$tabo = 1;
		$taimg[] = array();
		while ($fichier = readdir($repet))
		{	
			if ($fichier !="." and $fichier !="..")
			{
				$taimg[$tabo] = trim($fichier);  
				$tabo ++;
			}
		} 
		$total = count($taimg); // nombre de photos presente dans la galerie
		$lig = 1;
		for ($ph = 1; $ph<=$total-1; $ph++)
		{ 
			// modif tableau habillement enlever le .png a la fin pour value que le nom de l'image le 28/09/2025
			$html .= "<td><img src=\"$lien$taimg[$ph]\" border=\"0\" width=\"70\" height=\"70\"  class=\"opt_img souris\" value = \"".substr($taimg[$ph],0,-4)."\"></td>";
			if ( $lig == 6)
			{ 
				$html .="</tr><tr>\n\r"; 
				$lig = 1;
			} 
			else  $lig++;
		}
		$html .= "</tr></table></div>";
		echo $html;

?>