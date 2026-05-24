import {affichage,effaceMonde} from "./modules_js/fonctions_internes";
import {etape} from'./walk.js'

export function gesoption(idselect, rest_piont, point_caract){
  		let max_opt = point_caract + parseInt(rest_piont/2);
  		if( max_opt > 6) max_opt = 6 //modif 2026
  		let html = "";
  		let selc_defaut = "";
  		for (let index_png = 1; index_png <= max_opt; index_png++) {
    			if(index_png == point_caract) selc_defaut = " selected ";
    			else selc_defaut = "";
    			html = html + "<option" + selc_defaut + " value=\"" + index_png + "\">" + index_png + "</option>\r\n";
  		}
  		max_opt = 0;
        affichage(idselect,html)
        affichage("reste","Il vous reste "+ rest_piont +" points de création")
  		return rest_piont;
    }

    export function changePhysique(){
        physi = document.getElementById("physi").value;
        console.log("phy : "+ physi);
        rest_piont =  calcul_point("physi",rest_piont,physi);
        gesoption("intel",rest_piont,intel);
        gesoption("charis",rest_piont,charis);
        type_age = document.querySelector('input[name=recup_age]:checked').value;
    }
    export function changeIntelligence(){
        intel = document.getElementById("intel").value;
		rest_piont =  calcul_point("intel",rest_piont,intel);
		gesoption("physi",rest_piont,physi);
		gesoption("charis",rest_piont,charis);
		type_age = document.querySelector('input[name=recup_age]:checked').value;
		
	}
	export function changeCharisme(){
		charis = document.getElementById("charis").value;
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
export function calculAptitudes() {
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
	}
export function enregistre_avat() {
	fetch("systeme/php/gestion_logger.php", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: new URLSearchParams({
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
		})
			})
			.then(response => response.json())
			.then(data => {
				console.dir(data);
				effaceMonde()
				etape();
				
			})
			.catch(error => {
				console.error("Erreur :", error);
			});
}
