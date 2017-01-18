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
colortb();
colorp1();
//colortb2();