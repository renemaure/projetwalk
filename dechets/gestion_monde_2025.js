function calcul_avance(){
    let test01 = Math.abs(pos_avatar) + Math.abs(avc_avat);
    if (test01 < fin_avanc && test01 > fin_recul){
        avc_monde = -avc_avat/2;
        avc_avat = avc_avat/2;
        avance_avatar()
/*         if (pos_monde + avc_monde > fin_decor && pos_monde + avc_monde < deb_decor){
            Avatar_actif.pos_rel =  pos_avatar + avc_avat;
            $("." + Avatar_actif.nom + " , #bulle_" + Avatar_actif.nom).animate({left: pos_avatar + avc_avat + 'px'},delais);
            anim_monde();
        } */
    }else{
        avc_monde = -avc_avat;
        if (pos_monde + avc_monde > fin_decor && pos_monde + avc_monde < deb_decor){ // erreur ca doit etre inferieur à 0
             
        }else avance_avatar()
    }
    anim_monde();
}
function avance_avatar() {
            if (pos_monde + avc_monde > fin_decor && pos_monde + avc_monde < deb_decor){
            Avatar_actif.pos_rel =  pos_avatar + avc_avat;
            $("." + Avatar_actif.nom + " , #bulle_" + Avatar_actif.nom).animate({left: pos_avatar + avc_avat + 'px'},delais);
           
        }
}