<?php
$stage = file('../../inscription/stages.ins');	

$retour = "\r\n";

$indice = $stage[0]

$adrstage = "../../bin/text-stage/".trim($stage[trim($stage[0]+1)]).".txt";	  
?>

<!-- echo("<p class =".chr(34)."titre t10".chr(34).">prochain stage : </p>\n\r");

echo("<p class=".chr(34)."t15 centrer".chr(34)."> ".chop($stage[chop($stage[0])])."</p>".$retour); 

<p class="t45 corpstxt"><?php include($adrstage); ?></p>  -->	 

<article>

		<h3>Prochain stage clown</h3>
		
		<section class="centrer f12">
		
				<p class="t10">Le prochain stage clown aura lieu<br> les 26 et 27 novembre 2011.</p> 

				<p class="t20 gras">C'est bient&ocirc;t!</p>

				<p class="t30">Il est encore temps pour vous inscrire.</p>	
				
		</section>
		
</article>


