<?php
/*$source="";
 
$image = imagecreatefrompng($lireinfo[10]);

imagealphablending($image,true);

imagesavealpha($image,TRUE);

for ($av = 11; $av<=14; $av ++)
	{
		$source = imagecreatefrompng($lireinfo[$av]); 

		ImageCopyResampled($image, $source, 0, 0, 0, 0, 110, 110, 110, 110);

		$source="";
	}

ImagePng($image, "images/avatar".$lireinfo[1].".png");*/
  ?>

<div class="clipzone">
  	<img id="image1" src="avatar/decor/image2.gif" />
</div>
 
 <p id="boutton"> <input type="button" value="avance" onclick ="avance();">&nbsp;&nbsp;<input type="button" value="RAZ" onclick="raz()">&nbsp;&nbsp;<input type="button" value="avance" onclick ="recule();"></p>
 
 
 <div id ="zone_img2">

 		<img src="images/avatar<?php echo($lireinfo[1]); ?>.png" border="0" width="110" height="110" class ='dessin'>
 		

</div>

