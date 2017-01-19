n=2;
function colortb(){
	$(".tb tr:lt(2) td").css("backgroundColor","#FF0000");
	$(".tb tr:gt(2) td").css("backgroundColor","#2E64FE");
}
function colorp1(){
	$("p:contains(eu)").css("backgroundColor","#FF0000");
}
function colortb2(){
	$(".tb tr td:empty").css("backgroundColor","#FFFF00");
}
function drfoc(){
	$("textarea").focus();
}
function colorp2(){
	$("div p").css("color","#2E64FE");
}
function aumft(){
	if(n==0){
		$(this).css("font-size","15px");
	}else{if(n==2){
			$(this).css("font-size","20px");
		}else{
			$(this).css("font-size","35px");
		};
	}
	n--;
}
colortb();
colorp1();
//colortb2();
$("#btn1").click(drfoc);
//$("div p").click(colorp2);
$("#cre").click(aumft);



