function afiseaza_data() {
	let x = document.getElementById("p_data");
	let new_data = new Date;
	x.innerHTML = new_data.toDateString();
}