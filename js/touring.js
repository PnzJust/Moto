function adauga_imagine(argument) {
	var x =document.getElementById('imagine');
	var val= x.childElementCount + 1;
	if(val<=10)
	{
		var y = document.createElement("img");
	    y.src="galerie/t"+val+".jpg";
	    x.appendChild(y);
	}
}

function elimina_imagine(argument) {
	var x =document.getElementById('imagine');
	var val= x.childElementCount ;
	if(val<=10 && val >=1)
	    x.removeChild(x.childNodes[val]);
}