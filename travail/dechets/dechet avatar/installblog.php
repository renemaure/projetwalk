<?php
 /* Date de création: 21/02/2012  
 
 version 1.4.2 au 25/02/2012  */
 
  echo("<script type=".chr(34)."text/javascript".chr(34).">\r\n");
  
  $tabblog = file("dessin/maxblog.txt"); /* fichier text conteneant le données d'instal du blog */
 
  echo("\r\n");
  
  echo("var urla = ".chr(34).trim($tabblog[1]).".php".chr(34).";\r\n"); /* chemin et nom du fichier appeler par l'ajax*/
 
  echo("\r\n");
   
  echo("var elemid = ".chr(34).trim($tabblog[3]).chr(34).";\n\r"); /* nom de l'id du div ou s'affiche le blog */
  
  echo("</SCRIPT>\r\n");
  ?>
