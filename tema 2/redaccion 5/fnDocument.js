function pagina1(){
	var par=document.getElementsByName("most");
	var mod=document.getElementsByName("mod");
	var ida=document.getElementsByName("ida");
	var til=document.getElementsByName("titulo");
	var url=document.getElementsByName("url");
	mod.onclick=function(){
		par.innerHTML=document.lastModified;
	}
	ida.onclick=function(){
		par.innerHTML=document.referrer;
	}
	til.onclick=function(){
		par.innerHTML=document.title;
	}
	url.onclick=function(){
		document.write(document.URL);
	}
}
pagina1();