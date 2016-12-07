class juego(){
	constructor(){}
	function tablero(){}
	function draw(){}
	function start(){}
	function stop(){}
	function loop(){}
}
class circle(tab,rad,col,velx,vel){
	var rad;
	var col;
	ptscol=[];
	var x0=0;
	var y0=0;
	constructor(tab,rad,col){
		
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
}
class playerCircle extends circle{
	constructor(id,rd,col){}
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