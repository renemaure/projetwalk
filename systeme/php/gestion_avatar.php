<?php
	$avatar =array();
	$indice =0;
	include("base_donnees.php");
	/* nouveau extraction de l'age du monde 22/06/2025 */
	$query1 = $laison->query("SELECT * FROM donnees_monde");
	$data1 = $query1->fetch(PDO::FETCH_ASSOC);
	$avatar["inc".$indice] = $data1;

		/* fin nouveau code */

	$query = $laison->query("SELECT * FROM avatar where etape = '3'"  );
	while ($data = $query->fetch(PDO::FETCH_ASSOC))
	{
		$indice++;
		$avatar["inc".$indice] = $data;
	}
	$avatar["inc"]=$indice;
	/*echo"<p> tabeau avatar</P><pre>";
	print_r($avatar);
	echo"</pre>";
	print"\n";*/
	echo json_encode($avatar);
	$laison=NULL;
?>