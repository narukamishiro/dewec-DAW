
function cambiatamano(){
	var sizeFO = 15;
	var sizeFA = $(this).css('font-size');
	if(sizeFA==sizeFO){
		$(this).css('font-size', '18');
		return false;
	}
	if(sizeFA>sizeFO){
		$(this).css('font-size', "12");
		return false;
	}
	if(sizeFA<sizeFO){
		$(this).css('font-size',"15");
  }
}
function hid(){
	var cl=$(this).attr("class");
	var p="."+cl;
	var st=$("div "+p).css("display");
	if(st=="none"){
		$("div "+p).css("display","block");
	}else{
		$("div "+p).css("display","none");
	}
}
//$("div").click(cambiatamano);
$("h1").click(hid);