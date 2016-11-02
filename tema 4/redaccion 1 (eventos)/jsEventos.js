function click(){
	alert("deja");
}
function gps(){
	var px=window.getElementById("posx");
	var py=window.getElementById("posy");
	px.innerHTML="posicion x="+window.screenX;
	py.innerHTML="posicion Y="+window.screenY;
	window.onload();
}
window.getElementById("con").addEventListener("mousemove",gps);
//window.onclick=click;

