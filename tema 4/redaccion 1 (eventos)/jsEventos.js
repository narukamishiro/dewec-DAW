function click(){
	alert("deja");
}
function gps(event){
	var px=document.getElementById("posx");
	var py=document.getElementById("posy");
	px.innerHTML="posicion x="+event.screenX;
	py.innerHTML="posicion Y="+event.screenY;
}
document.getElementById("con").addEventListener("mousemove",gps);
window.onload;
//window.onclick=click;

