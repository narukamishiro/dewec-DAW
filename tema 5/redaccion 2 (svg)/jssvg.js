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
	constructor(tab,rad,col){}
	function draw(){}
	function hit(){
		var ptscol=[];
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
}
function getX