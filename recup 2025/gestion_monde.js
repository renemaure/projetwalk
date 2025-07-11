/* recupère les données à l'ouverture du monde */
let pos_avat_monde = []; //position des avatars indexés dans le monde
async function acccemonde(recup_donnees){
    Avatmonde = recup_donnees;
    // console.log(Avatmonde);
    for (var i = 1; i <= Avatmonde.inc; i++) {
        if (getcookie("nom") == Avatmonde["inc"+i]["nom"]){
            Avatar_actif = new Avatar(Avatmonde["inc"+i]["nom"],Avatmonde["inc"+i]["pos_dep"],0,Avatmonde["inc"+i]["charis"],Avatmonde["inc"+i]["intel"],Avatmonde["inc"+i]["physq"],Avatmonde["inc"+i]["pwalk"]); 
        } else{
            pos_avat_monde[Avatmonde["inc"+i]["pos_dep"]] = Avatmonde["inc"+i]["nom"]; 
        }
    }
    pos_monde = (200-(parseInt(Avatar_actif.pos_abs)));// revoir le 200
    const reponse = await fetch("fichiers/elements/textes.json");
	text_jon = await reponse.json();
    $("#header").append("<button id=\"quit_monde\" onclick=\"QuiterMonde()\" >Quiter le monde</button>");
	$("#monde").removeClass("#monde_flex");
    $("#monde").append("<img id=\"img-monde\" src=\"images/decor/decor.png\">");	
	$("#img-monde").css({
        left: pos_monde+'px',
        display: "block"
    });
    $("#infos_monde").html(text_jon.text7);
	$("#infos_base").html(text_jon.text8);
	for (var j = 1; j <= Avatmonde.inc; j++) {
        tab_pos_rel[j] = pos_monde + parseInt(Avatmonde["inc"+j]["pos_dep"]);
        console.log(tab_pos_rel[j]);
        if (getcookie("nom") == Avatmonde["inc"+j]["nom"]){
            pos_z = "10";
            Avatar_actif.pos_rel = tab_pos_rel[j];
            console.log("idex_z de l'avatar"+ pos_z);
            
        } 
        else pos_z = "1";
        img_avat = "<div id=\"" + Avatmonde["inc"+j]["nom"] + "\">";
        img_avat += "<img class=\"avatar " + Avatmonde["inc"+j]["nom"] + "\" src=\"images/avatar/" + Avatmonde["inc"+j]["nom"] + ".png\">";
        img_avat += "<div class=\"bulle\" id=\"bulle_" + Avatmonde["inc"+j]["nom"] + "\"></div></div>";
        $("#monde").append(img_avat);
        $("." + Avatmonde["inc"+j]["nom"]).css({
            left: tab_pos_rel[j] + 'px',
            zIndex: pos_z,
        });
        $("#bulle_" + Avatmonde["inc"+j]["nom"]).css({
            left: tab_pos_rel[j] + 'px',
            // display: "none",
        });	
    }
     /* données pour l'affichage */
    $("#aff_nom_avat").append(strUcFirst(Avatar_actif.nom));
    // console.log("test sur l'objet Avatar_actif "+ Object.entries(Avatar_actif));
    return  Avatmonde;
}
$(".btavanc").click(function(){
    avc_avat = pas;
    // pos_avatar = $(clas_avatar).position().left;
    avance_avatar();
});
$(".btrecul").click(function(){
    avc_avat = -pas;
    // pos_avatar = $(clas_avatar).position().left;
    avance_avatar();
});
function avance_souris(){
    pos_monde = $("#img-monde").position().left;
    // pos_avatar = tab_pos_rel[indc_avatar];
    pos_avatar = Avatar_actif.pos_rel;
    avc_avat = event.pageX - marg_main - Avatar_actif.pos_rel - 55;
   
    avance_avatar();
}
function avance_avatar(){
    if (pos_avatar + avc_avat <fin_avanc && pos_avatar + avc_avat > fin_recul){
        avc_monde = -avc_avat/2;
        avc_avat = avc_avat/2;
        if (pos_monde + avc_monde > fin_decor && pos_monde + avc_monde < deb_decor){
            Avatar_actif.pos_rel =  pos_avatar + avc_avat;
            $("." + Avatar_actif.nom + " , #bulle_" + Avatar_actif.nom).animate({left: pos_avatar + avc_avat + 'px'},delais);
            anim_monde();
        }
    }
    else{
        avc_monde = -avc_avat;
        console.log("avc_monde : " + avc_monde + "/ pos_monde : " + pos_monde);
        if (pos_monde + avc_monde > fin_decor && pos_monde + avc_monde < deb_decor){
            anim_monde();  
        } 
    }
}
function anim_monde(){
    $("#img-monde").animate({left: '+='+ avc_monde +'px'},delais);
    for (var j = 1; j <= Avatmonde.inc; j++) {
        if (Avatar_actif.nom != Avatmonde["inc"+j]["nom"]){
             $("."+ Avatmonde["inc"+j]["nom"] + " , #bulle_" + Avatmonde["inc"+j]["nom"]).animate({left: '+='+avc_monde+'px'},delais);
             tab_pos_rel[j] = $("."+ Avatmonde["inc"+j]["nom"]).css("left");
             console.log("avat "+ j +" : " + tab_pos_rel[j]);
        } 
    }
    setTimeout(eregistre_monde, delais*1.5);
}	
function eregistre_monde(){
    pos_monde = $("#img-monde").position().left;
    let pos_avatar_actif = Math.round(parseInt(Avatar_actif.pos_rel)+ Math.abs(pos_monde));		
    console.log(Avatar_actif.pos_rel);	
    console.log(pos_monde);
    console.log(pos_avatar_actif);
    $.post("systeme/php/control_avatar.php",{
        pos_avat_actif : pos_avatar_actif,
        nom_avat_actif : Avatar_actif.nom,
    },
    function(data){
        console.log(data);
    });
}
