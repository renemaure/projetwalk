

/* nouvelle fonction permet d'afficher les données du monde et de l'avatar  par pascal au 15/06/2025 aff_pw_avat
et ajout nombres d'avatar sur le monde */

function DonneesMonde() {
    //$("#monde").removeClass("monde_flex");  
    document.getElementById("monde").classList.remove("monde_flex");// a commenté la fontion exacte pascal au 15/06/2025 version javascript remplace le code jquery le 15/03/2026
    fin_decor = text_jon["taille_monde"]; // récupere la position max du decor
    const monde = document.getElementById("monde");
    const zoneSouris = document.createElement("div")
    zoneSouris.id = "zone_souris"
    zoneSouris.addEventListener("click", avance_souris)
    monde.appendChild(zoneSouris);
    const imgMonde = document.createElement("img");
    imgMonde.id = "img-monde";
    imgMonde.src = "images/decor/"+text_jon["img_decor"]+".png"; // ajout d'une variable sur le nom de l'image du décor 20/07/2025
    imgMonde.setAttribute("usemap","#boutique")
    monde.appendChild(imgMonde);
    affichage("zonne_area", text_jon["map_boutique"])
    document.getElementById("img-monde").style.cssText = "left:" + pos_monde + "px; display:block;";
    /* code modifié en javascript de jquery aidé par chatgpt lol 15/03/2026*/
    affichage("infos_monde", text_jon["txt_info_monde_3"]);
    afficheHeader()
    txt_debut_centre()
    affichHeurMond()
    dialogueAvtarMonde()
    affichage("affich_txt_avat",Avatmonde.inc); //nombre d'avatar dabs le monde
    
}

function txt_debut_centre() {
    let = texte_presentation = text_jon["txt_presentation"]
    texte_presentation = inserVar(texte_presentation,"[nom]",getcookie("nom"))   
    texte_presentation = inserVar(texte_presentation,"[version]",data.version)  
    texte_presentation = inserVar(texte_presentation,"[date]",data.date_footer) 
    texte_presentation = inserVar(texte_presentation,"[phase]",data.phase)    
    gestion_barre_text ( texte_presentation )
}

function affichHeurMond() {
    affichage("affich_age_monde", data.ans + " ans " + data.mois + " mois et " + data.jours + " jours");
    affichage("affich_heur_monde", data.heurs+ " heures " + data.minutes + " minutes"); 
}

  /* Affiche les textes permanents sur tout le site */
function AffichePermanent(don_site_jon) {
	let texte = text_jon["footer"]
    texte = inserVar(texte,"[nom]",data.nom_footer)  
	texte = inserVar(texte,"[an]",data.an_cours)   
	texte = inserVar(texte,"[version]",data.version)  
	texte = inserVar(texte,"[date]",data.date_footer)  
	texte = inserVar(texte,"[phase]",data.phase) 
	texte = inserVar(texte,"[mail]",data.mail)  
	texte = inserVar(texte,"[mail]",data.mail) 
	affichage("footer", texte);
	affichage("control", text_jon["text_cookie"]); 
	affichage("info_cookie", text_jon["info_cookie"]);
	afficheHeader()
}
function afficheHeader(){
	let hearder = text_jon["titre_site"] + text_jon["bouton_regles"] ;
	if (getcookie("etap")>0) hearder +=  text_jon["bouton_regles"]  + text_jon["bouton_quit"];
	affichage("header", hearder);
}