
function ouvreregles() {
		popup("affiche_regles","flex");
		affichage("affiche_regles",text_jon["structure_regles_infos"]);
		affinfos()
		
		affichage("aside_regles",text_jon["version_regles"] + text_jon["menu_regles"])
    	affichage("date_block",data.date_footer)
    	affichage("version_block",data.version)
    	affichage("beta_block",data.phrase)
	}
	function affregles() {
		affichage("boite01",text_jon["txt_regles_info_01"]); 
		affichage("boite02",text_jon["txt_regles_info_02"]);
		
	}
	function bugmodif() {
		affichage("boite01",text_jon["aff_modif"]); 
		affichage("boite02",text_jon["aff_bugs"]);
	}
	function blogregles() {
		affichage("boite01",text_jon["texte14"]);
		affichage("boite02","");
	}
    function affinfos() {

		affichage("boite01",text_jon["presentation_monde"]);
		affichage("boite02",text_jon["popup_infos_monde"]);
	}