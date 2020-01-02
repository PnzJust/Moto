function afiseaza_data() {
	let x = document.getElementById("p_data");
	let new_data = new Date;
	x.innerHTML = new_data.toDateString();
}

function start(){
	// classa Math
	let x = document.getElementById("sold");
	x.innerHTML = "SOLD: " + Math.round(Math.random() * 1000) + "$";
	
	// clasa String
	x = document.getElementById("nume");
	var nume = "nume: bbbbb";
	nume = nume.replace("bbbbb", "aaaa");
	nume = nume.toUpperCase();
	x.innerHTML = nume;
}