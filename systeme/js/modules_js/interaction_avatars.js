import {inserVar,affichage,actionRadio} from './fonctions_internes.js'
import{gestion_barre_text,txtNouvAvatMemoire} from './gestion_infos_centrale.js'
import {Nouvdonneemond,contactAvatars} from './gestion_monde.js'
import {dialogueMemLieux,debutTour,reponseAvatdemndeAmi,txtAvatarConnu,trtInterAvatarBase,fermerDialogue,plusMemoire} from './infos_base.js'

export async function interactionAvatar(){
    let memoire_avt_nj = Avatmonde[inter_nom_avat]["memoire_jour"].split(",")
    let numReponse = Avatmonde[inter_nom_avat]["num_reponse"].split(",")
    console.log("resultat de num reponse: " +numReponse)
    trtInterAvatarBase()
    if (Avatar_actif.memoire.findIndex((element) => element == inter_nom_avat) !=-1){
          /* condition si l'avatar actif connait l'avatar NJ */
        if (memoire_avt_nj.findIndex((element) => element == Avatar_actif.nom)!=-1) {
              /* condition si l'avatar NJ reconnait l'avatar actif */
            afficheBulle("rep_connu",numReponse[1])
            txtAvatarConnu()
        } else{
             /* condition si l'avatar NJ ne reconnait pas l'avatar actif */
            afficheBulle("rep_oubli",numReponse[2])
            txtAvatarConnu(true)
        }
        setTimeout(finInterction, calculDelais()); 
    } else{
         /* condition si l'avatar actif ne connait l'avatar NJ */
        if(Avatar_actif.memoire.findIndex((element) => element == "vide") >-1){
             /* condition si l'avatar actif a de la memoire */
            reponseAvatdemndeAmi()
            afficheBulle("rep_pasconnu",numReponse[0])
            const value = await actionRadio();
            retourchoix(value,indice,memoire_avt_nj)
        } else {
            /* condition si l'avatar actif n' a plus de memoire */
            plusMemoire()
            afficheBulle("rep_pasconnu",numReponse[0])
            setTimeout(finInterction, calculDelais()); 
        } 
    } 
}
/* modif du 18/05/2025 ajout de la durée d'attente avec la oyenne des deux charisme */
function calculDelais() {
  return Math.round((delais/3)*((parseInt(Avatmonde[inter_nom_avat]["charis"]) + parseInt(Avatar_actif.chari))/2))  
}
function retourchoix(value,indice,memoire_avt_nj) {
    if (value=="true") {
        indmem_avtnj = memoire_avt_nj.findIndex((element) => element == "vide")
        console.log("indice avatar nj : "+ indmem_avtnj)
        if(indmem_avtnj>-1) {
            /* 
                améloriation possible au 18/05/2026
            l'avatar NJ a la possibilité de refuser d'enregistrer dans sa mémoir le nom de l'avatar actif dans une nouvelle condition pour avoir une action en retour
            */
            memoire_avt_nj[indmem_avtnj] = Avatar_actif.nom
        } else{
            /* 
            infos au 15/05/2026 
            pas d'action si la mémoire de l'avatar non joeur est pleine 
            donc par défaut un avatar NJ ne peut pas conaite un avatar actif meme si celui ci la en mémoire
            */
        }
        Avatar_actif.memoire[indice] = inter_nom_avat 
        txtNouvAvatMemoire()

        fetch("systeme/php/control_avatar.php", {
            method: "POST",
            headers: {
            "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                nom_avat_act: Avatar_actif.nom,
                memoire: Avatar_actif.memoire.toString(","),
                nom_avat_nj : inter_nom_avat,
                mem_avt_nj :  memoire_avt_nj.toString(",")
            })
        })
        .then(response => response.text())
        .then(data => {
            console.log("retour enregistrement : " + data);
        })
        .catch(error => {
            console.error("Erreur :", error);
        });
    }
    else gestion_barre_text ("")
    finInterction()   
}

function finInterction() {
    document.getElementById("bulle_"+inter_nom_avat).style.display="none"
   fermerDialogue() 
   if(premierTour) debutTour()
   else Nouvdonneemond()  
}
    /* affichage de la bulle de l'avatar NJ */
function afficheBulle(typrep,reference) {
    document.getElementById("bulle_"+inter_nom_avat).style.display="block"
    let text = inserVar(text_jon[typrep][reference],"[avatar]",inter_nom_avat)
    affichage("bulle_"+inter_nom_avat,inserVar(text,"[avat-actif]",Avatar_actif.nom)) 
}
export async function memoirLieux(index) {
    // console.log("nom de la boutique :", pos_boutique[index + 2]);
    let indice = Avatar_actif.memlieux.findIndex((element) => element == "vide");
    if (indice > -1) {
        let nonconu = Avatar_actif.memlieux.findIndex((element) => element == pos_boutique[index + 2]);
        // console.log("resultat de noconnu: "+ Avatar_actif.memlieux.findIndex((element) => element == pos_boutique[index + 2]))
        if (nonconu <0) {
            console.log("dans la boucle demande memoire")
            dialogueMemLieux();
            // attend le clic utilisateur
            const value = await actionRadio();
            // puis exécute l'enregistrement
            enregistrMemlieux(value, indice, index);
        }
        else console.log(" La boutiques présente en memoire")
    } else  console.log("mémoire des lieux pleine");
    // console.log("nom de la boutique :", pos_boutique[index + 2]);
   finMemoirBoutique()
}
export function enregistrMemlieux(value, indice, index) {
    if (value == "true") {
        // console.log("retour index :", index);
        Avatar_actif.memlieux[indice] = pos_boutique[index + 2];
        gestion_barre_text("Vous venez d'enregistrer cette boutique dans votre mémoire");
        // console.log("dans la reponse oui")
    } else console.log("enregistrement refusé");
    finMemoirBoutique()     
}
function finMemoirBoutique() {
        //boutiquePrescenceMonde = false
    if(premierTour){
        debutTour()}
    if(!premierTour)  {
        console.log("premierTour fin tour: "+premierTour)
        contactAvatars()
    }
}



