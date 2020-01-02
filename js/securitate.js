function a(argument) {
	var x = document.getElementsByClassName('a');
	for (var i = x.length - 1; i >= 0; i--) {
		x[i].setAttribute("style","display: none");
	}
}