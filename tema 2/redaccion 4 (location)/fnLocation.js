function muestraHost(){
	var h=window.location.host;
	if(h==""){
		document.body.innerHTML="host = undefined";
	}else{
		document.body.innerHTML="host="+h;
	}
}
function muestraPath(){
	var h=window.location.href;
	if(h==""){
		document.body.innerHTML="direccion url = undefined";
	}else{
		document.body.innerHTML="direccion url = "+h;
	}
}
function ruta(){
	var url=prompt("introduzca url del la pagina que quieres visitar");
	window.location.href=url;
	reload();
}
function muestraProt(){
	var h=window.location.protocol;
	if(h==""){
		document.body.innerHTML="protocolo = undefined";
	}else{
		document.body.innerHTML="protocolo = "+h;
	}
}
function enlacetroll(){
	var enl=document.getElementsByName("trol");
	assign(mostrarPath());
	
	
}
//muestraHost();
//muestraPath();
//ruta();
//muestraProt();