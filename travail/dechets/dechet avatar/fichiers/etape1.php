	<?php include("php/recup_donne_avatar.php"); ?>
	
	
	 <div id ="definition">
		 
	 <p class="t20 titre ">création de votre avatar</p>
	 
	
	 
	<p class="t40 f12">Chaque point rajouté dans une caractéristique cout deux points sur
	 les 5 points de départ, par contre baisser une caractéristique de 1 point rajoute un point aux points de départ.</p>
	 
	<p class="t60 f12"> <span class="gras">les points de Walk</span> : C'est le total des points des aptitudes plus le point restant s'il y en a un.</p>
	
</div>


<div id ="avatar">

 <p class ="t20 titre" >Votre avatar</p> 
 
<p class="t25 l20"> <span class="gras">nom : </span> <?php echo($lireinfo[1]); ?> </p>

<p class="t35 l20"><span class="gras">Le physique :</span>  <?php echo($lireinfo[4]); ?></p>

<p class="t45 l20"><span class="gras">L’intellect :</span> &nbsp;&nbsp;&nbsp;<?php echo($lireinfo[5]); ?></p>

<p class="t55 l20"><span class="gras">Le charisme : </span> <?php echo($lireinfo[6]); ?> </p>

<p class="t65 l20"><span class="gras">les points de Walk : </span>  <?php echo($lireinfo[7]); ?> </p>

<p class="t65 l20"><span class="gras">tirage</span>  <?php echo($lireinfo[8]); ?> </p>

<div id ="zone_img1"><?php if($lireinfo[3]=="") {  ?>
<p class="t10  f12 centrer"><a href="index.php?util=avatar/fichiers/dessin&cod=2">définissez<br> l'apparence <br>de votre <br>avatar</a></p>
<?php    }   ?>
</div> 

</div>	

<?php  if($lireinfo[8] !="ok") {?>

<form action="php/trait_tirage.php" method="post" id ="creation">

<p class="t20 l10">
<select name="phy" onchange="calcul(this)">
	<option label="1" value="1"> 1</option>
	<option label="1" value="2"> 2</option>
	<option label="1" selected value="3"> 3</option>
	<option label="1" value="4">4</option>
	<option label="1" value="5">5</option>
	<option label="1" value="6">6</option>
</select>

  <span class="gras"> Le physique : </span> la force, endurance.</p>
 
<p class="t50 l10"><select name="int" onchange="calcul(this)">
	<option label="2" value="1"> 1</option>
	<option label="2" value="2"> 2</option>
	<option label="2" selected value="3" > 3</option>
	<option label="2" value="4">4</option>
	<option label="2" value="5">5</option>
	<option label="2" value="6">6</option>
</select><span class="gras"> L’intellect : </span>l'intelligence, la beauté.</p>

<p class="t70 l10"><select name="cha" onchange="calcul(this)">
	<option label="3" value="1"> 1</option>
	<option label="3" value="2"> 2</option>
	<option label="3" selected value="3"> 3</option>
	<option label="3" value="4">4</option>
	<option label="3" value="5">5</option>
	<option label="3" value="6">6</option>
</select><span class="gras"> Le charisme : </span> la prise de décision, de convaincre.</p>

<input type="hidden" name="locat_ins" value ="index.php?util=avatar/fichiers/etape1&cod=2">

<input type="hidden" name="id_ins" value ="<?php echo($lireinfo[0]); ?>">

<input type="button" value="annuler" onclick="window.location.href='index.php?util=avatar/fichiers/etape1&cod=2'">

<input type="submit" value="envoi">


<p id="reste">Il vous reste 5 points de création</p>
</form>
<?php  }
else {  ?>

<div id ="creation"></div>

<?php  } ?>
 
 