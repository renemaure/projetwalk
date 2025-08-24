


					/* ETAPE 1 tirage nouvel avatar*/
	function tirage(){
		affichage("monde", text_jon["structure_tirage"]);
        document.querySelector("#zon_conex h3").innerHTML = text_jon["titre_tirage"]
        document.querySelector("#zon_enreg h3").innerHTML = text_jon["titre_regles"]
        document.getElementById("creat_avatar").style.display="block"
        affichage("creat_avatar",text_jon["regles_aptitude01"]);
		affichage("zon_form",text_jon["tirage"]);
		affichage("infos_monde",text_jon["text4"]);
		affichage("infos_base",text_jon["text9"]);
		gesoption("physi",rest_piont,physi);
		gesoption("intel",rest_piont,intel);
		gesoption("charis",rest_piont,charis);
		type_age = document.querySelector('input[name=recup_age]:checked').value;
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
        affichage("zon_form"," ");
        document.querySelector("#zon_conex h3").innerHTML = text_jon["titre_regles2"]
        document.querySelector("#zon_enreg h3").innerHTML = text_jon["titre_ap_seconds"]
        document.getElementById("creat_avatar").style.display="flex"
        affichage("creat_avatar",text_jon["structure_aptitudes_seond"]);
	
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
