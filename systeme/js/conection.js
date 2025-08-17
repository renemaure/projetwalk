
    	/* ETAPE 0 */


	function connextionMonde(){
		affichage("monde",text_jon["structure_etape0"] );
        document.querySelector("#zon_conex h3").innerHTML = text_jon["titre_acces"]
		document.querySelector("#zon_enreg h3").innerHTML = text_jon["titre_enrg"]
		affichage("infos_monde", text_jon["selogger"]);
		affichage("infos_base", text_jon["inscrtiption"]);
	}