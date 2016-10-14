function cabecera(){
	for (i=1;i<6;i++){
		cab="h"+i;
		document.write("<"+cab+">"+" cabecera "+cab+" <"+cab+">");
	}
}
function tabla1(celdas,alto,ancho){
	document.write("<table border= ”0” cellspacing= ”2” bgcolor= ”black” width= ”200” >");
	document.write("<tr bgcolor='white' height='"+alto+"'>");
	for(cl=0;cl<celdas;cl++){
		document.write("<td width='"+ancho+"'> </td>");
	}
	document.write("</tr>");
	document.write("</table>");
	
}
function tabla2(celdas,alto,ancho){
	document.write("<table border= ”0” cellspacing= ”2” bgcolor= ”black” width= ”200” >");
	document.write("<tr bgcolor='white' height='"+alto+"'>");
	for(cl=1;cl<=celdas;cl++){
		if(cl%2==0){
			document.write("<td width='"+ancho+"' bgcolor='white'> </td>");
		}else{
			document.write("<td width='"+ancho+"' bgcolor='black'> </td>");
		}
		
	}
	document.write("</tr>");
	document.write("</table>");
}
function tabla3(celdas,alto,ancho){
	cl=1;
	document.write("<table border= ”0” cellspacing= ”2” bgcolor= ”black” width= ”200” >");
	document.write("<tr bgcolor='white' height='"+alto+"'>");
	do{
		document.write("<td width='"+ancho+"'> </td>");
		cl++;
	}while(cl<=celdas);
	document.write("</tr>");
	document.write("</table>");
	
}
function tabla4(celdas,alto,ancho){
	cl=1;
	document.write("<table border= ”0” cellspacing= ”2” bgcolor= ”black” width= ”200” >");
	document.write("<tr bgcolor='white' height='"+alto+"'>");
	do{
		if(cl%2==0){
			document.write("<td width='"+ancho+"' bgcolor='white'> </td>");
		}else{
			document.write("<td width='"+ancho+"' bgcolor='black'> </td>");
		}
		cl++;
	}while(cl<=celdas);
	document.write("</tr>");
	document.write("</table>");
}
function adivinar1(){
	numadiv=prompt("introduzca el numero a adivinar(1-100)");
	num=0;
	cont=1;
	while(num != numadiv){
		num=prompt("adivina el numero")
		if (num==numadiv){
			alert("has aceptado el numero en "+cont+" intentos");
		}else{
			if(num>numadiv){
				alert("el numero a descubrir es menor");
			}else{
				alert("el numero a descubrir es mayor");
			}
		}
		cont++;
	}
}
function adivinar2(){
	numadiv=prompt("introduzca el numero a adivinar(1-100)");
	cont=1;
	maxcont=5;
	do{
		num=prompt("adivina el numero [intento restantes:"+maxcont-cont+"]");
		if (num==numadiv){
			alert("has aceptado el numero en "+cont+" intentos");
		}else{
			if(num>numadiv){
				alert("el numero a descubrir es menor");
			}else{
				alert("el numero a descubrir es mayor");
			}
		}
		cont++;
		maxcont--;
	}while(num!=numadiv && maxcont>0)
}
function tbmulti(){
	for(fn=1;fn<=10;fn++){
		document.write("tabla de "+fn+"<br>");
		document.write("--------------------<br>");
		for(sn=1;sn<=10;sn++){
			t=fn*sn;
			document.write(fn+" * "+sn+" = "+t+"<br>");
		}
	}
}
function tablacomp1(colum,fil,alto,ancho){
	document.write("<table border= ”0” cellspacing= ”2” bgcolor= ”black” width= ”200” >");
	for(fl=0;fl<fil;fl++){
		document.write("<tr bgcolor='white' height='"+alto+"'>");
		for(cl=0;cl<colum;cl++){
			document.write("<td width='"+ancho+"'> </td>");
		}
	}
	document.write("</tr>");
	document.write("</table>");
}
function tablacomp2(colum,fil,alto,ancho){
	document.write("<table border= ”0” cellspacing= ”2” bgcolor= ”black” width= ”200” >");
	for(fl=0;fl<fil;fl++){
		document.write("<tr bgcolor='white' height='"+alto+"'>");
		for(cl=fl;cl<=colum+fl;cl++){
			if(cl%2==0){
				document.write("<td width='"+ancho+"' bgcolor='white'> </td>");
			}else{
				document.write("<td width='"+ancho+"' bgcolor='black'> </td>");
			}
			
		}
	}
	document.write("</tr>");
	document.write("</table>");
}

//cabecera();
//tabla4(5,25,25);
//adivinar2();
//tbmulti();
tablacomp2(8,8,50,50);