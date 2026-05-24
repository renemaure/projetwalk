
export function lanceurD6(zone) {
	/* affichage test du dé six faces*/
  	let nbrD = Math.floor(Math.random() * 6) +1;
	const zoneDe = document.getElementById(zone);
	const imgDe = document.createElement("img");
	imgDe.id = "img-de";
	imgDe.src = 'images/imagedes/dice'+nbrD+'.png' 
	zoneDe.appendChild(imgDe);	
}
