	<?php include("php/recup_donne_avatar.php"); ?>
	
<div id ="avatar">

 <p class ="t20 titre" >Votre avatar</p> 
 
<p class="t25 l20"> <span class="gras">nom : </span> <?php echo($lireinfo[1]); ?> </p>

<p class="t35 l20"><span class="gras">Le physique :</span>  <?php echo($lireinfo[4]); ?></p>

<p class="t45 l20"><span class="gras">L�intellect :</span> &nbsp;&nbsp;&nbsp;<?php echo($lireinfo[5]); ?></p>

<p class="t55 l20"><span class="gras">Le charisme : </span> <?php echo($lireinfo[6]); ?> </p>

<p class="t65 l20"><span class="gras">les points de Walk : </span>  <?php echo($lireinfo[7]); ?> </p>

<p class="t75 l20"><span class="gras">tirage : </span>  <?php echo(($lireinfo[2]>1) ? ("�fectu�") : ("non �fectu�")); ?> </p>

<p class="t85 l20"><span class="gras">image avatar : </span>  <?php echo(($lireinfo[2]>2) ? ("�fectu�") : ("non �fectu�"));  ?> </p>

<div id ="zone_img1"><?php if($lireinfo[2]==2) {  ?>
<p class="t10  f12 centrer"><a href="index.php?util=fichiers/dessin&cod=2">d�finissez<br> l'apparence <br>de votre <br>avatar</a></p>
<?php    }  
else if ($lireinfo[2]==3)
{ 		?>
 		<img src="images/avatar<?php echo($lireinfo[1]) ?>.png" border="0" width="110" height="110" class ='dessin'>
<?php  } ?>
</div> 

</div>	

 <div id ="definition">
 <?php if($lireinfo[2]==1) {  ?>
 	 <p class="t10 titre ">cr�ation de votre avatar</p>
	 	 
	<p class="t20 f12">Chaque point rajout� dans une caract�ristique cout deux points sur
	 les 5 points de d�part, par contre baisser une caract�ristique de 1 point rajoute un point aux points de d�part.</p>
	 
	<p class="t30 f12"> <span class="gras">les points de Walk</span> : C'est le total des points des aptitudes plus le point restant s'il y en a un.</p>
<?php  } ?>
  </div>
  
<?php if($lireinfo[2]==1) include("fichiers/tirage.php"); ?>