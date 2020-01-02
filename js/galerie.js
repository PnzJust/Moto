function ascunde_tag() {
	var x = document.getElementsByTagName('IMG');
	for (var i = x.length - 1; i >= 0; i--) {
		x[i].setAttribute("style","display: none");
	}
}


function afiseaza_tag() {
	var x = document.getElementsByTagName('IMG');
	for (var i = x.length - 1; i >= 0; i--) {
		x[i].setAttribute("style","display: block");
	}
}

function ascunde_css() {
	document.querySelector(".selectorCSS").style.display = "none";
}

function afiseaza_css() {
	document.querySelector(".selectorCSS").style.display = "block";
}