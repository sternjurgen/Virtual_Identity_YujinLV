
//Formas iztīrīšanas Funkcija
function iztiritFormu() {
  document.getElementById ("forma1").reset();
}

//Elementa krāsas maiņas poga
//Ieliek HTML dokumentā vajadzīgo un pieformē arī caur JS skatās fieldset lauku un ID
function mainitKrasu() {
  document.getElementById ("forma1").style.color = "red";
  document.getElementById ("forma1").style.backgroundColor = "yellow";
  alert("Krāsa nomainīta")

  
}

//pie valodām salikt radio pogas. Onclick valoda nomainīta. fons arī noaminīta krāsa cita
function mainitValodu() {
  document.getElementById ("ievade1").style.color = "red";
  document.getElementById ("ievade1").style.backgroundColor = "yellow";
  alert("Valoda nomainīta")
}
