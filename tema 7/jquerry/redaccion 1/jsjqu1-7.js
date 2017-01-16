function btnalert1(){
	alert($(document.head).text());
}
function btnalert2(){
	alert($(document.body).text());
}
function palert(){
	alert($(this).text());
}
function phide(){
	$(this).hide();
}
function cambianombreli(){
	$("li").prepend("#");
}
function cambianombreEnl(){
	$("a").text("troll");
}
$(document).ready(function(){
   alert("carga completa");
});
function cambiacolor(){
	$(this).css("backgroundColor","#8A0808");
}
$('#btncb').click(btnalert1);
$('#btncp').click(btnalert2);
$('.intro').click(phide);
$('p :not(.intro)').click(palert);
cambianombreli();
$("li").click(phide);
cambianombreEnl();
$(".tb1 td").click(cambiacolor);
$(".tb2 tr").click(phide);
