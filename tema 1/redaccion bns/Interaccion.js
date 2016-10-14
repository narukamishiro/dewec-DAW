function nombre1(){
	var nom=prompt("dime tu nombre");
	var apes=prompt("dime tus apellidos");
	var edad=prompt("dime tu edad");
	document.write("nombre:"+nom+"<br>");
	document.write("apellidos:"+apes+"<br>");
	document.write("edad:"+edad+"<br>");
}
function saludo1(){
	var nom=prompt("dime tu nombre");
	var saludo="hola "+nom;
	document.write(saludo);
}
//nombre1();
saludo1();