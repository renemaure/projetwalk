function br(){

document.saisie.text.focus();

text_act = document.saisie.text.value;

document.saisie.text.value = text_act + "<br>";
}

function ouvp(){

document.saisie.text.focus();

text_act = document.saisie.text.value;

document.saisie.text.value = text_act + "<p class =\'f12 justifier\'>";
}

function fermp(){

document.saisie.text.focus();

text_act = document.saisie.text.value;

document.saisie.text.value = text_act + "</p>";

document.saisie.text.focus();
}

function voir(code){

	var x = document.getElementById(code);
	
	x.style.visibility="visible";
}	

function fermer(code){

	var x = document.getElementById(code);
	
	x.style.visibility="hidden";
}	

