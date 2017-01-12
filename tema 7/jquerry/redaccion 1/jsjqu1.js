function hideall(){
	$("p").css("display", "none");
	$("h1").css("display", "none");
}
function hidetroll(){
	$("input").css("display", "none");
}
function hideclass(){
	$('.intro').css("display", "none");
	
}
function hideclass2(){
	$('p.intro').css("display", "none");
	
}
function hidelist1(){
	$(' ol li:first-child').css("display","none");
}
function hidelist2(){
	$('li:first-child').css("display","none");
}
$("input").click(hidelist1);