import{affInterface,affstructure,affbouton} from './affichage_permanent.js'
import{affichage,effaceMonde,afficheQuery} from './fonctions_internes.js'
import{gestion_barre_text} from './gestion_infos_centrale.js'
import {gesoption,changePhysique,changeIntelligence,changeCharisme,calculAptitudes,enregistre_avat} from './../tirage.js'
import {coul_corps,CouleurCorpsAvatar,OptionCreatAvatar,affichepng,dessin_avatar,creatImageavat} from './../image_avatar.js'
import { etape } from '../walk.js'


        export function connextionMonde(){
        affstructure("structure generique","titre_acces","titre_enrg")
        affbouton("affiche_conex","structure_conex","btconex")
        affbouton("affiche_erg","structure_civil","btenrg")
        affInterface(" "," ","selogger","inscrtiption")

        }

        export function AfficheTirage(){
        affstructure("structure generique","titre_tirage","titre_regles_tirage")
        affichage("affiche_conex",text_jon["tirage"]);
        document.getElementById("affiche_erg").style.display="block"
        affichage("affiche_erg",text_jon["regles_aptitude"]);
        affInterface("titre_monde_1","titre_base_1","text_monde_1","text_base_1")
        gesoption("physi",rest_piont,physi);
        gesoption("intel",rest_piont,intel);
        gesoption("charis",rest_piont,charis);
                if(etap=="1"){
                        document.getElementById("physi").addEventListener("change", changePhysique)
                        document.getElementById("intel").addEventListener("change", changeIntelligence)
                        document.getElementById("charis").addEventListener("change", changeCharisme)
                        document.getElementById("btTirage").addEventListener("click", afficheCaracteristique)
                }
        }

        function afficheCaracteristique(){
                affichage("affiche_conex","");
                affichage("affiche_erg","");
                calculAptitudes()
                affichage("affiche_conex",text_jon["text_tirage_second"]);
                document.getElementById("affiche_erg").style.display="flex" 
        	affichage("affiche_erg",text_jon["texte_aptitudes_second"]);
	        const zon_id = document.getElementById("zon_enreg");
		const bouton = document.createElement("div")
		bouton.id = "bouton_tirage"
		zon_id.appendChild(bouton);
		affichage("bouton_tirage",text_jon["bouton7"])
                	
		affichage("phy", physi);
		affichage("int", intel);
		affichage("ch", charis);
		affichage("aff_beaute_avat", tirage_beau);
		affichage("conf", tirage_conf);
		affichage("vita", tirage_vita);
		affichage("pk", tirage_pk);
		affichage("nt", tirage_not);
		affichage("age", tirage_age + "ans");
		affichage("memoire", phrase_memoire["0"]);
                if(etap=="1") document.getElementById("tirage_caract").addEventListener("click", enregistre_avat)
        }
        export function imageAvatar(){
                avatar_png[0] = nom_avatar	
                affstructure("structure_img","titre_img_conex_2a","titre_img_erg_2a")
                affichage("creat_avatar",text_jon["creat_img_avat"])
                affichage("valid_avatar",text_jon["bouton_conex_2a"])
		affichage("zonne_table",text_jon["creat_img_enreg"])
		affichage("zon1-erg",text_jon["text_enreg_2a"]);
                affInterface("titre_monde_2a","titre_base_2a","text_monde_2a","text_base_2a")
                coul_corps();
                CouleurCorpsAvatar();
                if (etap==2) {
                        document.getElementById("tirage_caract").addEventListener("click", corpsImgAvatar)
                        document.getElementById("monde").addEventListener("click", function(event) {
                        if (event.target.classList.contains("carre")) {
                                indc_coul = event.target.getAttribute("value");
                                coul_corps();
                        }
                        });
                }
                
        }
        function corpsImgAvatar() {
                affichage("zonne_table","")
                affichage("nav_avatar",text_jon["text_conex_2b"]);
                afficheQuery('#infos_monde .zonne_txt', text_jon["text_monde_2b"])
                affichage("valid_avatar",text_jon["bouton_conex_2b"])
                reper_png = "4"
		indc_val = 4;
		indc_max = 6;
		OptionCreatAvatar();// affiche la liste
		affichepng(indc_val);
                if (etap==2) {
                        document.getElementById("monde").addEventListener("click", function(event) {
                                if (event.target.classList.contains("opt_des")) {
                                        reper_png = event.target.getAttribute("value");
                                        affichepng(reper_png);
                                }
                        });
                        document.getElementById("monde").addEventListener("click", function(event) {
                                if (event.target.classList.contains("opt_img")) {
                                        avatar_png[reper_png] = event.target.getAttribute("value");
                                        dessin_avatar();
                                }
                        });
                       document.getElementById("tirage_image").addEventListener("click",function(){
                                let indice = avatar_png.findIndex((element) => element == "vide")
                                console.log("indice vide : " + indice)
                                if((indice>3) && (indice<6)){
                                        gestion_barre_text (text_jon["txt_nibouche_niyeux"])
                                } else optionImageAvatar()
                       })
                }

        }
        function optionImageAvatar() {
		affichage("nav_avatar","");
                affichage("nav_avatar",text_jon["text_conex_2c"]);
                afficheQuery('#infos_monde .zonne_txt', text_jon["texte18"])
                affichage("valid_avatar",text_jon["bouton4"])
                reper_png = "7"
                indc_val = 7;
                indc_max = 9;
                OptionCreatAvatar();
                affichepng(indc_val);	
                if (etap==2) {
                        document.getElementById("creationImag").addEventListener("click", function(){
                                let indice = avatar_png.findIndex((element) => element == "vide")
		                console.log("indice vide : " + indice)
                                if(indice==7){
                                        console.log("pas d'habits") 
                                        gestion_barre_text (text_jon["txt_morale_nu"])
                                }  else{
                                        console.log("je me trouve ici et la")
                                        creatImageavat()
                                        } 
                        })
                }		
		
	}
