/* recupère les données à l'ouverture du monde */
function recupdonnemonde() {
    $.post("systeme/php/gestion_avatar.php",
        function(recup_donnees){
            Avatmonde = recup_donnees;
            if (prems) {
                donneeavataractif();
            }else{
                // en cours d'ecriture
            }
        }
        ,'json'
    );
}
function donneeavataractif(){
    for (var i = 1; i <= Avatmonde.inc; i++) {
        if (getcookie("nom") == Avatmonde["inc"+i]["nom"]){
             if (getcookie("nom") == Avatmonde["inc"+i]["nom"]){
                Avatar_actif = new Avatar(Avatmonde["inc"+i]["nom"],Avatmonde["inc"+i]["pos_dep"],0,Avatmonde["inc"+i]["charis"],Avatmonde["inc"+i]["intel"],Avatmonde["inc"+i]["physq"],Avatmonde["inc"+i]["pwalk"],Avatmonde["inc"+i]["age"],Avatmonde["inc"+i]["beaute"],i); 
            }
       }
    }
    pos_monde = (decalage_monde-(parseInt(Avatar_actif.pos_abs)));//position du monde
    Avatar_actif.pos_rel = pos_monde + parseInt(Avatar_actif.pos_abs);/*  position reel de l'avatar actif dans le monde */
    console.log(Avatar_actif);
    extractdoneeavatars();
    DonneesMonde();
    affichHeurMond();
    affichageavatarmonde();
}
function extractdoneeavatars() {
    for (var k = 1; k <= Avatmonde.inc; k++) {
        tab_pos_rel[k] = pos_monde + parseInt(Avatmonde["inc"+k]["pos_dep"]); 
    }
    if (prems)  pos_avt_ancien  =  tab_pos_rel.slice(); /* copie les donées actuelles dans le tableau ancien pour la premier tour */
}
function affichageavatarmonde(){
    let pos_z = "1";
    let posit_avat_css;
   	for (var j = 1; j <= Avatmonde.inc; j++) {
        
        let img_avat = "<div id=\"" + Avatmonde["inc"+j]["nom"] + "\""
        if (Avatar_actif.indic == j) img_avat += " class =\"souris\" onclick=\"affpopupactif()\"";
        pos_z =  Avatmonde["inc"+j]["vitalite"];
        img_avat += " >";
        img_avat += "<img class=\"avatar " + Avatmonde["inc"+j]["nom"] + "\" src=\"images/avatar/" + Avatmonde["inc"+j]["nom"] + ".png\">";
        img_avat += "<div class=\"bulle\" id=\"bulle_" + Avatmonde["inc"+j]["nom"] + "\"></div></div>";
        $("#monde").append(img_avat);

        if ((((tab_pos_rel[j]<-110) && (tab_pos_rel[i]<1145)) || ((pos_avt_ancien[j]<-110) && (pos_avt_ancien[i]<1145))) && Avatar_actif.indic != j) {
            posit_avat_css = pos_avt_ancien[j];
        }else  posit_avat_css = tab_pos_rel[j];

        $("." + Avatmonde["inc"+j]["nom"]).css({
            left: posit_avat_css + 'px',
            zIndex: pos_z,
        });
        $("#bulle_" + Avatmonde["inc"+j]["nom"]).css({
            left: posit_avat_css + 'px',
        });	

        if ((((tab_pos_rel[j]<-110) && (tab_pos_rel[i]<1145)) || ((pos_avt_ancien[j]<-110) && (pos_avt_ancien[i]<1145))) && Avatar_actif.indic != j) {
        let = av_avat = - (pos_avt_ancien[j] - tab_pos_rel[j]);
            $("." + Avatmonde["inc"+i]["nom"] + " , #bulle_" + Avatmonde["inc"+i]["nom"]).animate({left: tab_pos_rel[i] + av_avat + 'px'},delais);
        }

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
    // console.log("popup avatar fonctionne");
    popup("action_avatar","block");
    affichage("action_avatar",text_jon["bouton6"]);
}
function avance_souris(){
    pos_monde = $("#img-monde").position().left;
    pos_avatar = Avatar_actif.pos_rel;
    avc_avat = event.pageX - marg_main - Avatar_actif.pos_rel - 55;
    // TestAffichInfo("avance de l'avatar 63 ",avc_avat)
    avance_avatar();
}
function avance_avatar(){
    /* let test01 = Math.abs(pos_avatar) + Math.abs(avc_avat);
     console.log("postion de l'avatar"+  pos_avatar +" + avance  de l'avatar "+ avc_avat + " = " + test01 ) */
    if (Math.abs(pos_avatar) + Math.abs(avc_avat) <fin_avanc && Math.abs(pos_avatar) + Math.abs(avc_avat) > fin_recul){
        // console.log("dans la fenetre!")
        avc_monde = -avc_avat/2;
        avc_avat = avc_avat/2;
        if (pos_monde + avc_monde > fin_decor && pos_monde + avc_monde < deb_decor){
            Avatar_actif.pos_rel =  pos_avatar + avc_avat;
            $("." + Avatar_actif.nom + " , #bulle_" + Avatar_actif.nom).animate({left: pos_avatar + avc_avat + 'px'},delais);
            anim_monde();
        }
    }else{
        avc_monde = -avc_avat;
        if (pos_monde + avc_monde > fin_decor && pos_monde + avc_monde < deb_decor){
            anim_monde();  
        } 
    }
}
function anim_monde(){
    $("#img-monde").animate({left: '+='+ avc_monde +'px'},delais); // déplacement du monde
    for (var j = 1; j <= Avatmonde.inc; j++) {
        if (Avatar_actif.nom != Avatmonde["inc"+j]["nom"]){
             $("."+ Avatmonde["inc"+j]["nom"] + " , #bulle_" + Avatmonde["inc"+j]["nom"]).animate({left: '+='+avc_monde+'px'},delais);
             tab_pos_rel[j] = $("."+ Avatmonde["inc"+j]["nom"]).css("left"); // deplacement des autres avatars
        } 
    }
    setTimeout(eregistre_monde, delais*1.5);
}	
function eregistre_monde(){
    pos_monde = $("#img-monde").position().left;
    let pos_avatar_actif = Math.round(parseInt(Avatar_actif.pos_rel)+ Math.abs(pos_monde));		
    console.log("position reel de l'avatar "+Avatar_actif.pos_rel);	
    console.log("position du monde "+pos_monde);
    console.log("position corigé de l'avatar "+pos_avatar_actif);
    
    cal_tmp_monde();
    $.post("systeme/php/control_avatar.php",{
        pos_avat_actif : pos_avatar_actif,
        nom_avat_actif : Avatar_actif.nom,
        age_mond_rtr : Avatmonde.inc0,
    },
    function(data){
        console.log(data);
    });
}
