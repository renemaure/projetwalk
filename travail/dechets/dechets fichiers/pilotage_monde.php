

<?php if($lireinfo[2]==3) :?>
<p id="boutton"> avancer l'avatar de <select name="deplacement" size="<?php echo($lireinfo[3]) ?>">
	<option value="1"> 1 case</option>
	<?php 	if($lireinfo[3] == 2) : ?>
	<option value="2"> 2 cases</option>
	
	<?php endif ;?>
	
</select>&nbsp;&nbsp; <input type="button" value="à droite" onclick ="avance(<?php/* echo($avt_valeur);*/ ?>);">&nbsp;ou à&nbsp;<input type="button" value="à gauche" onclick ="recule(<?php /*echo($avt_valeur);*/ ?>);">
<br>
<input type="button" value="quiter le monde du Walk">
</p>
<?php  endif;  ?>

