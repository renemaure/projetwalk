<div id ="control_monde">

<SCRIPT>oneplacement()</SCRIPT>	

<ul id="list_ctrl">
	<li onclick="montre('list_ctrl' , 'boutton1');">faire évoluer son avatar</li>
	<li onclick="window.location.href='index.php?util=fichiers/dessin&cod=2&valid=1'">modifier son apparence</li>
	<li></li>
	<li></li>
</ul>
	
<div id="boutton1">

 avancer l'avatar <input type="button" value="à gauche" onclick ="recule();">&nbsp;ou à &nbsp;
						<input type="button" value="à droite" onclick ="avance();">&nbsp; 
						
						<input type="button" value="retour menu" onclick ="montre('boutton1' , 'list_ctrl');">
</div>
						
<input type="button" value="quiter le monde du Walk" class="ab v120 l360">						
						

</div>

<!--  de <select name="deplacement" size="<?php /*echo($lireinfo[3]) */?>">
						<option value="1"> 1 case</option>
						<?php 	if($lireinfo[3] == 2) ?><option value="2"> 2 cases</option><?php ;?>
	
						</select>&nbsp;&nbsp;  -->