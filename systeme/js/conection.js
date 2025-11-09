
    	/* ETAPE 0 */
	function connextionMonde(){
		affichage("monde",text_jon["structure_etape0"] );
        document.querySelector("#zon_conex h3").innerHTML = text_jon["titre_acces"]
		document.querySelector("#zon_enreg h3").innerHTML = text_jon["titre_enrg"]
		affichage("infos_monde", text_jon["selogger"]);
		affichage("infos_base", text_jon["inscrtiption"]);
	}
	/* fonction logger sur le monde au 04/05/2024 */
	function seLoggerMonde(){
		let form_nom_log = document.getElementById("nom_log").value;
		let form_passe_log = md5(document.getElementById("passe_log").value);
		$.post("systeme/php/gestion_logger.php",{
			nom_log: form_nom_log,
			pass_log: form_passe_log,
		}, function(connex){
			if (connex["valid"] !="ok") {
				affichage("retour_log",connex["erreur"]);
				document.getElementById("envoi_log").textContent=(`Recommençez`);
				document.getElementById("civil").reset();
			}
			else{
				affichage("infos_monde","");// efface les textes
				affichage("infos_base", "");
				affichage("monde", "");
				etape();
			} 
		},'json');
	
	}
	/* fonction s'enregistrer sur le monde au 04/08/2024 */
	function enregistreMonde(){
		let form_nom_erg = document.getElementById("nom_ins").value;
		let form_mail_erg = document.getElementById("mail_ins").value;
		let form_pass_erg = md5(document.getElementById("pass_ins").value);
		$.post("systeme/php/gestion_logger.php",{
			nom_ins: form_nom_erg,
			pass_ins: form_pass_erg,
			mail_ins: form_mail_erg,
		}, function(connex){
			if (connex["valid"] !="ok") {
				affichage("retour_ins",connex["erreur"]);
				document.getElementById("envoi_ins").textContent=(`Recommençez`);
			}else {
				affichage("infos_monde","");
				etape();
			}
		},'json');
	}