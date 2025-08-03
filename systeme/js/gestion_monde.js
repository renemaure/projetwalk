/* recupère les données à l'ouverture du monde */
function recupdonnemonde() {
 
    fetch('systeme/php/gestion_avatar.php')
  	.then( response => {
    return response.json();
  	})
  	.then( recup_donnees =>{
		Avatmonde = recup_donnees;
        console.log(Avatmonde) 
        donneeavataractif();
        
		} 
	)
}
function donneeavataractif(){
    for (var i = 1; i <= Avatmonde.inc; i++) {
        if (getcookie("nom") == Avatmonde["inc"+i]["nom"]){
                Avatar_actif = new Avatar(Avatmonde["inc"+i]["nom"],Avatmonde["inc"+i]["pos_dep"],0,Avatmonde["inc"+i]["charis"],Avatmonde["inc"+i]["intel"],Avatmonde["inc"+i]["physq"],Avatmonde["inc"+i]["pwalk"],Avatmonde["inc"+i]["age"],Avatmonde["inc"+i]["beaute"],i); 
               /*lodif du calcul de position du monde si l'avatar est en dessous du decalage 2/08/2025 */
                if (parseInt(Avatar_actif.pos_abs)<=decalage_monde)  pos_monde = 0
               else   pos_monde = (decalage_monde-(parseInt(Avatar_actif.pos_abs)));//position du monde
       }
        tab_pos_rel[i] = pos_monde + parseInt(Avatmonde["inc"+i]["pos_dep"]); // recup des positions absolut des avatars
    }
    
    Avatar_actif.pos_rel = pos_monde + parseInt(Avatar_actif.pos_abs);/*  position reel de l'avatar actif dans le monde */
    console.log(Avatar_actif);
    DonneesMonde();
    affichageavatarmonde();
   
}
/* function extractdoneeavatars() { //ne sert plus
    for (var k = 1; k <= Avatmonde.inc; k++) {
        tab_pos_rel[k] = pos_monde + parseInt(Avatmonde["inc"+k]["pos_dep"]); 
    }
    // pos_avt_ancien  =  tab_pos_rel.slice(); /* copie les donées actuelles dans le tableau ancien pour la premier tour 
    DonneesMonde();
    affichageavatarmonde();
} */
function affichageavatarmonde(){
    let pos_z = "1";
    let posit_avat_css; 
   	for (let j = 1; j <= Avatmonde.inc; j++) {    
        let img_avat = "<div id=\"" + Avatmonde["inc"+j]["nom"] + "\""
        if (Avatar_actif.indic == j) img_avat += " class =\"souris\" onclick=\"affpopupactif()\"";
        pos_z =  Avatmonde["inc"+j]["vitalite"];
        img_avat += " >";
        img_avat += "<img class=\"avatar " + Avatmonde["inc"+j]["nom"] + "\" src=\"images/avatar/" + Avatmonde["inc"+j]["nom"] + ".png\">";
        img_avat += "<div class=\"bulle\" id=\"bulle_" + Avatmonde["inc"+j]["nom"] + "\"></div></div>";
        $("#monde").append(img_avat);

       /*  if ((((tab_pos_rel[j]<-110) && (tab_pos_rel[j]<1145)) || ((pos_avt_ancien[j]<-110) && (pos_avt_ancien[j]<1145))) && Avatar_actif.indic != j) {
            posit_avat_css = pos_avt_ancien[j];
        }else  */
         posit_avat_css = tab_pos_rel[j];

        $("." + Avatmonde["inc"+j]["nom"]).css({
            left: posit_avat_css + 'px',
            zIndex: pos_z,
        });
        $("#bulle_" + Avatmonde["inc"+j]["nom"]).css({
            left: posit_avat_css + 'px',
        });	

       /*  if ((((tab_pos_rel[j]<-110) && (tab_pos_rel[j]<1145)) || ((pos_avt_ancien[j]<-110) && (pos_avt_ancien[j]<1145))) && Avatar_actif.indic != j) {
        let = av_avat = - (pos_avt_ancien[j] - tab_pos_rel[j]);
            $("." + Avatmonde["inc"+j]["nom"] + " , #bulle_" + Avatmonde["inc"+j]["nom"]).animate({left: tab_pos_rel[j] + av_avat + 'px'},delais);
        } */
        affichHeurMond();
        affichedonavatactif()

    }
}

/*     function deplceavatmonde() {
        if ((((tab_pos_rel[j]<-110) && (tab_pos_rel[i]<1145)) || ((pos_avt_ancien[j]<-110) && (pos_avt_ancien[i]<1145))) && getcookie("nom") != Avatmonde["inc"+j]["nom"]  ) {

            let = av_avat = - (pos_avt_ancien[j] - tab_pos_rel[j]);
            $("." + Avatmonde["inc"+i]["nom"] + " , #bulle_" + Avatmonde["inc"+i]["nom"]).animate({left: tab_pos_rel[i] + av_avat + 'px'},delais);
        }
    } */


/* pas utiliser pour le moment */
/* $(".btavanc").click(function(){
    avc_avat = pas;
    avance_avatar();
});
$(".btrecul").click(function(){
    avc_avat = -pas;
    avance_avatar();
}); */

function affpopupactif() {
    popup("action_avatar","block");
    affichage("action_avatar",text_jon["structures6"]);
    // affichage("action_avatar",text_jon["bouton6"]);
}
function avance_souris(){
    pos_monde = $("#img-monde").position().left;
    pos_avatar = Avatar_actif.pos_rel;
    avc_avat = event.pageX - marg_main - Avatar_actif.pos_rel - 55;
    calculAvance()
}
function  calculAvance(){
    if (pos_avatar + avc_avat <fin_avanc && pos_avatar + avc_avat > fin_recul){
        avc_monde = -avc_avat/2;
        avc_avat = avc_avat/2;
        if (pos_monde + avc_monde > fin_decor && pos_monde + avc_monde < deb_decor){
            Avatar_actif.pos_rel =  pos_avatar + avc_avat;
           avanceAvatar()
            anim_monde();
        }
    }
    else{
        avc_monde = -avc_avat;
        // console.log("avc_monde : " + avc_monde + "/ pos_monde : " + pos_monde);
        if (pos_monde + avc_monde > fin_decor && pos_monde + avc_monde < deb_decor){
            anim_monde();  
        } 
    }
}
function avanceAvatar() {
     $("." + Avatar_actif.nom + " , #bulle_" + Avatar_actif.nom).animate({left: pos_avatar + avc_avat + 'px'},delais);
}
function anim_monde(){
    $("#img-monde").animate({left: '+='+ avc_monde +'px'},delais); // déplacement du monde
    for (var j = 1; j <= Avatmonde.inc; j++) {
        if (Avatar_actif.nom != Avatmonde["inc"+j]["nom"]){
             $("."+ Avatmonde["inc"+j]["nom"] + " , #bulle_" + Avatmonde["inc"+j]["nom"]).animate({left: '+='+avc_monde+'px'},delais);
             tab_pos_rel[j] = $("."+ Avatmonde["inc"+j]["nom"]).css("left"); // deplacement des autres avatars
        } 
    }
    Avatar_actif.rel = $("."+Avatar_actif.nom).position().left;
    setTimeout(eregistre_monde, delais*1.1);
}
function eregistre_monde(){
    pos_monde = $("#img-monde").position().left;
    let pos_avatar_actif = Math.round(parseInt(Avatar_actif.pos_rel)+ Math.abs(pos_monde));	
    console.log("avant envoie :"+ pos_avatar_actif)
    cal_tmp_monde();
    $.post("systeme/php/control_avatar.php",{
        pos_avat_actif : pos_avatar_actif,
        nom_avat_actif : Avatar_actif.nom,
        age_mond_rtr : Avatmonde.inc0,
    },
    function(data){
        console.log(data);
       
    });
    enregistrefontour()
    }

    function enregistrefontour() {
        for (var j = 1; j <= Avatmonde.inc; j++) {
            if (Avatar_actif.nom != Avatmonde["inc"+j]["nom"]){
                tab_pos_rel[j] = $("."+Avatmonde["inc"+j]["nom"]).position().left  
            }
        }
    //  console.log("position avatar actif : "+ Avatar_actif.pos_rel)
    for (let j = 1; j <= Avatmonde.inc; j++) { 
        if (Avatar_actif.nom != Avatmonde["inc"+j]["nom"]){
            if ((Avatar_actif.pos_rel -55<= tab_pos_rel[j])  && (Avatar_actif.pos_rel +200 >= tab_pos_rel[j]) || (Avatar_actif.pos_rel-55>= tab_pos_rel[j])  && (Avatar_actif.pos_rel -200 <= tab_pos_rel[j])) {
                console.log("l'avatar est " + Avatmonde["inc"+j]["nom"])
                inter_avatar = true;
	            inter_nom_avat = Avatmonde["inc"+j]["nom"] 
                break
            }
            else console.log("pas d'avatar ")
            inter_avatar = false
            document.getElementById("bulle_"+Avatmonde["inc"+j]["nom"]).style.display="none"

        }
    }
    testbulle()
}
function testbulle() {
    /* bulle_bernard */
   
    if (inter_avatar) {
         document.getElementById("bulle_"+inter_nom_avat).style.display="block"
    }else{
        document.getElementById("bulle_"+inter_nom_avat).style.display="none"
    }
    let text = "bonjour je m'apelle " + inter_nom_avat
    affichage("bulle_"+inter_nom_avat,text)
}
