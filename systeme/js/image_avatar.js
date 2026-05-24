import {affichage,effaceMonde} from "./modules_js/fonctions_internes"
import{gestion_barre_text} from './modules_js/gestion_infos_centrale.js'
import {etape} from'./walk.js'

export	function coul_corps(){
		avatar_png[2] = text_jon["deb_corps"] + indc_coul
		avatar_png[3] = text_jon["deb_tete"] + indc_coul
		avatar_png[1] = text_jon["couleurs"]["nomcoul"+ indc_coul]
		dessin_avatar();
	}
	export function dessin_avatar(){
		let corps_avat = "<img src=\"images/cadre.png\"/>";
		for (let index_png = 2 ; index_png <= avatar_png.length-2; index_png++) {
			if (avatar_png[index_png] !="vide") {
				corps_avat = corps_avat + "<img src=\"images/creation_avatar/"+text_jon["rept"]["ind"+index_png]+"/"+avatar_png[index_png]+".png\" class ='dessin'/>";
			}
		}
		affichage("zone_img_avatar",corps_avat);
		console.log(avatar_png);
	}
    export function CouleurCorpsAvatar(){
        let col_coul_tab = 1; 
        let html = "<table border=1>\r\n<tr>";
        for (let index_coul = 1; index_coul <= text_jon["nbr_img"]; index_coul++) {
            if (col_coul_tab == text_jon["col_table"]) {
                html += "</tr><tr>";
                col_coul_tab = 1;
            }	
            html += "<td class=\"carre\" value = \""  +  index_coul + "\" style=\"background:#" + text_jon["couleurs"]["coul" + index_coul]  + "\"></td>";
            col_coul_tab ++;
        }
        html += "</table>";
        affichage("zon2-erg",html);
	}
    export function OptionCreatAvatar(){
		let html = "<ul class='p0 m0 v50 pl10'>";
		for (let index = indc_val; index <= indc_max; index++) {
			html += "<li class=\"opt_des\" value=\"" + index + "\">" + text_jon["rept"]["txt" + index] + "</li>";	
		}
		html += "</ul>";
		affichage("couleur",html);
	}
    	export function affichepng(indice) {
		let test_rep = text_jon["rept"]["ind" + indice] 
		//console.log(test_rep)
			
		$.post("systeme/php/corps_nouv.php",
		{
			rep_png : test_rep,
			
		},
		function(corps){	
			data = JSON.parse(corps);   
			// console.log(data)
			//console.log(data["0"]) 
			document.querySelector("#zon_enreg h3").innerHTML = text_jon["titre_debut_enreg"] + text_jon["rept"]["ind"+indice]+text_jon["titre_fin_enreg"]
			let rep_img ="images/creation_avatar/"+ test_rep +"/";
			// console.log(rep_img)
			let html = "<table id=\"tab_accesoire\">\r\n<tr>"
			let lig = 1;
			for (let index = 1; index <= data["0"]-1; index++){
				html += "<td><img src=\"" + rep_img + data[index] + ".png\" class=\"opt_img souris\" value = \""+ data[index] +"\"></td>";
				if(lig == 6){
					html +="</tr><tr>\n\r"; 
					lig = 1;
				}else lig ++
			}
			html += "</tr></tble>"
			affichage("zonne_table",html)

			
		});
	}
	export function creatImageavat() {
		$.post("systeme/php/creat_imge.php",
		{
				avatar_png :  avatar_png,
		},
			function(retour){	
				console.log(retour);
				affichage("infos_monde","")
				affichage("monde","")
				etape();
			});	
		}
	