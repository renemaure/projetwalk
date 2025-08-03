// jQuery(document).ready(function($){
	const fin_recul = 300; // position mini de l'avatar
	const fin_avanc = 900; //position max de l'avatar 
	let fin_decor = -3500; // position max du decor
	let deb_decor = 0; // position de debut du decor
	let avc_monde = 0; // nombre de pixel d'avance du monde
	const delais = 5000;// délais d'animation
	const pas = 150; // pas d'avance avec bouton
	const decalage_monde = 600; // decalage du monde au demarage pour la position de l'avatar
	const marg_main = parseInt($("main").css('margin-left')); // margin de la balise <main></main> 
	const largeur_monde = 1200; // largeure du monde ne sert pas pour le moment
	const indc_coul = 1; // couleur de base du corps de l'avatar

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
	let avatar_png= Array(15).fill("vide.png");
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

	// var clas_avatar = ""; // donne une class à chaque avatar
	// var avc_mond; // rien
	// var nom_avatar;  /* nom du notre personnage */
	// let recalcul; //rien
	// var pos_avat;
	/* déclaration des tableau données des avatars */ 
	// let tab_pos_avat = []; //nons des avatars
	// let tab_pos_ind = []; //position absolu des avatars dans le monde	
	// let tab_etap_avat = [];//etape des avatars enregistrés inutile!
	/* let tab_phy = [];//tableau de la force des avatars 30/06/2024
	let tab_char = [];//tableau de la force des avatars 30/06/2024
	let tab_intel = [];//tableau de la force des avatars 30/06/2024
	let tab_beaute = [];//tableau de la force des avatars 30/06/2024
	let tab_vital = [];//tableau de la force des avatars 30/06/2024
	let tab_conf = [];//tableau de la force des avatars 30/06/2024
	let tab_pwalk = [];//tableau de la force des avatars 30/06/2024 */
	// let indc_avatar; // l'indice de notre avatar dans les tableaux de données
	// var decor = 1; // rien
	/* var max_rept = 10 ;
	var indice_img = 1; //ne sert plus
	let tab_cool = Array(max_rept); // tableau la ref de la couleur de chaque png de l'avatar */
	
			/* nouvelle fetch en test juilet 2024 
				modification par pasacl ajout d'un appel de la fonction AffichePermanent()
				permetant l'affichage des textes permanant du site
			*/
	fetch('systeme/donnees/walk.json')
  	.then( response => {
    return response.json();
  	})
  	.then( json =>{
		text_jon = json;
		AffichePermanent(); // ajout pascal au 15/06/2025
		etape(); // modif supression de l'argument text_jon 15/06/2025
		} 
	)

	/* test d'un fetch avec envoi de données  04/08/2024*/
/* 	fetch(`${urlBase}/js-ajax/exemple/toLower.php`, {method: "POST", body: data}) // le body corespond au texte à envoyer
	.then(response => response.json())
	.then(result => {
		document.getElementById('consolef1p').innerHTML = result.text;
	}) */
	
		/*  */
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
	/* fin test fetch juillet 2024 */

					/* ETAPE 0 */

	function connextionMonde(){
		affichage("monde",text_jon["structure_etape0"] );
		affichage("infos_monde", text_jon["selogger"]);
		affichage("infos_base", text_jon["inscrtiption"]);
	}

	/* fonction logger au monde en mode test 04/05/2024 */
		function seLoggerMonde(){
			let form_nom_log = document.getElementById("nom_log").value;
			let form_passe_log = md5(document.getElementById("passe_log").value);
			$.post("systeme/php/gestion_logger.php",{
				nom_log: form_nom_log,
				pass_log: form_passe_log,
			}, function(connex){
				console.log(connex);
				if (connex["valid"] !="ok") {
					affichage("retour_log",connex["erreur"]);
					document.getElementById("envoi_log").textContent=(`Recommençez`);
					document.getElementById("civil").reset();
				}
				else{
					affichage("infos_monde","");// efface les textes
					affichage("infos_base", "");
					affichage("monde", "");
					etape();
				} 
			},'json');
			
		}
	/* nouvelle fonction pour s'enregistrer sur lemonde  modif du 04/08/2024 */
	function enregistreMonde(){
		let form_nom_erg = document.getElementById("nom_ins").value;
		let form_mail_erg = document.getElementById("mail_ins").value;
		let form_pass_erg = md5(document.getElementById("pass_ins").value);
		// TestAffichInfo("test si la fonction marche valeur revoyer nom entré",form_pass_erg);
		$.post("systeme/php/gestion_logger.php",{
			nom_ins: form_nom_erg,
			pass_ins: form_pass_erg,
			mail_ins: form_mail_erg,
		}, function(connex){
			// console.log(connex);
			if (connex["valid"] !="ok") {
				affichage("retour_ins",connex["erreur"]);
				document.getElementById("envoi_ins").textContent=(`Recommençez`);
			}else {
				affichage("infos_monde","");
				console.log(connex)
				etape();
			}
		},'json');
	}

					/* ETAPE 1 tirage nouvel avatar*/
	function tirage(){
		affichage("monde", text_jon["structure1"]);
		affichage("titre_conex",text_jon["titre1"])
		affichage("zon_form",text_jon["tirage"]);
		affichage("infos_monde",text_jon["text4"]);
		affichage("infos_base",text_jon["text9"]);
		affichage("zon_enreg",text_jon["text10"]);
		gesoption("physi",rest_piont,physi);
		gesoption("intel",rest_piont,intel);
		gesoption("charis",rest_piont,charis);
	} 

	function changePhysique(){
		physi = parseInt($("#physi").val());
		console.log("phy : "+ physi);
		rest_piont =  calcul_point("physi",rest_piont,physi);
	}
	function changeIntelligence(){
		intel = parseInt($("#intel").val());
		rest_piont =  calcul_point("intel",rest_piont,intel);
	}
	function changeCharisme(){
		charis = parseInt($("#charis").val());
		rest_piont =  calcul_point("charis",rest_piont,charis);
	}

	function afficheCaracteristique(){
		type_age = document.querySelector('input[name=recup_age]:checked').value;
		// console.log("type age  : "+ type_age);
		tirage_beau = Math.ceil((physi + intel) / 2);
		tirage_conf= Math.ceil((intel+ charis) / 2);
		tirage_vita= Math.ceil(( physi + charis) / 2);
		tirage_pk = physi + intel +  charis + rest_piont;
		switch (type_age){
			case "jeune":
				tirage_age = 16 + tirage_beau;
				break;
			case "adulte":
				tirage_age = 30 + tirage_vita;
				break;
			case "vieux":
				tirage_age = 50 + tirage_conf;
				break;
			default:
		}
		tirage_not = Math.ceil((physi + intel + charis ) / 3);
		affichage("phy", physi);
		affichage("int", intel);
		affichage("ch", charis);
		affichage("aff_beaute_avat", tirage_beau);
		affichage("conf", tirage_conf);
		affichage("vita", tirage_vita);
		affichage("pk", tirage_pk);
		affichage("nt", tirage_not);
		affichage("age", tirage_age + "ans");
	}

	function enregistre_avat() {
			// console.log("bouton déclenché");
		$.post("systeme/php/gestion_logger.php",{
			charisme : charis,
			intellligence : intel,
			physique : physi,
			nom_avatar : nom_avatar,
			beaute : tirage_beau,
			vitalite : tirage_vita,
			confiance :  tirage_conf,
			pointk : tirage_pk,
			notoriete : tirage_not,
			age : tirage_age,
		},
		function(data){
			console.log(data);
			etape();
		});	
	}


				/* ETAPE 2 création avatar*/
	
	function ImageAvatar(){
		affichage("monde", text_jon["structure2"]);
		affichage("titre_conex",text_jon["titre2"]);
		affichage("creat_avatar",text_jon["creatavat"])
		affichage("nav_avatar",text_jon["text6"]);
		affichage("valid_avatar",text_jon["bouton2"])
		CouleurCorpsAvatar();/* affiche le tableau des couleurs */
		coul_corps(); /* affiche corps etde la tete avec la couleur par defaut*/
	}

	function Basedefavatar() {
		affichage("nav_avatar",text_jon["texte11"]);
		affichage("titre_zon_enreg",text_jon["titre4"]);
		indc_val = 3;
		indc_max = 6;
		OptionCreatAvatar();
		affichage("valid_avatar",text_jon["bouton3"])
		affichepng(reper_png); /* lanc e le tableau des differentes options d'hanillement */
		console.log(avatar_png);
	}
	function optionImageAvatar() {
		affichage("nav_avatar",text_jon["texte12"]);
		affichage("titre_zon_enreg",text_jon["titre5"]);
		indc_val = 7;
		indc_max = 10;
		OptionCreatAvatar();
		affichage("valid_avatar",text_jon["bouton4"])
		affichepng(reper_png);	
		console.log(avatar_png);
	}
	function OptionCreatAvatar(){
		let html = "<ul>";
		for (let index = indc_val; index <= indc_max; index++) {
			html += "<li class=\"opt_des\" value=\"" + index + "\">" + text_jon["rept"]["txt" + index] + "</li>";	
		}
		html += "</ul>";
		affichage("couleur",html);
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
		affichage("couleur",html);
	}

	$("#monde").on("click",".carre",function(){
		indc_coul = parseInt($(this).attr("value"));
		coul_corps();
	});	

	function coul_corps(){
		avatar_png[1] = "corps/" + (text_jon["corps"]["deb_corps"] + indc_coul) + ".png";
		avatar_png[2] = "tete/" + (text_jon["tete"]["deb_tete"] + indc_coul) + ".png";
		dessin_avatar(avatar_png);
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

	function dessin_avatar(avatar_png){
		let corps_avat = "<img src=\"images/cadre.png\"/>";
		for (let index_png = 1 ; index_png <= avatar_png.length-1; index_png++) {
				corps_avat = corps_avat + "<img src=\"images/creation_avatar/"+ avatar_png[index_png]+"\" class ='dessin'/>";
		}
		// console.log(avatar_png[1]);
		$("#zone_img_avatar").html(corps_avat);
		
	}

	function creatImageavat() {
		console.log(avatar_png);
		$.post("systeme/php/creat_imge.php",
		{
			avatar_png :  avatar_png,
		},
		function(retour){	
			// affichage("zon_enreg",corps);
			console.log(retour);
			affichage("infos_monde","");
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
