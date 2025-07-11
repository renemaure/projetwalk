<?php include("php/creation_monde.php"); ?>

<div id="image1">
	<img  src="avatar/decor/image2.gif" />
	
	<?php
	foreach ($avatar_monde as $avt_tab => $avt_valeur)
{
	?>
 	<img src="images/avatar<?php echo($avt_tab); ?>.png" border="0" width="110" height="110" id ="zone_img<?php echo($avt_valeur);  ?>" >  
	<?php } ?>
</div>