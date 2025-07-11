<?php
if($lireinfo[2]!=2)
	{
		?>	<div id="image1">	<img src="avatar/decor/decor1.jpg" />	<?php
		
		$toto_avatr = 0;
		
		$resultat = mysql_query ("SELECT nom , id FROM avatar where final=3"); 

		while($data = mysql_fetch_assoc($resultat))
			{
				$img_avatar_monde = "images/avatar".$data["nom"].".png";
				
				$toto_avatr ++; 
				
				echo("\r\n <img src='images/avatar".$data["nom"].".png' border='0' width='110' height='110' id ='zone_img".$data["id"]."' > \r\n");
						
				/*if (file_exists($img_avatar_monde))
						{
							$avatar_monde[$data["nom"]] = $data["id"];*/
			
							/*$requete = "UPDATE univers_avatar SET c".$data["id"]." = ".$data["id"]." WHERE structure_zonne = 'placement'"; 
			
							mysql_query ($requete);
						*}*/
			}
			
	}
		?>  </div> 
		
		
<?php  if($lireinfo[2]==1) {?>

<div id="infos_base">	<?php include("textes/texte01.html") ?></div>

<?php } ?>


<div id ="interface">

<p class="t5 centrer gras">Actuellement il y a <?php echo($toto_avatr); ?> avatars présent sur le monde</span>

<p class="t15 justifier">avatar bidule à avancé de 2 cases</span>

</div>


		
