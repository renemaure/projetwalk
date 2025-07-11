<div id ="avatar">

 <p class ="t10 l20" ><span class="gras">Nom :</span> <?php echo($lireinfo[1]); ?> </p> 
 
<p class="t25 l20"><span class="gras">Physique :</span>  <?php echo($lireinfo[4]); ?></p>

<p class="t35 l20"><span class="gras">Intellect :</span> &nbsp;&nbsp;&nbsp;<?php echo($lireinfo[5]); ?></p>

<p class="t45 l20"><span class="gras">Charisme : </span> <?php echo($lireinfo[6]); ?> </p>

<p class="t55 l20"><span class="gras">Points_Walk : </span>  <?php echo($lireinfo[7]); ?> </p>

<p class="t65 l20"><span class="gras">Tirage : </span>  <?php echo(($lireinfo[2]>1) ? ("effectu�") : ("non effectu�")); ?> </p>

<p class="t75 l20"><span class="gras">Image avatar : </span>  <?php echo(($lireinfo[2]>2) ? ("effectu�") : ("non effectu�"));  ?> </p>

	<div id ="img_avatar">
		<?php if($lireinfo[2]==2){  ?> 
	
		<p class="t10  f12 centrer"><a href="index.php?util=fichiers/dessin&cod=2">d�finissez<br> l'apparence <br>de votre <br>avatar</a> <?php echo($lireinfo[2]); ?> </p>
		<?php ; 
		} 

	if ($lireinfo[2]==3) {?> <img src="images/avatar<?php echo($lireinfo[1]) ?>.png" border="0" width="110" height="110" class ='dessin'>	<?php  ;}	?>
	</div> 
</div>	