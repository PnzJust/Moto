function afiseaza_data() {
	let x = document.getElementById("p_data");
	let new_data = new Date;
	x.innerHTML = new_data.toDateString();
}

function afiseaza_dimensiuni() {
	let x = document.getElementById("p_dimensiuni");
	var elem = document.getElementById("poza");
	var dimensiuni = window.getComputedStyle(elem, null);
	x.innerHTML = dimensiuni.getPropertyValue("height") + " x " + dimensiuni.getPropertyValue("width");
}

function sunt_cuvinte(x){
	return typeof(x) == 'string';
}

function go() {
	var x = document.getElementById("marca");
	x = x.value;
	window.open("https://www." + x.toLowerCase() + ".com");
}

function colorare(element)
{
	var x = document.getElementsByTagName("p");
	for (var i=0;i<x.length;i++)
	{
		x[i].setAttribute("style","color:" + element.value);
	}
}

function save_sold() {
	var x = document.getElementById("sold").innerHTML;
	localStorage.setItem("SOLD", x);
}

function alert_sold() {
	alert(localStorage.getItem("SOLD"));
}


function start(){
	// classa Math
	let x = document.getElementById("sold");
	x.innerHTML = "SOLD: " + Math.round(Math.random() * 1000) + "$";
	
	// clasa String
	x = document.getElementById("nume");
	var text = "nume: bbbbb";
	text = text.replace("bbbbb", "aaaa");
	text = text.toUpperCase();
	x.innerHTML = text;

	// clasa Array
	x = document.getElementById("modele");
	var pref1 = ["Honda", "BMW", 232, 12];
	var pref2 = ["Kawasaki", 192, "Susuki", 1234];
	var toate = pref1.concat(pref2);
	toate = toate.filter(sunt_cuvinte);
	text = "PREFERINTE: " + toate;
	x.innerHTML = text;

	document.getElementById("non_check").addEventListener("click", function(event){
		event.preventDefault()});

}