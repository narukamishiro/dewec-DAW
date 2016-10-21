c11=0,c12=0,c13=0,c14=0,c15=0,c16=0,c21=0,c21=0,c22=0,c23=0,c24=0,c25=0,c26=0,c31=0,c32=0,c33=0,c34=0,c35=0,c36=0,c41=0,c42=0,c43=0,c44=0,c45=0,c46=0,c51=0,c52=0,c53=0,c54=0,c55=0,c56=0,c61=0,c62=0,c63=0,c64=0,c65=0,c66=0;
function recuento(item,index,tot){
	if(item%2==0){
		par.push(item);
	}else{
		impar.push(item);
	}
}
function contan(item, index,arr) {
     arr.push(item);
	 arr.push(" ");
}
function dado(){
	rndnum=Math.random()*6+1;
	rndnum=Math.floor(rndnum);
	return rndnum;
}
function combo(arr){
	d1=arr[0];
	d2=arr[1];
	switch(d1){
		case 1:
			switch(d2){
				case 1:c11++;break;
				case 2:c12++;break;
				case 3:c13++;break;
				case 4:c14++;break;
				case 5:c15++;break;
				case 6:c16++;break;
			}
			break;
		case 2:
			switch(d2){
				case 1:c21++;break;
				case 2:c22++;break;
				case 3:c23++;break;
				case 4:c24++;break;
				case 5:c25++;break;
				case 6:c26++;break;
			}
			break;
		case 3:
			switch(d2){
				case 1:c31++;break;
				case 2:c32++;break;
				case 3:c33++;break;
				case 4:c34++;break;
				case 5:c35++;break;
				case 6:c36++;break;
			}
			break;
		case 4:
			switch(d2){
				case 1:c41++;break;
				case 2:c42++;break;
				case 3:c43++;break;
				case 4:c44++;break;
				case 5:c45++;break;
				case 6:c46++;break;
			}
			break;
		case 5:
			switch(d2){
				case 1:c51++;break;
				case 2:c52++;break;
				case 3:c53++;break;
				case 4:c54++;break;
				case 5:c55++;break;
				case 6:c56++;break;
			}
			break;
		case 6:
			switch(d2){
				case 1:c61++;break;
				case 2:c62++;break;
				case 3:c63++;break;
				case 4:c64++;break;
				case 5:c65++;break;
				case 6:c66++;break;
			}
			break;
	}
	
}
function parimpar(){
	var tot=new array();
	var par=new array();
	var impar=new array();
	for(x=1;x<=100;x++){
		rn=Math.random()*1000+1;
		tot.push(rn);
	}
	tot.forEach(recuento);
	body.getElementById("pri").innerHTML=par;
	body.getElementById("sec").innerHTML=impar;
}
function all0(arr,nom){
	for(x=0;nom<10;x++){
		arr[x]=0;
	}
}
function sum1(arr){
	num=arr.length;
	for(x=0;x<num;x++){
		m=arr[x].valueOf();
		arr[x]=m+1;
	}
}
function mostr(arr){
	mos=[];
	arr.forEach(contan);
	document.body.innerHTML=mos;
	
}
function simuldadov1(){
	var num=prompt("introduzca numero tiradas");
	var rn=[];
	var tot=0;
	var cont2=0;
	var cont3=0;
	var cont4=0;
	var cont5=0;
	var cont6=0;
	var cont7=0;
	var cont8=0;
	var cont9=0;
	var cont10=0;
	var cont11=0;
	var cont12=0;
	for (x=1;x<=num;x++){
		var ale=dado();
		rn.push(ale);
		if(x%2==0){
			lg=rn.length;
			for(y=0;y<lg;y++){
				tot=tot+rn[y];
			}
			switch(tot){
				case 2:cont2++;break;
				case 3:cont3++;break;
				case 4:cont4++;break;
				case 5:cont5++;break;
				case 6:cont6++;break;
				case 7:cont7++;break;
				case 8:cont8++;break;
				case 9:cont9++;break;
				case 10:cont10++;break;
				case 11:cont11++;break;
				case 12:cont12++;break;
			}
			tot=0;
			rn=[];
		}
		
	}
	document.getElementById("pri").innerHTML="de "+num+" tiradas ha salido :<br>"+cont2 +" combinaciones de 2<br>"+cont3 +" combinaciones de 3<br>"+cont4 +" combinaciones de 4<br>"+cont5 +" combinaciones de 5<br>"+cont6 +" combinaciones de 6<br>"+cont7 +" combinaciones de 7<br>"+cont8 +" combinaciones de 8<br>"+cont9 +" combinaciones de 9<br>"+cont10 +" combinaciones de 10<br>"+cont11 +" combinaciones de 11<br>"+cont12 +" combinaciones de 12<br>";
}
function simuldadov2(){
	var num=prompt("introduzca numero tiradas");
	var rn=[];
	var tot=0;
	var cont2=0;
	var cont3=0;
	var cont4=0;
	var cont5=0;
	var cont6=0;
	var cont7=0;
	var cont8=0;
	var cont9=0;
	var cont10=0;
	var cont11=0;
	var cont12=0;
	for (x=1;x<=num;x++){
		var ale=dado();
		rn.push(ale);
		if(x%2==0){
			lg=rn.length;
			combo(rn);
			for(y=0;y<lg;y++){
				tot=tot+rn[y];
			}
			switch(tot){
				case 2:cont2++;break;
				case 3:cont3++;break;
				case 4:cont4++;break;
				case 5:cont5++;break;
				case 6:cont6++;break;
				case 7:cont7++;break;
				case 8:cont8++;break;
				case 9:cont9++;break;
				case 10:cont10++;break;
				case 11:cont11++;break;
				case 12:cont12++;break;
			}
			tot=0;
			rn=[];
		}
		
	}
	document.getElementById("pri").innerHTML="de "+num+" tiradas ha salido :<br>"+cont2 +" combinaciones de 2<br>"+cont3 +" combinaciones de 3<br>"+cont4 +" combinaciones de 4<br>"+cont5 +" combinaciones de 5<br>"+cont6 +" combinaciones de 6<br>"+cont7 +" combinaciones de 7<br>"+cont8 +" combinaciones de 8<br>"+cont9 +" combinaciones de 9<br>"+cont10 +" combinaciones de 10<br>"+cont11 +" combinaciones de 11<br>"+cont12 +" combinaciones de 12<br>";
	document.getElementById("tabla").innerHTML=
	"<caption> combinaciones exactas</caption>"+
	"<tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>"+
	"<tr><td>1</td><td>"+c11+"</td><td>"+c12+"</td><td>"+c13+"</td><td>"+c14+"</td><td>"+c15+"</td><td>"+c16+"</td></tr>"+
	"<tr><td>2</td><td>"+c21+"</td><td>"+c22+"</td><td>"+c23+"</td><td>"+c24+"</td><td>"+c25+"</td><td>"+c26+"</td></tr>"+
	"<tr><td>3</td><td>"+c31+"</td><td>"+c32+"</td><td>"+c33+"</td><td>"+c34+"</td><td>"+c35+"</td><td>"+c36+"</td></tr>"+
	"<tr><td>4</td><td>"+c41+"</td><td>"+c42+"</td><td>"+c43+"</td><td>"+c44+"</td><td>"+c45+"</td><td>"+c46+"</td></tr>"+
	"<tr><td>5</td><td>"+c51+"</td><td>"+c52+"</td><td>"+c53+"</td><td>"+c54+"</td><td>"+c55+"</td><td>"+c56+"</td></tr>"+
	"<tr><td>6</td><td>"+c61+"</td><td>"+c62+"</td><td>"+c63+"</td><td>"+c64+"</td><td>"+c65+"</td><td>"+c66+"</td></tr>";
}
simuldadov2();
