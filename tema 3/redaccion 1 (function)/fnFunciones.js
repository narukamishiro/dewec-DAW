function maxfn(){
	max=0;
	num1=prompt("escoge primer numero");
	num2=prompt("escoge segundo numero");
	num3=prompt("escoge tercer numero");
	num4=prompt("escoge cuarto numero");
	if(max<num1){
		max=num1;
	}
	if(max<num2){
		max=num2;
	}
	if(max<num3){
		max=num3;
	}
	if(max<num4){
		max=num4;
	}
	document.body.innerHTML="el maximo entre estos 4 numeros ("+num1+","+num2+","+num3+","+num4+") es: "+max;
}
function dado(){
	rndnum=Math.random()*5+1;
	rndnum=Math.round(rndnum);
	return rndnum;
}
function dado2(){
	cont1=0;
	cont2=0;
	cont3=0;
	cont4=0;
	cont5=0;
	cont6=0;
	tir=prompt("¿cuantas tiradas quieres hacer?");
	for(x=0;x<tir;x++){
		num=dado();
		switch(num){
			case 1:cont1++;break;
			case 2:cont2++;break;
			case 3:cont3++;break;
			case 4:cont4++;break;
			case 5:cont5++;break;
			case 6:cont6++;break;
		}
	}
	document.body.innerHTML="el resultado despues de lanzar un dado "+tir+" veces ha sido de: "+cont1+" 1 //"
	+cont2+" 2 //"+cont3+" 3 //"+cont4+" 4 //"+cont5+" 5 //"+cont6+" 6.";
}
function volesf(){
	rad=prompt("indique radio");
	vol=(4*Math.PI/3)*Math.pow(rad,3);
	return vol;
}
function volesf2(){
	rad=prompt("indique radio");
	vol=(4*Math.PI/3)*Math.pow(rad,3);
	ar=Math.PI*Math.pow
	document.body.innerHTML="volumen esfera: "+vol+"; area circulo: "+ar;
}
function potencia(base,exp){
	return Math.pow(base,exp);
}
function factorial(num){
	fac=1;
	for(x=1;x<=num;x++){
		fac=fac*x;
	}
	return fac;
}
//maxfn();
//document.body.innerHTML="numero sacado del dado:"+ dado();
//dado2();
//document.body.innerHTML="el volumen de la esfera :"+ volesf();
//volesf2();
//document.body.innerHTML="el resultado de la potencia es "+ potencia();
document.write("<table>");
for(i=1;i<=10;i++){
	document.write("<tr>");
	document.write("<td>"+i+"</td>");
	document.write("<td>"+factorial(i)+"</td>");
	document.write("</tr>");
}
document.write("</table>");

