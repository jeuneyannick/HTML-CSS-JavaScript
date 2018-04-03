
function afficheDessert(){
    var demande = prompt("Entrez le nom d'un dessert"); 
    var dessert = document.getElementById("desserts"); 
    var lienDemande = document.createElement("li"); 
    lienDemande.textContent += demande; 
    dessert.appendChild(lienDemande)
}

var bouton = document.querySelector("button"); 

bouton.addEventListener("click", afficheDessert); 

