// jQuery(document).ready(function($){
	const fin_recul = 300; // position mini de l'avatar
	const fin_avanc = 900; //position max de l'avatar 
	let fin_decor = -4100; // position max du decor
	let deb_decor = 0; // position de debut du decor
	let avc_monde = 0; // nombre de pixel d'avance du monde
	const delais = 5000;// délais d'animation
	const pas = 150; // pas d'avance avec bouton
	const decalage_monde = 600; // decalage du monde au demarage pour la position de l'avatar
	const marg_main = parseInt($("main").css('margin-left')); // margin de la balise <main></main> 
	const largeur_monde = 1200; // largeure du monde ne sert pas pour le moment
	const ecart_temp = 10 // avance en secondes d'un tour de mouvement due l'avatar actif

	let indc_coul = 1; // couleur de base du corps de l'avatar

	let avc_avat; // nombre de pixel que doit faire l'avatar actif
	let pos_avatar;//position rel de l'avatar actif pour simplifier les calculs
	let pos_monde; //position du monde à l'ouverture par rapport a l'avatar actif
	let tab_pos_rel =[]; // position affiché relative des avatars dans le monde
	let etap; // etape de création
	let intel = 3;
	let physi = 3;
	let charis = 3;
	let rest_piont = 5;
	let tirage_beau;
	let tirage_conf;
	let tirage_vita;
	let tirage_pk;
	let tirage_age;
	let tirage_not;
	let text_jon = new Array();
	let corps_png = "";
	let avatar_png= Array(11).fill("vide");
	let memoir_png;
	let reper_png = "3";
	let bulle_avatar="";
	let Avatmonde = new Object();
	let pos_avat_monde = []; //position des avatars indexés dans le monde utilisé!!
	let age_monde;
	let heur_monde;
	let type_age;
	let indc_val;
	let indc_max;
	let corps_avat;
	let prems = true;
	let pos_avt_ancien = new Array();
	let structure;
	let inter_avatar = false;
	let inter_nom_avat

	let position_souris;

		/* 
		 ajout pascal au 15/06/2025 de la fonction AffichePermanent() gérant l'affichage des textes permanant du site,
		  et supression de l'argument text_jon dans etape()
		*/
	fetch('systeme/donnees/walk.json')
  	.then( response => {
    return response.json();
  	})
  	.then( json =>{
		text_jon = json;
		AffichePermanent(); 
		etape();
	})

	/* test d'un fetch avec envoi de données  NE PAS EFACER 04/08/2024*/
	/* 
	fetch(`${urlBase}/js-ajax/exemple/toLower.php`, {method: "POST", body: data}) // le body corespond au texte à envoyer
	.then(response => response.json())
	.then(result => {
		document.getElementById('consolef1p').innerHTML = result.text;``
	}) 
	*/
	
	function etape(){
		AffichageHeader();
		document.getElementById("monde").classList.add("monde_flex")
		if(getcookie("nom")){
			nom_avatar = getcookie("nom");
			etap = getcookie("etap");
			switch (etap){
				case "1":
					tirage();
					break;
				case "2":
					ImageAvatar();
					break;
				case "3":
					recupdonnemonde();
					break;
				default:
					connextionMonde();
			}
		}else	connextionMonde();
	}

				/* ETAPE 2 création de l'image de l'avatar*/
	
	function ImageAvatar(){
		affichage("monde", text_jon["structure2"]);
		affichage("titre_conex",text_jon["titre7"]);
		affichage("titre_zon_enreg",text_jon["titre2"])
		affichage("creat_avatar",text_jon["creatavat"])
		
		affichage("valid_avatar",text_jon["bouton2"])
		affichage("zonne_table",text_jon["createnreg"])
		affichage("zon1-erg",text_jon["text6"]);
		affichage("infos_monde",text_jon["texte15"])
		affichage("infos_base",text_jon["texte16"])
		CouleurCorpsAvatar();/* affiche le tableau des couleurs */
		coul_corps(); /* affiche corps etde la tete avec la couleur par defaut*/
	}
	function CouleurCorpsAvatar(){
		let col_coul_tab = 1;
		let html = "<table border=1>\r\n<tr>";
		for (let index_coul = 1; index_coul <= text_jon["corps"]["nbr_corps"]; index_coul++) {
			if (col_coul_tab == text_jon["corps"]["col_table"]) {
				html += "</tr><tr>";
				col_coul_tab = 1;
				}	
			html += "<td class=\"carre\" value = \""  +  index_coul + "\" style=\"background:#" + text_jon["corps"]["coul_corps"]["coul" + index_coul]  + "\"></td>";
			col_coul_tab ++;
		}
		html += "</table>";
		affichage("zon2-erg",html);
	}
	$("#monde").on("click",".carre",function(){
		indc_coul = parseInt($(this).attr("value"));
		coul_corps();
	});	
	function coul_corps(){
		avatar_png[0] = nom_avatar
		/* modif au 28/09/2025 supression du repertoire et du pnj */
		avatar_png[1] = text_jon["corps"]["deb_corps"] + indc_coul
		avatar_png[2] = text_jon["tete"]["deb_tete"] + indc_coul
		dessin_avatar(avatar_png);
	}
	function dessin_avatar(avatar_png){
		let corps_avat = "<img src=\"images/cadre.png\"/>";
		for (let index_png = 1 ; index_png <= avatar_png.length-1; index_png++) {
			if (avatar_png[index_png] !="vide") {
				corps_avat = corps_avat + "<img src=\"images/creation_avatar/"+text_jon["rept"]["ind"+index_png]+"/"+avatar_png[index_png]+".png\" class ='dessin'/>";
			}
		}
		affichage("zone_img_avatar",corps_avat);
		console.log(avatar_png);
	}
	function Basedefavatar() {
		affichage("nav_avatar",text_jon["texte11"]);
		affichage("titre_zon_enreg",text_jon["titre4"]);
		affichage("infos_monde",text_jon["texte17"])
		indc_val = 3;
		indc_max = 5;
		OptionCreatAvatar();// affiche la liste
		affichage("valid_avatar",text_jon["bouton3"])
	}
	function OptionCreatAvatar(){
		let html = "<ul>";
		for (let index = indc_val; index <= indc_max; index++) {
			html += "<li class=\"opt_des\" value=\"" + index + "\">" + text_jon["rept"]["txt" + index] + "</li>";	
		}
		html += "</ul>";
		affichage("couleur",html);
	}

	function optionImageAvatar() {
		reper_png = "7"
		affichage("nav_avatar",text_jon["texte12"]);
		affichage("titre_zon_enreg",text_jon["titre5"]);
		affichage("infos_monde",text_jon["texte18"])
		indc_val = 7;
		indc_max = 10;
		OptionCreatAvatar();
		affichage("valid_avatar",text_jon["bouton4"])
		affichepng(reper_png);	
	}

	$("#monde").on("click",".opt_des",function(){
		reper_png = $(this).attr("value");
		affichepng(reper_png);
	});

	function affichepng(reper_png) {
		$.post("fichiers/corps.php",
		{
			rep_png :  reper_png,
		},
		function(corps){	
			affichage("zon_enreg",corps);
		});
	}
	$("#monde").on("click",".opt_img",function(){
		avatar_png[reper_png] = $(this).attr("value");
		dessin_avatar(avatar_png);
	});

function creatImageavat() {
	console.log(avatar_png);
	$.post("systeme/php/creat_imge.php",
	{
		avatar_png :  avatar_png,
	},
	function(retour){	
		// affichage("zon_enreg",corps);
		console.log(retour);
		affichage("infos_monde","")
		affichage("monde","")
		etape();
	});
}

	function ouvreregles() {
		popup("affiche_regles","flex");
		affichage("affiche_regles",text_jon["structure_regles_infos"]);
		affregles()
		affichage("aside_regles",text_jon["version_regles"] + text_jon["menu_regles"])
		// affichage("aside_regles",text_jon["menu_regles"])
		affichage("date_block",text_jon["date"])
		affichage("version_block", text_jon["version"])
		affichage("beta_block",text_jon["phase"])
	}
	function affregles() {
		affichage("boite01",text_jon["texte13"]); 
		affichage("boite02","");
		
	}
	function bugmodif() {
		affichage("boite01",text_jon["aff_modif"]); 
		affichage("boite02",text_jon["aff_bugs"]);
	}
	function blogregles() {
		affichage("boite01",text_jon["texte14"]);
		affichage("boite02","");
	}
