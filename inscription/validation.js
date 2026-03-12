var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var email = document.getElementById("email");
var errNom = document.getElementById("err-nom");
var errPrenom = document.getElementById("err-prenom");
var errEmail = document.getElementById("err-email");
nom.addEventListener("keyup", () => validerInput(nom, errNom, "Nom obligatoire"));
prenom.addEventListener("keyup", () => validerInput(prenom, errPrenom, "Prenom obligatoire"));
email.addEventListener("keyup", () => validerInput(email, errEmail, "Email obligatoire"));
function validerInput(input, err, message){
if(input.value.trim() === ""){
err.textContent = message;
err.style.color = "red";
}
else{
err.textContent = "";
}
}