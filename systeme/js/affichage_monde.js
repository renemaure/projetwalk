

/* nouvelle fonction permet d'afficher les données du monde et de l'avatar  par pascal au 15/06/2025 aff_pw_avat
et ajout nombres d'avatar sur le monde */
function DonneesMonde() {
    $("#monde").removeClass("monde_flex");  // a commenté la fontion exacte pascal au 15/06/2025
    const monde = document.getElementById("monde");
    const zoneSouris = document.createElement("div")
    zoneSouris.id = "zone_souris"
    zoneSouris.setAttribute("onclick","avance_souris()")
    monde.appendChild(zoneSouris);
    const imgMonde = document.createElement("img");
    imgMonde.id = "img-monde";
    imgMonde.src = "images/decor/"+text_jon["img_decor"]+".png"; // ajout d'une variable sur le nom de l'image du décor 20/07/2025
    imgMonde.setAttribute("usemap","#boutique")
    monde.appendChild(imgMonde);
    affichage("zonne_area", text_jon["map_boutique"])
    $("#img-monde").css({left: pos_monde+'px',display: "block"})
    affichage("infos_monde", text_jon["text7"]);
    affichage("infos_base", text_jon["presentation_monde"]);
    affichage("affich_txt_avat",Avatmonde.inc);
}