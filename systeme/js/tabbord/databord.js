//affiche_regles
import{popup,affichage,inserVar,affichBoite12} from './../modules_js/fonctions_internes.js'
// import{fermerRegles} from './../modules_js/gestion_evenements.js'

export function securtabord() {
	popup("affiche_regles","block");
    let texte = "<div id=\"form-bord\"><h4>Entrée réservée aux personnes autorisés</h4><section><input id=\"pass_tabbord\" type=\"password\">&nbsp;&nbsp		<button id=\"valid_tabbord\">entrée Tabbord</button><article><p>Entrez votre code d'accés, puis validez avec le bouton <strong>OK</strong>, sinon vous pouvez recommencer avec naturelement le bouton<strong>recommencer</strong>.</p></article></section></div>"
   affichage("affiche_regles",texte)
    document.getElementById("valid_tabbord").addEventListener("click", function () {
        let valid_tabbord = md5(document.getElementById("pass_tabbord").value);
        $.post("systeme/php/gestion_logger.php",{
        cde_tabord : valid_tabbord,
        },
        function(data){
            if (data["valid"] =="ok") structureTabbord()
        },'json');     
    })
}
function structureTabbord(){
    popup("affiche_regles","flex");
	affichage("affiche_regles",text_jon["structure_regles_infos"]);
    aside()
    infosTabbord()

    // affichage("aside_regles",text_jon["version_regles"] + text_jon["menu_regles"])
/*     affichage("date_block",data.date_footer)
    affichage("version_block",data.version)
    affichage("beta_block",data.phase) */
    }
function aside() {
   affichBoite12("aside_regles",3,"aside") 
   let txt = "retour validation: <br><div class='re h15' id='rtrvalid'></div>"
   affichage("aside1",txt)

   let txt1 = "<h3>Menu du tableau de bord</h3><ol><li id='acceuil' class=\"souris\">Acceuil Tabbord</li><li id='dataFooter' class=\"souris\">Datas mise à jour footer/li><li id='decorMonde' class=\"souris\">données décor monde</li ><li id='AvatarLigne' class=\"souris\">Infos Avatar</li><ol>"
   affichage("aside2",txt1)

}

function infosTabbord() {
    affichBoite12("corps_regles",2,"boite")

    let texte = genraTableBord("Mise à jour version du site",2,"btVersion")
    texte = inserVar(texte,"[nom_th]","version")
    texte = inserVar(texte,"[id_td]","version")
    texte = inserVar(texte,"[value_td]",data.version)
    texte = inserVar(texte,"[nom_th]","Date version")
    texte = inserVar(texte,"[id_td]","date")
    texte = inserVar(texte,"[value_td]",data.date_footer)
    affichage("boite1",texte);

    let texte1 = genraTableBord("Mise à jour des données du footere",4,"btDonFoot")
    affichage("boite2",texte1);

  /*       texte = inserVar(texte,"[version]",data.version) 
    texte = inserVar(texte,"[date]",data.date_footer)
    texte = inserVar(texte,"[phase]",data.phrase)
	texte = inserVar(texte,"[mail]",data.mail) 
    texte = inserVar(texte,"[nom]",data.nom) 
	texte = inserVar(texte,"[an]",data.an_cours)   */

}

  function genraTableBord(trtTbl,nbrLign,idBt) {
        let texte = text_jon["table_tabbord"]
        let ligne =""
        for (let index = 1; index <= nbrLign; index++) {
            ligne += text_jon["lign_table_tabbord"]        
        }
        ligne+= text_jon["lign_bt_tabbord"]
        texte = inserVar(texte,"[ligne_td]",ligne)
        texte = inserVar(texte,"[titre-table]",trtTbl)
        texte = inserVar(texte,"[id_bt]",idBt) 
        return texte
    }
/*     function affichBoite12(nomIdAff,nbrBoite,idBoite) {
        let boite=""
        for (let index = 1; index <= nbrBoite; index++) {
            boite += text_jon["boite12"]     
            boite = inserVar(boite,"[id_boite]",idBoite+index)
        }
        affichage(nomIdAff,boite)   
    } */