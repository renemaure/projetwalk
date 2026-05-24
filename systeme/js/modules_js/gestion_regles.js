import {affichage,popup,affichBoite12} from './fonctions_internes.js';
// import{fermerRegles} from './gestion_evenements.js';
import {getTextregles} from "./data_site.js";

export function ouvreregles() {
		popup("affiche_regles","flex");
		affichage("affiche_regles",text_jon["structure_regles_infos"]);
		aside()
		acceuilRegles()
	}
	function aside() {
		affichBoite12("aside_regles",3,"aside") 
		/* aside 1 */
	    affichage("aside1",text_jon["version_regles"])
	   	affichage("date_block",data.date_footer)
    	affichage("version_block",data.version)
    	affichage("beta_block",data.phase)
		/* aside 2 */
		affichage("aside2",text_jon["menu_regles"])
		/* aside 3 */
		let txt = "<id=\"bt_sort_regl\"><button id='btRegles' class=\"btn_cookie\">Fermer la popup</button></div>"
		affichage("aside3",txt)
         document.getElementById("btRegles").addEventListener("click", function () {
           popup('affiche_regles','none')})
		document.getElementById("conextion").addEventListener("click",conextionRegles)
	}
	function acceuilRegles() {
		affichBoite12("corps_regles",2,"boite") 
		/* boite 1 */
		let text = regleData.titre_boite1
		text += regleData.texte_boite1
		affichage("boite1",text)
		/* boite 2 */
		text = regleData.titre_boite2
		text += regleData.texte_boite2
		affichage("boite2",text)
		
	}
	function conextionRegles() {
		affichBoite12("corps_regles",3,"boite",2)
		/* boite 3 */
		let text = regleData.titre_boite3
		text += regleData.texte_boite3
		affichage("boite3",text)
			/* boite 4 */
		text = regleData.titre_boite4
		text += regleData.texte_boite4
		affichage("boite4",text)
		/* boite 5 */
		text = regleData.titre_boite5
		text += regleData.texte_boite5
		affichage("boite5",text)
	}
	