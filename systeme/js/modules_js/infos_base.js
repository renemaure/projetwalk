import {affichage,inserVar,strUcFirst} from './fonctions_internes.js'
import {calculAvance} from './deplacement_monde.js'
import{gestionBoutons} from './gestion_evenements.js'

export function dialogueAvatarMonde() {
    affichage("infos_base", text_jon["structure_info_avatar_base"])
   /*  let spangr = text_jon["spangr"]
    affichage("trt_action_avatar", inserVar(spangr,"[texte]", "Options de déplacements de votre avatar")); */
}
export function trtbaseboutiques(titreInfo) {
    let spangr = text_jon["spangr"]
    affichage("trt_action_avatar", inserVar(spangr,"[texte]", titreInfo));
    affichage("bout_action_gauch","")
    affichage("bout_action_droit","") 
    deplacementBt() 
}
export function trtInterAvatarBase() {
    vide_ctrl_txt() 
    vide_ctrl_diag()
    fermBtAction()
    titreInfoAvat("Interaction entre avatrars")
}
export function txtAvatarConnu(pasconu=false) {  
    let txt = ""
    let text =  inserVar(text_jon["txt_connaissance"],"[nom_avatar]",strUcFirst(inter_nom_avat))
    if (pasconu) txt="<p>Mais apparement, il ne vous reconait pas du tout!</p>"
    affichage("ctrl_text",inserVar(text,"[phrase_option]",txt)) 
    affichage("ctrl_diag","Bientot d'autres actions seront possibles!")
    
}
export function plusMemoire(){
    affichage("ctrl_text","Désolé, mais vous n'avez plus assez de mémoire pour enregistrer le non de cet avatar") 
}
export function reponseAvatdemndeAmi(){
    affichage("ctrl_text",text_jon["txt-mem-avt"]) 
    affichage("ctrl_diag",inserVar(text_jon["info_txt_memoire"],"[nbr]", Avatar_actif.nbrmem))
    affichage("bout_action_gauch",text_jon["txt_reponse"])  
    affichage("bout_action_droit",text_jon["bouton_reponse"])   
}
export function accePopupAvatarActif(){
    affichage("ctrl_diag",text_jon["txt_ouvrepopup_avatar_gauche"])
    affichage("bout_action_gauch",text_jon["txt_reponse"])  
    affichage("bout_action_droit",text_jon["bouton_reponse"])     
}
export function dialogueMemLieux() {
    //txt_question_memoires_lieux
    //fermBtAction()
    affichage("ctrl_text","")
    affichage("ctrl_text",text_jon["txt_memoire_boutiques"])
    affichage("ctrl_diag",text_jon["txt_question_memoires_lieux"])
    affichage("bout_action_gauch",text_jon["txt_reponse"])  
    affichage("bout_action_droit",text_jon["bouton_reponse"])   
}
export function debutTour() {
    console.log("premierTour : "+premierTour)
    premierTour = false
    vide_ctrl_diag()
    deplacementBt()
    let spangr = text_jon["spangr"]
    titreInfoAvat(inserVar(spangr,"[texte]", "Options de déplacements de votre avatar"))
    let html = "Vous pouvez déplacer votre avatar soit en utilisant la souris ou en cliquant sur les fleches en bas.[info_bout]"
    let texte = ""
    if (boutiquePrescenceMonde) texte = "<br><br> Vous pouvez aussi entrer dans cette boutique"   
    affichage("ctrl_text",inserVar(html,"[info_bout]",texte) )
    if (pos_monde>-100)  affFinDecor() //info base fin du monde 
    boutiquePrescenceMonde = false  
}
export function affFinDecor(){
   affichage("ctrl_diag",'Votre avatar a atteint la fin du monde!') 
}
export function deplacementBt() {
    affichage("bout_action_gauch",inserVar(text_jon["fleche_gauche"],"[texte]"," Recule au pas"))
    affichage("bout_action_droit",inserVar(text_jon["fleche_droite"],"[texte]","Avance au pas ")) 
   /*  document.getElementById("avgauche").addEventListener("click", function () {
        avc_avat = -pas;
        calculAvance() 
    })
    document.getElementById("avdroit").addEventListener("click", function () {
        avc_avat = pas;
        calculAvance()
    }) */
   gestionBoutons()
}
export function effaceDebutTour(){
    fermBtAction()
    affichage("ctrl_text","Un nouveau tour de jeu commence")
    let html = "<button id=\"bntCentarge\" class=\"bouton\" onclick=\"recentrageAvat()\">Recentrer le monde</button>"
}
function titreInfoAvat(titre) {
    let spangr = text_jon["spangr"]
    affichage("trt_action_avatar", inserVar(spangr,"[texte]", titre));
}

/* export function txtEntrerBoutique(phrase) {
    affichage ("ctrl_text",inserVar(phrase,'[nom_avatar]',strUcFirst(Avatar_actif.nom))) 
} */

/* fonction vide info base */

export function fermeDiaAvatarActif() {
    vide_ctrl_diag()
    fermBtAction()
}
export function fermerDialogue(){
    vide_ctrl_txt()
    vide_ctrl_diag()
    fermBtAction()     
}
export function vide_ctrl_diag(){
    affichage("ctrl_diag","")
}
export function vide_ctrl_txt(){
    affichage("ctrl_text","") 
}
function fermBtAction() {
    affichage("bout_action_gauch","")  
    affichage("bout_action_droit","")  
}