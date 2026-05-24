import {getDataMonde} from './modules_js/data_site.js'
import{donneeavataractif} from './modules_js/avatar_actif.js'
import{DonneesMonde} from './modules_js/affiche_monde.js'
import{gestionEven} from './modules_js/gestion_evenements.js'
import{ouvirBoutique} from './modules_js/gestion_boutiques.js'
import { affichHeurMond} from './modules_js/temps_monde.js'
import{txt_debut_centre} from './modules_js/gestion_infos_centrale.js'
import {dialogueAvatarMonde} from './modules_js/infos_base.js'
import {afficheHeader} from './modules_js/footer.js'

export async function lanceurMonde(){
    afficheHeader()
    Avatmonde = await getDataMonde()
    console.log(Avatmonde)
    donneeavataractif();
    affichHeurMond()
    dialogueAvatarMonde()
    txt_debut_centre() 
    if (Avatar_actif.prescence=="monde"){
        DonneesMonde();
    } 
    else ouvirBoutique(Avatar_actif.prescence)
}
export function QuiterMonde(){
		$.post("systeme/php/gestion_logger.php",{
			sortir_monde : "ok",
		},
		function(data){
			console.log(data);
            location.reload();	
		});
}