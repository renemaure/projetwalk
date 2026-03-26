//affiche_regles

function securtabord() {
	popup("affiche_regles","block");
    let texte = "<div id=\"form-bord\"><h4>Entrée réservée aux personnes autorisés</h4><section><input id=\"pass_tabbord\" type=\"password\">&nbsp;&nbsp		<button id=\"valid_tabbord\" onclick=\"ouvrertabbord()\" >entrée Tabbord</button><article><p>Entrez votre code d'accés, puis validez avec le bouton <strong>OK</strong>, sinon vous pouvez recommencer avec naturelement le bouton<strong>recommencer</strong>.</p></article></section></div>"
   affichage("affiche_regles",texte)
}
function ouvrertabbord() {
    let valid_tabbord = md5(document.getElementById("pass_tabbord").value);
    console.log("retour md5 : "+ valid_tabbord)
    $.post("systeme/php/gestion_logger.php",{
        cde_tabord : valid_tabbord,
     },
    function(data){
       console.log("retour : " + data["valid"]);
        if (data["valid"] =="ok") affStructureTabbord()
    },'json');
}

function affStructureTabbord(){
    popup("affiche_regles","flex");
	affichage("affiche_regles",text_jon["structure_regles_infos"]);
    infosTabbord()
    
    affichage("aside_regles",text_jon["version_regles"] + text_jon["menu_regles"])
    affichage("date_block",data.date_footer)
    affichage("version_block",data.version)
    affichage("beta_block",data.phrase)
    }

function infosTabbord() {
    let texte = "<table id=\"footer_tabbord\"><thead><tr><th colspan=\"2\">Mise à jour des donnée du site</th></tr></thead><tbody><tr><th>Version</th><td><input type=\"text\" class=\"cnt\" id=\"version\" value=\"[version]\" minlength=\"4\" maxlength=\"15\"/></td></tr><tr><th>Date</th><td><input type=\"text\" class=\"cnt\" id=\"formdat\" value=\"[date]\" minlength=\"4\" maxlength=\"15\"/></td></tr><tr><th>Phase</th><td><input type=\"text\" class=\"cnt\" id=\"formdat\" value=\"[phase]\" minlength=\"4\" maxlength=\"15\"/></td></tr><tr><th>copiright</th><td><input type=\"text\" class=\"cnt\" id=\"copiright\" value=\"[nom]\" minlength=\"4\" maxlength=\"15\"/></td></tr><tr><th>année</th><td><input type=\"text\"  class=\"cnt\" id=\"an_copy\" value=\"[an]\" minlength=\"4\" maxlength=\"15\"/></td></tr><tr><th>Mail</th><td><input type=\"text\"  class=\"cnt\" id=\"mail_copy\" value=\"[mail]\" minlength=\"4\" maxlength=\"15\"/></td></tr><tr><td colspan=\"2\"><button class=\"btn_cookie\" onclick=\"popup('affiche_regles','none')\">Validez</button></td></tr></tbody></table>"
    texte = inserVar(texte,"[version]",data.version) 
    texte = inserVar(texte,"[date]",data.date_footer)
    texte = inserVar(texte,"[phase]",data.phrase)
	texte = inserVar(texte,"[mail]",data.mail) 
    texte = inserVar(texte,"[nom]",data.nom) 
	texte = inserVar(texte,"[an]",data.an_cours)  

    affichage("boite01",texte);

    let texte1 = "<table id=\"footer_tabbord\"><thead><tr><th colspan=\"2\">Mise à jour du mot de passe du tabbord</th></tr></thead><tbody><tr><th>Version</th><td><input type=\"text\" class=\"cnt\" id=\"version\" value=\"[version]\" minlength=\"4\" maxlength=\"15\"/></td></tr><tr><td colspan=\"2\"><button class=\"btn_cookie\" onclick=\"popup('affiche_regles','none')\">Validez</button></td></tr></tbody></table>"
    affichage("boite02",texte1)
    // affichage("boite02",text_jon["popup_infos_monde"]);
}