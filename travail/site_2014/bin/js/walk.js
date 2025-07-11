
window.onerror = traitementerreur;

var timer_page = 10;

var valeurtop = 350;

var timerbus;

var anim_titre = 60;

var id = "modifiable";

/* var texte1 = "<div id =\"zone_haut\"><div id =\"pre_texte\">Projet</div>"; */

var texte1 = "<p></p><p></p><div id =\"titre_walk\">The Walk</div>";

texte1 += "\n\r<div id =\"texte_central\"><span class=\"gras\">W</span>alking <span class=\"gras\">A</span>rt <span class=\"gras\">L</span>inking <span class=\"gras\">K</span>nowledge</div></div>";

texte1 += "<div id =\"zone_bas\"><div id =\"sous_titre\">Art de la d&eacute;ambulation dans l'espace urbain contemporain</div></div>";

/* var texte2 = "<div id =\"text_bas\"><p>Projet d'application smartphone d&eacute;di&eacute;e &agrave la d&eacute;ambulation artistique dans une zone g&eacute;ographique &agrave; l'echelle d'un quartier ou d'une ville.</p><p class=\"t10 centrer\">Conception originale de <span class=\"gras\">Fabrice Bongiorni</span>.</p><p class=\"t40\"> l'association <span class=\"gras\">Clustars</span> g&eacute;re la cr&eacute;ation et la coordination &eacute;ditoriale du projet, l'association <span class=\"gras\">Collectif 11880</span> cr&eacute;&eacute;e et g&egrave;re la partie informatique et technique du projet.</div>"; */
var texte2 = "";
function init()
{
	var timer = setTimeout("lance_anim_titre()",timer_page*100);
}

function finvisuel()
{
document.getElementById(id).innerHTML = " ";
var timer = setTimeout("pagedeux()",1000);
}

function pagedeux()
{
	document.getElementById(id).innerHTML = texte1;
	
	document.getElementById("zone_haut").style.top = "60px";
	
	var timer = setTimeout("envoi_accueil()",timer_page*1000);
	
}
function bouge_anim_titre()
{
	img = document.getElementById("zone_haut");
	
	img.style.top = valeurtop + "px";
	
	valeurtop = valeurtop - 1;
	
	if (valeurtop==anim_titre) 
	{
		clearInterval(timerbus);
		
		if(anim_titre==60) var timer = setTimeout("finvisuel()",timer_page*1000);
		
	
	}
}
function lance_anim_titre()
{
	timerbus = setInterval('bouge_anim_titre()' , 15);
}

function contibution(lien,idem)
{
/*ajaxSynchrone("accueil.html","zone_centrale"); */	 
ajaxSynchrone(lien,idem);
}


function traitementerreur(message,adresse,ligne)
{
return false;
}