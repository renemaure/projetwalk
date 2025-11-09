<?php  include("php/get-util.php"); 

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
    <SCRIPT LANGUAGE="JavaScript" SRC="bin/js/avatar.js"></SCRIPT>	
  <SCRIPT LANGUAGE="JavaScript" SRC="bin/js/affich-blog.js"></SCRIPT>
      <SCRIPT LANGUAGE="JavaScript" SRC="bin/js/clip.js"></SCRIPT>		
  <?php include("php/installblog.php");  ?>
</head>
<body>

<?php include("webmaster/fichiers/super_master.php");?> 

<div id = "global">	

	<header>
		<h1><?php echo(trim($chm_lanceur[3])) ?></h1> 

		<h3><?php echo(trim($chm_lanceur[2])) ?></h3> 
	</header> 

	<div id ="central">

		<?php    include ($lancer);   ?> 
	
	</div> 
	<ul id ="liens">
		<li><a href="mobil/index.html">test mobile</a></li>
		<li><a href="mobil/geo.html">test geocalisation</a></li>
		<li><a href="audio/index.html">test audio</a></li>
		<li><a href="qr/index.html">test QR</a></li>
		<li><a href="map/map.html">test map gogle</a></li>
			 <li></li> 
	</ul>
	
<FOOTER>  conception, r�alisation, h�bergement par association collectif 11880 &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; contact webmaster </FOOTER>

</div>
</body>
</html>
