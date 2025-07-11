<?php 
	$lireinfo[2] = 0;
	$tabblog = file("bin/maxblog.txt");
	include("php/get-util.php");
	/*include("php/base_donnees.php");*/
	if (isset($_COOKIE['nom']))
	{
		$resultat = mysql_query ("SELECT * FROM avatar where nom = '".$_COOKIE['nom']."'"); 
		$data = mysql_fetch_assoc($resultat);
		$lireinfo[1] = $data["nom"];
		$lireinfo[0] = $data["id"];
		$lireinfo[2] = $data["final"];
		$lireinfo[4] = $data["physique"];
		$lireinfo[5] = $data["intellect"];
		$lireinfo[6] = $data["charisme"];
		$lireinfo[7] = $data["pwalk"];
		$lireinfo[8] = $data["passe"];
		$lireinfo[3] = 2;
		if($lireinfo[4] < 2)
		{
			$lireinfo[3] = 0;
		} 	
		else if ($lireinfo[4] < 5)
		{
			$lireinfo[3] = 1;
		}
		/*toute cette zonnr du if ne doit pas aller ici mais dans le bod 2021*/
	   	if (isset($_COOKIE['passe']) and $lireinfo[1] == $_COOKIE['nom'] and $lireinfo[8] == $_COOKIE['passe'] and $valid==0 )
	   	{
	   		if($lireinfo[2]!=2) include("fichiers/identite_avatar.php"); /*erreur potentiel 2021 superieur à 2 peut etre*/
	   		if($lireinfo[2]==1)  include("fichiers/tirage.php"); 
			if($lireinfo[2]==2)  include("fichiers/dessin.php"); 
			if($lireinfo[2]==3) include("control_monde.php");
	   	} 
	}
?>
<!doctype html>
<html lang="fr">
	<head>
		<meta http-equiv="Content-Type" content="text/html charset=utf-8">
  		<!-- <title><?php echo(trim($chm_lanceur[3])) ?></title> -->
  		<title>Le monde presque permanent du Walk</title>
  		<META NAME="TITLE" CONTENT="Le monde presque permanent du Walk">
		<META NAME="AUTHOR" CONTENT="association collectif 11880">
		<META NAME="OWNER" CONTENT="info@collectif11880.com">
		<META NAME="SUBJECT" CONTENT="site de suivit du prohet Swart /walk">
		<META NAME="RATING" CONTENT="art comptenporain">
		<META NAME="LANGUAGE" CONTENT="FR">
		<META NAME="COPYRIGHT" CONTENT="collectif11880">
		<link rel="StyleSheet" type="text/css" href="bin/css/master.css"> 
		<script  LANGUAGE="JavaScript">
			<?php
				echo "var urla = \"".trim($tabblog[1])."\";\r\n\t\t\t";
				if (isset($_COOKIE['nom'])) {	
				echo "var nmavt =`\"".$lireinfo[1]."\";\r\n\t\t\t";
				echo"var avtpl = \"".$lireinfo[0]."\";\r\n\t\t\t";
				}
 				else {
 						echo "var avtpl = 0;\r\n\t\t\t";
 					 }
 				echo "elemid = \"".trim($tabblog[3])."\";\r\n";
			?>
		</SCRIPT>
  		<SCRIPT LANGUAGE="JavaScript" SRC="bin/js/avatar.js"></SCRIPT>	
	</head>
	<body>
		<div id = "global">	
			<header>
				<h1><?php echo(trim($chm_lanceur[3])) ?></h1> 
				<h3><?php echo(trim($chm_lanceur[2])) ?></h3> 
			</header> 
			<div id ="central">
				<?php
					include("fichiers/affichage_monde.php");	
					/*include ($lancer);  */
					/*mysql_close($laison);*/ // Ne pas oublier de refermer la connexion !
	 			?> 
			</div> <!-- fin central -->
			<FOOTER> 
				conception, réalisation, hébergement par association collectif 11880 &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; contact webmaster
			</FOOTER>
		</div>
	</body>
</html>