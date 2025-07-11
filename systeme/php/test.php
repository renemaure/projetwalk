<?php
	/*$avatar =array(array("nom","pos_dep"));
	$avatar[0]["nom"]="maurice";
	$avatar[0]["pos_dep"]=200;
	echo"<pre>";
	print_r($avatar);
	echo"</pre>";
	print"\n";
	echo "nom de l'indice 0 ".$avatar[0]["nom"];*/


/*	$avatar = array (
    "fruits"  => array("a" => "orange", "b" => "banana", "c" => "apple"),
    "numbers" => array(1, 2, 3, 4, 5, 6),
    "holes"   => array("first", 5 => "second", "third")
);*/
$avatar =array();
$data = array("nom"=>"maurice","pos_dep"=>0);
$nom = $data["nom"];
$avatar[1]["pos_dep"]=$data["pos_dep"];
$avatar[1]["nom"]=$data["nom"];
echo"<pre>";
	print_r($data);
	echo"</pre>";
	print"\n<br>";
	echo"<pre>";
	print_r($avatar);
	echo"</pre>";
// echo $avatar[]	
?>