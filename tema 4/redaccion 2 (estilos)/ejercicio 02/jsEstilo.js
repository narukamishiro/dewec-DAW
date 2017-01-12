var dft=document.getElementsByTagName("p")[0].style.fontSize;
var sz=0;
var list;
function aumfnt(){
	if(sz==0){
		sz=dft;
	}
	list=document.getElementsByTagName("p");
	sz=sz+2;
	for(x=0;x<list.length;x++){
		list[x].style.fontSize=sz+1;
	}
	
}
function dwnfnt(){
	if(sz==0){
		sz=dft;
	}
	list=document.getElementsByTagName("p");
	sz=sz-1;
	for(x=0;x<list.length;x++){
		list[x].style.fontSize=sz;
	}
	
}
function deffnt(){
	sz=dft;
	list=document.getElementsByTagName("p");
	for(x=0;x<list.length;x++){
		list[x].style.fontSize=dft;
	}
	
}
function orienizq(){
	list=document.getElementsByTagName("p");
	for(x=0;x<list.length;x++){
		list[x].style.textAlign="left";
	}
	
}
function orienjst(){
	list=document.getElementsByTagName("p");
	for(x=0;x<list.length;x++){
		list[x].style.textAlign="justify";
	}
	
}
document.getElementById("f+").addEventListener("click", aumfnt);
document.getElementById("f-").addEventListener("click", dwnfnt);
document.getElementById("fO").addEventListener("click", deffnt);
document.getElementById("AI").addEventListener("click", orienizq);
document.getElementById("AJ").addEventListener("click", orienjst);