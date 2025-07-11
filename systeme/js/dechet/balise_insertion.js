
/*onclick="insertTag('<balise>','</balise>','textarea');"*/

function insertTag(startTag, endTag, textareaId, tagType) {
    var field  = document.getElementById(textareaId);
    var scroll = field.scrollTop;
    field.focus();
         
	if (window.ActiveXObject) {
		var textRange = document.selection.createRange();            
		var currentSelection = textRange.text;
	} else {
		var startSelection   = field.value.substring(0, field.selectionStart);
		var currentSelection = field.value.substring(field.selectionStart, field.selectionEnd);
		var endSelection     = field.value.substring(field.selectionEnd);
	}

if (tagType) {
		switch (tagType) {
			case "lien":
					endTag = "</a>";
					var URL = prompt("nom du le nouvelle page ?") || "";
					startTag = "<a href=\"tab-bord.php?util=fichiers/donnees&cod=2&donn=" + URL + "\">";
			break;
				case "extern":
					endTag = "</a>";
					var URL = prompt("nom du lien ?") || "";
					startTag = "<a href=\"" + URL + "\" target=\"_blank\">";
			break;
				case "anoter":
					endTag = "</span>";
					var URL = prompt("texte ?") || "";
					startTag = " <span class=\"souris sable gras\" title=\"" + URL + "\">";
			break;
			}
		}		

if (window.ActiveXObject) {
		textRange.text = startTag + currentSelection + endTag;
		textRange.moveStart('character', -endTag.length-currentSelection.length);
		textRange.moveEnd('character', -endTag.length);
		textRange.select();  
	} else { // Ce n'est pas IE
		field.value = startSelection + startTag + currentSelection + endTag + endSelection;
		field.focus();
		field.setSelectionRange(startSelection.length + startTag.length, startSelection.length + startTag.length + currentSelection.length);
	}  				
					  
 
    field.scrollTop = scroll; // et on redéfinit le scroll.
}