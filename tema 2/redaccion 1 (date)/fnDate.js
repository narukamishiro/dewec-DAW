var cont=60;
var hor,min,seg;
function fecha1(){
	d= new Date();
	year=d.getFullYear();
	document.write("año: "+year+"<br>");
	mes=d.getMonth();
	document.write("mes: "+mes+"<br>");
	dia=d.getDay();
	document.write("dia: "+dia+"<br>");
	hor=d.getHours();
	document.write("hora: "+hor+"<br>");
	min=d.getMinutes();
	document.write("minutos: "+min+"<br>");
	seg=d.getSeconds();
	document.write("segundos: "+seg+"<br>");
}
function fechacal(){
	var fechaHoy=new Date();
}
function contador(){
	document.write(cont+"<br>");
	cont--;
	if(cont>=0){
		setTimeout(contador,1000);
	}
}
function contador2(){
	document.write(cont+"<br>");
	cont--;
	if(cont>0){
		setTimeout(contador,1000);
	}else{
		location.assign("https://www.google.es");
	}
}
function reloj(){
	document.cle;
	f=new Date();
	hor=f.getHours();
	min=f.getMinutes();
	seg=f.getSeconds();
	mend=hor+":"+min+":"+seg;
	document.body.innerHTML=mend;
	setTimeout(reloj,1000);
}
//fecha1();
//contador();
//contador2();
reloj();