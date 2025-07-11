
/*var zon = 1;*/

var dess_avat =" ";

var cache_img = "&";

var toto_tab = 0;

var tab_image = new Array();

var tab_cache_img = new Array();

var regist_coul = 0;

var referencecoul = 0;

var chm_avat = "";

var indice_img = 0;

total = 5;

nbr_cal = 0;

 var tab_ind =  new Array(0,3,3,3);

function deplcoul(regist_coul)
{
	referencecoul = referencecoul + regist_coul;

	tab_image[indice_img] = chm_avat + referencecoul  + ".png";

	tab_cache_img[indice_img] = referencecoul;

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

function calcul(nbr)
{

nbr_cal = parseInt(nbr.options[nbr.selectedIndex].label);

indc = parseInt(nbr.selectedIndex)+1;

if(tab_ind[nbr_cal] < indc) total = total - (( indc - tab_ind[nbr_cal]) * 2);

if(total >= 1) 
	{
	if(tab_ind[nbr_cal] > indc) total = total + (tab_ind[nbr_cal] - indc);
	
	document.getElementById('reste').innerHTML = 'Il vous reste '+ total + ' points de création';
	}
else document.getElementById('reste').innerHTML = 'Vous n\'avez plus points de création à votre disposition';

}

/*tab_ind[nbr_cal] = indc;*/