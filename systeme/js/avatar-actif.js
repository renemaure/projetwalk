/* extrait les données de l'avatar actif 
réécriture complete le 11/11/2025: supression de la boucle en utilisant le modele de données basé sur le nom de l'avatar actif ajout de la memoire de l'avatar
*/
function donneeavataractif(){
    let nvat = getcookie("nom")
    positionDepartMonde()
    Avatar_actif = new Avatar(Avatmonde[nvat]["nom"],Avatmonde[nvat]["pos_dep"],pos_monde,Avatmonde[nvat]["charis"],Avatmonde[nvat]["intel"],Avatmonde[nvat]["physq"],Avatmonde[nvat]["pwalk"],Avatmonde[nvat]["age"],Avatmonde[nvat]["beaute"],1,Avatmonde[nvat]["notoriete"],Avatmonde[nvat]["vitalite"],Avatmonde[nvat]["confiance"],Avatmonde[nvat]["num_reponse"],0,);
    console.log(Avatar_actif);
    Avatar_actif.memoire = Avatmonde[nvat]["memoire_jour"].split(",")
}

function positionDepartMonde(){
    let nvat = getcookie("nom")
    if (parseInt(Avatmonde[nvat]["pos_dep"])<=decalage_monde)  pos_monde = 0
    else   pos_monde = (decalage_monde-(parseInt(Avatmonde[nvat]["pos_dep"])));
}

function affpopupactif() {
    popup("action_avatar","block");
    affichage("action_avatar",text_jon["structure_popup_avatar"]);
    affichage("aff_nom_avat",strUcFirst(Avatar_actif.nom)); 
	affichage("aff_age_avat", Avatar_actif.age +" ans"); 
	affichage("aff_physiq_avat", Avatar_actif.phys + " sur 6"); 
	affichage("aff_intell_avat", Avatar_actif.intl + " sur 6"); 
	affichage("aff_charis_avat", Avatar_actif.chari + " sur 6"); 
	affichage("aff_beaute_avat", Avatar_actif.beau + " sur 6"); 
    affichage("aff_vitalit_avat", Avatar_actif.vita + " sur 12");
    affichage("aff_confiance_avat", Avatar_actif.conf + " sur 12");
	affichage("aff_pw_avat", Avatar_actif.pwalk +" pk"); 
    affichage("aff_not_avat",Avatar_actif.noto)

    affichage("photo_avat", inserVar(text_jon["popup_photo_avat"],"[nomavat]", Avatar_actif.nom))
    affichage("info_avt_bas2",inserVar(text_jon["popup_xt_ceation"],"[datecreat]", Avatmonde[getcookie("nom")]["erg_date"]))
    affichage("txt_ctrl_diag",text_jon["menu_diag_avat"])
    identite_avatar()
    
   
}
function dialogue_avatar() {
    let html = "<div id =\"selec_diag_avat\"></div><label for=\"reponse_auto\">Réponse automatique dans la bulle:</label><select id=\"reponse_auto\"><option value=\"\">--Choisissez une réponse automatique--</option><option value=\"1\">"+text_jon["reponse"]["1"]+"</option><option value=\"2\">"+text_jon["reponse"]["2"]+"</option><option value=\"3\">"+text_jon["reponse"]["3"]+"</option></select></div>"
    affichage("zondialogavat",html) 
    let selectElem = document.getElementById("reponse_auto");
    // Quand une nouvelle <option> est selectionnée
    selectElem.addEventListener("change", function () {
        var index = selectElem.selectedIndex;
        // Rapporter cette donnée au <p>
        console.log("indice "+ index)
        Avatar_actif.repons = index
    });
}
function identite_avatar() {
    affichage("zondialogavat", "<div id=\"dialogue_avatar\">ici du texte</div>")
    // <textarea id=\"story\" class\"block\" name=\"story\" rows=\"3\" cols=\"45\"ici un beau texte</textarea>
    //  AfficheData(Avatmonde[getcookie("nom")]["num_reponse"],true)
     let num_reonse =  Avatar_actif.repons
     affichage("dialogue_avatar","votre réponse automatique est: <br> " + text_jon["reponse"][num_reonse])  
}
function Avatar(nom_avt, pos_dep, pos_monde, cart_char, cart_intl, cart_phys, pnt_pwalk, pnt_age, pnt_beaut, don_ondic, pnt_not, pnt_vita, pnt_conf,pnt_repons, pnt_memoire) {
    this.nom = nom_avt;
    this.pos_abs = pos_dep;
    // 👉 Calcul automatique
    this.pos_rel = pos_monde + parseInt(this.pos_abs);
    this.chari = cart_char;
    this.intl = cart_intl;
    this.phys = cart_phys;
    this.pwalk = pnt_pwalk;
    this.age = pnt_age;
    this.beau = pnt_beaut;
    this.indic = don_ondic;
    this.noto = pnt_not;
    this.vita = pnt_vita;
    this.conf = pnt_conf;
    this.repons = pnt_repons;
    this.memoire = pnt_memoire;
}
function finMemoire() {
    console.log ("plus de memoire")
    gestion_barre_text (text_jon["txt_memoire"])
}




