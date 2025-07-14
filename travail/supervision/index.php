<?php 
$super_header = file("bin/navigation.txt");

$tabdiver = file("bin/supervision.txt");   

$chm_lanceur = file("bin/lanceur.txt");

include("bin/php/trait_acces.php");													

?>

<html>
<!-- Date de cr�ation: 23/02/2013 -->
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

<?php include("bin/php/control_acces.php"); ?>

</div>
</body>
</html>






