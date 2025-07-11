	/* extration des données des avatars présent sur le monde   ,  ,  ,  */
	async function acccemonde(result){
		// console.log(result);
		tab_pos_ind[0] = result["inc"]; 
		tab_pos_avat[0] = result["inc"];
		for (var i = 1; i <= result["inc"]; i++) {
			tab_pos_ind[i] = result["inc"+i]["pos_dep"];
			tab_pos_avat[i] = result["inc"+i]["nom"];
			tab_phy =  result["inc"+i]["physq"];
			tab_char =  result["inc"+i]["charis"];
			tab_intel =  result["inc"+i]["intel"];
			/* tab_beaute =  result["inc"+i]["pos_dep"];
			tab_vital =  result["inc"+i]["pos_dep"];
			tab_conf =  result["inc"+i]["pos_dep"]; */
			tab_pwalk = result["inc"+i]["pwalk"]
			// tab_etap_avat[i] = result["inc"+i]["etape"];
			if (nom_avatar==tab_pos_avat[i]){
				indc_avatar = i;
			}
			// eval(nom_avat+" = new Avatar(nom_avat,posi,etp_avat)"); /* créer un objet du nom de l'avatar */
		}
			/* affichage du monde au lancement */
		pos_monde = (200-(parseFloat(tab_pos_ind[indc_avatar])));
		$("#header").append("<button id=\"quit_monde\" >Quiter le monde</button>");
		$("#monde").removeClass("#monde_flex");
		const reponse = await fetch("fichiers/elements/textes.json");
		text_jon = await reponse.json();
		// console.log(text_jon["text7"]);
		$("#infos_monde").html(text_jon["text7"]);
		$("#infos_base").html(text_jon["text8"]);
		$("#monde").append("<img id=\"img-monde\" src=\"images/decor/decor.png\">");	
		$("#img-monde").css({
			left: pos_monde+'px',
			display: "block"
		});
			/* positionnemenrt des avatars dans le monde */
		for (var j = 1; j <= tab_pos_ind[0]; j++) {
			if (nom_avatar==tab_pos_avat[j]) pos_z = "10";
			else pos_z = "1";
			tab_pos_rel[j] = pos_monde + parseFloat(tab_pos_ind[j]);
			img_avat = "<div id=\""+tab_pos_avat[j]+"\">";
			img_avat += "<img class=\"avatar "+tab_pos_avat[j]+"\" src=\"images/avatar/"+tab_pos_avat[j]+".png\">";
			img_avat += "<div class=\"bulle\" id=\"bulle_"+tab_pos_avat[j]+"\"></div></div>";
			$("#monde").append(img_avat);
			$("."+tab_pos_avat[j]).css({
				left: tab_pos_rel[j] + 'px',
				zIndex: pos_z,
			});
			$("#bulle_"+tab_pos_avat[j]).css({
				left: tab_pos_rel[j] + 'px',
				// display: "none",
			});	
		}
		clas_avatar = "."+ nom_avatar;
		bulle_avatar = "#bulle_"+ nom_avatar;
		$("#aff_nom_avat").append(strUcFirst(nom_avatar));
		$("#aff_force_avat").append();
	};
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
		// pos_avatar = $(clas_avatar).position().left;
		pos_monde = $("#img-monde").position().left
		pos_avatar = tab_pos_rel[indc_avatar];
		avc_avat = event.pageX - marg_main - pos_avatar - 55;
		avance_avatar();
	});
	function avance_avatar(){
		/* envoi de la dernière position de l'avatar actif*/
		let pos_avatar_actif = Math.round(parseInt(tab_pos_rel[indc_avatar])+ Math.abs(pos_monde));		
		$.post("systeme/php/control_avatar.php",{
			pos_avat_actif : pos_avatar_actif,
			nom_avat_actif : tab_pos_avat[indc_avatar],
		},
		function(data){
			// console.log(data);
		});
			/* condition que l'avatar reste dans ça zonne 2tier du décor visible*/
		if (pos_avatar + avc_avat <fin_avanc && pos_avatar + avc_avat > fin_recul){
			avc_monde = -avc_avat/2;
			avc_avat = avc_avat/2;
			if (pos_monde + avc_monde > fin_decor && pos_monde + avc_monde < deb_decor){
				anim_avatar();	anim_monde();
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
	function anim_avatar(){
		$(clas_avatar + " , " + bulle_avatar).animate({left: pos_avatar + avc_avat + 'px'},delais);
		tab_pos_rel[indc_avatar] =  pos_avatar + avc_avat;
		console.log(tab_pos_rel[indc_avatar]);	//valeur bonne
	
		
	}
	function anim_monde(){
		$("#img-monde").animate({left: '+='+ avc_monde +'px'},delais);
		for (var j = 1; j <= tab_pos_ind[0]; j++) {
			if (nom_avatar!=tab_pos_avat[j]){
				 $("."+tab_pos_avat[j] + " , #bulle_" + tab_pos_avat[j]).animate({left: '+='+avc_monde+'px'},delais);
				 tab_pos_rel[j] = $("."+tab_pos_avat[j]).css("left");
				 console.log("avat "+ j +" : " + tab_pos_rel[j]);
			} 
		}
			
		
		// console.log($("."+tab_pos_avat[indc_avatar]).position().left);
	}