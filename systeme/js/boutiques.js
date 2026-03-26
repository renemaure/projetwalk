function boutiquewalk() {
    let id_img_bout = 'boutique_walk'
    creationBoutique(id_img_bout)
    ajout_html('img','img_tel')//donnée nom du id
    structure.src =`images/boutique/objets/tel_pt.jpg` //donnée nom de l'image
    monde.appendChild(structure)
    gestionBoutique(id_img_bout) 
    let html = inserVar(text_jon[`map_porte_${id_img_bout}`],'[sortir]',id_img_bout)
    affichage("zonne_area", html) //donnée map de la porte ou de la sortie
    gestion_barre_text (inserVar(text_jon["phrase_boutique"],"[nom_avatar]",Avatar_actif.nom))
}
function boutiqueSyndic(){
    let id_img_bout = 'boutique_syndic'
    creationBoutique(id_img_bout) 
    gestionBoutique(id_img_bout)
    let html = inserVar(text_jon[`map_porte_${id_img_bout}`],'[sortir]',id_img_bout)
    affichage("zonne_area", html) //donnée map de la porte ou de la sortie
    gestion_barre_text (inserVar(text_jon["phrase_syndic"],"[nom_avatar]",Avatar_actif.nom))
}
function boutiqueOfficine(){
    let id_img_bout = 'boutique_officine'
    creationBoutique(id_img_bout) 
    let html = inserVar(text_jon[`map_porte_${id_img_bout}`],'[sortir]',id_img_bout)
    affichage("zonne_area", html) //donnée map de la porte ou de la sortie
    gestion_barre_text (inserVar(text_jon["phrase_officine"],"[nom_avatar]",Avatar_actif.nom))

    
}
function creationBoutique(id_img_bout) {
    presence_monde = false
    activ_souris = true
    affichage("monde","")
    affichage("zonne_area","")
    ajout_html('img',id_img_bout)//donnée nom du id
    structure.src =`images/boutique/${id_img_bout}.png` //donnée nom de l'image
    monde.appendChild(structure)
    document.getElementById(id_img_bout).setAttribute("usemap", `#${id_img_bout}`) // données nom map et id
    /*let html = inserVar(text_jon[`map_porte_${id_img_bout}`],'[sortir]',id_img_bout)
    affichage("zonne_area", html) //donnée map de la porte ou de la sortie*/
}        
function gestionBoutique(id_img_bout){
    ajout_html('img','avatar_actif','avatar')
    structure.src ="images/avatar/"+Avatar_actif.nom+".png"
    monde.appendChild(structure)
    const zoneSouris = document.createElement("div")
    zoneSouris.id = "zone_souris"
    zoneSouris.addEventListener("click", avance_souris)
    monde.appendChild(zoneSouris);
    monde.appendChild(structure)
    document.getElementById("avatar_actif").style.left="610px"
}

function sortirboutique() {
	presence_monde = true
	activ_souris = true
	affichage("monde",'')
	//recupdonnemonde()
	//positionDepartMonde()
	DonneesMonde();
        affichageavatarmonde();
        affichHeurMond()

	affichageavatarmonde()
}

function avBoutique(){
	fin_avanc = 1400
	fin_recul = 200
	console.log("position avatar : "+ pos_avatar)
	console.log("avance avatar : "+ avc_avat)
	if ( Math.abs(pos_avatar) + Math.abs(avc_avat) < fin_avanc &&  Math.abs(pos_avatar) + Math.abs(avc_avat) > fin_recul){
		 $(".avatar").animate({left: pos_avatar + avc_avat + 'px'},delais);
	}
	activ_souris = true
}

function dialoquewalk(){
	ajout_html('img','img_terminal')//donnée nom du id
    structure.src =`images/boutique/objets/cadre_ordi.png` //donnée nom de l'image
    monde.appendChild(structure)
}

function fermedialoque(){
	$("#img_terminal").css({display: "none"});
}