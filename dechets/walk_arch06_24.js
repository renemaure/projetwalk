	var fin_recul = 100; // position mini de l'avatar
	var fin_avanc =850; //position max de l'avatar 
	var fin_decor = -4700; // position max du decor
	var deb_decor = 0; // debut du decor
	const delais = 5000;
	const pas = 150;
	var avc_avat;
	var clas_avatar = "";
	var avc_mond;
	var pos_avatar;
	var pos_monde;
	var nom_avatar;  /* nom du notre personnage */
	var recalcul;
	var pos_z = "1";
	// var pos_avat;
	var marg_main = parseInt($("main").css('margin-left'));
	var tab_pos_avat = []; //nons des avatars
	var tab_pos_ind = []; //position absolu des avatars dans le monde
	var tab_pos_rel =[]; // position affiché relative des avatars dans le monde
	var tab_etap_avat = [];//etape des avatars enregistrés
	var decor = 1;
	var etap;
	var indc_coul = 1;
	var max_rept = 10 ;
	var indice_img = 1; //indice du png constituant l' avatar
	let tab_cool = Array(max_rept); // tableau la ref de la couleur de chaque png de l'avatar
	var intel = 3;
	var physi = 3;
	var charis = 3;
	var rest_piont = 5;
	let text_jon = new Array(20);
	let corps_png = "";
	let avatar_png= Array(15).fill("vide.png");
	let memoir_png;
	let reper_png = "";
	let max;
	$.post("fichiers/elements/textes.json",etape,'json');

	function etape(text_jon){
		console.log(text_jon);
		$("#info-erg").html(text_jon["text1"]);
		$("#info_cookie").html(text_jon["text5"]);
		$("#monde").addClass("monde_flex");
		if(getcookie("nom")){
			nom_avatar = getcookie("nom");
			// console.log(nom_avatar);
			etap = getcookie("etap");
			switch (etap){
				case "1":
					tirage(text_jon);
					break;
				case "2":
					dessin(text_jon);
					break;
				case "3":
					$.post("systeme/php/gestion_avatar.php",acccemonde,'json');
					break;
				default:
					enregistrement(text_jon);
			}
		}else{
			enregistrement(text_jon);
		}
	}	
	function enregistrement(text_jon){
		$.post("fichiers/enregistrement.html",function(data){
			$("#monde").html(data);
			$("#infos_monde").html(text_jon["text2"]);
			$("#infos_base").html(text_jon["text3"]);
				
			/* validation de se logger */
			$("#monde").on("click","#envoi_log",function(){
				console.log("nom avatar :" + $("#nom_log").val());
				$.post("systeme/php/gestion_logger.php",{
					nom_log: $("#nom_log").val(),
					pass_log: $.MD5($("#passe_log").val()),
				}, function(connex){
					console.log(connex["valid"]);
					if (connex["valid"] !="ok") {
						$("#retour_log").html(connex["erreur"]);
					}
					else{
						$("#infos_monde").html("");
						etape(text_jon);	
					} 
				},'json');
			});	
		},'html');
				/* validation de s'enregistrer' */
		$("#monde").on("click","#envoi_ins",function(){
			console.log("non enregistré : "+ $("#nom_ins").val());
			$.post("systeme/php/gestion_logger.php",{
				nom_ins: $("#nom_ins").val(),
				pass_ins: $.MD5($("#pass_ins").val()),
				mail_ins: $("#mail_ins").val(),
			}, function(connex){
				console.log(connex);
				if (connex["valid"] !="ok") {
					$("#retour_ins").html(connex["erreur"]);
				}
				etape(text_jon);
			},'json');
		});	
	}
		/* tirage nouvel avatar */
	function tirage(text_jon){
		$.post("fichiers/tirage.html",function(tirage){
			$("#monde").html(tirage);
			$("#infos_base, #infos_monde").html("");
			$("#zon_enreg").html(text_jon["text4"]);
			gesoption("physi",rest_piont,physi);
			gesoption("intel",rest_piont,intel);
			gesoption("charis",rest_piont,charis);
		},'html');
				/* tirahe physique */			
		$("#monde").on("change", "#physi", function(){
			physi = parseInt($("#physi").val());
			rest_piont =  calcul_point("physi",rest_piont,physi);
			gesoption("intel",rest_piont,intel);
			gesoption("charis",rest_piont,charis);
		});
				/* tirahe intelligence */
		$("#monde").on("change", "#intel", function(){
			intel = parseInt($("#intel").val());
			rest_piont =  calcul_point("intel",rest_piont,intel);
			gesoption("physi",rest_piont,physi);
			gesoption("charis",rest_piont,charis);
		});
					/* tirahe charisme */
		$("#monde").on("change", "#charis", function(){
			charis = parseInt($("#charis").val());
			rest_piont =  calcul_point("charis",rest_piont,charis);
			gesoption("physi",rest_piont,physi);
			gesoption("intel",rest_piont,intel);
		});
		$("#monde").on("click","#tirage_caract",function(){
			$.post("systeme/php/gestion_logger.php",{
				point_restant : rest_piont,
				charisme : charis,
				intellligence : intel,
				physique : physi,
				nom_avatar : nom_avatar,
			},
			function(data){
				console.log(data);
				etape(text_jon);
			});
		});
	};
	function calcul_point(idselect, rest_piont, point_caract){
		if (point_caract >= 3) {
			if(parseInt(rest_piont) > 0 ) rest_piont = rest_piont -2;
		}
		else rest_piont = rest_piont + 1;
		gesoption(idselect, rest_piont, point_caract);
		return rest_piont;
	};
	function gesoption(idselect, rest_piont, point_caract){
		max_opt = point_caract + parseInt(rest_piont/2);
		html = "";
		selc_defaut = "";
		for (let index_png = 1; index_png <= max_opt; index_png++) {
			if(index_png == point_caract) selc_defaut = " selected ";
			else selc_defaut = "";
			html = html + "<option" + selc_defaut + " value=\"" + index_png + "\">" + index_png + "</option>\r\n";
		}
		max_opt = 0;
		$("#"+ idselect).html(html);
		$("#reste").html("Il vous reste "+ rest_piont +" points de création")
		return rest_piont;
	}
	function dessin(text_jon){
		$.post("fichiers/dessin.php",function(dessin){	
			$("#monde").html(dessin);
		});
		$("#infos_monde").html(text_jon["text6"]);
	/* 	max = $("#monde #max_option").val();
		console.log(max);
		aff_corps(getRandomInt(max));	 */
		coul_corps();
	}
	function aff_corps(reper_png){
		console.log(reper_png);
		$.post("fichiers/corps.php",{rep_png :  reper_png,},
			function(corps){	
				$("#zon_enreg").html(corps);
		});
	}
	/* $("#monde").on("click",".opt_img",function(){
		avatar_png[reper_png] = $(this).attr("value");
		dessin_avatar(avatar_png);
	}); */
	function coul_corps(){
		$.post("systeme/donnees/avatar.json",function(data){	
			avatar_png[1] = "corps/" + (data["corps"]["deb_corps"] + indc_coul) + ".png";
			avatar_png[2] = "tete/" + (data["tete"]["deb_tete"] + indc_coul) + ".png";
			dessin_avatar(avatar_png);
		},'json');
	}

	$("#monde").on("click",".carre",function(){
		console.log("ici je suis");
		indc_coul = parseInt($(this).attr("value"));
		coul_corps();	
	});	
	$("#monde").on("click",".opt_des",function(){
		reper_png = $(this).attr("value");
		aff_corps(reper_png);
	});	
	
	function dessin_avatar(avatar_png){
			let corps_avat ="";
			corps_avat ="<img src=\"images/cadre.png\"/>";
			for (let index_png = 1 ; index_png <= avatar_png.length-1; index_png++) {
					corps_avat = corps_avat + "<img src=\"images/creation_avatar/"+ avatar_png[index_png]+"\" class ='dessin'/>";
			}
			$("#zone_img_avatar").html(corps_avat);
	}

	
	
		/* affichage du monde */
	function acccemonde(result){
		tab_pos_ind[0] = result["inc"]; 
		tab_pos_avat[0] = result["inc"];
			/* extration des données de tous les avatars */
		for (var i = 1; i <= result["inc"]; i++) {
			var posi = result["inc"+i]["pos_dep"]; //position de l'avatar
			tab_pos_ind[i] = posi; //position de l'avatar dans le tableau
			var nom_avatarar = result["inc"+i]["nom"]; 
			tab_pos_avat[i] = nom_avatarar;
			etp_avatar = result["inc"+i]["etape"];
			tab_etap_avat[i] = etp_avatar;
			eval(nom_avatarar+" = new Avatar('nom_avatarar',posi,etp_avatar)"); //  créer un objet du nom de l'avatar
		}
			/* affichage du monde au lancement */
		$("#monde").html("<div id=\"bulle_\"></div>\r\n<div id=\"zone_souris\"></div>");
		pos_monde = (200-(parseFloat(eval(nom_avatar+".pos_dep"))));
		$("#monde").removeClass("#monde_flex");
		$("#infos_monde").html("");
		$("#infos_base").html("");
		$("#monde").append("<img id=\"img-monde\" src=\"images/decor/decor.png\">");	
		$("#img-monde").css({
			left: pos_monde+'px',
			display: "block"
		});
			/* positionnemenrt des avatars dans le monde */
		for (var j = 1; j <= tab_pos_ind[0]; j++) {
			if (nom_avatar==tab_pos_avat[j]){
				clas_avatar = "."+tab_pos_avat[j];
				pos_z = "10";
			}
			else pos_z = "1";
			tab_pos_rel[j] = pos_monde + eval(tab_pos_ind[j]);
			/* test sortie sur le monde créée une fonction */
			$("#infos_base").append(tab_pos_avat[j] + " sa position BDD "+ eval(tab_pos_avat[j]+".pos_dep") + " dans le monde <br>\r\n");	
			img_avat = "<img class=\""+tab_pos_avat[j]+"\" src=\"images/avatar/"+tab_pos_avat[j]+".png\">";
			$("#monde").append(img_avat);
			$("."+tab_pos_avat[j]).css({
				left: tab_pos_rel[j] + 'px',
				position: 'absolute',
				top: '224px',
				'z-index_png': pos_z
		});
		}
		/* $("#infos_base").append("\r\n"+pos_monde); */ // donne des infos dans le monde
	}
	
	
	/* ouverture de la popup sur les cookies*/
	$("#control").on("click", "#popup_cookie", function(){
    	$("#info_cookie").css({display: "block"});
	});
	/*fermeture du popup cookie*/
		$("#control").on("click", "#btn_cookie", function(){
    	   	$("#info_cookie").css({display: "none"});
	});

		
	$(".btavanc").click(function(){
		avc_avat = pas;
		pos_avatar = $(clas_avatar).position().left;
		avance_avatar();
	});

    $(".btrecul").click(function(){
    	avc_avat = -pas;
    	pos_avatar = $(clas_avatar).position().left;
    	avance_avatar();
	});
	$("#monde").on("click", "#zone_souris", function(){
	// $("#zone_souris").click(function(event){
		pos_avatar = $(clas_avatar).position().left;
		pos_souris = event.pageX- marg_main;
		avc_avat = pos_souris-pos_avatar-55;
		avance_avatar();
	});
	function avance_avatar(){
		pos_monde = $("#img-monde").position().left;
		/*for (var j = 1; j <= tab_pos_ind[0]; j++) {
			if(tab_pos_ind[j]<1000 && tab_pos_avat[j]!=nom_avatar){
				$("#interface").append(tab_pos_ind[j]+" : ");
			}
		}*/
		cal_pos_avat = $("."+tab_pos_avat[2]).position().left;
		if (pos_avatar+avc_avat<fin_avanc && pos_avatar+avc_avat>fin_recul){
			avc_monde = -avc_avat/2;
			avc_avat = avc_avat/2;
			if (pos_monde+avc_monde>fin_decor && pos_monde+avc_monde<deb_decor){
				anim_avatar();	
				anim_monde();
			}
		}
		else{
			avc_monde = -avc_avat;
			if (pos_monde+avc_monde>fin_decor && pos_monde+avc_monde<deb_decor) anim_monde();
		}
	}		
	function anim_avatar(){
		$(clas_avatar).animate({left: '+='+avc_avat+'px'},delais);
	}
	function anim_monde(){
		$("#img-monde").animate({left: '+='+avc_monde+'px'},delais);
		for (var j = 1; j <= tab_pos_ind[0]; j++) {
			if (nom_avatar!=tab_pos_avat[j]) {
				$("."+tab_pos_avat[j]).animate({left: '+='+avc_monde+'px'},delais);
			}
		}
	}
	function Avatar(nom,pos,etp){
		this.nom = nom;
		this.pos_dep=pos;
		this.obj_etap=etp;
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
function getRandomInt(max) {
	return  Math.floor(Math.random() * (max - 1) + 1);
  }

		// alert("position de l'avatar est: " + pos_avatar.left);
		// if (pos_avatar.left>fin_recul) dec_avat = pas;