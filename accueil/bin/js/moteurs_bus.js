function getXhr()
{
	var xhr = null;
	if(window.XMLHttpRequest)// Firefox et autres
		{ 
			xhr = new XMLHttpRequest(); 
			xhr.overrideMimeType('text/xml'); 
		}
	else if(window.ActiveXObject) // Internet Explorer 
		{
			try 
			{
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} 
				catch (e)
			{
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		}
	else
		{ 
			alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest..."); 
			xhr = false; 
		} 
	return xhr;
}
function testajax(callback,line,id)
{
	var xhr = getXhr();
	
	xhr.onreadystatechange = function()
	{
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			callback(xhr.responseText,id);	
		}
	}
	xhr.open("GET", line, true);
	
	xhr.send(null);
}
function ajaxSynchrone(line,elemid)
{
	var xhr = getXhr();
	xhr.onreadystatechange = function()
	{
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			reponse = xhr.responseText;
			document.getElementById(elemid).innerHTML = reponse;
		}
	}
	xhr.open("GET", line, true);
	xhr.send(null);
}

function disparait(idcss)
{
document.getElementById(idcss).innerHTML = " ";
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