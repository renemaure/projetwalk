
   /* ajoute 1 a la valeur de la notorièté a l'avatar actif mais uniquement si il est present dans le monde modifié le 7/04/2026*/
export function plusPointNoto() {
    if((drap_noto == indic_noto)&&(!prescenceBoutique)) {
        drap_noto = 0
        Avatar_actif.noto ++	// ajoute 1 a notoriété
    }
}
export function plusAge() {
    Avatar_actif.age ++    //ajout age +1  par jour nouveau
}