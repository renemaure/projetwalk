
function calcul_point(idselect, rest_piont, point_caract){
  if (point_caract >= 3) {
    if(parseInt(rest_piont) > 0 ) rest_piont = rest_piont -2;
  }
  else rest_piont = rest_piont + 1;
  gesoption(idselect, rest_piont, point_caract);
  return rest_piont;
}
function gesoption(idselect, rest_piont, point_caract){
  max_opt = point_caract + parseInt(rest_piont/2);
  html = "";
  selc_defaut = "";
  for (let index_png = 1; index_png <= max_opt; index_png++) {
    if(index_png == point_caract) selc_defaut = " selected ";
    else selc_defaut = "";
    html = html + "<option" + selc_defaut + " value=\"" + index_png + "\">" + index_png + "</option>\r\n";
  }
  max_opt = 0;
  $("#"+ idselect).html(html);
  $("#reste").html("Il vous reste "+ rest_piont +" points de création")
  return rest_piont;
}
function popup(balise,sens){
  document.getElementById(balise).style.display = sens;
}
function affichage(idelm,dataaff){
  document.getElementById(idelm).innerHTML = dataaff;
}
function AffichageHeader(){
  let hearder = text_jon["titre"];
  if (getcookie("etap")>0) hearder =  hearder + text_jon["bouton5"]  + text_jon["bouton1"];
	affichage("header", hearder);
}
function ajout_html(element,id,classe) {
	structure = document.createElement(element)
	if(id) structure.id = id
	if(classe) structure.className = classe
}
function structureDouble(titre1,titre2) {
		ajout_html('section','zon_conex')
		monde.appendChild(structure)
		ajout_html('h3','titre_conex','titre_from')
		zon_conex.appendChild(structure)
		ajout_html('div','zon_form','separ_monde')
		monde.appendChild(structure)
		ajout_html('section','zon_enreg')
		monde.appendChild(structure)
		ajout_html('h3','titre_from','titre_from')
		zon_enreg.appendChild(structure)
		affichage("titre_conex",text_jon[titre1])
		affichage("titre_from",text_jon[titre2])
}

function setCookie(name, value, expires, path, domain, secure) {
	document.cookie=name+"="+ escape(value) +
		((expires==undefined) ? "" : ("; expires="+expires.toGMTString()))+
		((path==undefined) ? "" : ("; path="+path))+
		((domain==undefined) ? "" : ("; domain="+domain))+
		((secure==true) ? "; secure" : "");
}
function strUcFirst(a) {
	return (a+'').charAt(0).toUpperCase() + (a+'').substr(1);
  }

  /* Affiche les textes permanents sur tout le site */
function AffichePermanent() {
  affichage("info-erg", text_jon["text_navigateur"]);
  affichage("info_cookie", text_jon["info_cookie"]);
  affichage("foot_version",text_jon["version"]);
  affichage("foot_date",text_jon["date"]);
  affichage("foot_phase",text_jon["phase"]);
}

function Avatar(nom_avt,pos_dep,posrel,cart_char,cart_intl,cart_phys,pnt_pwalk,pnt_age,pnt_beaut,don_ondic, pnt_not){
		this.nom = nom_avt;
		this.pos_abs = pos_dep;
		this.pos_rel = posrel;
		this.chari = cart_char;
		this.intl= cart_intl;
		this.phys = cart_phys;
		this.pwalk = pnt_pwalk;
		this.age = pnt_age;
    	this.beau = pnt_beaut;
		this.indic = don_ondic;
		this.noto = pnt_not
}

/* nouvelle fonction permet d'afficher les données du monde et de l'avatar  par pascal au 15/06/2025 aff_pw_avat
et ajout nombres d'avatar sur le monde */
function DonneesMonde() {
$("#monde").removeClass("monde_flex");  // a commenté la fontion exacte pascal au 15/06/2025
const monde = document.getElementById("monde");
const zoneSouris = document.createElement("div")
zoneSouris.id = "zone_souris"
zoneSouris.setAttribute("onclick","avance_souris()")
monde.appendChild(zoneSouris);
const imgMonde = document.createElement("img");
imgMonde.id = "img-monde";
imgMonde.src = "images/decor/"+text_jon["img_decor"]+".png"; // ajout d'une variable sur le nom de l'image du décor 20/07/2025
imgMonde.setAttribute("usemap","#boutique")
monde.appendChild(imgMonde);
affichage("zonne_area", text_jon["map_boutique"])
$("#img-monde").css({left: pos_monde+'px',display: "block"})
affichage("infos_monde", text_jon["text7"]);
affichage("infos_base", text_jon["texte14"]);
affichage("affich_txt_avat",Avatmonde.inc);
}
function QuiterMonde(text_jon){
		$.post("systeme/php/gestion_logger.php",{
			sortir_monde : "ok",
		},
		function(data){
			console.log(data);
			etape(text_jon);
			// $("#header").html("");
		});
	}

function getcookie(name) {
	if (document.cookie.length==0) { return null; }
	var regCookies=new RegExp("(; )","g");
	var cookies=document.cookie.split(regCookies);
	for (var i=0; i<cookies.length ; i++) {
		var regInfo=new RegExp("=","g");
		var infos=cookies[i].split(regInfo);
		if (infos[0]==name) {
			return unescape(infos[1]);
		}
	}
	return null;
}

/* au 07/07/2025 recuperation des heures */
function cal_tmp_monde() {
	let recup_secon = parseInt(Avatmonde["inc0"]["secondes"]);
	let recup_minut = parseInt(Avatmonde["inc0"]["minutes"]);
	let recup_heure = parseInt(Avatmonde["inc0"]["heurs"]);
	let recup_jours = parseInt(Avatmonde["inc0"]["jours"])
	recup_secon =  recup_secon + ecart_temp;
	// console.log("avant calcul minutes : "+ Avatmonde["inc0"]["minutes"] +" secondes : "+ recup_secon)
	if (recup_secon>= 60) {
		recup_secon = recup_secon-60;
		recup_minut = recup_minut + 1;
		// ajoute 1 a notoriété
		Avatar_actif.noto ++
	}
	if (recup_minut>= 60) {
		recup_minut = recup_minut-60;
		recup_heure = recup_heure + 1;
	}
	if (recup_heure>= 24) {
		recup_heure = recup_minut-24;
		recup_jours = recup_jours + 1;
		//ajout age +1 
		Avatar_actif.age ++
	}
	Avatmonde["inc0"]["secondes"] =  recup_secon;
	Avatmonde["inc0"]["minutes"] =  recup_minut;
	Avatmonde["inc0"]["heurs"] =  recup_heure;
	Avatmonde["inc0"]["jours"] = recup_jours
	console.log(Avatmonde["inc0"]["minutes"] + " minutes  et " +  Avatmonde["inc0"]["secondes"] +" secondes")
	affichHeurMond();
}
function affichHeurMond() {
	age_monde = Avatmonde["inc0"]["ans"]+ " ans " + Avatmonde["inc0"]["mois"] + " mois et " + Avatmonde["inc0"]["jours"] + " jours";
    heur_monde = Avatmonde["inc0"]["heurs"]+ " heures " + Avatmonde["inc0"]["minutes"] + " minutes"
    // console.log("age monde : " + age_monde );
    affichage("affich_age_monde", age_monde);
    affichage("affich_heur_monde", heur_monde); 
}

function test(){
	date1 = new Date('2015-11-01 15:50:00');
     date2 = new Date('2015-11-03 15:50:00');
     diff = date2 - date1 ;    
     diff = Math.floor(diff / (1000 * 86400 * 2) ) ;
     if (diff >= 1 ) alert ('48 heures se sont écoulées'); else alert('- de 48 h');

	 var diff = {}							// Initialisation du retour
	var tmp = date2 - date1;

	tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
	diff.sec = tmp % 60;					// Extraction du nombre de secondes

	tmp = Math.floor((tmp-diff.sec)/60);	// Nombre de minutes (partie entière)
	diff.min = tmp % 60;					// Extraction du nombre de minutes

	tmp = Math.floor((tmp-diff.min)/60);	// Nombre d'heures (entières)
	diff.hour = tmp % 24;					// Extraction du nombre d'heures
	
	tmp = Math.floor((tmp-diff.hour)/24);	// Nombre de jours restants
	diff.day = tmp;
	
	return diff;
}




/* function test(){
	let radios = document.getElementsByName('recup_age');
	let type_age;
	for(var i = 0; i < radios.length; i++){
		if(radios[i].checked)	type_age = radios[i].value;
		}
	var valeur = document.querySelector('input[name=recup_age]:checked').value;
} */

function boutiquewalk() {
	// eregistre_monde()	
	affichage("monde",'')
	ajout_html('img','boutique_walk')
	structure.src ="images/boutique/boutique_walk.png"
	monde.appendChild(structure)
	document.getElementById('boutique_walk').setAttribute("usemap", "#boutique_walk")
	affichage("zonne_area", text_jon["map_porte_boutique"])
	ajout_html('img','avatar_actif','avatar')
	structure.src ="images/avatar/"+Avatar_actif.nom+".png"
	monde.appendChild(structure)
	ajout_html('id','zone_souris')
	monde.appendChild(structure)
	document.getElementById("avatar_actif").style.left="610px"
	/* 
	<div id="zone_souris" onclick="avance_souris()">
	<div id="maurice" class="souris" onclick="affpopupactif()"><img class="avatar maurice" src="images/avatar/maurice.png" style="left: 500px; z-index: 8;"><div class="bulle" id="bulle_maurice" style="left: 500px;"></div></div>
	*/
	/* let aff_avat_ctif = "<img class=\"avatar " +  Avatar_actif.nom + "\" src=\"images/avatar/" +  Avatar_actif.nom + ".png\">"
	console.log( aff_avat_ctif)
	affichage("monde",aff_avat_ctif) */

}

function sortirboutique() {
	console.log("fondctionne sortir boutique")
	// const element = document.getElementById("boutique_walk");
	// element.remove(); // supprime le div avec l'identifiant 'div-02'
	affichage("monde",'')
	recupdonnemonde()
		/* affichage("zonne_area", '') */
	// recupdonnemonde()
}



