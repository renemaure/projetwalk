<?php

$indic = 0;

$paraf = 0;

$tab_text = file('web2.txt');


$tab_text[$indic] = trim($tab_text[$indic]); 

$long = strlen($tab_text[$indic]);

if( strstr($tab_text[$indic], '<p'))// détection du p
			{
				$tab_text[$indic] = strStr($tab_text[$indic] ,'<p'); //supresion de tout se qui estt avant le <p... utile enleve les <br>
				
				echo(substr($tab_text[$indic] ,10,5));
	
				/*if(strStr($tab_text[$indic],"class=")) //verifie la présence de class
					{
						$tab_text[$indic] = strStr($tab_text[$indic],"class"); // enleve tout code avant class
					}*/
			}
?>