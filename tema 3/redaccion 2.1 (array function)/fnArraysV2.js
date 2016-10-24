function div3(item, index, array){
	if(item%3!=0){
		return false;
	}
	return true;
}
function numeromayor(arr){
	var mayor=0;
	var nmmy=arr;
	nmmy.forEach(function (item, index, array) {
		if(item>mayor){
			mayor=item;
		}
	});
	document.getElementById("pri").innerHTML="el numero mayor de ese array es:"+ mayor;
}
function cadenamayor(arr){
	var tam=0;
	var pl="";
	var mayor=0;
	var nmmy=arr;
	nmmy.forEach(function (item, index, array) {
		tam=item.length;
		
		if(tam>mayor){
			mayor=tam;
			pl=item;
		}
	});
	//document.getElementById("pri").innerHTML="la cadena mas larga de ese array es: "+ pl+" con una longitud de "+mayor;
	return pl;
}
function buscapares(arr){
	var pares=[];
	arr.forEach(function (item, index, array) {
		if(item%2==0){
			pares.push(item);
		}
	});
	document.getElementById("pri").innerHTML=pares;
}
function buscaimpares(arr){
	ar impares=[];
	arr.forEach(function (item, index, array) {
		if(item%2!=0){
			impares.push(item);
		}
	});
	document.getElementById("pri").innerHTML=impares;
}
function buscarIs(arr){
	var Is=[];
	arr.forEach(function (item, index, array) {
		if(item.contains("is")){
			Is.push(item);
		}
	});
	document.getElementById("pri").innerHTML=Is;
}
function pruebadiv3(arr){
	if(arr.every(div3)){
		document.getElementById("pri").innerHTML="ese array supera la regla impuesta";
	}else{
		document.getElementById("pri").innerHTML="ese array no supera la regla impuesta";
	}
}
function unircadenas(bas,arr){
	bas.concat(arr);
	return bas;
}
function ordenarUnion(bs,ar){
	var uni=unircadenas(bs,ar);
	var uni2=[];
	var eli=0;
	while(uni.lenght>0){
		pl=cadenamayor(uni);
		uni2.push(pl);
		eli=uni.indexOf(pl);
		uni.splice(eli,1);
	}
	uni2.reverse();
}
function elimprim(arr){
	arr.shift();
}
function ponerprim(arr,pl){
	arr.push(pl);
}
