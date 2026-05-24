import {affichage,effaceMonde} from './modules_js/fonctions_internes.js'
import{gestion_barre_text} from './modules_js/gestion_infos_centrale.js'
import {etape} from'./walk.js'

export function seLoggerMonde(){
 	let formNomLog = document.getElementById("nom_log").value;
	let formPasseLog = md5(document.getElementById("passe_log").value);
    if (formNomLog !="" && formPasseLog !="") {
       console.log("log et mp : " + formNomLog + " & "+ formPasseLog) 
       fetch("systeme/php/gestion_logger.php", {
            method: "POST",
            headers: {
            "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                nom_log: formNomLog,
                pass_log: formPasseLog,
            })
        })
    .then(response => response.json())
    .then(connex => {
        console.dir(connex);
        if (connex["valid"] !="ok") {
			gestion_barre_text (connex["erreur"])
			console.log("erreur de logger")
			document.getElementById("envoi_log").textContent=(`Recommençez`);
            document.getElementById("nom_log").value = " ";
            document.getElementById("passe_log").value = " ";
			//document.getElementById("civil").reset();
		} else{
		/* 	affichage("infos_monde","");// efface les textes
			affichage("infos_base", "")
			affichage("monde", ""); */
            effaceMonde()
			etape();
		}
    })
    .catch(error => {
        console.error("Erreur :", error);
    });
    }
    else gestion_barre_text("Il faut obligatoirement entrer un mon et un mot de passe!")
}

export function enregistreMonde(){
    console.log("ici dedans")
    let nomErg = document.getElementById("nom_ins").value;
    let mailErg = document.getElementById("mail_ins").value;
    let passErg = md5(document.getElementById("pass_ins").value);
    if (nomErg !="" && mailErg !="" && passErg !="") {
        fetch("systeme/php/gestion_logger.php", {
            method: "POST",
            headers: {
            "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                nom_ins:  nomErg,
			    pass_ins: passErg,
			    mail_ins: mailErg,
            })
        })
        .then(response => response.json())
        .then(connex => {
            console.dir(connex);
            if (connex["valid"] !="ok") {
                gestion_barre_text (connex["erreur"])
                console.log("erreur de logger")
                document.getElementById("envoi_log").textContent=(`Recommençez`);
                document.getElementById("nom_ins").value = " ";
                document.getElementById("mail_ins").value = " ";
                document.getElementById("pass_ins").value = " ";
                //document.getElementById("civil").reset();
            } else{
            /*     affichage("infos_monde","");// efface les textes
                affichage("infos_base", "")
                affichage("monde", ""); */
                effaceMonde()
                etape();
            }
        })
        .catch(error => {
            console.error("Erreur :", error);
        });
    } 
    else gestion_barre_text("Il faut obligatoirement entrer un mon , un mot de passe et un mail!")    
}