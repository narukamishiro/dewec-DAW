class jugador{
	constructor(id,fch){
		this.id=id;
		this.ficha=fch;
	}
}
class celda{
	constructor(x,y,pt){
		this.cX=x;
		this.cY=y;
		this.valor=pt;
	}
	get coordX(){
		return this.cX;
	}
	set coordX(pt){
		this.cX=pt;
	}get coordY(){
		return this.cY;
	}
	set coordY(pt){
		this.cY=pt;
	}
	get puntos(){
		return this.valor;
	}
	set puntos(pt){
		this.valor=pt;
	}
	get posicion(){
		return 3*(this.cX-1)+cY;
	}
}
class juego{
	constructor(jg1,jg2){
		this.jg1=jg1;
		this.jg2=jg2;
		this.campo=[];
		for (x=1;x<=3;x++){
			for(y=1;y<=3;y++){
				campo.push(new celda(x,y,0));
			}
		}
	}
	contarpunto(){
		pt=0;
		raya=false;
		c=0;
		while(!raya && c<9){
			if(Math.abs(comprvl(c,1,0))==3){
				raya=true;
			}
			if(Math.abs(comprvl(c,0,1))==3){
				raya=true;
			}
			if(Math.abs(comprvl(c,1,1))==3){
				raya=true;
			}
			if(Math.abs(comprvl(c,-1,0))==3){
				raya=true;
			}
			if(Math.abs(comprvl(c,0,-1))==3){
				raya=true;
			}
			if(Math.abs(comprvl(c,-1,-1))==3){
				raya=true;
			}
			c++;
		}
		return raya;
	}
	comprvl(c,icremX,icremY){
		pt=0;
		do{
			pt=pt+campo[c].puntos;
			c=3*(campo[c].coordX+icremX-1)+(campo[c].coordY+icremY);
		}while(c<9 && c>=0); 
		return pt;
	}
	ocupar(jg,c){
		if(campo[c].puntos==0){
			if(jg=this.jg1){
				campo[c].puntos=1;
			}else{
				campo[c].puntos=-1;
			}
			return true;
		}else{
			return false;
		}	
	
}