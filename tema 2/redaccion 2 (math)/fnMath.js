function rand(nmbmin,nmmax){
	var rn1=Math.random();
	var rn2=Math.random()*100+100;
	var rn3=Math.random()*(nmmax-nmbmin)+nmbmin;
	document.body.innerHTML=rn1.toFixed(2) +" "+Math.round(rn2)+" "+Math.round(rn3);
}
function datanguls(){
	var ang=prompt("introduzca grados del angulo(0-360)");
	ang=(ang/180)*Math.PI;
	var coseno=Math.cos(ang);
	var seno=Math.sin(ang);
	var tag=Math.tan(ang);
	document.body.innerHTML="coseno:"+coseno +" seno: "+seno+" tangente:"+tag;
}
function catetos(){
	var cat1=prompt("valor cateto 1");
	var cat2=prompt("valor cateto 2");
	var n1=Math.exp(cat1,2);
	var n2=Math.exp(cat2,2);
	var hip=Math.sqrt(n1+n2).toFixed(2);
	document.body.innerHTML="valor de la hipotenusa:"+hip;
}
function catetos2(){
	var continuar=true;
	while(continuar){
		var cat1=prompt("valor cateto 1");
		var cat2=prompt("valor cateto 2");
		var n1=Math.exp(cat1,2);
		var n2=Math.exp(cat2,2);
		var hip=Math.sqrt(n1+n2).toFixed(2);
		document.body.innerHTML="valor de la hipotenusa:"+hip;
		var op=prompt("¿quieres continuar? (s(si)/(n/no)");
		if (op=="n"){
			continuar=false;
		}
		
	}
}
function ecuacion2grado(){
	var x1;
	var x2;
	var num1=prompt("introduca el numero grado 2");
	var num2=prompt("introduca el numero grado 1");
	var num3=prompt("introduca el numero grado 0");
	var pol=Math.exp(num2,2)-(4*num1*num3);
	if(pol>0){
		x1=(-num2+Math.sqrt(pol))/2*num1;
		x2=(-num2-Math.sqrt(pol))/2*num1;
		document.body.innerHTML="solucion 1:"+x1+" solucion 2:"+x2;
	}else{
		if(pol==0){
			x1=(-num2+Math.sqrt(pol))/2*num1;
			document.body.innerHTML="solo tiene una solucion:"+x1;
		}else{
			document.body.innerHTML="no hay soluciones";
		}
	}
}
function potencia(){
	var base=prompt("introduzca la base");
	var exp=prompt("introduzca el exponente");
	var total=1;
	n=1;
	do{
		total=total*base;
		n++;
	}while(n<=exp);
	document.body.innerHTML=base+"^"+exp+" es "+total;
}
function columsen(celdas){
	document.write("<table border= ”0” cellspacing= ”2” bgcolor= ”black” width= ”200” >");
	for(num=0;num<=celdas;num++){
		document.write("<tr bgcolor='white' height='25'>");
		document.write("<td width='25'>"+num+"</td>");
		document.write("<td width='25'>"+Math.sin(num) +"</td>");
		document.write("</tr>");
	}
	document.write("</table>");
}
function randomgif(){
	var op=Math.random()*3+1;
	var ima;
	switch(Math.abs(op)){
		case 1:
		ima="op1.gif";
		break;
		case 2:
		ima="op2.jpeg";
		break;
		case 3:
		ima="op3.gif";
		break;
	}
	document.body.innerHTML="<img src='"+ima+"'>";
}
//rand(12,100);
//datanguls();
//catetos2();
//ecuacion2grado();
//potencia();
//columsen(10);
//randomgif();