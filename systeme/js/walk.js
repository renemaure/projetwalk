/* 
	ajout depascal au 15/06/2025 de la fonction AffichePermanent() gérant l'affichage des textes permanant du site,
	et supression de l'argument text_jon dans etape()
*/
fetch('systeme/donnees/walk.json')
  	.then( response => {
    return response.json();
  	})
  	.then( json =>{
		text_jon = json
		preEtape()
	})

	function preEtape() {
		/* cette fonction permet de recupérer les données général du site de la BDD en json
		 au 01/03/2026 modifié le 14/03/2026 en séparant les deux fetch
		*/

		fetch('systeme/php/recup_donne_BDD.php')
		.then( response => {
		return response.json();
		})
		.then( json =>{
			data = json
			console.log(TestAffichObjet(data))
			// console.log("test footer: " + data.nom_footer)

			AffichePermanent()
			
			etape();
		})
	}

	function etape(){
		document.getElementById("monde").classList.add("monde_flex")
		if(getcookie("nom")){
			nom_avatar = getcookie("nom");
			etap = getcookie("etap");
			switch (etap){
				case "1":
					tirage();
					break;
				case "2":
					ImageAvatar();
					break;
				case "3":
					recupdonnemonde();
					break;
				default:
					connextionMonde();
			}
		}else	connextionMonde();
	}

	/* test d'un fetch avec envoi de données  NE PAS EFACER 04/08/2024*/
	/* 
	fetch(`${urlBase}/js-ajax/exemple/toLower.php`, {method: "POST", body: data}) // le body corespond au texte à envoyer
	.then(response => response.json())
	.then(result => {
		document.getElementById('consolef1p').innerHTML = result.text;``
	}) 
	*/
	

