<div id="monde">
	<img id="img-monde" src="avatar/decor/decor1.jpg">
	<p id="boutton">
		<input type="button" value="recul" onclick ="recule()">&nbsp;&nbsp;
		<input type="button" value="RAZ" onclick="raz()">&nbsp;&nbsp;
		<input type="button" value="avance" onclick ="avance()">
	</p>
</div>
<div id ="interface">
	
</div>
<?php
	/*if($lireinfo[2]!=2)*/ /*2021 erreur possible*/
	if($lireinfo[2]==2)
		{
			echo"<div id=\"monde\">\r\n";
			echo"<img src=\"avatar/decor/decor1.jpg\" />\r\n";
			$toto_avatr = 0;
			$resultat = mysql_query ("SELECT nom , id FROM avatar where final=3"); // recupere les nons et les ID des avatars en final = 3
			while($data = mysql_fetch_assoc($resultat))	$avatar_monde[$data["id"]] = $data["nom"]; //on les range dans un tableau associatif
			$data = mysql_fetch_assoc( mysql_query ("SELECT * FROM univers_avatar WHERE structure_zonne = 'placement'"));
			for($aaf=1; $aaf<=25; $aaf++)
			{	
				if ($data["c".$aaf]!=0)
				{
					echo("<div id ='zone_img".$data["c".$aaf]."'><img src='images/avatar".$avatar_monde[$aaf].".png' border='0' width='110' height='110'><span> Bonjour, Je m'appele ". $avatar_monde[$aaf]."</span></div>\r\n");
					$toto_avatr++;
					$aff_nom[$toto_avatr]= $avatar_monde[$aaf];
				}
			}	
			?> 
			</div>
			<div id ="interface">
			<?php
			if($lireinfo[2]==0) include("textes/texte03.php"); /*ne devrait pas etre pour 0 2021*/
 			if($lireinfo[2]==1) include("textes/texte02.html");
 			?>
			</div>
			<?php
		}
	if($lireinfo[2]==3)
		{		?>
			<p id="boutton">
				<input type="button" value="recul" onclick ="recule()">&nbsp;&nbsp;
				<input type="button" value="RAZ" onclick="raz()">&nbsp;&nbsp;
				<input type="button" value="avance" onclick ="avance()">
			</p>
 		<?php
 		}