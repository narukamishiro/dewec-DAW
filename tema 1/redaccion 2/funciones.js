function edad(birth,current){
	var age=current-birth;
	document.write("tu tienes "+age+ "años,a mi no me engañas");
}
function suministrovida(age,maxage,ansia){
	var consaño=ansia*365;
	var añosrest=maxage-age;
	var suministro=consaño*añosrest;
	document.write("necesitaras "+suministro+ " snack, para aguantar hasta los "+ maxage);
}
function medidacirc(rad){
	var diametro=2*rad;
	var circuf=3.14*diametro;
	var areacirc=3.14*rad^2;
	document.write("diamentro: "+diamentro+"<br>");
	document.write("circuferencia: "+circuf+"<br>");
	document.write("area:"+areacirc+"<br>");
}
function temperatura(cel,fah){
	var refah=cel+32.8;
	var recel=fah-32.8;
	document.write(cel+"ºC es "+refah+"ºF");
	document.write(fah+"ºF es "+recel+"ºC");
}
