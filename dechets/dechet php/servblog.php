<?php

$indc = 0;

$coul = 0; 

$verif_coul=0;

$nbr_ph = 1;

$lg_lien = 0;

if (isset($_GET['lien'])) $lien = trim($_GET['lien']);  

if (isset($_GET['indc'])) $indc = trim($_GET['indc']);  

if (isset($_GET['coul'])) $coul = trim($_GET['coul']);  

echo("\n\r<table width=80% height=80% border=1 id ='tab_objet'><tr>\n\r");
	
$taimg = glob("../".$lien."*.png");

$total = count($taimg);

$lg_lien = (strLen($lien) +3);

if($coul != 0) 
{
	$list_coul = file("../avatar/couleur/couleur".$coul.".txt");

	$nbr_ph = count($list_coul);
}

$lig = 1;

for ($ph = 1; $ph<=$total-1; $ph = $ph + $nbr_ph)
	{ 
		$taimg[$ph] =  substr($taimg[$ph],$lg_lien);
		?>
		<td><img src="<?php echo($lien.$taimg[$ph]); ?>" border="0" width="50" height="50" onclick="dessin('<?php echo($lien."',".$indc.",". substr($taimg[$ph],0,5).",".$coul); ?>)" class="souris"></td>
		<?php
		if ( $lig == 8)
			{ 
				echo ("</tr><tr>\n\r"); 
				$lig = 1;
			} 
		else  $lig++;
	}
echo("</tr></table>");

if($coul != 0)
	{
	/*$lig = 1;*/
	
	echo("<table border=0 id ='couleur'><tr>");
	
	for ($xcoul = 0; $xcoul<=count($list_coul)-1; $xcoul++)
		{ 
			?><td class ="carre" style="background: <?php echo("$list_coul[$xcoul]"); ?> " onclick="deplcoul(<?php echo($xcoul-1); ?>)"></td>	<?php
		}
	echo("</tr></table>");
 	}
  ?>