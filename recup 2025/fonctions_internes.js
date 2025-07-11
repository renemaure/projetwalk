function calcul_point(idselect, rest_piont, point_caract){
  if (point_caract >= 3) {
    if(parseInt(rest_piont) > 0 ) rest_piont = rest_piont -2;
  }
  else rest_piont = rest_piont + 1;
  gesoption(idselect, rest_piont, point_caract);
  return rest_piont;
}
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
function popup(balise,sens){
  document.getElementById(balise).style.display = sens;
}
function affichage(idelm,dataaff){
  document.getElementById(idelm).innerHTML = dataaff;
}
function AffichageHeader(text_jon){
  let hearder = text_jon["titre"];
  if (getcookie("etap")>0) hearder = hearder + text_jon["bouton1"];
	affichage("header", hearder);
}

function setCookie(name, value, expires, path, domain, secure) {
	document.cookie=name+"="+ escape(value) +
		((expires==undefined) ? "" : ("; expires="+expires.toGMTString()))+
		((path==undefined) ? "" : ("; path="+path))+
		((domain==undefined) ? "" : ("; domain="+domain))+
		((secure==true) ? "; secure" : "");
}
function strUcFirst(a) {
	return (a+'').charAt(0).toUpperCase() + (a+'').substr(1);
  }