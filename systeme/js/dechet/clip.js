var clip_droit = 560; /* largeur de la fenêtre */

var clip_gauche = 0; /* début à gauche à 0 pixel */

var avanc_droit = clip_droit

var avanc_gauche = 0;

var rect ="";

var positionavt = 0;

var pas_deplac = 80;

var maxmonde = 4700;

positionavt = (avtpl * pas_deplac);

/*function oneplacement()
{
avanc_droit += (positionavt)-80;

avanc_gauche = (positionavt)-80;

deplacement();

}*/

function avance()
{
	if(avanc_droit + pas_deplac <= maxmonde)
	{
		avanc_droit = avanc_droit + pas_deplac;

		avanc_gauche =  avanc_gauche + pas_deplac;
	
		positionavt += pas_deplac;
	
		deplacement();
	}
}

function recule()
{
	if(avanc_droit - pas_deplac >= clip_droit)
	{
		avanc_droit = avanc_droit - pas_deplac;

		avanc_gauche =  avanc_gauche - pas_deplac;

		positionavt -= pas_deplac;

		deplacement();
	}
}

function raz()
{
avanc_droit = clip_droit;

avanc_gauche = 0;

deplacement();
}

function deplacement()
{
rect = "rect(0px, " + avanc_droit + " , 320, " + avanc_gauche +" )";

var img = document.getElementById("monde");

var imgavt = document.getElementById("zone_img"+avtpl);

img.style.clip = rect;

img.style.left = "-" + avanc_gauche;	

imgavt.style.left =  positionavt;
}

function montre(dep,arr)
{
	var d = document.getElementById(dep);  

	var a = document.getElementById(arr);
	
	a.style.visibility="visible";
	
	d.style.visibility="hidden"; 
}