const fin_recul = 300; // position mini de l'avatar
	const fin_avanc = 900; //position max de l'avatar 
	let fin_decor = -4100; // position max du decor
	let deb_decor = 0; // position de debut du decor
	let avc_monde = 0; // nombre de pixel d'avance du monde
	const delais = 5000;// délais d'animation
	const pas = 150; // pas d'avance avec bouton
	const decalage_monde = 600; // decalage du monde au demarage pour la position de l'avatar
	const marg_main = parseInt($("main").css('margin-left')); // margin de la balise <main></main> 
	const largeur_monde = 1200; // largeure du monde ne sert pas pour le moment
	const ecart_temp = 10 // avance en secondes d'un tour de mouvement due l'avatar actif

	let indc_coul = 1; // couleur de base du corps de l'avatar

	let avc_avat; // nombre de pixel que doit faire l'avatar actif
	let pos_avatar;//position rel de l'avatar actif pour simplifier les calculs
	let pos_monde; //position du monde à l'ouverture par rapport a l'avatar actif
	let tab_pos_rel =[]; // position affiché relative des avatars dans le monde
	let etap; // etape de création
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
	let text_jon = new Array();
	let corps_png = "";
	let avatar_png= Array(11).fill("vide");
	let memoir_png;
	let reper_png = "3";
	let bulle_avatar="";
	let Avatmonde = new Object();
	let pos_avat_monde = []; //position des avatars indexés dans le monde utilisé!!
	let age_monde;
	let heur_monde;
	let type_age;
	let indc_val;
	let indc_max;
	let corps_avat;
	let prems = true;
	let pos_avt_ancien = new Array();
	let structure;
	let inter_avatar = false;
	let inter_nom_avat

	let position_souris;