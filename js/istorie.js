function arata_istorie() {
  document.getElementById("arata_istorie").classList.add("ascuns");
  document.getElementById("ascunde_istorie").classList.remove("ascuns");
  document.getElementById("istorie").setAttribute("style","display:block");
}

function ascunde_istorie() {
  document.getElementById("arata_istorie").classList.remove("ascuns");
  document.getElementById("ascunde_istorie").classList.add("ascuns");
  document.getElementById("istorie").setAttribute("style","display:none");

}