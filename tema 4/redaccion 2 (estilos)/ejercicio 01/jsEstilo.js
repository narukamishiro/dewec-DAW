function normal(){
	/*document.body.style.backgroundColor="yellow";
	document.getElementById('p4').style.borderStyle="solid";
	document.getElementById('p3').style.display="inline";
	*/
	document.getElementById("i").href="cssnormal.css";
}
function mini(){
	/*document.body.style.backgroundColor="white";
	document.getElementById('p3').style.display="none";
	document.getElementById('p4').style.borderStyle="none";
	*/
	document.getElementById("i").href="cssmini.css";
}
function changeNormal(){
	normal();
}
function changeMini(){
	mini();
}
document.getElementById("a1").addEventListener("click", changeNormal);
document.getElementById("a2").addEventListener("click", changeMini);