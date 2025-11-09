/* recupère les données du monde à l'ouverture du monde étape 1*/
function recupdonnemonde() {
    fetch('systeme/php/gestion_avatar.php')
  	.then( response => {
    return response.json();
  	})
  	.then( recup_donnees =>{
		Avatmonde = recup_donnees;
        console.log(Avatmonde) 
        donneeavataractif();
    })
}
/* extrait les données de l'avatar actif etape 2 */
function donneeavataractif(){
    for (var i = 1; i <= Avatmonde.inc; i++) {
        if (getcookie("nom") == Avatmonde["inc"+i]["nom"]){
            Avatar_actif = new Avatar(Avatmonde["inc"+i]["nom"],Avatmonde["inc"+i]["pos_dep"],0,Avatmonde["inc"+i]["charis"],Avatmonde["inc"+i]["intel"],Avatmonde["inc"+i]["physq"],Avatmonde["inc"+i]["pwalk"],Avatmonde["inc"+i]["age"],Avatmonde["inc"+i]["beaute"],i,Avatmonde["inc"+i]["notoriete"]); 
            /*modif au 02/08/2025: calcul de position du monde si l'avatar est en dessous du decalage  */
            if (parseInt(Avatar_actif.pos_abs)<=decalage_monde)  pos_monde = 0
            else   pos_monde = (decalage_monde-(parseInt(Avatar_actif.pos_abs)));
       }
    }
    Avatar_actif.pos_rel = pos_monde + parseInt(Avatar_actif.pos_abs);/*  position reel de l'avatar actif dans le monde */
    console.log(Avatar_actif);
    DonneesMonde();
    affichageavatarmonde();
   
}

function affichageavatarmonde(){
    let pos_z = "1";
    let posit_avat_css; 
    let coul_bull = "bulle"
   	for (let j = 1; j <= Avatmonde.inc; j++) {    
        let img_avat = "<div id=\"" + Avatmonde["inc"+j]["nom"] + "\""
        if (Avatar_actif.indic == j){
             img_avat += " class =\"souris\" onclick=\"affpopupactif()\"";
            //  coul_bull += " vert"
        }else coul_bull = "bulle"
        pos_z =  Avatmonde["inc"+j]["vitalite"];
        img_avat += " >";
        img_avat += "<img class=\"avatar " + Avatmonde["inc"+j]["nom"] + "\" src=\"images/avatar/" + Avatmonde["inc"+j]["nom"] + ".png\">";
        img_avat += "<div class=\""+coul_bull+"\" id=\"bulle_" + Avatmonde["inc"+j]["nom"] + "\"></div></div>";
        $("#monde").append(img_avat);
        posit_avat_css = pos_monde + parseInt(Avatmonde["inc"+j]["pos_dep"])
        $("." + Avatmonde["inc"+j]["nom"]).css({
            left: posit_avat_css + 'px',
            zIndex: pos_z,
        });
        $("#bulle_" + Avatmonde["inc"+j]["nom"]).css({
            left: posit_avat_css + 'px',
        });	
        affichHeurMond();
    }
}
/* pas utiliser pour le moment */
/* $(".btavanc").click(function(){
    avc_avat = pas;
    avance_avatar();
});
$(".btrecul").click(function(){
    avc_avat = -pas;
    avance_avatar();
}); */

function avance_souris(){
    pos_monde = $("#img-monde").position().left;
    pos_avatar = Avatar_actif.pos_rel;
    avc_avat = event.pageX - marg_main - Avatar_actif.pos_rel - 55;
    calculAvance()
}
function  calculAvance(){
    avc_monde = -avc_avat;
    if (pos_monde + avc_monde > fin_decor && pos_monde + avc_monde < deb_decor){ 
        // console.log("postion du monde aprés calcul: "+ parseInt(pos_monde + avc_monde))
        // console.log("postion de l'avatar si avance monde: "+ parseInt(pos_avatar + avc_avat))
        if ( Math.abs(pos_avatar) + Math.abs(avc_avat) < fin_avanc &&  Math.abs(pos_avatar) + Math.abs(avc_avat) > fin_recul){      
            avc_monde = -avc_avat/2;
            avc_avat = avc_avat/2;
            avanceAvatar()
            animeMonde()
        }
        else animeMonde()        
    } else {
        //  console.log("dans la boucle de la zonne deplacement avatar")
        let test = (pos_avatar -  Math.abs(pos_monde)) 
        console.log("postion de l'avatar : "+ test +" et valeur de fin_decor : " + fin_decor)
        if ( test < deb_decor || test > fin_decor) {
            avanceAvatar()
        }   
    }
    Avatar_actif.pos_rel = $("."+Avatar_actif.nom).position().left;
    // setTimeout(eregistre_monde, delais*1.1);
    setTimeout( enregistrefontour, delais*1.1);
}
function avanceAvatar() {
     $("." + Avatar_actif.nom + " , #bulle_" + Avatar_actif.nom).animate({left: pos_avatar + avc_avat + 'px'},delais);
}
function animeMonde(){
    $("#img-monde").animate({left: '+='+ avc_monde +'px'},delais); // déplacement du monde
      for (var j = 1; j <= Avatmonde.inc; j++) {
        if (Avatar_actif.nom != Avatmonde["inc"+j]["nom"]){
             $("."+ Avatmonde["inc"+j]["nom"] + " , #bulle_" + Avatmonde["inc"+j]["nom"]).animate({left: '+='+avc_monde+'px'},delais);
        } 
    }
}
function eregistre_monde(){
    pos_monde = $("#img-monde").position().left;
    let pos_avatar_actif = Avatar_actif.pos_rel  +   Math.abs(pos_monde);
    // console.log(Avatar_actif.pos_rel);
    console.log("position absolu de l'avatar : "+ (Avatar_actif.pos_rel  +  Math.abs(pos_monde)))
    // console.log(Avatar_actif);
    cal_tmp_monde();
    $.post("systeme/php/control_avatar.php",{
        pos_avat_actif : pos_avatar_actif,
        nom_avat_actif : Avatar_actif.nom,
        age_mond_rtr : Avatmonde.inc0,
        notoriete : Avatar_actif.noto,
        modifage : Avatar_actif.age,
    },
    function(data){
        console.log("retour enregistrement : " +data);
       
    });
    // enregistrefontour()
    }

function enregistrefontour() {
        for (var j = 1; j <= Avatmonde.inc; j++) {
            if (Avatar_actif.nom != Avatmonde["inc"+j]["nom"]){
                tab_pos_rel[j] = $("."+Avatmonde["inc"+j]["nom"]).position().left  
            }
        }
    for (let j = 1; j <= Avatmonde.inc; j++) { 
        if (Avatar_actif.nom != Avatmonde["inc"+j]["nom"]){
            if ((Avatar_actif.pos_rel -55<= tab_pos_rel[j])  && (Avatar_actif.pos_rel +180 >= tab_pos_rel[j]) || (Avatar_actif.pos_rel+55>= tab_pos_rel[j])  && (Avatar_actif.pos_rel -180 <= tab_pos_rel[j])) {
                // console.log("l'avatar est " + Avatmonde["inc"+j]["nom"])
                inter_avatar = true;
	            inter_nom_avat = Avatmonde["inc"+j]["nom"] 
                break
            }
            // else console.log("pas d'avatar ")
            inter_avatar = false
            document.getElementById("bulle_"+Avatmonde["inc"+j]["nom"]).style.display="none"
            document.getElementById("bulle_"+Avatar_actif.nom).style.display="none"
        }
    }
    if (inter_avatar) {
         document.getElementById("bulle_"+inter_nom_avat).style.display="block"
        let text = text_jon["reponse"][Avatmonde[inter_nom_avat]["num_reponse"]]
        if (Avatmonde[inter_nom_avat]["num_reponse"] == "1") text += inter_nom_avat
        affichage("bulle_"+inter_nom_avat,text)
        /* activation de la bulle de l'avatar actif pour tests le 14/09/2025*/ 
        // document.getElementById("bulle_"+Avatar_actif.nom).style.display="block"
       
    }
    Nouvdonneemond()
}

    function Nouvdonneemond() {
    fetch('systeme/php/donneAvattourr.php')
  	.then( response => {
        return response.json();
  	    })
  	.then( datas =>{
		Donneposabs = datas;
        console.log(Donneposabs) 
        for (var j = 1; j <= Donneposabs.inc; j++){
            if ((Avatar_actif.nom !=  Donneposabs["inc"+j]["nom"]) && (Donneposabs["inc"+j]["pos_dep"])!=Avatmonde["inc"+j]["pos_dep"] ) {
                // console.log(Donneposabs["inc"+j]["nom"]);
                let avc_fintour = - (Avatmonde["inc"+j]["pos_dep"] - Donneposabs["inc"+j]["pos_dep"])
                console.log(avc_fintour);
                $("."+ Donneposabs["inc"+j]["nom"] + " , #bulle_" + Donneposabs["inc"+j]["nom"]).animate({left: '+='+avc_fintour+'px'},delais);
                Avatmonde["inc"+j]["pos_dep"] = Donneposabs["inc"+j]["pos_dep"]
            }
        }
        if (Donneposabs["inc0"]["secondes"] > Avatmonde["inc0"]["secondes"]) {
            Avatmonde["inc0"]["secondes"] = Donneposabs["inc0"]["secondes"]
        }
         if (Donneposabs["inc0"]["minutes"] > Avatmonde["inc0"]["minutes"]) {
            Avatmonde["inc0"]["minutes"] = Donneposabs["inc0"]["minutes"]
        }
        if (Donneposabs["inc0"]["heurs"] > Avatmonde["inc0"]["heurs"]) {
            Avatmonde["inc0"]["heurs"] = Donneposabs["inc0"]["heurs"]
        }
        eregistre_monde()
        // affichHeurMond()
    })
}