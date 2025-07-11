<?php

$indic = 0;

$paraf = 0;

$tab_text = file('web2.txt');

/*for($indic=0;$indic<=24;$indic++)
{*/

$tab_text[$indic] = trim($tab_text[$indic]);

$long = strlen($tab_text[$indic]);

/*if( strstr($tab_text[$indic], '<p')) echo("la blaise p est présente");

else  echo("pas de blaise p ");*/

/*echo(substr($tab_text[4] ,$long-4,4));*/

if(substr($tab_text[$indic] ,$long-4,4) =="</p>") 
{
$tab_text[$indic] = substr($tab_text[$indic] ,-$long,$long-4)."</u>";

$long = strlen($tab_text[$indic]);

$paraf = 0;
}

if(substr($tab_text[$indic] ,$long-4,4)=="</p>") 
{
	$tab_text[$indic] = substr($tab_text[$indic] ,-$long,$long-4); //détecte si la balise est présente à la fin est l'enleve
	
	$tab_text[$indic] = strStr($tab_text[$indic] ,'<p');
	
}

if($tab_text[$indic] =="") $tab_text[$indic] = "<br>";

if(strStr($tab_text[$indic],"class=")) //verifie la présence de la sous chaine dans la phrase
{

	$tab_text[$indic] = strStr($tab_text[$indic],"class"); // enleve tout code avant class

	if(substr($tab_text[$indic] ,7,5)== "titre")
	{
		$tab_text[$indic] = "<b>".substr($tab_text[$indic] ,14,$long)."</b>";
	}
	elseif(substr($tab_text[$indic] ,11,9)== "justifier")
	{
		$tab_text[$indic] = "<u>".substr($tab_text[$indic] ,22,$long);
		$paraf = 1;
	}
}

/*if( strstr($tab_text[$indic], '<p>')) echo("la blaise p est présente");

else  echo("pas de blaise p ");*/

/*echo(substr($tab_text[$indic] ,7,5);*/


/*}*/
?>