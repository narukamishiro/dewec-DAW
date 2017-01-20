function ef1(){
	
}
function ef2(){
	
}
function ef3(){
	
}
function ef4(){
	
}
function ena(){
	$("#d1").fadeIn("slow");
	$("#d2").fadeOut("slow");
	$("#d3").fadeOut("fast");
	$("#d4").fadeToggle( "slow", "linear" );
}
function boir(){
	$("div").clearqueue();
	$("div").stop();
}
function fadeint(){
	$("#d1").fadeIn("slow");
	$("#d2").fadeIn("fast");
	$("#d3").fadeIn(800);
	$("#d4").fadeIn(2000);
	$("#d5").fadeIn(4000);
}
//$("#btn1").click(ena);
$("div").hide();
$("#btn1").click(fadeint);
$("#btn2").click(boir);
