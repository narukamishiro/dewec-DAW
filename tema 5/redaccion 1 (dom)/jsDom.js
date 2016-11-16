function totenl(){
	var x=document.getElementsByTagName("a");
	return x.length;
}
function pagenl(){
	var x=document.getElementsByTagName("a");
	var cont=x.length;
	var y=cont-2;
	return x[y].href;
}
function google(){
	var x=document.getElementsByTagName("a");
	var tam=x.length;
	var ct=0;
	var co=0;
	var p="";
	do{
		p=x[ct].href;
		if(p=="https://www.google.es/"){
			co++;
		}
		ct++;
	}while(ct<tam);
	return co;
}
function enl3pf(){
	return document.getElementsByTagName("p")[2].getElementsByTagName("a").length;
}

//document.getElementById("resul").innerHTML="contador:"+totenl()+"<br>,pagina enlazada pelultimo enlace:"+pagenl()+"<br>enlaces a google:"+google()+"<br>enlaces en el tercer parrafo: "+ enl3pf();