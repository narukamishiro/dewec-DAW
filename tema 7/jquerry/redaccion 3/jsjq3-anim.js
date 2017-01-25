function ef1(){
	$("#effect").css('display','inline');
	$("#effect").animate(
	{
		'width':'40px',
		'height':'40px',
	},"slow").delay( 400 );
	$("#effect").animate(
	{
		'margin-left':'200px'
	},"slow").delay( 400 );
	$("#effect").css("backgroundColor","blue").delay( 400 );
	$("#effect").slideUp("slow");
}
function ef2(){
	$("#effect").stop("stopAll",false);
}
function efpsw(){
	var n=$("#ps").val().length;
	var t="error";
	if(n<5){
		t="no segura";
	}else{
		if(n>8){
			t="segura";
		}else{
			t="medio segura";
		}
	}
	$("#sg").text(t);
}
function eftipOn(){
	jQuery(this).append('<div class="tip">' + "hola" + '</div>');
	jQuery(".tip").css("left", "0px");
	jQuery(".tip").fadeIn(300);
}
function eftipOff(){
	jQuery(".tip").fadeOut(300).delay(300).queue(function () {
        jQuery(this).remove();
        jQuery(this).dequeue();
    });
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
/*$("div").hide();
$("#btn1").click(fadeint);
$("#btn2").click(boir);
*/
/*$("#btn1").click(ef1);
$("#btn2").click(ef2);*/
//ejercicio password
//$("#ps").css("inline");
//$("#sg").css("inline");
//$("#ps").on('keyup',efpsw);
$("div[class!='tip']").mouseenter(eftipOn);
$("div [class!='tip']").mouseleave(eftipOff);
