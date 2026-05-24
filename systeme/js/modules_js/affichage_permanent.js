import{footer,btCookie,afficheHeader} from './footer.js';
import{affichage,afficheQuery,affButon,inserVar} from './fonctions_internes.js';
import{securtabord} from './../tabbord/databord.js'

export function afficheSite() {
    affichage("footer", footer());
    affichage("control",btCookie())
    affichage("info_cookie",btCookie())
    afficheHeader()
    document.getElementById("tabbord").addEventListener("click",securtabord)
    document.getElementById("monde").classList.add("monde_flex")
    document.getElementById("popup_cookie").addEventListener("click", popupCookie)
}
export function affInterface(titreMonde,titreBase,txtMonde,txtBase) {
   if (titreMonde!=" ") afficheQuery('#infos_monde h3', text_jon[titreMonde])
    if(titreBase!=" ") afficheQuery('#infos_base h3', text_jon[titreBase])
    afficheQuery('#infos_monde .zonne_txt', text_jon[txtMonde])
    afficheQuery('#infos_base .zonne_txt', text_jon[txtBase])
}
export function affstructure(txtStructure,trtConex,trtenreg) {
    affichage("monde",text_jon[txtStructure]);
    afficheQuery('#zon_conex h3', text_jon[trtConex])
    afficheQuery('#zon_enreg h3', text_jon[trtenreg])
}
export function affbouton(txtid,objBt,txtbt) {
    let bt = new affButon(text_jon[txtbt])
    affichage(txtid,inserVar(text_jon[objBt],"[bouton]",bt.txtButon()));
    bt="";
}
export function popupCookie() {
    const btfermpopup =  new affButon(text_jon["btfermpopupcookie"]) 
    affichage("info_cookie", inserVar(text_jon["info_cookie"],"[bouton]",btfermpopup.txtButon()));
    document.getElementById("info_cookie").style.display = "block";
    document.getElementById("btFermeCookie").addEventListener("click",() => {
    document.getElementById("info_cookie").style.display = "none";
    });
}

