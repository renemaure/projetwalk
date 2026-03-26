/* recupère les données du monde à l'ouverture du monde étape 3*/

function recupdonnemonde() {
    fetch('systeme/php/gestion_avatar.php')
  	.then( response => {
    return response.json();
  	})
  	.then( recup_donnees =>{
		Avatmonde = recup_donnees 
        console.log(Avatmonde)
        donneeavataractif();
        //console.log("position du monde au départ ligne 12 : " + pos_monde)
        //console.log(text_jon["txt_reponse"])
        DonneesMonde();
        affichageavatarmonde()
    })
}

function affichageavatarmonde(){
    let pos_z = "1";
    let coul_bull = "bulle"
   	for (let j = 1; j <= Avatmonde.inc; j++) {  
        let n_avt =  Avatmonde[`inc${j}`]['nom']
        let img_avat = `<div id=\"${n_avt}\"`
        if (Avatar_actif.nom == n_avt) img_avat += " class =\"souris\" onclick=\"affpopupactif()\"";
        pos_z =  Avatmonde["inc"+j]["vitalite"]
        img_avat += " >"
        img_avat += `<img class="avatar ${n_avt}" src="images/avatar/${n_avt}.png" alt="avatar">`;
        img_avat += `<div class=\"${coul_bull}\" id=\"bulle_${n_avt}\"></div></div>`;
        $("#monde").append(img_avat)
        let posit_avat_css = pos_monde + parseInt(Avatmonde["inc"+j]["pos_dep"])
        document.querySelector("." + n_avt).style.cssText = "left:" + posit_avat_css + "px; zIndex:"+pos_z+";"
        document.querySelector("#bulle_" + n_avt).style.cssText = "left:" + posit_avat_css + "px;"
    }
    
}
/* pas utiliser pour le moment */
/* $(".btavanc").click(function(){
    avc_avat = pas;
    avance_avatar();
});
$(".btrecul").click(function(){
    avc_avat = -pas;
    avance_avatar();
}); */
function avance_souris(e){
    if (!activ_souris) return;
    activ_souris = false;
    pos_avatar = Avatar_actif.pos_rel;
    avc_avat = parseInt(e.pageX - marg_main - Avatar_actif.pos_rel - 55);
    if (presence_monde) calculAvance();
    else avBoutique(); // déplacement dans les boutiques
}
function  calculAvance(){
    avc_monde = -avc_avat;
    pos_fin_monde = parseInt((document.getElementById("img-monde").getBoundingClientRect().left) - 1200 - marg_main)
    if (parseInt(pos_fin_monde + avc_monde)> fin_decor && parseInt(pos_monde + avc_monde) < deb_decor){ 
            if ( Math.abs(pos_avatar) + Math.abs(avc_avat) < fin_avanc &&  Math.abs(pos_avatar) + Math.abs(avc_avat) > fin_recul){   
            avc_monde = -avc_avat/2;
            avc_avat = avc_avat/2;
            animeAvatar()
            animeMonde()
        }
        else animeMonde()        
    } else {
        if ( parseInt(pos_avatar -  Math.abs(pos_monde)) < deb_decor || parseInt(pos_avatar -  Math.abs(pos_fin_monde)) > fin_decor) {
            animeAvatar()
        }   
    }
    setTimeout( contactAvatars, delais*1.1);  
    /*
    temporitation pour attendre que le déplacement soit fini avant l'enregistrement des données ne pas toucher
    */
}
function animeAvatar() {
    document.querySelector(`.${Avatar_actif.nom}, #bulle_${Avatar_actif.nom}`).style.cssText = "transition: left " + delais + "ms; left:"+ parseInt(pos_avatar + avc_avat) +"px;"
}
function animeMonde(){     // Déplacement du monde
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
function contactAvatars() {
    Avatar_actif.pos_rel = parseInt($("."+Avatar_actif.nom).position().left)
    for (let j = 1; j <= Avatmonde.inc; j++) { 
        if (Avatar_actif.nom != Avatmonde["inc"+j]["nom"]){
            let calcul = parseInt($("."+Avatmonde["inc"+j]["nom"]).position().left) 
            if ((Avatar_actif.pos_rel -50<= calcul)  && (Avatar_actif.pos_rel +140 >= calcul) || (Avatar_actif.pos_rel+50>= calcul)  && (Avatar_actif.pos_rel -140 <= calcul)) {
			    inter_avatar = true; //drapeau contact avatars à true
			    inter_nom_avat = Avatmonde["inc"+j]["nom"] 
	        }
            else{
               gestion_barre_text("")
               document.getElementById("bulle_"+Avatmonde["inc"+j]["nom"]).style.display="none"
            }
	    }
    }
	if (inter_avatar) interactionAvatar()
    else Nouvdonneemond()
}
function interactionAvatar(){
    

    /* activation de la memoire de l'avatr actif en phase test au 11/11/2025 */
    let nonconu =  Avatar_actif.memoire.find((element) => element == inter_nom_avat)
    if (nonconu) avatarConnu()
    else{
        let indice = Avatar_actif.memoire.findIndex((element) => element == "vide")
        if(indice>-1) nouvRencontre(indice)
        else finMemoire() 
    } 
    console.log(Avatar_actif.memoire)
	inter_avatar = false;
}
function Nouvdonneemond() {
    fetch('systeme/php/donneAvattourr.php')
  	.then( response => {
        return response.json();
  	    })
  	.then( datas =>{
		Donneposabs = datas;
        for (var j = 1; j <= Donneposabs.inc; j++){
            if ((Avatar_actif.nom !=  Donneposabs["inc"+j]["nom"]) && (Donneposabs["inc"+j]["pos_dep"])!=Avatmonde["inc"+j]["pos_dep"] ) 
	        {
                let avc_fintour = - (Avatmonde["inc"+j]["pos_dep"] - Donneposabs["inc"+j]["pos_dep"])
                $("."+ Donneposabs["inc"+j]["nom"] + " , #bulle_" + Donneposabs["inc"+j]["nom"]).animate({left: '+='+avc_fintour+'px'},delais);
                Avatmonde["inc"+j]["pos_dep"] = Donneposabs["inc"+j]["pos_dep"]
            }
        }
        if (Donneposabs["monde"]["secondes"] > data.secondes) {
            data.secondes = Donneposabs["monde"]["secondes"]
        }
         if (Donneposabs["monde"]["minutes"] > data.minutes) {
            data.minutes = Donneposabs["monde"]["minutes"]
        }
        if (Donneposabs["monde"]["heurs"] > data.heurs) {
            data.heurs = Donneposabs["monde"]["heurs"]
        }
        affichHeurMond()
        eregistre_monde()
    })
}
function eregistre_monde(){
    pos_monde = parseInt($("#img-monde").position().left)
    let pos_avatar_abs = parseInt(Avatar_actif.pos_rel  +   Math.abs(pos_monde))
    Avatar_actif.pos_abs = pos_avatar_abs // mise a jour de la position absolu de l'avatar actif23/03/2026
    
    cal_tmp_monde();
            /* envoie en fetch au lieu de jquery modifier Avatmonde.inc0 c'est un tableau en json si non cela ne fonctione pas fait le 15/03/2026 en phase test pour le moment ca fonctionne*/
    fetch("systeme/php/control_avatar.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
        pos_avat_actif: pos_avatar_abs,
        nom_avat_actif: Avatar_actif.nom,
        age_mond_rtr: JSON.stringify(data),
        notoriete: Avatar_actif.noto,
        modifage: Avatar_actif.age,
        reponse: Avatar_actif.repons
    })
    })
    .then(response => response.text())
    .then(data => {
        console.log("retour enregistrement : " + data);
        nouvtour();
    })
    .catch(error => {
        console.error("Erreur :", error);
    });
    
}
function nouvtour(){
	activ_souris = true
    inter_nom_avat  = ""
    console.log(Avatar_actif);

	//activer le css cursor pour area boutique 	

	//gestion_barre_text ("Le monde bouge, un nouveau tour commence")
	   /* faire ici le test avec les boutiques si l'avatar actif est dans la zonne */
            //  console.log("position abs de l'avatar : " + Avatar_actif.pos_abs)
             // console.log("rencontre avatar " + inter_avatar )
}