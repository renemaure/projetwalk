
<h2>Création de l'avatar</h2>


<div id ="zone_img"></div>


<div id ="navigation">
<ul>
	<li onclick="ajaxSynchrone('dessin/corps/&indc=0')">Le corps</li>
	<li onclick="ajaxSynchrone('dessin/tetes/&indc=1')">La tête</li>
	<li onclick="ajaxSynchrone('dessin/bouches/&indc=2')">La bouche</li>
	<li onclick="ajaxSynchrone('dessin/yeux/&indc=3')">Les yeux</li>
	<li onclick="ajaxSynchrone('dessin/cheveux/&indc=4&coul=1')">Les cheveux</li>
	<li onclick="ajaxSynchrone('dessin/fonds/&indc=5')">Les fonds </li>
	<li></li>
	<li></li>
	<li></li>
</ul>
</div>

		
<div id="blog">  <!-- zonne du blog -->
		
		<script> ajaxSynchrone('dessin/corps/&indc=0') </script>
		
</div>
		
<div id ="couleur">
<table border=0 summary="">
	<tr>
		<td class ="carre" style="background:#00CC00" onclick="deplcoul(0)"></td>
		<td class ="carre" style="background:#61C1BF" onclick="deplcoul(1)"></td>
		<td class ="carre" style="background:#99CCFF" onclick="deplcoul(2)"></td>
		<td class ="carre" style="background:#267DC4" onclick="deplcoul(3)"></td>
		<td class ="carre" style="background:#494949" onclick="deplcoul(4)"></td>
	</tr>
	<tr>
		<td class ="carre" style="background:#660000" onclick="deplcoul(5)"></td>
		<td class ="carre" style="background:#990000" onclick="deplcoul(6)"></td>
		<td class ="carre" style="background:#999900" onclick="deplcoul(7)"></td>
		<td class ="carre" style="background:#B7852C" onclick="deplcoul(8)"></td>
		<td class ="carre" style="background:#CC3300" onclick="deplcoul(9)"></td>
	</tr>
	<tr>
		<td class ="carre" style="background:#CCAA87" onclick="deplcoul(10)"></td>
		<td class ="carre" style="background:#cccccc" onclick="deplcoul(11)"></td>
		<td class ="carre" style="background:#ccff99" onclick="deplcoul(12)"></td>
		<td class ="carre" style="background:#FF0000" onclick="deplcoul(13)"></td>
		<td class ="carre" style="background:#FF3399" onclick="deplcoul(14)"></td>
	</tr>
	<tr>
		<td class ="carre" style="background:#ff6600" onclick="deplcoul(15)"></td>
		<td class ="carre" style="background:#FFB3DD" onclick="deplcoul(16)"></td>
		<td class ="carre" style="background:#FFCC00" onclick="deplcoul(17)"></td>
		<td class ="carre" style="background:#FFFF99" onclick="deplcoul(18)"></td>
		<td class ="carre" style="background:#FFFFFF" onclick="deplcoul(19)"></td>
	</tr>
</table>

</div>
		