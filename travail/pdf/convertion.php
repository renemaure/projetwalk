<?php


/*$indic = 0;*/


$paraf = 0;

$tab_text = file('web2.txt');

$total_tab = count($tab_text)-1;

/*$total_tab = 75;*/

$titre = "Projet Swart / Walk";

$zon_text = "";



require('fpdf.php');

class PDF extends FPDF
{
	// En-tête
	function Header()
	{
     global $titre;
    $this->SetFont('Arial','B',15);
    // Décalage à droite
    $this->Cell(80);
    // Titre
    $this->Cell(30,10,$titre,0,0,'C');
    // Saut de ligne
    $this->Ln(20);
	}

	// Pied de page
	function Footer()
	{
    // Positionnement à 1,5 cm du bas
    $this->SetY(-15);
    // Police Arial italique 8
    $this->SetFont('Arial','I',8);
    // Numéro de page
    $this->Cell(0,10,'Page '.$this->PageNo(),0,0,'C');
	}
}

// Instanciation de la classe dérivée
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();

for($indic=0;$indic<=$total_tab;$indic++)
	{
		$tab_text[$indic] = trim($tab_text[$indic]); 

		$long = strlen($tab_text[$indic]);

		if( strstr($tab_text[$indic], '<p'))// détection du p
			{
				$tab_text[$indic] = strStr($tab_text[$indic] ,'<p'); //supresion du p
	
				if(strStr($tab_text[$indic],"class=")) //verifie la présence de class
					{
						if(substr($tab_text[$indic] ,10,5)== "titre")
							{
								$long = strlen($tab_text[$indic]);
								
								$tab_text[$indic] = substr($tab_text[$indic] ,-$long,$long-4);
				
								$pdf->SetFont('Arial','B',12); //arial gras font en 12
		
								$pdf->Cell(40,10,substr($tab_text[$indic] ,17,($long)));
							}
	
						elseif(substr($tab_text[$indic] ,14,9)== "justifier")
							{
								if (strstr($tab_text[$indic], '</p>')) 
								{
									$tab_text[$indic] = substr($tab_text[$indic] ,-$long,$long-4);
									
									$pdf->SetFont('Times','',12); //times font en 12
		     						
									if (strstr($tab_text[$indic], 'e l40'))
									{
										 $pdf->Setx(20);
										
										 $pdf->MultiCell(0,5,substr($tab_text[$indic] ,32,$long)); // Sortie du texte justifié
									}
									else 
									
									$pdf->MultiCell(0,5,substr($tab_text[$indic] ,25,$long)); // Sortie du texte justifié
									
									$paraf = 0;
									
									$zon_text  = "";
								}
								else
								{
									$zon_text = $zon_text . " ".substr($tab_text[$indic] ,25,$long);
		
									$paraf = 1;
								}
							}
					}
			}
			elseif(substr($tab_text[$indic] ,$long-4,4) =="</p>" and $paraf == 1)   //détéction d'un fin de paragraphe sur une ligne
			{
				$zon_text = $zon_text .substr($tab_text[$indic] ,-$long,$long-4);

				$paraf = 0;
				
				$pdf->SetFont('Times','',12); //times font en 12
				
				if (strstr($zon_text, 'e l40'))
				{
					$zon_text =  substr($zon_text ,9,strlen($zon_text));
					
					 $pdf->Setx(20);
				}
										     		
				$pdf->MultiCell(0,5,$zon_text); // Sortie du texte justifié
				
				$zon_text  = "";
			}
		else	$zon_text = $zon_text ." ". $tab_text[$indic];

		if($tab_text[$indic] =="") $pdf->Ln();// detection d'une chaine vide
}

$pdf->Output();
?>