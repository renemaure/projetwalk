import {TestAffichObjet,affichage,ajout_html,inserVar} from './fonctions_internes.js'
import{gestion_barre_text} from './gestion_infos_centrale.js'
import {objetsBoutique} from './gestion_evenements.js'
import {generationObjets} from './gestion_objets.js'

import{trtbaseboutiques} from './infos_base.js'
import{interactionSyndic,sortirboutique} from './interaction_boutiques.js'
import {avance_souris,animeAvatar} from './deplacement_monde.js'  

export function ouvirBoutique(nom_bout) {
    /*  manque variable indiquant que l'avatar est present dans la boutique
     et non dans le monde le 7/04/2026 variable de l'objet avatar*/
     nom_boutique = nom_bout;
    fetch("systeme/php/donnees_boutiques.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
        nomBout: nom_boutique,
        nomavat: Avatar_actif.nom
    })})
    .then( response => {
    return response.json();
  	})
  	.then( data =>{
        console.log(data)
        dataBoutique = data
        //TestAffichObjet(dataBoutique);
        Avatar_actif.prescence = nom_boutique;
        creationBoutique(dataBoutique)
    })
    .catch(error => {
        console.error("Erreur :", error);
    });
}
function creationBoutique(dataBoutique) {
    presence_monde = false; activ_souris = true
    affichage("monde",""); affichage("zonne_area","")
    ajout_html('img',dataBoutique.nom_image)//donnée nom du id
    structure.src =`images/boutique/${dataBoutique.nom_image}.png` //donnée nom de l'image
    monde.appendChild(structure)
    document.getElementById(dataBoutique.nom_image).setAttribute("usemap", `#${dataBoutique.nom_image}`) // données nom map et id
    pos_objets = dataBoutique.pos_objet.split(",");
    console.log("tableau objets boutique : "+pos_objets )
    tabObjetsbout = pos_objets.filter((_, i) => i % 3 === 0).slice(1);
    affichage("zone_2","votre avatar est dans une boutique du monde")
    let phrase = dataBoutique.phrase_affiche
    // txtEntrerBoutique(phrase)
    trtbaseboutiques(dataBoutique.titre_info) // titre de la zone info monde
    generationObjets()
    afficheAvatarBoutique(dataBoutique)
    // objetsBoutique()    //lance l'evenement on click sur le mobilier avec aussi la map
}
function afficheAvatarBoutique(dataBoutique){
    
    let posEntreAvat = dataBoutique.pos_avatar
    ajout_html('img','avatar_actif','avatar')
    structure.src ="images/avatar/"+Avatar_actif.nom+".png"
    monde.appendChild(structure)
    ajout_html('div','zone_souris')
    monde.appendChild(structure)
    document.getElementById("avatar_actif").style.left=`${posEntreAvat}px`

    document.getElementById("zone_souris").addEventListener("click", avance_souris) 
}
export function avBoutique(){
        fin_avanc = 1100
        fin_recul = -20
        let finPosAvat = parseInt(pos_avatar + avc_avat)
        if ( finPosAvat < fin_avanc &&  finPosAvat > fin_recul) animeAvatar("#avatar_actif",finPosAvat)
        finPosAvat = finPosAvat+55;
        for (let index = 1; index <= pos_objets[0]; index= index+4) {
            if (finPosAvat >= parseInt(pos_objets[index]) && finPosAvat <= parseInt(pos_objets[index+1])) {
                console.log(pos_objets[index+2]) 
                document.addEventListener("transitionend", () => {
                    if (pos_objets[index+2]=="porte") {
                        console.log("objet détecter: "+pos_objets[index+2])
                        sortirboutique() 
                        break; 
                    }
                    else{
                        extraireDataObjetBout(pos_objets[index+2])
                        break
                    } 
                });
            
            } else affichage("ctrl_diag","")
        } 
        activ_souris = true    
}
function extraireDataObjetBout(nomobjet) {
    fetch("systeme/php/donnees_boutiques.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded"},
    body: new URLSearchParams({
        nomobjet : nomobjet,
        nomboutique : nom_boutique
    })})
    .then( response => { return response.json();})
  	.then( data =>{
        dataObjBoutique = data
        console.log(dataObjBoutique)
        console.log("map ici : "+ dataObjBoutique[nomobjet]["map"])
        infosObjet(nomobjet)
    })
    .catch(error => {console.error("Erreur :", error);}); 
}
function infosObjet(nomobjet) {
    let html=""   
    if (dataObjBoutique[nomobjet]["map"] =="true") {
        interactionSyndic(nomobjet,dataObjBoutique[nomobjet]["description"]);
    }
    else{
        let tab = dataObjBoutique[nomobjet]["refstocker"].split(",")
        console.log("tab : ")+ tab
        html +="Vous pouvez prendre sur "+dataObjBoutique[nomobjet]["description"]+". <ul>"
        for (let index =1; index <= tab[0]; index++) {
            html += "<li  id= 'ref_"+tab[index]+"'>" +dataObjBoutique[tab[index]]["nom_objet"]+"</li>"
        }
        html+="</ul>"
        affichage("ctrl_diag",html)     
        for (let index = 1; index <=  tab[0]; index++) {
            let donne = "ref_"+tab[index]
            console.log(document.getElementById(donne))
            document.getElementById(donne).addEventListener("click", function () {
                predreObjet(tab[index],nomobjet);       
            });  
               
        }
    }
} 
function predreObjet(refobjet,nomobjet) {
    
    document.getElementById(refobjet).style.cssText = `display:none;`;
    Avatar_actif.stokobjet = dataObjBoutique[refobjet]
    // console.log("ref de l'objet : " + Avatar_actif.stokobjet)
    console.log(TestAffichObjet(Avatar_actif.stokobjet))
    activ_souris = true
    
} 



export function accesObjetsBout(nomobjet,descipt) {
    if(nomobjet=="porte") sortirboutique()
    switch (nom_boutique){
		case "walk":
			// AfficheTirage();
			break;
		case "syndic":
			interactionSyndic(nomobjet,);
			break;
		case "officine":	
			// lanceurMonde();
			break;
        case "agence":
			// AfficheTirage();
			break;
		case "mode":
			// imageAvatar();
			break;
		case "brasserie":	
			// lanceurMonde();
			break;
        case "banque":	
			// lanceurMonde();
			break;
		default:

			break;
	}
}




export function gestionMapBoutiques() {
    affichage("zonne_area", data.map_monde)
    pos_boutique = data.ref_map_monde.split(",");
    nomBoutiques = pos_boutique.filter((_, i) => i % 3 === 0).slice(1);
}
