import{ accePopupAvatarActif} from './infos_base.js'
import {TestAffichObjet,affichage,inserVar,actionRadio} from './fonctions_internes.js'
import{affpopupactif} from './popup_avatar.js'
import{DonneesMonde} from './affiche_monde.js'

export function interactionSyndic(nomobjet,description) {
    if (nomobjet=="bureau"){
        affichage("ctrl_text",description)
        let html = text_jon["txt_ouvrepopup_avatar_gauche"] +"<ol><li id='option1'>"+text_jon["txtoption1bureausyndic"]+"</li>"
        if(Avatar_actif.stokobjet!=""){
            let data =  dataObjBoutique[Avatar_actif.stokobjet]["nom_objet"]
            html+="<li id='option1'>Consulter " + data +"</li>" 
        }
        html+="</ol>"
        affichage("ctrl_diag",html)
        activ_souris = true
        /* accePopupAvatarActif()
        actionRadio(affpopupactif,0) */
    }
     if (nomobjet=="photocop"){
     }
     if (nomobjet=="porte") {
        
     }
}

export function sortirboutique() {

	presence_monde = true
	activ_souris = true
    prescenceBoutique = true
    Avatar_actif.prescence = "monde";
     console.log(Avatar_actif);
	affichage("monde",'')
	DonneesMonde();
}
