


function popup(balise,sens){
  document.getElementById(balise).style.display = sens;
}
function affichage(idelm,dataaff){
  document.getElementById(idelm).innerHTML = dataaff;
}

function ajout_html(element,id,classe) {
	structure = document.createElement(element)
	if(id) structure.id = id
	if(classe) structure.className = classe
}
function structureDouble(titre1,titre2) {
		ajout_html('section','zon_conex')
		monde.appendChild(structure)
		ajout_html('h3','titre_conex','titre_from')
		zon_conex.appendChild(structure)
		ajout_html('div','zon_form','separ_monde')
		monde.appendChild(structure)
		ajout_html('section','zon_enreg')
		monde.appendChild(structure)
		ajout_html('h3','titre_from','titre_from')
		zon_enreg.appendChild(structure)
		affichage("titre_conex",text_jon[titre1])
		affichage("titre_from",text_jon[titre2])
}

function setCookie(name, value, expires, path, domain, secure) {
	document.cookie=name+"="+ escape(value) +
		((expires==undefined) ? "" : ("; expires="+expires.toGMTString()))+
		((path==undefined) ? "" : ("; path="+path))+
		((domain==undefined) ? "" : ("; domain="+domain))+
		((secure==true) ? "; secure" : "");
}
function strUcFirst(a) {
	return (a+'').charAt(0).toUpperCase() + (a+'').substr(1);
  }

function QuiterMonde(text_jon){
		$.post("systeme/php/gestion_logger.php",{
			sortir_monde : "ok",
		},
		function(data){
			console.log(data);
			affichage("header", "");
			//affichage("header",text_jon["titre_site"] + text_jon["bouton_regles"] )
			connextionMonde()
		});
	}

function getcookie(name) {
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

/* au 07/07/2025 recuperation des heures */
function cal_tmp_monde() {
	let recup_secon = parseInt(data.secondes);
	let recup_minut = parseInt(data.minutes);
	let recup_heure = parseInt(data.heurs);
	let recup_jours = parseInt(data.jours)
	recup_secon =  recup_secon + ecart_temp;
	if (recup_secon>= 60) {
		recup_secon = recup_secon-60;
		recup_minut = recup_minut + 1;
		drap_noto ++
		gestion_barre_text (inserVar(text_jon["phrase_minute"],"[nom_avatar]",Avatar_actif.nom))
	}
	if (recup_minut>= 60) {
		recup_minut = recup_minut-60;
		recup_heure = recup_heure + 1;
		gestion_barre_text (inserVar(text_jon["phrase_heure"],"[nom_avatar]",Avatar_actif.nom))
	}
	if(drap_noto == indic_noto) {
		drap_noto = 0
		Avatar_actif.noto ++	// ajoute 1 a notoriété
	}
	if (recup_heure>= 24) {
		recup_heure = recup_heure-24;// bug sur les heures utiliser les minutes oups
		recup_jours = recup_jours + 1;
		Avatar_actif.age ++    //ajout age +1 
		gestion_barre_text (inserVar(text_jon["phrase_jour"],"[nom_avatar]",Avatar_actif.nom))
	}
	data.secondes =  recup_secon
	data.minutes =  recup_minut
	data.heurs =  recup_heure
	data.jours = recup_jours
	// console.log(Avatmonde["inc0"]["minutes"] + " minutes  et " +  Avatmonde["inc0"]["secondes"] +" secondes")
	affichHeurMond();
}

function inserVar(nom_variable,code,remp_var) {
    // console.log(code)
    nom_variable = nom_variable.replace(code, remp_var)
    return nom_variable 
    
}

function actionRadio(callback,indice) {
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
        //console.log("retour drapeau " + drapeau);
        callback(drapeau,indice);   // 👉 on renvoie la valeur ici
    });
}

function rollDice(max) {
  return 1 + Math.floor(Math.random() * max);
}





