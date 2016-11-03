function click(){
	alert("deja");
}
function createtb(){
	var cod="<table id='tb'>";
	var n=1;
	for(x=1;x<=100;x++){
		cod=cod+"<tr>";
		for(y=1;y<=100;y++){
			cod=cod+"<td id="+n+"></td>";
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
	var tb=document.getElementById("tb");
	var celd;
	if(event.onmousemove){
		var p=event.target.id;
		celd=document.getElementById(p+"");
	}
	if(event.shiftKey){
		celd.style.backgroundColor='#FF0253';
	}
	if(event.ctrlKey){
		celd.style.backgroundColor='#FF1061';
	}
}
document.getElementById("tb").innerHTML=createtb();
document.getElementById("tb").addEventListener(pintv1);
window.onload;
//window.onclick=click;

