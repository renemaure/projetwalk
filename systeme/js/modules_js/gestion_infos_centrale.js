import {affichage,inserVar,strUcFirst} from './fonctions_internes.js'

export function txt_debut_centre() {
    let texte = text_jon["txt_presentation"]
    texte = inserVar(texte,"[nom]",strUcFirst(Avatar_actif.nom))   
    texte = inserVar(texte,"[version]",data.version)  
    texte = inserVar(texte,"[date]",data.date_footer) 
    texte = inserVar(texte,"[phase]",data.phase)    
    gestion_barre_text (texte)
}
export function txtNouvAvatMemoire() {
    gestion_barre_text (inserVar(text_jon["rep_true_mem"],"[nom_avatar]",strUcFirst(inter_nom_avat)))
}

export function txtMinutePlus() {
    gestion_barre_text (inserVar(text_jon["phrase_minute"],"[nom_avatar]",strUcFirst(Avatar_actif.nom)))
}
export function txtheureplus() {
    gestion_barre_text (inserVar(text_jon["phrase_heure"],"[nom_avatar]",strUcFirst(Avatar_actif.nom)))
}
export function txtjourplus() {
    gestion_barre_text (inserVar(text_jon["phrase_jour"],"[nom_avatar]",strUcFirst(Avatar_actif.nom)))
}

export function gestion_barre_text(texte) {
     typewiter(texte)
}
function typewiter(word,index=0) {
    const selectdiv = document.querySelector('#dialog_retour p')
        lanc_witer = false
    let indice = word.length
    if (index < indice) {
       setTimeout (()=>{
              selectdiv.innerHTML += word[index]
          index++
              typewiter(word,index,selectdiv)
              },50)
       } 
       else{
      lanc_witer = true
      setTimeout (()=>{
          selectdiv.innerHTML = ""
      },8000)
      }
    
}
