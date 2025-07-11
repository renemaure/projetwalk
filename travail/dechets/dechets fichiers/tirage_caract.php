<form action="php/trait_tirage.php" method="post" id ="creation" name="tirage">

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

<input type="hidden" name="locat_ins" value ="index.php?util=fichiers/etape1&cod=2">

<input type="hidden" name="id_ins" value ="<?php echo($lireinfo[0]); ?>">

<input type="button" value="annuler" onclick="window.location.href='index.php?util=fichiers/etape1&cod=2'">

<input type="submit" value="envoi">


<p id="reste">Il vous reste 5 points de création</p>
</form>