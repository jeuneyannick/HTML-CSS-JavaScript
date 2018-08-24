
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

//Affichage du code de nationalité choisi 
var nationalite = document.getElementById("nationalite"); 
nationalite.addEventListener("change", function (e){
    console.log("Code de nationalité :" + e.target.value); 
} )


//Formulaire comme élément du DOM 

//Selectionner le formulaire entier par sa balise pour prendre des éléments

var form = document.querySelector("form");// selection de tout le form
console.log("Nombre de champs de saisie du formulaire : " + form.elements.length); 
console.log(form.elements[0].name); 
console.log(form.elements.mdp.type); 


//Affichage de toutes les données dans la console avant envoi de données 

form.addEventListener("submit", function(e){
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value; 
    var courriel = form.elements.courriel.value; 
     console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " + mdp + " et le courriel " + courriel); 
     if ( form.elements.confirmation.checked){
         console.log("Vous avez demandé une confirmation d'inscription par courriel"); 
     } else {
         console.log(" Vous n'avez pas demandé de confirmation d'inscription par courriel"); 
     }
     switch(form.elements.abonnement.value){
         case "abonewspromo" : 
            console.log("Vous êtes abonné(e) à la newsletter et aux promotions"); 
         break; 

         case "abonews": 
            console.log("Vous êtes abonné(e) à la newsletter"); 
         break; 
         case "aborien": 
            console.log("Vous n'êtes abonné(e) à rien"); 
         default: 
          console.log("Erreur: code d'abonnement non reconnu");
     }

     switch(form.elements.nationalite.value ) {
         case "FR" : 
            console.log("Vous êtes français(e)"); 
         break; 
         case "BE": 
            console.log("Vous êtes belge"); 
         break; 
         case "SUI": 
            console.log("Vous êtes suisse"); 
         break; 
         default: 
            console.log("Erreur: code de nationalité non reconnu"); 
     }
     e.preventDefault(); //Annulation de l'envoi des données
})


//Validation de la longueur du mot de passe saisi

document.getElementById("mdp").addEventListener("input", function (e){
    var mdp = e.target.value; //Valeur saisie dans le champ mdp
    var longueurMdp = "faible"; 
    var couleurMsg = "red"; // Longueur faible => couleur rouge
    if(mdp.length >= 8){
        longueurMdp = "suffisante"; 
        couleurMsg = "green"; //Longueur suffisante => couleur verte
    } else if (mdp.lentgh >= 4){
        longueurMdp = "moyenne"; 
        couleurMsg = "orange"; //Longueur moyenne => couleur orange
    }

    var aideMdpElt = document.getElementById("aideMdp"); 
    aideMdpElt.textContent = "Longueur: " + longueurMdp; //Texte d'aide
    aideMdpElt.style.color = couleurMsg; // Couleur du texte d'aide

}); 

//Contrôle du courriel en fin de saisie
var courriel = document.getElementById("courriel"); 
courriel.addEventListener("blur", function(e){
    var validiteCourriel = ""; 
    if(e.target.value.indexOf("@")=== -1){
        //le courriel saisi ne contient pas le caractère @
        validiteCourriel = "Adresse invalide"; 
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel; 
})