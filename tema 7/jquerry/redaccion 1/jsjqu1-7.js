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
function cambianombre(){
	$(this).text()
	$('li').text("#"+$(this).text());
}
$(document).ready(function(){
   alert("carga completa");
});
$('#btncb').click(btnalert1);
$('#btncp').click(btnalert2);
$('.intro').click(phide);
$('p :not(.intro)').click(palert);
cambianombre();
