export function inserVar(nom_variable,code,remp_var) {
	return nom_variable.replace(code, remp_var)
}
export function affichage(idelm,dataaff){
  document.getElementById(idelm).innerHTML = dataaff;
}
export function afficheQuery(select,texte) {
  document.querySelector(select).innerHTML = texte
}
export class affButon{
	#textButon ="<button id ='[id]' class ='[class]'>[texte]</button>"
	constructor (tabdonne){
			this.id = tabdonne[0]
			this.class = tabdonne[1]
			this.click = tabdonne[2]
			this.text = tabdonne[3]
	}
	get testTxt (){
		return this.#textButon
	}
	txtButon(){
		this.#textButon = inserVar(this.#textButon,"[id]",this.id) 
		this.#textButon = inserVar(this.#textButon,"[class]",this.class)
		this.#textButon = inserVar(this.#textButon,"[texte]",this.text)
		return this.#textButon
	}
}
export function getcookie(name) {
	if (document.cookie.length==0) { return null; }
	var regCookies=new RegExp("(; )","g");
	var cookies=document.cookie.split(regCookies);
	for (var i=0; i<cookies.length ; i++) {
		var regInfo=new RegExp("=","g");
		var infos=cookies[i].split(regInfo);
		if (infos[0]==name) {
			return unescape(infos[1]);
		}
	}
	return null;
}
export function popup(balise,sens){
  document.getElementById(balise).style.display = sens;
} 
export function effaceMonde() {
	affichage("infos_monde","");// efface les textes
	affichage("infos_base", "")
	affichage("monde", "");
}
export function TestAffichObjet(objet){
    console.log("propriété de l'objet");
    for (const [key, value] of Object.entries(objet)) {
        console.log(`${key}: ${value}`);
      }
}
export function actionRadio() {
    return new Promise((resolve) => {
        const btn = document.querySelector('#btn');
        const radioButtons = document.querySelectorAll('input[name="avt_valid"]');
        btn.addEventListener("click", () => {
            let drapeau = null;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    drapeau = radioButton.value;
                    break;
                }
            }
            console.log("retour drapeau :", drapeau);
            resolve(drapeau);
        }, { once: true });
    });
}
export function ajout_html(element,id,classe) {
	structure = document.createElement(element)
	if(id) structure.id = id
	if(classe) structure.className = classe
}
export function strUcFirst(a) {
	return (a+'').charAt(0).toUpperCase() + (a+'').substr(1);
}
export function pluriel(nbr) {
	let lettre ='';
	if(nbr>1) lettre ='s' 
	return lettre	
}
export function affichBoite12(nomIdAff,nbrBoite,idBoite,indcdeb=0) {
        let boite=""
        for (let index = 1; index <= nbrBoite; index++) {
            boite += text_jon["boite12"]     
            boite = inserVar(boite,"[id_boite]",idBoite+(index+indcdeb))
        }
        affichage(nomIdAff,boite)   
    }