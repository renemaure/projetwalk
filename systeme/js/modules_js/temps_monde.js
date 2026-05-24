/* au 07/07/2025 recuperation du temps du monde */
import {inserVar,affichage,pluriel} from './fonctions_internes.js'
import{txtMinutePlus,txtheureplus,txtjourplus} from './gestion_infos_centrale.js'
import {plusPointNoto,plusAge} from './experiences_Avatar.js'
import{lanceurD6} from './interaction_jouer.js'

export function cal_tmp_monde() {
	let recup_secon = parseInt(data.secondes);
	let recup_minut = parseInt(data.minutes);
	let recup_heure = parseInt(data.heurs);
	let recup_jours = parseInt(data.jours)
	recup_secon =  recup_secon + ecart_temp;

	// test recuprer les 3 deniers chioffres
		let test = parseInt(data.temp_origin.toString().slice(-4));
		const minutes = Math.floor(test / 1400);
		console.log("temps origine: "+ minutes)


	if (recup_secon>= 60) {
		recup_secon = recup_secon-60;
		recup_minut ++
		drap_noto ++
		data.temp_origin = parseInt(data.temp_origin) + 1
		plusPointNoto() 
		txtMinutePlus(); //affiche 1 minute de plus dans la barre centrale
	}
	if (recup_minut>= 60) {
		recup_minut = recup_minut-60;
		recup_heure ++
		txtheureplus(); //affiche 1 heure de plus dans la barre centrale
	}
	if (recup_heure>= 24) {
		recup_heure = recup_heure-24;
		recup_jours = recup_jours + 1;
		plusAge() // 1 an de plus avatar actif
		txtjourplus()	//affiche 1 jour de plus dans la barre centrale
		data.jours = recup_jours
		afficheAgeMonde()
	}
	data.secondes =  recup_secon
	data.minutes =  recup_minut
	data.heurs =  recup_heure	
	afficheHeureMonde()
}
export function recalculTemps(Donneposabs) {
    if (Donneposabs["monde"]["secondes"] > data.secondes) {
            data.secondes = Donneposabs["monde"]["secondes"]
        }
    if (Donneposabs["monde"]["minutes"] > data.minutes) {
            data.minutes = Donneposabs["monde"]["minutes"]
        }
    if (Donneposabs["monde"]["heurs"] > data.heurs) {
            data.heurs = Donneposabs["monde"]["heurs"]
        }
    //affichHeurMond()
}
export function affichHeurMond() {
	affichage("infos_monde", text_jon["txt_info_monde_3"]);
	afficheAgeMonde()
	afficheHeureMonde()
	nbrAvatarsMonde("affich_txt_avat")
	possitionAvatActif("zone_2")
	// lanceurD6("zone_2")
}
export function afficheAgeMonde() {
	let html = text_jon["txt_infos_date"];
	html = inserVar(html,"[an]",data.ans);
	html = inserVar(html,"[mois]",data.mois);
	html = inserVar(html,"[jour]",data.jours);
	html = inserVar(html,"[pluriel]",pluriel(data.jours));
	affichage("txt_age",html);	
}
export function afficheHeureMonde() {
	console.log("passe par affiche heures monde: "+ data.minutes)
	console.log("texte heure:"+ text_jon["txt_infos_heure"])
	let html = text_jon["txt_infos_heure"]
	html = inserVar(html,"[heure]",data.heurs);
	html = inserVar(html,"[pluriel]",pluriel(data.heurs));
	html = inserVar(html,"[minute]",data.minutes);
	html = inserVar(html,"[pluriel]",pluriel(data.minutes));
	affichage("txt_heurs",html)	
}
export function nbrAvatarsMonde(zone) {
	affichage(zone,Avatmonde.inc); //nombre d'avatar dabs le monde 
}
export function possitionAvatActif(zone) {
	if (presence_monde) {
		affichage(zone,inserVar(text_jon["txtPositionInfos"],"[position]",Avatar_actif.pos_abs))
	}else{
		affichage(zone,"votre avatar est dans une boutique du monde")
	}
	
}
