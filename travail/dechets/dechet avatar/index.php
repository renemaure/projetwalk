<?php  
$chm_lanceur = file("bin/lanceur.txt");

include("php/get-util.php"); 
?>

<html>
<!-- Date de création: 09/03/2013 -->
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
  <title><?php echo(trim($chm_lanceur[3])) ?></title>
  <meta name="description" content="">
  <meta name="keywords" content="">
  <meta name="author" content="collectif 11880">
  <meta name="generator" content="WebExpert 6">
  <SCRIPT LANGUAGE="JavaScript" SRC="bin/js/avatar.js"></SCRIPT>	
  <SCRIPT LANGUAGE="JavaScript" SRC="dessin/affich-blog.js"></SCRIPT>		   
  
 
<?php include("dessin/installblog.php");  ?>

  <link rel="StyleSheet" type="text/css" href="bin/css/master.css">  
</head>
<body>

<div id = "global">	 


<header>	
<h1><?php echo(trim($chm_lanceur[3])) ?></h1> 

<h3><?php echo(trim($chm_lanceur[2])) ?></h3> 
</header>
<?php 

$dac =0;

if (isset($_COOKIE['nom']))   // on teste si le cookie existe
{	
	include("php/base_donnees.php");

	$resultat = mysql_query ("SELECT nom , id FROM avatar"); 
	
	while($data = mysql_fetch_assoc($resultat))
		{
        	if ($data["nom"] == $_COOKIE['nom'])
			{
				$dac =1;
				$lireinfo[1] = $data["nom"];
				$lireinfo[0] = $data["id"];
				break;
			}
		}
 	mysql_close($laison); 
	
	if($dac == 1) 	include ($lancer);
	
	else 	include (trim($chm_lanceur[4]));
	
}
else
{
  if ($code == 6)   include (trim($chm_lanceur[6]));
  
  else   include (trim($chm_lanceur[4]));
 }
 ?>
</div>
</body>
</html>
