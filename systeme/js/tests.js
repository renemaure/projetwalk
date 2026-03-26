function TestAffichObjet(objet){
    console.log("propriété de l'objet");
    for (const [key, value] of Object.entries(objet)) {
        console.log(`${key}: ${value}`);
      }
}
function TestAffichInfo(texte_info,valeur_info){
    console.log(texte_info + " : " + valeur_info);
}

function AfficheData(data,valid){
    if (valid) {
        console.log(data)
    }

}
function essai_objet() {
    console.log("test avatar")
    // for (const [key, value] of Object.entries(Avatmonde)) {
    for (const property in Avatmonde) {
        console.log(`${property}: ${Avatmonde[property]}`);
        console.log(Avatmonde[property]['nom'])
    }
}