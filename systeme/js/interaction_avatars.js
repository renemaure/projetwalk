function nouvRencontre(indice) {
    affichage("ctrl_diag",text_jon["txt_reponse"])
    affichage("ctrl_text",text_jon["txt-mem-avt"])
    afficheBulle()
    actionRadio(retourchoix,indice)
 }
function retourchoix(value,indice) {
    if (value=="true") {
        /* 
        version en test ici de récupérer la mémoire de l'avatar non-joueur au
        26/03/2026 normalement dans la fonction  retourchoix()
        */
        memoire_avt_nj = Avatmonde[inter_nom_avat]["memoire_jour"].split(",")
        indmem_avtnj = memoire_avt_nj.findIndex((element) => element == "vide")
        console.log("indice avatar nj : "+ indmem_avtnj)
        if(indmem_avtnj>-1) {
            memoire_avt_nj[indmem_avtnj] = Avatar_actif.nom
            console.log("memoire aprés enregistrement : " + memoire_avt_nj)
        }
        Avatar_actif.memoire[indice] = inter_nom_avat 
        gestion_barre_text (inserVar(text_jon["rep_true_mem"],"[nom_avatar]",inter_nom_avat))
        phrase_memoire = Avatar_actif.memoire.toString(",")//converti la mémoire avant envoi ajax 11/11/2025

        fetch("systeme/php/control_avatar.php", {
            method: "POST",
            headers: {
            "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                nom_avat_act: Avatar_actif.nom,
                memoire: phrase_memoire,
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
    affichage("ctrl_diag","")
    affichage("ctrl_text","")
    Nouvdonneemond()
}
function avatarConnu() {
    afficheBulle()
    gestion_barre_text (inserVar(text_jon["txt_connaissance"],"[nom_avatar]",inter_nom_avat))
    Nouvdonneemond()
}
function afficheBulle() {
    document.getElementById("bulle_"+inter_nom_avat).style.display="block"
    let text = text_jon["reponse"][Avatmonde[inter_nom_avat]["num_reponse"]]
    if (Avatmonde[inter_nom_avat]["num_reponse"] == "1") text += inter_nom_avat
    affichage("bulle_"+inter_nom_avat,text)
}