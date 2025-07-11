<?php

$lien = "dessin/corps_tete/";

$indc = 0;

$coul = 0; 

if (isset($_GET['lien'])) $lien = trim($_GET['lien']);  

if (isset($_GET['indc'])) $indc = trim($_GET['indc']);  

if (isset($_GET['coul'])) $coul = trim($_GET['coul']);  

?>

<table width=80% height=80% border=1 summary="" id ="tab_objet" >
	<tr>
	<?php
	
	
	
	$repet = opendir($lien);	 
	
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

if($coul == 1)

	{
		for ($ph = 1; $ph<=$total-1; $ph = $ph +20)
		{ 
			?>
			<td><img src="<?php echo($lien.$taimg[$ph]); ?>" border="0" width="50" height="50" onclick="dessin('<?php echo($lien."',".$indc.", ". substr($taimg[$ph],0,5)); ?>,1)" class="souris"></td>
			<?php
				if ( $lig == 6)
				{ 
					echo ("</tr><tr>\n\r"); 
					$lig = 1;
				} 
				else  $lig++;
		}
	}
else
	{
		for ($ph = 1; $ph<=$total-1; $ph++)
{ 
?>
<td><img src="<?php echo($lien.$taimg[$ph]); ?>" border="0" width="50" height="50" onclick="dessin('<?php echo($lien."',".$indc.", ". substr($taimg[$ph],0,5)); ?>,0)" class="souris"></td>
<?php
	if ( $lig == 6)
	{ 
	echo ("</tr><tr>\n\r"); 
	$lig = 1;
	} 
	else  $lig++;
}

}
?>
</tr>
</table>