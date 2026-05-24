import {affichage,inserVar,getcookie} from './fonctions_internes.js'
import {debutTour,dialogueMemLieux} from './infos_base.js'
import { affichHeurMond} from './temps_monde.js'
import {gestionMapBoutiques} from './gestion_boutiques.js'
import{txt_debut_centre} from './gestion_infos_centrale.js'
import{Nouvdonneemond,synchroAvatBoutique} from './gestion_monde.js'
import{gestionEven} from './gestion_evenements.js'

export function DonneesMonde() {
    document.getElementById("monde").classList.remove("monde_flex");
    fin_decor = data.taille_monde;
    const chemImgMonde = 'images/decor/'+ data.img_decor +'.png'
    const monde = document.getElementById("monde");
    const zoneSouris = document.createElement("div")
    zoneSouris.id = "zone_souris"
    monde.appendChild(zoneSouris);
    const imgMonde = document.createElement("img");
    imgMonde.id = "img-monde";
    imgMonde.src = chemImgMonde;
    imgMonde.setAttribute("usemap","#boutique")
    monde.appendChild(imgMonde);
    document.getElementById("img-monde").style.cssText = `left: ${pos_monde}px; display:block;`;
    gestionMapBoutiques()
    affichageavatarmonde()
    gestionEven(); /* lance les évenements avant toute action precense boutiques voir les regles si bon */
    synchroAvatBoutique()
/*     if (prescenceBoutique) {
        console.log("dans la boucle avant nouvelles données monde")
        debutTour()
        Nouvdonneemond()
        gestionEven()
    } */
}
 /* modification au 08/05/2026: corection d'un bug de placement de l'avatar -actif en sortie de boutique
    fait une codition pour detecter le nom de l'avatar-actif est lui apliqué sa position relative calculée à chaque tour */
function affichageavatarmonde(){
    let pos_z = "1";
    let coul_bull = "bulle"
    let posit_avat_css;
   	for (let j = 1; j <= Avatmonde.inc; j++) {  
        if (Avatmonde[`inc${j}`]['nom'] == Avatar_actif.nom)  posit_avat_css = Avatar_actif.pos_rel
        else  posit_avat_css = pos_monde + parseInt(Avatmonde["inc"+j]["pos_dep"])
        let n_avt =  Avatmonde[`inc${j}`]['nom']
        pos_z =  Avatmonde["inc"+j]["vitalite"]
        let img_avat = `<div id=\"${n_avt}\">`
        img_avat += `<img class="avatar ${n_avt}" src="images/avatar/${n_avt}.png" alt="avatar">`;
        img_avat += `<div class=\"${coul_bull}\" id=\"bulle_${n_avt}\"></div></div>`;
        $("#monde").append(img_avat)
        document.querySelector("." + n_avt).style.cssText = "left:" + posit_avat_css + "px; zIndex:"+pos_z+";"
        document.querySelector("#bulle_" + n_avt).style.cssText = "left:" + posit_avat_css + "px;"
    }
}