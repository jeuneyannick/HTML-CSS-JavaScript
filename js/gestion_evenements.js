function clic(){
   console.log("Clic"); 
}
//ciblage de l'élément
var boutonElt = document.getElementById("bouton"); 

//Ajout d'un gestionnaire pour l'evenement click
boutonElt.addEventListener("click", clic); 

//Suppression d'un gestionnaire d'evenements
boutonElt.removeEventListener("click",clic); 

//Ajout d'un gestionnaire qui affiche le type et la cible de l'evenement
document.getElementById("bouton").addEventListener("click", function (e){
    console.log("Evenement : " + e.type + ", texte de la cible : " + e.target.textContent)
}); 


//Gestion des évenements les plus courants 

//Appui sur une touche du clavier
document.addEventListener("keypress", function(e){
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
    /*
    keypress est l'evenement à déclencher 
    e désigne l'objet EVENT que le déclenchement de l'evenement a crée 
    charCode est une propriété de Event qui récupère le caractère associé à la touche appuyée.
    String.fromCharCode est une méthode qui traduit la valeur récupérée par charCode en une chaine représentant le caractère.
    */ 
}); 

// appui et relachement de n'importe quelle touche

//fonction qui affiche les infromations sur un événement clavier

function infosClavier(e){
    console.log("Evenement clavier : " + e.type + ", touche :" + e.keyCode); 
    //e.type renvoit au type de l'evenement déclenché 
    //la méthode keyCode affiche le code de la touche appuyée
}

//gestion de l'appui et du relachement d'une touche du clavier
document.addEventListener("keydown", infosClavier); 
document.addEventListener("keyup", infosClavier); 


// Clic sur un bouton de la souris 

// fonction qui renvoie le nom du bouton souris à partir de son code

function getBoutonSouris(code){
    var bouton = "inconnu"; 
    switch(code){
        case 0: 
             bouton = "gauche"; 
             break; 
        case 1: 
             bouton = "milieu"; 
             break; 
        case 2: 
             bouton = "droit"; 
             break; 
    }
    return bouton; 
}

//Affichage ds informations sur un événement souris 

 function infosSouris(e){
     console.log("Evenement souris : " + e.type + ", bouton " + 
      getBoutonSouris(e.button) + ", X: " + e.clientX + ", Y : " + e.clientY); 
 }

 document.addEventListener("click", infosSouris)

 //Geston de l'appui et du relâchement d'un bouton de la souris 
 //mousedown et mouseup sont des evenements pour detecter l'appui et le relachement d'un bouton de la souris

 document.addEventListener("mousedown", infosSouris);
 document.addEventListener("mouseup", infosSouris);

 //Gestion de la fin du chargement de la page web 
// window.addEventListener("load", function(){
//     console.log("Page entièrement chargée"); 
// }); 

// Gestion de la fermeture de la page web pour envoyer une confirmation 
/*
La page web se ferme lorsque l'utilisateur ferme l'onglet ou navigue sur une autre page dans cet onglet. 
*/

window.addEventListener("beforeunload", function(e){
    var message = "On est bien ici !"; 
    e.returnValue = message; // Provoque une demande de confirmation (standard)
    return message; // Provoque une demande de confirmation (certains navigateurs)
}); 


//La propagation des evenements 

//Gestion du clic sur le document 
// document.addEventListener("click", function(){
//     console.log("Gestionnaire document"); 
// }); 
//Gestion du clic sur le paragaraphe 
document.getElementById("para").addEventListener("click", function(){
    console.log("Gestionnaire paragraphe"); 
}); 
//Gestion du clic sur le bouton 
document.getElementById("propa").addEventListener("click", function(e){
    console.log("Gestionnaire bouton"); 
    e.stopPropagation();//Arrêt de la propagation de l'évenement
})


//Modifier le comportement par défaut en cas d'evenements 
/*
La méthode preventDefault sur l'objet Event permet d'annuler le comportement par défaut de l'action liée à un evenement
*/ 

//Gestion du clic sur le lien interdit 
document.getElementById("interdit").addEventListener("click", function(e){
    console.log("Arrête de faire du Javascript pour rien"); 
    e.preventDefault(); //Annulation de la navigation vers la cible du lien 
})