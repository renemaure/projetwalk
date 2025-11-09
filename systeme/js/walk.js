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
