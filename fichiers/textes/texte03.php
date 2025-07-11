<p class="t5 centrer gras">Actuellement il y a <?php echo($toto_avatr); ?> avatars présent sur le monde</p>

<?php
for($xx=1;$xx<=$toto_avatr;$xx++)
{
 echo("<p class='t".(10+($xx*15))."'>".$aff_nom[$xx]."</p>\n\r"); 
 }
 ?>