
					/* ETAPE 1 tirage  nouvel avatar*/
	function tirage(){
		afficheHeader()
		affichage("monde", text_jon["structure_tirage"]);
        	document.querySelector("#zon_conex h3").innerHTML = text_jon["titre_tirage"]
        	document.querySelector("#zon_enreg h3").innerHTML = text_jon["titre_regles_tirage"]
        	affichage("affiche_conex",text_jon["tirage"]);
		document.getElementById("affiche_erg").style.display="block"
        	affichage("affiche_erg",text_jon["regles_aptitude"]);

		affichage("infos_monde",text_jon["structure_infos"]);
		document.querySelector("#infos_monde h3").innerHTML = text_jon["titre_monde_1"]
		document.querySelector("#infos_monde div").innerHTML = text_jon["text_monde_1"]

		affichage("infos_base",text_jon["structure_infos"]);
		document.querySelector("#infos_base h3").innerHTML = text_jon["titre_base_1"]
		document.querySelector("#infos_base div").innerHTML = text_jon["text_base_1"]	

		gesoption("physi",rest_piont,physi);
		gesoption("intel",rest_piont,intel);
		gesoption("charis",rest_piont,charis);

		/*type_age = document.querySelector('input[name=recup_age]:checked').value;*/
		/* modication au 17/02/2026 ajout de gesoption dans chaque fonctions pour mettre à jourles select de chaque aptitude et deplacer la ligne recup age dans chaque fonction aptitude */	
	} 
	function changePhysique(){
		physi = parseInt($("#physi").val());
		console.log("phy : "+ physi);
		rest_piont =  calcul_point("physi",rest_piont,physi);
		gesoption("intel",rest_piont,intel);
		gesoption("charis",rest_piont,charis);
		type_age = document.querySelector('input[name=recup_age]:checked').value;
	}
	function changeIntelligence(){
		intel = parseInt($("#intel").val());
		rest_piont =  calcul_point("intel",rest_piont,intel);
		gesoption("physi",rest_piont,physi);
		gesoption("charis",rest_piont,charis);
		type_age = document.querySelector('input[name=recup_age]:checked').value;
		
	}
	function changeCharisme(){
		charis = parseInt($("#charis").val());
		rest_piont =  calcul_point("charis",rest_piont,charis);
		gesoption("physi",rest_piont,physi);
		gesoption("intel",rest_piont,intel);
		type_age = document.querySelector('input[name=recup_age]:checked').value;
	}

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
  		if( max_opt > 6) max_opt = 6 //modif 2026
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

		/* affichage des aptitudes secondaire*/
	function afficheCaracteristique(){
        	document.querySelector("#zon_conex h3").innerHTML = text_jon["titre_regles_tirage2"]
		affichage("affiche_conex",text_jon["text_tirage_second"]);
		document.querySelector("#zon_enreg h3").innerHTML = text_jon["titre_regles_seconds"]
        	document.getElementById("affiche_erg").style.display="flex" 
        	affichage("affiche_erg",text_jon["texte_aptitudes_second"]);
		
		const zon_id = document.getElementById("zon_enreg");
		const bouton = document.createElement("div")
		bouton.id = "bouton_tirage"
		//bouton.setAttribute("class","v10")
		zon_id.appendChild(bouton);
		affichage("bouton_tirage",text_jon["bouton7"])
	
		tirage_beau = Math.ceil((physi + intel) / 2);
		tirage_conf= Math.ceil((intel+ charis) / 2);
		tirage_vita= Math.ceil(( physi + charis) / 2);
		tirage_pk = physi + intel +  charis + rest_piont;
		let tirage_memoire = intel + 1 // pour la postion 0
		
		switch (type_age){
			case "jeune":
				tirage_age = 16 + tirage_beau;
				tirage_memoire = tirage_memoire + 1
				break;
			case "adulte":
				tirage_age = 30 + tirage_vita;
				break;
			case "vieux":
				tirage_age = 50 + tirage_conf;
				tirage_memoire = tirage_memoire - 1
				if(tirage_memoire == 2) tirage_memoire = 2
				break;
			default:
		}
		/* notorieté calcul moyenne  fois 10 au 21/09/2025 */
		tirage_not = parseInt(((physi + intel + charis ) / 3)*10);
		phrase_memoire =  Array(tirage_memoire).fill("vide");
		phrase_memoire["0"] = tirage_memoire -1
		phrase_memoire = phrase_memoire.toString(",")
		console.log( phrase_memoire)
		
		affichage("phy", physi);
		affichage("int", intel);
		affichage("ch", charis);
		affichage("aff_beaute_avat", tirage_beau);
		affichage("conf", tirage_conf);
		affichage("vita", tirage_vita);
		affichage("pk", tirage_pk);
		affichage("nt", tirage_not);
		affichage("age", tirage_age + "ans");
		affichage("memoire", phrase_memoire["0"]);
	}

	function enregistre_avat() {
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
			memoire : phrase_memoire,
		},
		function(data){
			console.log(data);
			etape();
		});	
	}

