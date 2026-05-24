/* 
	ajout depascal au 15/06/2025 de la fonction AffichePermanent() gérant l'affichage des textes permanant du site,
	et supression de l'argument text_jon dans etape()
*/
import { getTextJon,getDataJon,getTextregles} from './modules_js/data_site.js';
import{ afficheSite} from './modules_js/affichage_permanent.js';
import{connextionMonde,AfficheTirage,imageAvatar} from './modules_js/affiche_etape.js';
import {getcookie,TestAffichObjet} from './modules_js/fonctions_internes.js';
import {seLoggerMonde,enregistreMonde} from './conection.js'
import {lanceurMonde} from'./lanceur_monde.js'

text_jon = await getTextJon();
data = await getDataJon();
regleData = await getTextregles();
// console.log(TestAffichObjet(regleData))
console.log(regleData.titre_boite1)
afficheSite()
// console.log(TestAffichObjet(data))
etape();
export function etape() {
	if(getcookie("nom")){
	nom_avatar = getcookie("nom");
	etap = getcookie("etap");
	switch (etap){
		case "1":
			AfficheTirage();
			break;
		case "2":
			imageAvatar();
			break;
		case "3":	
			lanceurMonde();	
			break;
		default:
			connextionMonde();
			break;
	}
}else 	connextionMonde();

	if(etap=="0") document.getElementById("envoi_log").addEventListener("click", seLoggerMonde)
	if(etap=="0") document.getElementById("envoi_erg").addEventListener("click", enregistreMonde)
}










	

	

