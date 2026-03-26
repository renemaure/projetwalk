/* ETAPE 2 création de l'image de l'avatar*/
	
	function ImageAvatar(){
		afficheHeader()
		affichage("monde", text_jon["structure_img"]);
		affichage("titre_conex",text_jon["titre_img_conex_2a"]);
		affichage("titre_zon_enreg",text_jon["titre_img_erg_2a"])
		affichage("creat_avatar",text_jon["creat_img_avat"]) // structure de l'image de l'avatar
		affichage("valid_avatar",text_jon["bouton_conex_2a"])
		affichage("zonne_table",text_jon["creat_img_enreg"])
		affichage("zon1-erg",text_jon["text_enreg_2a"]);
		affichage("infos_monde",text_jon["text_monde_2a"])
		affichage("infos_base",text_jon["text_base_2a"])
		avatar_png[0] = nom_avatar		
		coul_corps(); /* affiche le corps et la tête avec la couleur par defaut contenue dans la variable globale indc_coul*/
		CouleurCorpsAvatar();/* affiche le tableau des couleurs */
	}

	function CouleurCorpsAvatar(){
		let col_coul_tab = 1; 
		let html = "<table border=1>\r\n<tr>";
		for (let index_coul = 1; index_coul <= text_jon["nbr_img"]; index_coul++) {
			if (col_coul_tab == text_jon["col_table"]) {
				html += "</tr><tr>";
				col_coul_tab = 1;
			}	
			html += "<td class=\"carre\" value = \""  +  index_coul + "\" style=\"background:#" + text_jon["couleurs"]["coul" + index_coul]  + "\"></td>";
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
		//console.log(text_jon["couleurs"]["nomcoul"+ indc_coul])
		avatar_png[2] = text_jon["deb_corps"] + indc_coul
		avatar_png[3] = text_jon["deb_tete"] + indc_coul
		avatar_png[1] = text_jon["couleurs"]["nomcoul"+ indc_coul]
		dessin_avatar(avatar_png);
	}

	function dessin_avatar(avatar_png){
		let corps_avat = "<img src=\"images/cadre.png\"/>";
		for (let index_png = 2 ; index_png <= avatar_png.length-2; index_png++) {
			if (avatar_png[index_png] !="vide") {
				corps_avat = corps_avat + "<img src=\"images/creation_avatar/"+text_jon["rept"]["ind"+index_png]+"/"+avatar_png[index_png]+".png\" class ='dessin'/>";
			}
		}
		affichage("zone_img_avatar",corps_avat);
		console.log(avatar_png);
	}

	function Basedefavatar() {
		affichage("zonne_table","")
		affichage("nav_avatar",text_jon["text_conex_2b"]);
		affichage("infos_monde",text_jon["text_monde_2b"])
		affichage("valid_avatar",text_jon["bouton_conex_2b"])
		reper_png = "4"
		indc_val = 4;
		indc_max = 6;
		OptionCreatAvatar();// affiche la liste
		affichepng(indc_val);	
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
		let indice = avatar_png.findIndex((element) => element == "vide")
		console.log("indice vide : " + indice)
		if((indice>1) && (indice<=4)){
			console.log("pas bouche") 
			gestion_barre_text (text_jon["txt_nibouche_niyeux"])
		}
		else{
			affichage("nav_avatar","");
			affichage("nav_avatar",text_jon["text_conex_2c"]);
			affichage("infos_monde",text_jon["texte18"])
			affichage("valid_avatar",text_jon["bouton4"])
			reper_png = "8"
			indc_val = 8;
			indc_max = 11;
			OptionCreatAvatar();
			affichepng(indc_val);			
		}		
	}

	$("#monde").on("click",".opt_des",function(){
		reper_png = $(this).attr("value");
		console.log("indice test" + reper_png)
		affichepng(reper_png);
	});

	function affichepng(indice) {
		test_rep = text_jon["rept"]["ind" + indice] 
		//console.log(test_rep)
			
		$.post("systeme/php/corps_nouv.php",
		{
			rep_png : test_rep,
			
		},
		function(corps){	
			data = JSON.parse(corps);
			console.log(data)
			//console.log(data["0"]) 
			affichage("titre_zon_enreg",text_jon["titre_debut_enreg"] + text_jon["rept"]["ind"+indice]+text_jon["titre_fin_enreg"])
			let rep_img ="images/creation_avatar/"+ test_rep +"/";
			console.log(rep_img)
			let html = "<table id=\"tab_accesoire\">\r\n<tr>"
			let lig = 1;
			for (let index = 1; index <= data["0"]-1; index++){
				html += "<td><img src=\"" + rep_img + data[index] + ".png\" border=\"0\" width=\"70\" height=\"70\"  class=\"opt_img souris\" value = \""+ data[index] +"\"></td>";
				if(lig == 6){
					html +="</tr><tr>\n\r"; 
					lig = 1;
				}else lig ++
			}
			html += "</tr></tble>"
			affichage("zonne_table",html)

			
		});
	}
	$("#monde").on("click",".opt_img",function(){
		avatar_png[reper_png] = $(this).attr("value");
		dessin_avatar(avatar_png);
	});
    
	function creatImageavat() {

		let indice = avatar_png.findIndex((element) => element == "vide")
		console.log("indice vide : " + indice)
		if(indice<=7){
			console.log("pas d'habits") 
			gestion_barre_text (text_jon["txt_morale_nu"])
		}
		else{
			/*$.post("systeme/php/creat_imge.php",
			{
				avatar_png :  avatar_png,
			},
			function(retour){	
				console.log(retour);
				affichage("infos_monde","")
				affichage("monde","")
				etape();
			});*/	
		}
	}