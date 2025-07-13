
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
function AffichageHeader(text_jon){
  let hearder = text_jon["titre"];
  if (getcookie("etap")>0) hearder =  hearder + text_jon["bouton5"]  + text_jon["bouton1"];
	affichage("header", hearder);
  
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
	/* etape 0 conection et enregistrement nouvel avatar */

  /* nouvelle fonction pour afficher les données textes qui sont permanente sur tout le site */
function AffichePermanent() {
  affichage("info-erg", text_jon["text1"]);
  affichage("info_cookie", text_jon["text5"]);
  affichage("foot_version",text_jon["version"]);
  affichage("foot_date",text_jon["date"]);
  affichage("foot_phase",text_jon["phase"]);
}

function Avatar(nom_avt,pos_dep,posrel,cart_char,cart_intl,cart_phys,pnt_pwalk,pnt_age,pnt_beaut,don_ondic){
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
}

/* nouvelle fonction permet d'afficher les données du monde et de l'avatar en phase test par pascal au 15/06/2025 aff_pw_avat
et ajout nombres d'avatar sur le monde */
function DonneesMonde() {
$("#monde").removeClass("monde_flex");  // a commenté la fontion exacte pascal au 15/06/2025
$("#monde").append("<img id=\"img-monde\" src=\"images/decor/decor.png\">");	
$("#img-monde").css({left: pos_monde+'px',display: "block"});
affichage("infos_monde", text_jon["text7"]);
affichage("infos_base", text_jon["text8"]);
let nbr_avatar_mond = Avatmonde.inc +" avatars";
affichage("affich_txt_avat",Avatmonde.inc);
affichage("aff_nom_avat",strUcFirst(Avatar_actif.nom)); 
affichage("aff_age_avat", Avatar_actif.age +" ans"); 
affichage("aff_physiq_avat", Avatar_actif.phys + " sur 6"); 
affichage("aff_intell_avat", Avatar_actif.intl + " sur 6"); 
affichage("aff_charis_avat", Avatar_actif.chari + " sur 6"); 
affichage("aff_beaute_avat", Avatar_actif.beau + " sur 12"); 
affichage("aff_pw_avat", Avatar_actif.pwalk); 

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
	recup_secon =  recup_secon + 10;
	console.log("avant calcul minutes : "+ Avatmonde["inc0"]["minutes"] +" secondes : "+ recup_secon)
	if (recup_secon>= 60) {
		recup_secon = recup_secon-60;
		recup_minut = recup_minut + 1;
	}
	if (recup_minut>= 60) {
		recup_minut = recup_minut-60;
		recup_heure = recup_heure + 1;
		/* affichage visuel lze monde bouge */
	}
	Avatmonde["inc0"]["secondes"] =  recup_secon;
	Avatmonde["inc0"]["minutes"] =  recup_minut;
	Avatmonde["inc0"]["heurs"] =  recup_heure;
	console.log("minutes : "+ Avatmonde["inc0"]["minutes"] +"secondes : "+ Avatmonde["inc0"]["secondes"])
	affichHeurMond();
}
function affichHeurMond() {
	age_monde = Avatmonde["inc0"]["ans"]+ " ans " + Avatmonde["inc0"]["mois"] + " mois et " + Avatmonde["inc0"]["jours"] + " jours";
    heur_monde = Avatmonde["inc0"]["heurs"]+ " heures " + Avatmonde["inc0"]["minutes"] + " minutes"
    console.log("age monde : " + age_monde );
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



