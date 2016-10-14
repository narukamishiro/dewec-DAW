function invierteCad(phs){
	var log=phs.length;
	phs2="";
	for(x=0;x<log;x++){
		p=phs.charAt(log-1-x)
		phs2=phs2+p;
	}
	return phs2;
}
function inviertePal(phs){
	var log=phs.length;
	aux="";
	phs2="";
	ini=0;
	fin=0;
	for(x=0;x<log;x++){
		if(phs.charAt(x)==" " || x==log-1){
			fin=x;
			for(x=ini;x<fin;x++){
				p=phs.charAt(ini+fin-1-x);
				aux=aux+p;
			}
			phs2=phs2+aux;
			aux="";
			phs2=phs2+" ";
			ini=x+1;
		}
		   
	}
	return phs2;
}
function palalarga(phs){
	log=phs.length;
	may=0;
	ini=0;
		for(x=0;x<log;x++){
		if(phs.charAt(x)==" " || x==log-1){
			fin=x;
			asp=fin-ini+1;
			if(asp>may){
				may=asp;
			}
			ini=x+1;
		}
		   
	}
	return may;
}
function filtropal(phs,i){
	log=phs.length;
	fil=i;
	ini=0;
	cont=0;
		for(x=0;x<log;x++){
		if(phs.charAt(x)==" " || x==log-1){
			fin=x;
			asp=fin-ini+1;
			if(asp>fil){
				cont++;
			}
			ini=x+1;
		}
		   
	}
	return cont;
}
function corrector(phs){
	log=phs.length;
	ini=0;
	fin=0;
	phs2="";
	for(x=0;x<log;x++){
		if(phs.charAt(x)==" "|| x==log-1){
			fin=x;
			for(x=ini;x<fin;x++){
				if(x==ini){
					phs2=phs2+phs.charAt(x).toUpperCase();
				}else{
					phs2=phs2+phs.charAt(x).toLowerCase();
				}
			}
			phs2=phs2+" ";
			ini=x+1;
		}
		
		   
	}
	return phs2;
}
function contmaymin(phs){
	log=phs.length;
	may=0;
	min=0;
	for(x=0;x<log;x++){
		if(phs.charAt(x)==" "){
		}else{
			if(phs.charAt(x)==phs.charAt(x).toUpperCase()){
				may++;
			}else{
				min++;
			}
		}
	}
	if(may==0){
		return "son todas minusculas";
	}else{
		if(min==0){
			return "son todas mayusculas";
		}else{
			return "hay mezcla";
		}
	}
}
function repecadena(phs,cad){
	log=phs.length;
	logc=cad.length;
	cont=0;
	for(x=0;x<log;x++){
		if(phs.substr(0, logc)==cad){
			cont++;
		}
	}
	return "en la frase ha aparecido "+ cont +" de veces la cadena '"+cad+"'";
}
function agrup(phs){
	phs.trim();
	phs.replace(" ","");
	log=phs.length;
	var cadcon="";
	var cadvoc="";
	var tot="";
	for(x=0;x<log;x++){
		var c=phs.charAt(x);
		switch(c){
			case "a":
			case "e":
			case "i":
			case "o":
			case "u":
				cadvoc=cadvoc+c;
				break;
			default:
				cadcon=cadcon+c;
				break;
		}
	}
	tot=cadcon+cadvoc;
	return tot;
}
function fake(phs){
	log=phs.length;
	var rep="";
	for(x=0;x<log;x++){
		var ch=phs.charAt(x);
		var lg=rep.length;
		var usa=0;
		if(lg==0){
			rep=rep+ch;
		}else{
			for(y=0;y<lg;y++){
				var usa=0;
				var chr=rep.charAt(y);
				if(chr==ch){
					usa++;
				}
			}
			if(usa==0){
				rep=rep+ch;
			}
		}
	}
	return rep;
}
function subcad(phs,cad){
	total=phs;
	logtol=total.length;
	sub=cad;
	logcad=cad.length;
	var pos=0;
	var cont=0;
	if(total.includes(sub)){
		do{
			pb=total.substr(cont,logcad);
			if(pb==sub){
				pos=cont;
			}
			cont=cont+1;
		}while(pos==0 && cont<logtol-(logcad-1));
		return cad+" es una subcadena de "+total +" empezando en la posicion "+pos;
	}else{
		return cad+" no es una subcadena de "+total;
	}
}
function palid(phs,cad){
	if(cad==invierteCad(phs)){
		return "son palidromos";
	}else{
		return "no son palidromos";
	}
}
function contadorpal(phs){}
l=palid("ola","apo");
document.write(l);