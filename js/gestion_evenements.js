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