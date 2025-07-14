<?php
$tabmodif = file("bin/modif.txt"); 
$tabbug =  file("bin/bug.txt"); 

$tab = 20;
?>
<div id="tab-modif">
	<div class ="bug-titre">infos sur les modifs</div>  
<?php  
	$tt = count($tabmodif)-1;
	
	for($hh=0; $hh<=$tt; $hh++)
	{
		$tabmodif[$hh] = trim($tabmodif[$hh]);
		if ($tabmodif[$hh]){
		if (substr($tabmodif[$hh],0,2)=="DD")
		{	$tab = $tab + 5;	
			if($hh!=0)echo("</ul>\r\n");
			echo("\r\n<span class=".chr(34)."titre-date t".$tab.chr(34).">Modifs du ".substr($tabmodif[$hh],2,strlen($tabmodif[$hh]))."</span><br>\r\n"); 
			echo("<ul type=".chr(34)."disc".chr(34)." class=".chr(34)."gauche f9 t".$tab.chr(34).">\r\n");
		}
		else
		{
			echo("<li>".$tabmodif[$hh]."</li>\r\n"); 
			if($hh==$tt)echo("</ul>\r\n");
		} 
	  }
	}
?>

</div> 



<div id="tab-bug">
	<div class ="bug-titre">infos sur les bugs</div>
  	<?php  
	$tt = count($tabbug)-1;	
	
	$tab=20;
	
	for($hh=0; $hh<=$tt; $hh++)
	{
		$tabbug[$hh] = trim($tabbug[$hh]); 	
				
		if ($tabbug[$hh])	
		{
	
			if (substr($tabbug[$hh],0,2)=="DD")
			{	$tab = $tab + 5;
				if($hh!=0)echo("</ul>\r\n");	
				echo("\n\r<span class=".chr(34)."titre-date t".$tab.chr(34).">Modifs du ".substr($tabbug[$hh],2,strlen($tabbug[$hh]))."</span><br>\r\n"); 
				echo("<ul type=".chr(34)."disc".chr(34)." class=".chr(34)."t".$tab.chr(34).">\r\n");
		    
			}
			elseif (substr($tabbug[$hh],0,2)=="IM")
			{
			  echo("<li><span class=".chr(34)."important".chr(34).">".substr($tabbug[$hh],2,strlen($tabbug[$hh]))."</span></li>\r\n");
			}
		else
		{
			echo("<li>".$tabbug[$hh]."</li>\n\r");
			if($hh==$tt)echo("</ul>\r\n");
		}
	   }
	}
?>
</div> 

<div id="version">bug.php 1.7.1 du 18/02/2012</div>

