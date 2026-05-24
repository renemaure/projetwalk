import{inserVar,affButon,getcookie,affichage} from './fonctions_internes.js';
import{QuiterMonde} from './../lanceur_monde.js'
import{ouvreregles} from './gestion_regles.js'

    export function footer() {
        let texte = text_jon["footer"]
        texte = inserVar(texte,"[nom]",data.nom_footer)
        texte = inserVar(texte,"[an]",data.an_cours)   
        texte = inserVar(texte,"[version]",data.version)  
        texte = inserVar(texte,"[date]",data.date_footer)  
        texte = inserVar(texte,"[phase]",data.phase) 
        texte = inserVar(texte,"[mail]",data.mail)  
        texte = inserVar(texte,"[mail]",data.mail)
        return texte
        

    }
    export function btCookie() {
        const btcookie = new affButon(text_jon["btcookie"]) 
        return inserVar(text_jon["text_cookie"],"[bouton]",btcookie.txtButon()); 
    }
    export function afficheHeader(){
    const btRegles = new affButon(text_jon["btregl"])
    const btQuit = new affButon(text_jon["btquit"])
	let header = text_jon["titre_site"] + btRegles.txtButon();
    if (getcookie("etap")>0) header +=  btQuit.txtButon();
    affichage("header",header)
    if(getcookie("etap") && getcookie("etap")>0) document.getElementById("quit_monde").addEventListener("click", QuiterMonde)
    document.getElementById("regles").addEventListener("click", ouvreregles)
    /* pourquoi mettre 2 fois le bouton régle ou alors le code est mal foutu 
    comme a la sortie du monde! avoir le 6/04/2026*/
	// return header;
}
   
   

