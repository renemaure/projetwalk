import {TestAffichObjet,affichage,ajout_html,inserVar,actionRadio,popup,strUcFirst,getcookie} from './fonctions_internes.js'
import{fermeDiaAvatarActif} from './infos_base.js'

export function affpopupactif(value) {
    if (value=="true") {
        popup("action_avatar","block");
        fermeDiaAvatarActif()
        identiteAvatar()
    }else fermeDiaAvatarActif()
}
function identiteAvatar() {
    let spangr=text_jon["spangr"]
    affichage("action_avatar","");
    affichage("action_avatar",text_jon["structure_popup_avatar"]);
    affichage("ligne_tab_1", text_jon["ligne_popup_1"])
    affichage("ligne_tab_2", text_jon["ligne_popup_2"])
    affichage("ligne_tab_3", text_jon["ligne_popup_3"])

    /* affichage données avatar ligne 1*/
    affichage("aff_physiq_avat", inserVar(spangr,"[texte]", "Physique: ")+Avatar_actif.phys + " sur 6"); 
    affichage("aff_intell_avat", inserVar(spangr,"[texte]", "Intelligence: ")+Avatar_actif.intl + " sur 6"); 
	affichage("aff_charis_avat", inserVar(spangr,"[texte]", "Charisme: ")+Avatar_actif.chari + " sur 6");
    affichage("aff_pw_avat", inserVar(spangr,"[texte]", "Points Walk : ")+Avatar_actif.pwalk +" pk"); 
     /* affichage données avatar ligne 2*/
	affichage("aff_beaute_avat", Avatar_actif.beau + " sur 6"); 
    affichage("aff_vitalit_avat", Avatar_actif.vita + " sur 12");
    affichage("aff_confiance_avat", Avatar_actif.conf + " sur 12");
    affichage("aff_not_avat",Avatar_actif.noto)
     /* affichage données avatar ligne centrale*/
    affichage("photo_avat", inserVar(text_jon["popup_photo_avat"],"[nomavat]", Avatar_actif.nom))
    affichage("txt_ctrl_diag",text_jon["menu_popup_avat"])
    document.getElementById("zondialogavat").style.cssText = "background-color: var(--gris-blanc);";
      /* affichage données avatar ligne bas*/
    affichage("info_avt_bas1",inserVar(spangr,"[texte]", "Nom: ")+strUcFirst(Avatar_actif.nom))
    affichage("info_avt_bas2",inserVar(text_jon["popup_xt_ceation"],"[datecreat]", Avatmonde[getcookie("nom")]["erg_date"]))
	affichage("info_avt_bas4",inserVar(spangr,"[texte]", "Age: ")+Avatar_actif.age +" ans"); 
    //
    document.getElementById("btFermePopupAvatar").addEventListener("click", function () {
        popup("action_avatar","none");
    })
}

function dialAvatPasConnu() {
    //let spangr = text_jon["spangr"]
    affichage("action_avatar",text_jon["structure_popup_avatar"]);
    affichage("ligne_tab_1", text_jon["ligne_popup_4"])
     affichage("info_avt_bas3",inserVar(text_jon["spangr"],"[texte]", text_jon["titre_interaction_avat"]))
    document.getElementById("photo_avat").style.cssText = "position: relative; height: 220px;";
    affichage("photo_avat",text_jon["menu_diag_avt"])
    affichage("txt_ctrl_diag",text_jon["menu_popup_avat"])
    /*tout le code jusqu'ici est commun aux options */
    choixDialogue(0)

}
function choixDialogue(repert){
    let txt_boucle =""
    for (let index = 1; index <= parseInt(text_jon[text_jon["donne-rep"][repert]]["nbr"]); index++) {
        txt_boucle+="<option class=\"souris\" value=\""+index+"\">"+text_jon[text_jon["donne-rep"][repert]][index]+"</option>"
    }

   let txt = inserVar(text_jon["menu_deroulant"],"[trtselect]",text_jon["trtselectphras"][repert])
    affichage("zondialogavat",inserVar(txt,"[zonne_index]",txt_boucle))
    let selectElem = document.getElementById("reponse_auto");
    // Quand une nouvelle <option> est selectionnée
    selectElem.addEventListener("change", function () {
    var index = selectElem.selectedIndex;
        console.log("indice "+ index)
        Avatar_actif.repons[repert+1] = index

        // manque reponse choie affichée en central
    });
}

function gestionMemoireAvat() {
    //let memoireVide = Avatar_actif.memoire.filter(element => element === "vide").length;
    let spangr=text_jon["spangr"]
    affichage("action_avatar","");
    affichage("action_avatar",text_jon["structure_popup_avatar"]);  
    affichage("ligne_tab_1", text_jon["ligne_popup_4"])
    affichage("ligne_tab_2", text_jon["ligne_popup_1"])
    affichage("aff_physiq_avat", inserVar(spangr,"[texte]", "Taille mémoire")); 
    affichage("aff_intell_avat",Avatar_actif.memoire[0]  + "  cases"); 
    affichage("aff_charis_avat", inserVar(spangr,"[texte]", "Nbr mémoires libre"));
    affichage("aff_pw_avat",  Avatar_actif.nbrmem  + " cases vides"); 
    document.getElementById("photo_avat").style.cssText = "position: relative; height: 200px;"
    affichage("txt_ctrl_diag",text_jon["menu_popup_avat"])
    affichage("info_avt_bas3",inserVar(spangr,"[texte]", text_jon["titre_memoire_popup"]))
    document.getElementById("zondialogavat").style.cssText = "background-color: var(--gris-blanc);"
    let nbr_nom = Avatar_actif.memoire[0]-memoireVide
    let html = inserVar(spangr,"[texte]", "Noms des avatars en mémoire")+"<br>"
    for (let index = 1; index <= nbr_nom; index++) {
        html+= Avatar_actif.memoire[index]+"<br>"   
    }
     affichage("zondialogavat",html)
}