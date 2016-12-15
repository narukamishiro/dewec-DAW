class juego(){
	constructor(){}
	function tablero(){}
	function draw(){}
	function start(){}
	function stop(){}
	function loop(){}
}
class circle(tab,rad,col,velx,vel){
	var conten;
	var rad;
	var col;
	ptscol=[];
	var x0=0;
	var y0=0;
	constructor(rad,col){
		this.rad=rad;
		this.col=col;
	}
	function draw(){}
	function hitbox(){
		ptscol=[];
		ang=0;
		do{
			var ang2 =tradAng(ang);
			var x=x0+getX(rad,ang2);
			var y=y0+getY(rad,ang2);
			var pt=[x,y];
			ptscol.push(pt);
			ang=ang+45;
		}while (ang<360);
	}
	function speed(id,vx,vy){
		this.velx=vx;
		this.vely=vy;
	}
	function pos(){
		var vx=this.velx;
		var vy=this.vely;
		this.x0=x0+vx;
		this.y0=y0+vy;
	}
	function getPosx(){
		return x0;
	}
	function getPosy(){
		return y0;
	}
	function setVx(vx){
		this.velx=vx;
	}
	function setVy(vy){
		this.vely=vy;
	}
	function gethb(){
		return ptscol;
	}
	function isHit(chb){
		hb2=chb.gethb();
		for(x=0;x<ptscol.length;x++){
			pt1=ptscol[x];
			for(y=0;x<hb2.length;y++){
				pt2=hb2[y];
				if(pt1[0]==pt2[0] & pt1[1]==pt2[1]){
					return true;
				}
			}
			return false;
		}
	}
	function ctrl(tab,x);
}
class playerCircle extends circle{
	var id;
	var xA,yA;
	constructor(tab,id,rd,col){
		this.tab=tab;
		this.id=id;
		this.rad=rd;
		this.col=col;
		velx=0;
		vely=0;
		x0=0;
		y0=0;
		xA=0;
		yA=0;
	}
	function move(x,y){
		xA=x;
		yA=y;
	}
}
class randomCircle extends circle{
	id="default";
	velx=0;
	vely=0;
	function speed(id,vx,vy){
		this.velx=vx;
		this.vely=vy;
	}
	function setX(vx){
		this.velx=vx;
	}
	function setY(vy){
		this.vely=vy;
	}
}
function getX(rd,ang){
	return rd*Math.cos(ang);
}
function getY(rd,ang){
	return rd.Math.sin(ang);
}
function tradAng(deg){
    return deg * Math.PI / 180;
};