//Accès à la valeur saisie dans les zones de texte

//Pour le pseudo 

var pseudoElt = document.getElementById("pseudo"); 
pseudoElt.value = "MonPseudo"; 
/*
On accède à la valeur d'une zone de texte en utilisant la propriété 
value de l'élément du DOM qu'on veut cibler. 
*/

// Affichage d'un message d'aide lors de la saisie du pseudo
pseudo.addEventListener("focus", function (){
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo"; 
}); 

// Suppression du message d'aide après la saisie du pseudo

pseudoElt.addEventListener("blur", function(e){
    document.getElementById("aidePseudo").textContent = " "; 
}); 

// Les cases à cocher 

document.getElementById("confirmation").addEventListener("change", function (e){
    console.log("Demande de confirmation : " + e.target.checked); 
})



// Affichage du type d'abonnement choisi
var aboElts = document.getElementsByName("abonnement");
for (var i = 0; i < aboElts.length; i++) {
    aboElts[i].addEventListener("change", function (e) {
        console.log("Formule d'abonnement choisie : " + e.target.value);
    });
}