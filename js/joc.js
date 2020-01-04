
function mouse_move()
{

    var punct = document.getElementById("PUNCT");
    var x = event.clientX;
    var y = event.clientY;
    punct.style.left = x + "px";
    punct.style.top  = y + "px";
}

function start(){
	document.getElementById("parinte").addEventListener("mousemove",mouse_move);
	document.getElementById("parinte").addEventListener("click",function() {
		var dimensiuni = window.getComputedStyle(this, null);
		alert("Dimensiunile parintelui sunt " + dimensiuni["height"] +" x " + dimensiuni["width"]);
	},true);
	document.getElementById("PUNCT").addEventListener("click",function(){
		var dimensiuni = window.getComputedStyle(this, null);
		alert("Dimensiunile parintelui sunt " + dimensiuni["height"] +" x " + dimensiuni["width"]);
	},true);
}