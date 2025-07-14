<?php  include("bin/php/get-util.php");
$super_header = file("bin/navigation.txt");
 ?>

<html>
<!-- Date de cr�ation: 09/03/2013 -->
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
  <title><?php echo(trim($chm_lanceur[3])) ?></title>
  <meta name="description" content="">
  <meta name="keywords" content="">
  <meta name="author" content="collectif 11880">
  <meta name="generator" content="WebExpert 6">
  <link rel="StyleSheet" type="text/css" href="bin/css/master.css">  
  <link rel="StyleSheet" type="text/css" href="bin/css/supervision.css">  
</head>
<body>
<?php include("bin/php/super_master.php"); ?>
<div id = "global">	 
<header>	
<h1><?php echo(trim($chm_lanceur[3])) ?></h1> 

<h3><?php echo(trim($chm_lanceur[2])) ?></h3> 
</header>

<?php
// include("../php/base_donnees.php");

// $resultat = mysql_query ("SELECT * FROM avatar"); 
?>

<table border=1 cellpadding=2 cellspacing=0 bgcolor=#FFFFFF bordercolor=#ae206c id="tab_princ"> 
<tr>
<!-- <td><a href="index.php?util=fichiers/accueil&cod=2">ACCUEIL</a></td> --> 
<td><a href="supervision.php?util=bug&cod=2">bugs & modifs</a></td>	 
<td><a href="index.php?util=tab-bord/tab-bord&cod=2&bord=contact.php">Gestion contacts</a></td>	  
<td><a href="index.php?util=tab-bord/tab-bord&cod=2&bord=comptage.php">compteur</a></td>
<td><a href="index.php?util=tab-bord/tab-bord&cod=2&bord=affich-stage.php">gestion new</a></td>
</tr>
</table>

<div id ="central">	<?php    include ($lancer);   ?> </div> 

</body>
</html>
