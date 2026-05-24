import {getcookie} from './fonctions_internes.js';

export function donneeavataractif(){
    let nvat = getcookie("nom")
    Avatar_actif = new Avatar(Avatmonde[nvat]["nom"],Avatmonde[nvat]["pos_dep"],Avatmonde[nvat]["pos_reel"],Avatmonde[nvat]["charis"],Avatmonde[nvat]["intel"],Avatmonde[nvat]["physq"],Avatmonde[nvat]["pwalk"],Avatmonde[nvat]["age"],Avatmonde[nvat]["beaute"],1,Avatmonde[nvat]["notoriete"],Avatmonde[nvat]["vitalite"],Avatmonde[nvat]["confiance"],0,0,0,0,Avatmonde[nvat]["prescence"],Avatmonde[nvat]["reste_pwalk"],Avatmonde[nvat]["stock_objet"]);
    console.log(Avatar_actif);
    Avatar_actif.memoire = Avatmonde[nvat]["memoire_jour"].split(",")
    Avatar_actif.nbrmem = Avatar_actif.memoire.filter(element => element === "vide").length;
    Avatar_actif.memlieux = Avatmonde[nvat]["memoire_lieux"].split(",")
    Avatar_actif.repons = Avatmonde[nvat]["num_reponse"].split(",")
    let posdepart = Avatmonde[nvat]["pos_dep"]
    positionDepartMonde(posdepart)
    Avatar_actif.pos_rel = pos_monde + parseInt(Avatar_actif.pos_abs)
    // console.log("position reel de depart de l'avatar à l'ouverture: "+ Avatar_actif.pos_rel)
}
export function positionDepartMonde(posdepart){
    if (parseInt(posdepart)<=decalage_monde)  pos_monde = 0
    else   pos_monde = (decalage_monde-(parseInt(posdepart)));
    console.log("position de depart du monde à l'ouverture: "+ pos_monde)
   
    
}
function Avatar(nom_avt, pos_dep, pos_rel, cart_char, cart_intl, cart_phys, pnt_pwalk, pnt_age, pnt_beaut, don_ondic, pnt_not, pnt_vita, pnt_conf,pnt_repons, pnt_memoire, nbr_mem,nbr_memlieux,presc,rstwlk,stkobj) {
    this.nom = nom_avt;
    this.pos_abs = pos_dep;
    this.pos_rel = pos_rel;
    this.chari = cart_char;
    this.intl = cart_intl;
    this.phys = cart_phys;
    this.pwalk = pnt_pwalk;
    this.age = pnt_age;
    this.beau = pnt_beaut;
    this.indic = don_ondic;
    this.noto = pnt_not;
    this.vita = pnt_vita;
    this.conf = pnt_conf;
    this.repons = pnt_repons;
    this.memoire = pnt_memoire;
    this.nbrmem = nbr_mem;
    this.memlieux = nbr_memlieux;
    this.prescence = presc;
    this.resteWalk = rstwlk;
    this.stokobjet = stkobj;
}