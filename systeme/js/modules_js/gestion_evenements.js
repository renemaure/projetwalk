import {calculAvance,avance_souris} from './deplacement_monde.js'  
import {ouvirBoutique,accesObjetsBout} from './gestion_boutiques.js'
import{affichage,popup} from './fonctions_internes.js'
import{positionDepartMonde} from './avatar_actif.js'
import{ DonneesMonde} from './affiche_monde.js'  

    export function gestionEven() {
        gestionSouris()
        //gestionBoutons()
        gestionBoutiques()
        //recentrageAvat()
    }   
    export function gestionSouris() {
        document.getElementById("zone_souris").addEventListener("click", avance_souris)  
    }
    export function gestionBoutons() {
        document.getElementById("avgauche").addEventListener("click", function () {
            avc_avat = -pas;
            calculAvance() 
        })
        document.getElementById("avdroit").addEventListener("click", function () {
            avc_avat = pas;
            calculAvance()
        })
    }
     function gestionBoutiques() {
        const boutiques = ["walk", "syndic", "officine", "agence", "mode", "brasserie", "banque"];
        nomBoutiques.forEach(function(boutique) {
            document.getElementById(boutique).addEventListener("click", function () {
                ouvirBoutique(boutique);
            });
        });
    }
    export function objetsBoutique() {
       tabObjetsbout.forEach(function(nomobjets) {
            if (document.getElementById(nomobjets)!=null) {
            document.getElementById(nomobjets).addEventListener("click", function () {
                    accesObjetsBout(nomobjets);
                });  
            }
        });
    }
    export function recentrageAvat() {
        document.getElementById("bntCentarge").addEventListener("click", function () {
          if (parseInt(Avatar_actif.pos_abs)<=decalage_monde){
                console.log("dans la boucle trop court")
            pos_monde = 0
            }  
            else   pos_monde = (decalage_monde-(parseInt(posdepart)));
            Avatar_actif.pos_rel = 600;
            // Avatar_actif.pos_abs
          // positionDepartMonde(Avatar_actif.pos_abs) 
           affichage("monde","")
           prescenceBoutique = true
           DonneesMonde()
        })
        
    }
