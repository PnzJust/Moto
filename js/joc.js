
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
		alert("Dimensiunile punctului sunt " + dimensiuni["height"] +" x " + dimensiuni["width"]);
	},true);


	var anii = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011];
	for (x of anii)
	{
		text = document.getElementById("ani").innerHTML;
		text = text + x + " ";
		document.getElementById("ani").innerHTML = text;
	}
}

var ABC = setInterval(SchimbaCuloarea, 300, Math.floor(Math.random()*1000%256));


function SchimbaCuloarea(parametru){
	document.getElementById('ABC').style.backgroundColor = "rgb("+Math.floor(Math.random()*1000%256)+","+Math.floor(Math.random()*1000%256)+","+parametru+")";
}

function STOP(){
	clearInterval(ABC);
}


function change_to_classA(){
	var v = document.getElementById("ani");
	if (v.classList.contains("classB")){
		v.classList.remove("classB");
		v.className = "classA";
	}
}

function change_to_classB(){
	var v = document.getElementById("ani");
	if (v.classList.contains("classA")){
		v.classList.remove("classA");
		v.className = "classB";
	}

}