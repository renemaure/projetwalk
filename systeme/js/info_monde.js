function gestion_barre_text(texte_barre_txt) {
     const selectdiv = document.querySelector('#dialog_retour p')
     // selectdiv.innerHTML = texte_barre_txt
     // affichage("",texte_barre_txt)
     let texte = texte_barre_txt
     typewiter(texte,0,selectdiv)
}
function typewiter(word,index,selectdiv) {
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
function dialogueAvtarMonde() {
    affichage("infos_base", text_jon["structure_info_avatar_monde"])
    //affichage("ctrl_diag",text_jon["zone_dialoque_avatar_monde"])
    //affichage("ctrl_diag",text_jon["txt_reponse"])
    //affichage("ctrl_text",text_jon["txt-mem-avt"])
}
