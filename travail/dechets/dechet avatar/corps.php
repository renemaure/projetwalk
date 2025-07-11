<table width=80% height=80% border=1 summary="">
	<tr>
	<?php
		
	$repet = opendir($lien); // dossier objets	 
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
?>
<td><img src="<?php echo($lien.$taimg[$ph]); ?>" border="0" width="55" height="55" onclick="dessin('<?php echo($lien.$taimg[$ph]); ?>')" class="souris"></td>
<?php
	if ( $lig == 4)
	{ 
	echo ("</tr><tr>\n\r"); 
	$lig = 1;
	} 
	else  $lig++;
}
?>
</tr>
</table>