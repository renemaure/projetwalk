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