function click(){
	alert("deja");
}
function createtb(){
	var cod="<table id='tb' border='1'>";
	var n=1;
	for(x=1;x<=100;x++){
		cod=cod+"<tr>";
		for(y=1;y<=100;y++){
			cod=cod+"<td id="+n+" ></td>";
			n++;
		}
		cod=cod+"</tr>";
	}
	cod=cod+"</table>";
	return cod;
}
function gps(event){
	var px=document.getElementById("posx");
	var py=document.getElementById("posy");
	px.innerHTML="posicion x="+event.screenX;
	py.innerHTML="posicion Y="+event.screenY;
}
function pintv1(event){
	if(event.shiftKey){
		event.style.backgroundColor='#FF0253';
	}
	if(event.ctrlKey){
		event.style.backgroundColor='#FF1061';
	}
}
	
/*document.body.innerHTML=createtb();
for(z=1;z<=100;z++){
	for(p=1;p<=100;p++){
		n=100*(z-1)+p;
		document.getElementById(n).addEventListener("onmousemove",pintv1);
	}
}
*/
document.getElementById("con").addEventListener("onmousemove",gps);
//window.onload;
//window.onclick=click;

