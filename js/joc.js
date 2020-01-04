
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
}