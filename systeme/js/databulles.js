var latitude = 0;
var longitude = 0;
var precition = 0; 
var referg = "ok";
var nomlog ="";
var passlog="";
var nomerg="";
var mailerg="";
var passerg="";
var mailper="";
var plurs=""; /*  plurierl avec s */
var typch = "code_post_dtb"; /* variable en foctionnement test recherehce otis sur le code postal par defaut */
var text_info ="<a href=\"#information\" data-role=\"button\" data-mini=\"true\" data-inline=\"true\">Informations</a>";
obj_commun = eval('('+commun+')');

function geo()
{			
	if(navigator.geolocation)
	{
		 navigator.geolocation.getCurrentPosition(geosuccess, geoerror, {enableHighAccuracy:true, timeout:300000, maximumAge:0} );
	}
	else{
		/* ici texte pour erreur exemple: "Votre navigateur ne prend pas en compte la géolocalisation HTML5" */
	}
}
function geosuccess(position){
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
	precition = position.coords.accuracy;
	$.post("php/recup_log_adresse.php",{lat:latitude,lng:longitude,pre:precition,typrech:typch}, gestiondon,'json');
}

function geoerror(error) {
    var info = "Erreur lors de la géolocalisation : ";
    switch(error.code) {
		case error.TIMEOUT:
			info += "Le service n'a pas répondu à temps";
			break;
		case error.PERMISSION_DENIED:
			info += "Vous n’avez pas donné la permission";
			break;
		case error.POSITION_UNAVAILABLE:
			info += "La position n’a pu être déterminée";
		break;
		case error.UNKNOWN_ERROR:
			info += "Erreur inconnue";
		break;
		}
}
function gestiondon(data)
{
	var nbr_tr = data.total_dtb;
	var posheight = (nbr_tr * 120) + 450 ; /* elargie la zonne en fonction du nombre de databulles */
	$(".corps_index").height(posheight);
		
	/* if(nbr_tr >1) plurs = "s"; pluriel de otis */
			
	var txt ="";
	txt+="<p class=\"titre_otis t10\">Votre position géographique</p>";				
	txt+="<p class=\"t20\"><span class=\"gras\">longitude : </span><span class=\"italique\">"+longitude+"</span></p>";				
	txt+="<p class=\"t30\"><span class=\"gras\">latitude : </span><span class=\"italique\">"+latitude+"</span></p>";				
	txt+="<p class=\"t40\"><span class=\"gras\">précision : </span><span class=\"italique\">"+precition+" mètres</span></p>";				
	txt+="<p class=\"titre_otis t60\">Votre position physique:</p>";	
	txt+="<p class=\"t70\">"+data.adr_log+"</p>";	
	txt+="<p class=\"titre_otis t90\">Databulles dans votre environement</p>";
	txt+="<p class=\"t100\">Recherche avec "+obj_commun[typch]+" <span class=\"gras\">89100</span></p>";	
	txt+="<p class=\"t110\">Vous avez "+nbr_tr+" Databules dans votre zonne de recherche</p>";
	txt+="<p class=\"t120 centrer\">Vous n'avez pas encore crééer de Datbulles.</p>";		
	$("#list_data").html(txt);	
	
 	for(var blc=1;blc<=nbr_tr;blc++){
			$.post("php/gestion_liste_dtb.php",{ref_dtb:data.ref_dtb[blc],lat:latitude,lng:longitude}, function(result){
			$("#dtb_list_data").append(result);
			$("#dtb_list_data").listview("refresh");	
		}); 
	} 
}
function affdatabulle(refdtb)
{
	$.post("../php/gestion_databulles.php",{ref_dtb:refdtb}, function(result){
		$("#nom_dtb").append(result.nom_dtb);	
		$("#nom_dtb1").append(result.nom_dtb);
		},'json'); 
}
function gestbout(){
	if(getcookie('nom'))aff_index();
	else aff_session();
}
function aff_index(){
	var text_bout ="<a href=\"#\" data-role=\"button\" data-mini=\"true\" data-inline=\"true\" id=\"bt_suite\">Pour continuer dans Databulles</a>";
	$("#zon_bout").append(text_bout);
	/*$("#zon_bout").append(text_info);*/
	$("#bt_suite").bind ("click",function(event){
		$.mobile.changePage("liste_databulles.php");
		
	});
}
function aff_session(){
	var html = "<input id=\"nom_log\" name=\"nom_log\" maxlength=\"40\" type=\"text\" placeholder=\"Votre pseudo\" data-theme=\"b\" required data-clear-btn=\"true\" data-mini=\"true\">";
	html+= "<input id=\"pass_log\" name=\"pass_log\" maxlength=\"20\" type=\"text\" placeholder=\"Votre mot de passe\" data-theme=\"b\" required data-clear-btn=\"true\" data-mini=\"true\">";
	html+= "<input type=\"button\" id=\"envoi\" value=\"validez\" data-mini=\"true\" data-inline=\"true\">";
	html+= "<p><a href=\"#enregistrer\">S'enregistrer</a><span class=\"spanr\"><a href=\"#perdu\">Identifiants perdus</a></span></p>";
	
	$("#zon_bout").append(html);
	$("#nom_log").bind("change", function(event){{
		nomlog = $(this).val();
	}})
	$("#pass_log").bind("change", function(event){{
		passlog = $(this).val();
	}})
	$("#envoi").bind ("click",function(event){
		$.post("traitement_session.php",{nom_log:nomlog,pass_log:passlog}, function(result){
			/*var aff_ereur = result.erreur;*/
			if(result.valid=="ok"){
				$.mobile.changePage("liste_databulles.php");
				/*geo();*/
			}else{
				$("#erreur").html(result.erreur);
			}
		
		},'json');
	});
	
	$("#nom_erg").bind("change", function(event){{
		nomerg = $(this).val();
	}})
	$("#pass_erg").bind("change", function(event){{
		passerg = $(this).val();
	}})
	$("#mail_erg").bind("change", function(event){{
		mailerg = $(this).val();
	}})
	$("#envoi_erg").bind ("click",function(event){
		$.post("traitement_session.php",{nom_erg:nomerg,pass_erg:passerg,mail_erg:mailerg,ref_erg:referg}, function(result){
			if(result.valid=="ok"){
				$.mobile.changePage("liste_databulles.php");
				/*geo();*/
			}else{
				$("#erreur_erg").html(result.erreur);
			}
		},'json');
	});
	
	$("#mail_per").bind("change", function(event){{
		mailper = $(this).val();
	}})
	
	$("#envoi_err").bind ("click",function(event){
		$.post("traitement_session.php",{mail_per:mailper}, function(result){
			if(result.erreur=="ok"){
			/* 	$.mobile.changePage("index.php");
				geo(); */
			$("#perdu").dialog("close");
			}else{
				$("#erreur_err").append(obj_commun[result.erreur]);
			}
		},'json');
		
	});
	/* gestbout(); */

}
function getcookie(name) {
	if (document.cookie.length==0) { return null; }
	var regCookies=new RegExp("(; )","g");
	var cookies=document.cookie.split(regCookies);
	for (var i=0; i<cookies.length ; i++) {
		var regInfo=new RegExp("=","g");
		var infos=cookies[i].split(regInfo);
		if (infos[0]==name) {
			return unescape(infos[1]);
			/*return infos[1];*/
		}
	}
	return null;
}
function setCookie(name, value, expires, path, domain, secure) {
	document.cookie=name+"="+escape(value)+
		((expires==undefined) ? "" : ("; expires="+expires.toGMTString()))+
		((path==undefined) ? "" : ("; path="+path))+
		((domain==undefined) ? "" : ("; domain="+domain))+
		((secure==true) ? "; secure" : "");
}
/* 
    $.post("demo_ajax_gethint.asp", {suggest: txt}, function(result){
        $("span").html(result); */

/*pour les tests position de la gare de lyon hall 1*/

/*latitude = 48.8447170;
longitude = 2.3739300;*/

/*latitude = 48.848712;
longitude = 2.371011*/


/*ROND-POINT DES CHAMPS-ELYSEES paris*/
/*latitude = 48.8683259;
longitude = 2.3095814;*/

/*latitude = 48.84413;
longitude = 2.34925; */
