/*	
fichier affich-blog.js créé le 14/08/2011 par pascal rollin pour

l'association collectif 11880	

version 3.0.0 du 25/02/2012

getion d'un mini blog avec fonction ajax synchrone

libre de droit et peut etre utilise découpé, recopier
si vous avez le temps, pensez à siter le collectif merci pour lui

modif importante au 25/02/2012
tratement des articles par un fichier php sur le serveur

http://webmaster.collectif11880.com */

var zon = 1;

var dess_avat =" ";

var toto_tab = 0;

var tab_image = new Array();

var fond_ing ="dessin";

var regist_coul = 0;

var referencecoul = 0;

var chm_avat = "";

var indice_img = 0;

var activtbcoul =0;


function deplcoul(regist_coul)
{
referencecoul = referencecoul + regist_coul;

tab_image[indice_img] = chm_avat + referencecoul  + ".png";

var x = document.getElementById("couleur");
	
		x.style.visibility="hidden";

afficheavatar();

/*document.write("ici",indice_img);*/
}


function dessin(fichavat, indic, ref_coul, activtbcoul)
{
	 if(activtbcoul ==1) 
	 {
	 	var x = document.getElementById("couleur");
	
		x.style.visibility="visible";
	 }
	 
	 chm_avat = fichavat;
	
	 referencecoul = ref_coul;
	
	 indice_img = indic;
	
	tab_image[indic] = fichavat + ref_coul + ".png";
	
	afficheavatar();  
}

function afficheavatar()
{
	toto_tab = tab_image.length;
	
	dess_avat =" ";
	
	for (var i = 0 ; i<= toto_tab-1 ; i++)
	{
		if(tab_image[i]!= undefined)
		{
			if(i == 5) 
			{
				dess_avat = dess_avat + "<img src='"+tab_image[i] +"' class ='fond'><br>";
			}
			else
			{
				dess_avat = dess_avat + "<img src='"+tab_image[i] +"' class ='dessin'><br>";
			}
		}
	}
	
	document.getElementById("zone_img").innerHTML = dess_avat; 
	
	/*return referencecoul ;*/
}  

function lireblog()
{
	
	ajaxSynchrone(urla);
	
}


function ajaxSynchrone(line)
{
	var xhr_object = null;	
	
	if(window.XMLHttpRequest)
	{
		xhr_object = new XMLHttpRequest();// Firefox 
	}
	 else if(window.ActiveXObject)
	{
		xhr_object = new ActiveXObject("Microsoft.XMLHTTP");// Internet Explorer
	} 
	else 
	{ 
		return;// non supporté par le navigateur
	}
	
	xhr_object.open("GET", urla + "?lien=" + line, false);
	
	xhr_object.send(null);
	
	if (xhr_object.readyState == 4) 
	{
		var reponse1 = xhr_object.responseText	
		
		document.getElementById(elemid).innerHTML = reponse1;   
	}
	
	
		
}

