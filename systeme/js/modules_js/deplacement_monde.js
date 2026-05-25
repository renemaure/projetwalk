import {gestionMonde} from './gestion_monde.js'
import{avBoutique} from './gestion_boutiques.js'
import{affFinDecor,vide_ctrl_diag,effaceDebutTour} from './infos_base.js'

export function avance_souris(e){
    if (!activ_souris) return;
    effaceDebutTour()
    activ_souris = false;
    pos_avatar = Avatar_actif.pos_rel
     console.log("position de l'avatar: " + Avatar_actif.pos_rel)
     console.log("position de la souris: "+ e.pageX)
    avc_avat = parseInt(e.pageX - marg_main - pos_avatar - 55);
    if (presence_monde) calculAvance();
    else avBoutique(); // déplacement dans les boutiques
}
export function  calculAvance(){
    let avc_monde = -avc_avat;
    let idAvatar = `.${Avatar_actif.nom}`;
    let calAvatAff = pos_avatar + avc_avat;
    let idBulle = `#bulle_${Avatar_actif.nom}`
    let pos_debut_monde = parseInt(document.querySelector("#img-monde").offsetLeft);
    let pos_fin_monde = pos_monde -1200 - marg_main
    if (parseInt(pos_fin_monde + avc_monde)> fin_decor && parseInt(pos_monde + avc_monde) < deb_decor){ 
        vide_ctrl_diag()     
        if ( Math.abs(pos_avatar) + Math.abs(avc_avat) < fin_avanc &&  Math.abs(pos_avatar) + Math.abs(avc_avat) > fin_recul){ 
            avc_monde = -avc_avat/2;
            avc_avat = avc_avat/2;
            lanceAnim(idAvatar,idBulle,calAvatAff) 
        }      
            animeMonde(avc_monde) 
            pos_monde = pos_debut_monde + avc_monde
            document.querySelector("#img-monde").addEventListener("transitionend",gestionMonde);
    } else {
        affFinDecor() //info base fin du monde
        if ( parseInt(pos_avatar -  Math.abs(pos_debut_monde+55)) < deb_decor || parseInt(pos_avatar -  Math.abs(pos_fin_monde)) > fin_decor) {
            lanceAnim(idAvatar,idBulle,calAvatAff)
            document.querySelector(idAvatar).addEventListener("transitionend",gestionMonde); //bug 06/04/2026 reste bloqué dans la condition
        }
    }
}
function lanceAnim(idAvatar,idBulle,calAvatAff) {
    animeAvatar(idAvatar,calAvatAff)
    animeAvatar(idBulle,calAvatAff)
}
export function animeAvatar(idAvatar,finPosAvat) {
        document.querySelector(idAvatar).style.cssText = "transition: left " + delais + "ms; left:"+ parseInt(finPosAvat) +"px;"
    
}
function animeMonde(avc_monde){    
    const imgMonde = document.getElementById("img-monde");
    imgMonde.style.transition = `left ${delais}ms`;
    imgMonde.style.left = (pos_monde + avc_monde) + 'px';
    for (var j = 1; j <= Avatmonde.inc; j++) {    // Déplacement des avatars
        if (Avatar_actif.nom != Avatmonde["inc"+j]["nom"]){
            const elements = document.querySelectorAll(
                "." + Avatmonde["inc"+j]["nom"] + ", #bulle_" + Avatmonde["inc"+j]["nom"]
            );
            elements.forEach(element => {
                const currentLeft = parseInt(getComputedStyle(element).left)
                element.style.transition = `left ${delais}ms`;
                element.style.left = (currentLeft + avc_monde) + 'px';
            });
        } 
    }
}
