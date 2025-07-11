// jQuery(document).ready(function($){
	let fin_recul = 100; // position mini de l'avatar
	let fin_avanc = 1000; //position max de l'avatar 
	let fin_decor = -3450; // position max du decor
	let deb_decor = 0; // position de debut du decor
	let avc_monde = 0; // nombre de pixel d'avance du monde
	const delais = 5000;// délais d'animation
	const pas = 150; // pas d'avance avec bouton
	
	var clas_avatar = ""; // donne une class à chaque avatar
	var avc_mond; // rien
	var pos_avatar;
	let pos_monde; // actif
	var nom_avatar;  /* nom du notre personnage */
	let recalcul; //rien
	let pos_z = "1";
	// var pos_avat;
	const marg_main = parseInt($("main").css('margin-left'));
	let largeur_monde = 1200;

	/* déclaration des tableau données des avatars */ 
	let tab_pos_avat = []; //nons des avatars
	let tab_pos_ind = []; //position absolu des avatars dans le monde
	let tab_pos_rel =[]; // position affiché relative des avatars dans le monde
	// let tab_etap_avat = [];//etape des avatars enregistrés inutile!
	let tab_phy = [];//tableau de la force des avatars 30/06/2024
	let tab_char = [];//tableau de la force des avatars 30/06/2024
	let tab_intel = [];//tableau de la force des avatars 30/06/2024
	let tab_beaute = [];//tableau de la force des avatars 30/06/2024
	let tab_vital = [];//tableau de la force des avatars 30/06/2024
	let tab_conf = [];//tableau de la force des avatars 30/06/2024
	let tab_pwalk = [];//tableau de la force des avatars 30/06/2024

	let avc_avat; // nombre de pixel que doit faire notre avatar
	let indc_avatar; // l'indice de notre avatar dans les tableaux de données

	var decor = 1; // rien
	var etap; // etape de création
	let indc_coul = 1; // couleur de base du corps de l'avatar
	var max_rept = 10 ;
	var indice_img = 1; //ne sert plus
	let tab_cool = Array(max_rept); // tableau la ref de la couleur de chaque png de l'avatar
	var intel = 3;
	var physi = 3;
	var charis = 3;
	var rest_piont = 5;
	let text_jon = new Array(50);
	let corps_png = "";
	let avatar_png= Array(15).fill("vide.png");
	let memoir_png;
	let reper_png = "";
	let bulle_avatar="";
	let Avatmonde = new Object();
	let pos_avat_monde = []; //position des avatars indexés dans le monde utilisé!!
	let age_monde;
	let heur_monde;

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
		AffichageHeader(text_jon);
		document.getElementById("monde").classList.add("monde_flex");// a voir si utile icic pascal au 15/06/2025
		if(getcookie("nom")){
			nom_avatar = getcookie("nom");
			etap = getcookie("etap");
			switch (etap){
				case "1":
					tirage(text_jon);
					break;
				case "2":
					dessin(text_jon);
					break;
				case "3":
					$.post("systeme/php/gestion_avatar.php",acccemonde,'json');
					break;
				default:
					connextionMonde(text_jon);
			}
		}else	connextionMonde(text_jon);
	}
	/* fin test fetch juillet 2024 */

					/* ETAPE 0 */

	/* fonction logger au monde en mode test 04/05/2024 */
		function seLoggerMonde(){
			let form_nom_log = document.getElementById("nom_log").value;
			let form_passe_log = md5(document.getElementById("passe_log").value);
			$.post("systeme/php/gestion_logger.php",{
				nom_log: form_nom_log,
				pass_log: form_passe_log,
			}, function(connex){
				console.log(connex["valid"]);
				if (connex["valid"] !="ok") {
					affichage("retour_log",connex["erreur"]);
					document.getElementById("envoi_log").textContent=(`Recommençez`);
				}
				else{
					affichage("infos_monde","");// efface les textes
					etape();
				} 
			},'json');
			
		}
	/* nouvelle fonction pour s'enregistrer sur lemonde  modif du 04/08/2024 */
	function enregistreMonde(){
		let form_nom_erg = document.getElementById("nom_ins").value;
		let form_mail_erg = document.getElementById("mail_ins").value;
		let form_pass_erg = md5(document.getElementById("pass_ins").value);
		TestAffichInfo("test si la fonction marche valeur revoyer nom entré",form_pass_erg);
		$.post("systeme/php/gestion_logger.php",{
			nom_ins: form_nom_erg,
			pass_ins: form_pass_erg,
			mail_ins: form_mail_erg,
		}, function(connex){
			console.log(connex);
			if (connex["valid"] !="ok") {
				affichage("retour_ins",connex["erreur"]);
				document.getElementById("envoi_ins").textContent=(`Recommençez`);
			}else {
				affichage("infos_monde","");
				etape();
			}
		},'json');
	}

						/* bug juin 2025 */
	
	/* Etape 1 tirage nouvel avatar */
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

				/* ETAPE 2 */
	
	function dessin(text_jon){
		affichage("monde", text_jon["structure2"]);
		AffichageHeader(text_jon)
		affichage("titre_conex",text_jon["titre2"]);
		affichage("creat_avatar",text_jon["creatavat"])
		OptionCreatAvatar(text_jon);
		CouleurCorpsAvatar(text_jon)
		affichage("infos_monde",text_jon["text6"]);
		coul_corps(); 
	}
	function OptionCreatAvatar(text_jon){
		let html = "<ul>";
		for (let index = 3; index <= text_jon["rept"]["max"]; index++) {
			html += "<li class=\"opt_des\" value=\"" + index + "\">" + text_jon["rept"]["txt" + index] + "</li>";	
		}
		html += "</ul>";
		affichage("nav_avatar",html);
	}
	function CouleurCorpsAvatar(text_jon){
		let col_coul_tab = 1;
		let html = "<table border=0>\r\n<tr>";
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
	function coul_corps(){
		$.post("systeme/donnees/avatar.json",function(data){	
			console.log("ici " + data);
			$("#monde").on("click",".carre",function(){
				indc_coul = parseInt($(this).attr("value"));
				coul_corps(indc_coul);	
			});	
			avatar_png[1] = "corps/" + (data["corps"]["deb_corps"] + indc_coul) + ".png";
			avatar_png[2] = "tete/" + (data["tete"]["deb_tete"] + indc_coul) + ".png";
			// console.log(avatar_png[1]);
			dessin_avatar(avatar_png);
		},'json');
	}
	$("#monde").on("click",".opt_des",function(){
		reper_png = $(this).attr("value");
		$.post("fichiers/corps.php",
		{
			rep_png :  reper_png,
		},
		function(corps){	
			$("#zon_enreg").html(corps);
		});
	});	
	$("#monde").on("click",".opt_img",function(){
		avatar_png[reper_png] = $(this).attr("value");
		dessin_avatar(avatar_png);
	});
	function dessin_avatar(avatar_png){
			//  corps_avat ="";
		let corps_avat ="<img src=\"images/cadre.png\"/>";
		for (let index_png = 1 ; index_png <= avatar_png.length-1; index_png++) {
				corps_avat = corps_avat + "<img src=\"images/creation_avatar/"+ avatar_png[index_png]+"\" class ='dessin'/>";
		}
		console.log(avatar_png[1]);
		$("#zone_img_avatar").html(corps_avat);
	}
	

