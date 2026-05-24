import {TestAffichObjet,affichage,ajout_html,inserVar,actionRadio} from './fonctions_internes.js'
import{accePopupAvatarActif} from './infos_base.js'

/* export function generationObjets() {
    let tabojets = dataBoutique.table_objet.split(",")
    console.log("Test table objets " + tabojets)
    for (let index = 1; index < tabojets[0]; index = index+3) {
        if (tabojets[index]!="vide") {
            let indLivr= "stok"+(index+2)/3
            ajout_html('img',indLivr)//donnée nom du id
            structure.src =`images/${tabojets[index]}/${tabojets[index+1]}/${tabojets[index+2]}.png` // nom de l'image
            monde.appendChild(structure) 
        }
    }
}  */
export function generationObjets() {
    // let tabojets = dataBoutique.table_objet.split(","))
    console.log("nombre element ref objets: "+ dataBoutique.ref_objet.length)
    if (dataBoutique.ref_objet.length>1) {
        let refobjets = dataBoutique.ref_objet.split(",")
        console.log("Test ref objets : " + refobjets)
        for (let index = 1; index < refobjets[0]; index = index+5) {
            if (refobjets[index]!="vide") {
                ajout_html('img',refobjets[index+2],refobjets[index+3])
                structure.src =`images/${refobjets[index].trim()}/${refobjets[index+1].trim()}/${refobjets[index+2].trim()}.png` // nom de l'image
                monde.appendChild(structure) 
            }
        }  
    }
}

function PrendreObjet(refobjet) {
    console.log("dans la boucle objet : " + refobjet)
    fetch("systeme/php/donnees_boutiques.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
        refobjet : refobjet
    })})
    .then( response => {
    return response.json();
  	})
  	.then( data =>{
        dataObjets = data
        //TestAffichObjet(dataBoutique);
        gestionObjets(dataObjets)
    })
    .catch(error => {
        console.error("Erreur :", error);
    });
}
function gestionObjets(dataObjets) {
    if (dataObjets) {
      console.log(dataObjets)  
    } else  console.log("aucune info disponible pour cet objet") 
   /* retourne false si l'objet n'exixte pas dans la bdd a exploiter */
}