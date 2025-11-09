

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
		coul_corps(); /* affiche corps et de la tete avec la couleur par defaut*/
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
		$.post("systeme/php/creat_imge.php",
		{
			avatar_png :  avatar_png,
		},
		function(retour){	
			console.log(retour);
			affichage("infos_monde","")
			affichage("monde","")
			etape();
		});
	}