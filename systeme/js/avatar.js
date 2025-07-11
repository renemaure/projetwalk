/*var avtpl = 2;*/

var dess_avat =" ";

var cache_img = "&";

var chm_avat = "";

var rect ="";

var reponse1 ="";

var tab_image = new Array();

var tab_cache_img = new Array();

var tab_ind =  new Array(0,3,3,3);

var toto_tab = 0;

var regist_coul = 0;

var referencecoul = 0;

var indice_img = 0;

var clip_gauche = 0; /* d�but � gauche � 0 pixel */

var avanc_gauche = 0;

var nbr_cal = 0;

var total = 5;

var clip_droit = 1000; /* largeur de la fen�tre */

var positionavt = avtpl * 80;

var pas_deplac =  200;

var maxmonde = 4700;

positionavt = (avtpl * pas_deplac);

avanc_droit = clip_droit



function deplcoul(regist_coul)
{
	referencecoul = referencecoul + regist_coul;

	tab_image[indice_img] = chm_avat + referencecoul  + ".png"; // tableau contenant les images de l'avatar

	tab_cache_img[indice_img] = referencecoul; // tableau pour referencer la couleur

	referencecoul =   referencecoul - regist_coul;

	afficheavatar();
}

function dessin(fichavat, indic, ref_coul, activtbcoul)
{
	 chm_avat = fichavat;
	
	 referencecoul = ref_coul;
	
	 indice_img = indic;
	
	 tab_image[indic] = fichavat + ref_coul + ".png";
	
	 tab_cache_img[indic] = ref_coul;
	
	 afficheavatar();  
}

function afficheavatar()
{
	toto_tab = tab_image.length;
	for (var i = 0 ; i<= toto_tab-1 ; i++)
	{
		if(tab_image[i]!= undefined)
		{
			if (i==0) cache_img = "i" + i + "=" + tab_cache_img[i] ;
			
			else cache_img = cache_img + "&i" + i + "=" + tab_cache_img[i];
			
			if(i == 15) dess_avat = dess_avat + "<img src='"+tab_image[i] +"' class ='fond'><br>";
			
			else 	dess_avat = dess_avat + "<img src='"+tab_image[i] +"' class ='dessin'><br>";
		}
	}
	document.getElementById("cache_img").innerHTML = "<input type='button' value='enregistrer' onclick=\"window.location.href='php/trait_img_avatar.php?" + cache_img +"&nom="+nmavt+"'\">" ;
	
	document.getElementById("zone_img_avatar").innerHTML = dess_avat; 
                                                             
	 dess_avat =" ";

	 cache_img = " ";
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
		return;// non support� par le navigateur
	}
	xhr_object.open("GET", urla + "?lien=" + line, false);
	
	xhr_object.send(null);
	
	if (xhr_object.readyState == 4) 
	{
		reponse1 = xhr_object.responseText	
		
		document.getElementById(elemid).innerHTML = reponse1;   
	}
}

function calcul(nbr)
{
	nbr_cal = parseInt(nbr.options[nbr.selectedIndex].label);
	indc = parseInt(nbr.selectedIndex)+1;
	if(total >= 1)
	{
		if(tab_ind[nbr_cal] < indc) total = total - (( indc - tab_ind[nbr_cal]) * 2);
		if(tab_ind[nbr_cal] > indc) total = total + (tab_ind[nbr_cal] - indc);
		document.getElementById('reste').innerHTML = 'Il vous reste '+ total + ' points de cr�ation';
	}
	/*if(total <= 1) */ /*modif2021*/
	else
	{
		 document.getElementById('reste').innerHTML = 'Vous n\'avez plus points de cr�ation � votre disposition';
	}		 
}

function oneplacement()
{
avanc_droit += (positionavt)-160;

avanc_gauche = (positionavt)-160;

deplacement();

}

function avance()
{
	if(avanc_droit + pas_deplac <= maxmonde)
	{
		avanc_droit = avanc_droit + pas_deplac;

		avanc_gauche =  avanc_gauche + pas_deplac;
	
		positionavt = positionavt + pas_deplac;
	
		deplacement();
	}
}

function recule()
{
	if(avanc_droit - pas_deplac >= clip_droit)
	{
		avanc_droit = avanc_droit - pas_deplac;

		avanc_gauche =  avanc_gauche - pas_deplac;

		positionavt = positionavt - pas_deplac;

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

/*var imgavt = document.getElementById("zone_img"+avtpl);*/

img.style.clip = rect;

img.style.left = "-" + avanc_gauche;	

/*imgavt.style.left =  positionavt;*/
}

function montre(dep,arr)
{
	var d = document.getElementById(dep);  

	var a = document.getElementById(arr);
	
	a.style.visibility="visible";
	
	d.style.visibility="hidden"; 
}