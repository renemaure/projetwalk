
function affpopupactif() {
    popup("action_avatar","block");
    // affichage("action_avatar",text_jon["structures6"]);
    affichage("action_avatar",text_jon["text8"]);
    affichage("aff_nom_avat",strUcFirst(Avatar_actif.nom)); 
	affichage("aff_age_avat", Avatar_actif.age +" ans"); 
	affichage("aff_physiq_avat", Avatar_actif.phys + " sur 6"); 
	affichage("aff_intell_avat", Avatar_actif.intl + " sur 6"); 
	affichage("aff_charis_avat", Avatar_actif.chari + " sur 6"); 
	affichage("aff_beaute_avat", Avatar_actif.beau + " sur 6"); 
	affichage("aff_pw_avat", Avatar_actif.pwalk +" pk"); 
    affichage("aff_not_avat",Avatar_actif.noto)
    let photo_avat = "<img id ='cadre_photo' src='images/cadre.png'><img src='images/avatar/" + Avatar_actif.nom+".png' id='potoavat'>"
    let menu_diag_avat = "<ol id ='list_option'><li>Dialogues Avatars</li><li>Identité avatar</li></ol>"
    affichage("photo_avat", photo_avat)
    affichage("ctrl_diag",menu_diag_avat)
    affichage("zondialogavat", "texte ici")

}