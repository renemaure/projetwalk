import {memoirLieux,interactionAvatar,enregistrMemlieux} from './interaction_avatars.js'
import {affichage} from './fonctions_internes.js'
import{gestion_barre_text} from './gestion_infos_centrale.js'
import {recalculTemps,cal_tmp_monde,possitionAvatActif} from './temps_monde.js'
import{debutTour,fermerDialogue} from './infos_base.js'

export function gestionMonde() {
    console.log("passe par gestion monde")
    Avatar_actif.pos_rel = document.querySelector(`.${Avatar_actif.nom}`).offsetLeft;
    Avatar_actif.pos_abs = parseInt(Avatar_actif.pos_rel  +   Math.abs(pos_monde))
    console.log("position de l'avatar reel: "+ Avatar_actif.pos_rel + " et en absolut "+ Avatar_actif.pos_abs)
    synchroAvatBoutique()
    //  if(boutiquePrescenceMonde===false) contactAvatars()
}
export function synchroAvatBoutique() {
    /* Cette fonction controle si l'avatar actif est présent devant une boutique 
    si oui cela active la souris en css */
    //pos_monde = document.querySelector("#img-monde").offsetLeft;
    // console.log("tableau emplacement boutique: " + pos_boutique)
    for (let index = 1; index <= pos_boutique[0]; index= index+3){
        let chrDebut = parseInt(pos_boutique[index]); let chrFin = parseInt(pos_boutique[index+1])
        // console.log("debut indice: "+ chrDebut+ " et fin indice: "+ chrFin)
        if (Avatar_actif.pos_abs >= chrDebut && Avatar_actif.pos_abs <= chrFin) {  
            document.getElementById(pos_boutique[index+2]).classList.add("souris")
            console.log("index dans la boucle boutiques : "+ pos_boutique[index+2])
            boutiquePrescenceMonde = true
            if(!premierTour) memoirLieux(index)
            if(premierTour) debutTour()
            break
        }else{
            document.getElementById(pos_boutique[index+2]).classList.remove("souris")
            //contactAvatars()
            if(premierTour) console.log("passe par sycho boutique pas de boutique")
            boutiquePrescenceMonde = false    
        } 
   }
       /*  if(premierTour===true && boutiquePrescenceMonde===false) {
            console.log("prmeir tour")
            //debutTour()
            contactAvatars()
        } */
       contactAvatars()
}
    /* fonction determine si un avatar-actif est proche d'un avatar non joueur */
export function contactAvatars() {    
    for (let j = 1; j <= Avatmonde.inc; j++) { 
        if (Avatar_actif.nom != Avatmonde["inc"+j]["nom"]){
            let calcul = parseInt($("."+Avatmonde["inc"+j]["nom"]).position().left) 
            if ((Avatar_actif.pos_rel -50<= calcul)  && (Avatar_actif.pos_rel +140 >= calcul) || (Avatar_actif.pos_rel+50>= calcul)  && (Avatar_actif.pos_rel -140 <= calcul)) {
                console.log("avatar en indice " + j +" "+Avatmonde["inc"+j]["nom"])
			    if (inter_nom_avat != Avatmonde["inc"+j]["nom"]) {
                    inter_nom_avat = Avatmonde["inc"+j]["nom"];
                    let test = parseInt(document.querySelector("#bulle_"+inter_nom_avat).style.left)
                    let bulActiv = Avatar_actif.pos_rel
                    if(Avatar_actif.pos_rel - calcul < 0){
                        test = test + 40
                        bulActiv = bulActiv- 100
                        document.getElementById("bulle_"+inter_nom_avat).classList.replace("bulle", "bulle_droite");
                        document.getElementById("bulle_"+Avatar_actif.nom).classList.replace("bulle", "bulle_gauche");
                    } else{
                        console.log("avatar Nj à gauche ")
                        test = test -100
                        bulActiv = bulActiv + 40
                        document.getElementById("bulle_"+inter_nom_avat).classList.replace("bulle", "bulle_gauche");
                        document.getElementById("bulle_"+Avatar_actif.nom).classList.replace("bulle", "bulle_droite");
                    } 
                     document.querySelector("#bulle_"+inter_nom_avat).style.cssText =  "left:"+ test +"px;"
                     document.querySelector("#bulle_"+Avatar_actif.nom).style.cssText =  "left:"+ bulActiv +"px;"   
                    inter_avatar = true; //drapeau contact avatars à true
                    j==Avatmonde.inc
                    break;
                } 
	        }  
	    }
    }
	if (inter_avatar) {
        //console.log("passe par contact avatar avec avatar")
        interactionAvatar()
    }
    else{
        // inter_avatar = false; //drapeau contact avatars par défaut à false
        inter_nom_avat  = ""
        if(premierTour) {
            console.log("passe par contact avatar pas avatar")
            debutTour()
        }
        if(!premierTour) Nouvdonneemond() 
    }    
}
export function Nouvdonneemond() {
    fetch('systeme/php/donneAvattourr.php')
  	.then( response => {
        return response.json();
  	    })
  	.then( datas =>{
		let Donneposabs = datas;
        for (var j = 1; j <= Donneposabs.inc; j++){
            if ((Avatar_actif.nom !=  Donneposabs["inc"+j]["nom"]) && (Donneposabs["inc"+j]["pos_dep"])!=Avatmonde["inc"+j]["pos_dep"] ) 
	        {
                let avc_fintour = - (Avatmonde["inc"+j]["pos_dep"] - Donneposabs["inc"+j]["pos_dep"])
                $("."+ Donneposabs["inc"+j]["nom"] + " , #bulle_" + Donneposabs["inc"+j]["nom"]).animate({left: '+='+avc_fintour+'px'},delais);
                Avatmonde["inc"+j]["pos_dep"] = Donneposabs["inc"+j]["pos_dep"]
            }
        }
        if (Donneposabs.inc=!Avatmonde.inc) Avatmonde.inc = Donneposabs.inc
        recalculTemps(Donneposabs)
        eregistre_monde()
    })
}
function eregistre_monde(){
    cal_tmp_monde();
    fetch("systeme/php/control_avatar.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            pos_avat_actif: Avatar_actif.pos_abs,
            nom_avat_actif: Avatar_actif.nom,
            age_mond_rtr: JSON.stringify(data),
            notoriete: Avatar_actif.noto,
            modifage: Avatar_actif.age,
            reponse: Avatar_actif.repons,
            memlieux: Avatar_actif.memlieux.toString(","),
            positionReel : Avatar_actif.pos_rel,
            prescence : Avatar_actif.prescence
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
    prescenceBoutique = false
    if(inter_nom_avat!="") document.getElementById("bulle_"+inter_nom_avat).style.display="none"
    possitionAvatActif("zone_2")// actualise position de l'avatar dans info monde
    if (inter_avatar) inter_avatar = false; //drapeau contact avatars par défaut à false
    debutTour()
    console.log(Avatar_actif);
}
