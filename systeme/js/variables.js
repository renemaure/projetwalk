	let fin_recul = 450; // position mini de l'avatar
	let fin_avanc = 750; //position max de l'avatar 
	let fin_decor; // position max du decor donnée venant de la BDD
	const deb_decor = 0; // position de debut du decor
	const delais = 6000;// délais d'animation
	let pas = 100; // pas d'avance avec les boutons
	const decalage_monde = 600; // decalage du monde au demarage pour la position de l'avatar
	const marg_main = parseInt($("main").css('margin-left')); // margin de la balise <main></main> 
	const ecart_temp = 10 // avance en secondes pour un tour de jeu 6 tours pour 1 minute
	const indic_noto = 10 // nombre de minutes pour augmenter la notoriété de 1
	let regleData = new Object(); //json des textes des regles
	let avc_avat; // nombre de pixel que doit faire l'avatar pour ce déplacer

	let inter_nom_avat; //le nom de l'avatar non joueur en interaction avec l'avatar actif
	let Avatar_actif; // objet des données de l'avatar actif
	let pos_monde; //position du monde à l'ouverture par rapport a l'avatar actif
	let boutiquePrescenceMonde = false // avatar actif devant une boutique au démarage 2026
	let premierTour = true; // drapeau marquant le premier tour au lancement
	let inter_avatar = false; // drapezu passe a true losuqe l'avatar actif rencontre un avatar non joueur

	let indc_coul = 1; // couleur de base du corps de l'avatar

	
	let pos_avatar;//position rel de l'avatar actif pour simplifier les calculs en global !!
	

	let etap = 0; // etape de création modif 26/04/2025 la variable n'était pas définie
	let intel = 3;
	let physi = 3;
	let charis = 3;
	let rest_piont = 5;
	let tirage_beau; 
	let tirage_conf;
	let tirage_vita;
	let tirage_pk;
	let tirage_age;
	let tirage_not;
	let phrase_memoire
	let text_jon = new Array();
	let corps_png = "";
	let avatar_png= Array(21).fill("vide");
	let memoir_png;
	let reper_png = "3";
	let bulle_avatar="";
	let Avatmonde = new Object();
	let data = new Array();

	let type_age ="adulte";
	let indc_val;
	let indc_max;
	let corps_avat;

	let structure;
	
	
	let position_souris;
	let activ_souris =true
	let presence_monde = true
	let nom_avatar;
	
	//nouv 2025
	let drap_noto = 0 // drapeau de calcul des secondes pour l'évolution de la notoriete
	let lanc_witer = true //drapeau pour accéder à la machine à écrire 
	const vitesse_witer = 50 // vitesse  de la machine à écrire 
	let don_site_jon = new Array(); // données générale du site de la base de donnée 01/03/2026


	let indmem_avtnj // indice memoire de l'avatar non_joueur rencontré
	let dataBoutique //données sur les boutiques
	let pos_boutique // données map des boutiques
	let prescenceBoutique = false	
	
	
	let nomBoutiques = new Array();
	let pos_objets = new Array(); // tableau des objest dans les boutiques
	let tabObjetsbout = new Array(); //tableau des noms des objets cliquables en boutique
 	let dataObjets;
	let nom_boutique = "";
	let dataObjBoutique;
	let map;
	